<script setup lang="ts">
import Icon from "@/components/icon/Icon.vue";
import { useFilesStore } from "@/stores/files";
import { computed, watch } from "vue";

/**
 * ContentFilesNav component
 */
const props = defineProps({
  /**
   * The files count value.
   */
  files: {
    type: Number,
    required: true,
  },
});

const filesStore = useFilesStore();

/**
 * Computed count pages
 */
const pages = computed(() => {
  return Math.ceil(props.files / filesStore.filePerPage);
});

/**
 * Computed is last or first page
 */
const isLastPage = computed(() => filesStore.currentPage === pages.value);
const isFirstPage = computed(() => filesStore.currentPage === 1);

/**
 * Reset current page when changing props
 */
watch(props, () => {
  filesStore.setPage(1);
});

/**
 * The function set first/prev/next/last page
 */
const changePage = (e: MouseEvent) => {
  const direction = (e.currentTarget as HTMLButtonElement).dataset.direction;

  let page = filesStore.currentPage;

  switch (direction) {
    case "next":
      page++;
      break;
    case "prev":
      page--;
      break;
    case "first":
      page = 1;
      break;
    case "last":
      page = pages.value;
      break;
  }

  if (page < 1) page = 1;
  if (page > pages.value) page = pages.value;

  filesStore.setPage(page);
};

/**
 * The function set current page
 */
const changePageInput = (e: Event) => {
  let page = Number((e.currentTarget as HTMLInputElement).value);

  if (page < 1) page = 1;
  if (page > pages.value) page = pages.value;

  filesStore.setPage(page);
};
</script>

<template>
  <div class="files-nav" v-if="pages > 1">
    <button
      class="files-nav__btn"
      :class="{ btn_inactive: isFirstPage }"
      data-direction="first"
      @click="changePage"
    >
      <icon type="double_left_arrow" />
    </button>

    <button
      class="files-nav__btn"
      :class="{ btn_inactive: isFirstPage }"
      data-direction="prev"
      @click="changePage"
    >
      <icon type="left_arrow" />
    </button>

    <div class="files-nav__counter">
      <input
        type="text"
        class="files-nav__input"
        :value="filesStore.currentPage"
        @change="changePageInput"
      />
      <span>out of {{ pages }}</span>
    </div>

    <button
      class="files-nav__btn"
      :class="{ btn_inactive: isLastPage }"
      data-direction="next"
      @click="changePage"
    >
      <icon type="right_arrow" />
    </button>

    <button
      class="files-nav__btn"
      :class="{ btn_inactive: isLastPage }"
      data-direction="last"
      @click="changePage"
    >
      <icon type="double_right_arrow" />
    </button>
  </div>
</template>
