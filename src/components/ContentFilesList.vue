<script setup lang="ts">
import ContentFilesListItem from "@/components/ContentFilesListItem.vue";
import { useRoute } from "vue-router";
import { computed, watchEffect } from "vue";
import { useFilesStore } from "@/stores/files";
import ContentSkeleton from "@/components/ContentSkeleton.vue";
import ContentFilesNav from "@/components/ContentFilesNav.vue";
import { isFileGroup } from "@/models/fileGroup";
import _ from "lodash";

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

/**
 * Files render to page
 */
const filesInPage = computed(() => {
  const page = filesStore.currentPage;
  const perPage = filesStore.filePerPage;

  return _.chunk(files.value, perPage)[page - 1] || [];
});
</script>

<template>
  <div
    class="files__list"
    :class="{ files__list_grid: filesStore.style === 'grid' }"
    v-if="filesStore.load"
  >
    <content-skeleton :items="6" type="files_list" v-if="filesStore.load" />
  </div>

  <template v-else>
    <template v-if="filesInPage.length">
      <div
        class="files__list"
        :class="{ files__list_grid: filesStore.style === 'grid' }"
      >
        <content-files-list-item
          v-for="item in filesInPage"
          :item="item"
          :key="item.id"
        />
      </div>

      <content-files-nav :files="files.length" />
    </template>

    <div class="alert" v-else>
      <span>The folder</span> does not contain files! Click
      <span>upload button</span> to add files
    </div>
  </template>
</template>
