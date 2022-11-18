<script setup lang="ts">
import Icon from "@/components/icon/Icon.vue";
import { ref } from "vue";
import { useUploadStore } from "@/stores/upload";

/**
 * Upload button component
 */

const uploadInput = ref<HTMLInputElement>();
const uploadStore = useUploadStore();

/**
 * Function for adding new files to upload
 *
 * @param e
 */
const setUploadFiles = (e: InputEvent) => {
  const files = (e.target as HTMLInputElement).files;

  if (files && files.length) {
    uploadStore.addFiles(files);
  }
};

/**
 * The function of launching the file selection window
 */
const selectUploadFiles = () => {
  uploadInput.value?.click();
};
</script>

<template>
  <input
    type="file"
    multiple
    class="hidden"
    @change="setUploadFiles"
    ref="uploadInput"
  />

  <a href="#" class="btn btn_default" @click.prevent="selectUploadFiles">
    <icon type="upload" />
    <span>Upload</span>
  </a>
</template>
