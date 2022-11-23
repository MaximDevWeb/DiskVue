<script setup lang="ts">
import ContentFolder from "@/components/ContentFolder.vue";
import { useFoldersStore } from "@/stores/folders";
import { watchEffect } from "vue";
import { useRoute } from "vue-router";
import _ from "lodash";
import ContentSkeleton from "@/components/ContentSkeleton.vue";

/**
 * Content Folders component
 */

const route = useRoute();
const foldersStore = useFoldersStore();

/**
 * We monitor the url change and upload the updated data
 */
watchEffect(() => {
  const slug = _.last(route.params.sub);
  foldersStore.get(slug ?? "");
});
</script>

<template>
  <div class="folders" v-if="foldersStore.load">
    <content-skeleton :items="4" type="folder" />
  </div>

  <template v-else>
    <div class="folders" v-if="foldersStore.folders.length">
      <content-folder
        v-for="folder in foldersStore.folders"
        :item="folder"
        :key="folder.id"
      />
    </div>

    <div class="alert" v-else>
      <span>The folder</span> does not contain sub folders!
    </div>
  </template>
</template>
