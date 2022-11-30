<script setup lang="ts">
import Icon from "@/components/icon/Icon.vue";
import UploadButton from "@/components/UploadButton.vue";
import { useFoldersStore } from "@/stores/folders";

/**
 * Header Buttons component
 */
const folderStore = useFoldersStore();

/**
 * Handling the modal window opening event
 */
const openModal = () => {
  folderStore.modalFolderVisible = true;
};
</script>

<template>
  <upload-button />

  <a href="#" class="btn btn_black" @click.prevent="openModal">
    <icon type="add_folder" />
    <span>Create</span>
  </a>
</template>
