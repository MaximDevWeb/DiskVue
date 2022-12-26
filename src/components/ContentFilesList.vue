<script setup lang="ts">
import ContentFilesListItem from "@/components/ContentFilesListItem.vue";
import { useRoute } from "vue-router";
import { computed, watchEffect } from "vue";
import { useFilesStore } from "@/stores/files";
import ContentSkeleton from "@/components/ContentSkeleton.vue";
import { isFileGroup } from "@/models/fileGroup";

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

/**
 * Files filter to store
 */
const files = computed(() => {
  const filter = filesStore.filter;
  if (filter && filesStore.files.length) {
    return filesStore.files.filter((item) => isFileGroup(item.type, filter));
  } else {
    return filesStore.files;
  }
});
</script>

<template>
  <div
    class="files__list"
    :class="{ files__list_grid: filesStore.style === 'grid' }"
  >
    <content-skeleton :items="6" type="files_list" v-if="filesStore.load" />

    <template v-else>
      <template v-if="files.length">
        <content-files-list-item
          v-for="item in files"
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
