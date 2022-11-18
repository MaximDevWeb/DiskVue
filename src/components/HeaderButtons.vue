<script setup lang="ts">
import Icon from "@/components/icon/Icon.vue";
import { useAppStore } from "@/stores/app";
import UploadButton from "@/components/UploadButton.vue";

/**
 * Header Buttons component
 */
const appStore = useAppStore();

/**
 * Handling the modal window opening event
 */
const openModal = () => {
  appStore.modalFolderVisible = true;
};
</script>

<template>
  <upload-button />

  <a href="#" class="btn btn_black" @click.prevent="openModal">
    <icon type="add_folder" />
    <span>Create</span>
  </a>
</template>
