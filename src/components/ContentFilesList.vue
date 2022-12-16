<script setup lang="ts">
import ContentFilesListItem from "@/components/ContentFilesListItem.vue";
import { useRoute } from "vue-router";
import { watchEffect } from "vue";
import { useFilesStore } from "@/stores/files";
import ContentSkeleton from "@/components/ContentSkeleton.vue";

/**
 * Content Files List component
 */
const route = useRoute();
const filesStore = useFilesStore();

/**
 * Monitor update of router and update files
 */
watchEffect(() => {
  let folder = route.params.sub ? (route.params.sub as Array<string>) : [];
  filesStore.loadFilesList(folder.join("/"));
});
</script>

<template>
  <div class="files__list">
    <content-skeleton :items="6" type="files_list" v-if="filesStore.load" />

    <template v-else>
      <template v-if="filesStore.files.length">
        <content-files-list-item
          v-for="item in filesStore.files"
          :item="item"
          :key="item.id"
        />
      </template>

      <div class="alert" v-else>
        <span>The folder</span> does not contain files! Click
        <span>upload button</span> to add files
      </div>
    </template>
  </div>
</template>
