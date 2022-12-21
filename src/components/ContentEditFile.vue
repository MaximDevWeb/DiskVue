<script setup lang="ts">
import Icon from "@/components/icon/Icon.vue";
import { useFilesStore } from "@/stores/files";
import { computed } from "vue";
import { useAppStore } from "@/stores/app";

/**
 * Content Edit File Component
 */
const filesStore = useFilesStore();
const appStore = useAppStore();

/**
 * Edit file
 */
const file = computed(() => filesStore.editFile);

/**
 * The function clean edit file
 */
const cleanEditFile = () => {
  filesStore.editFile = null;
};

/**
 * The function open rename file modal
 */
const renameFile = () => {
  filesStore.modalFileVisible = true;
};

/**
 * The function delete file
 */
const deleteFile = () => {
  appStore.setConfirm(
    `Delete a file ${file.value?.name}?`,
    (id: number) => {
      filesStore.deleteFile(id);
    },
    file.value?.id
  );
};

/**
 * The function generate and open download link
 */
const getLinkAndOpen = () => {
  filesStore.generateHashLink().then((hash) => {
    window.open(`${file.value?.private_link}/${hash}`, "_blank");
  });
};
</script>

<template>
  <div class="footer" :class="{ footer_active: file }">
    <div class="footer__name">{{ file?.name }}</div>

    <div class="footer__button">
      <a href="#" class="btn btn_sm" @click.prevent="getLinkAndOpen">
        <icon type="download" />
        Download
      </a>

      <a href="#" class="btn btn_sm">
        <icon type="upload" />
        Share
      </a>
    </div>

    <div class="footer__option">
      <a href="#" @click.prevent="renameFile">
        <icon type="edit" />
        Rename
      </a>

      <a href="#" @click.prevent="deleteFile">
        <icon type="delete" />
        Delete
      </a>

      <a href="#">
        <icon type="unlink" />
        Delete link
      </a>

      <a href="#" class="footer__close" @click.prevent="cleanEditFile">
        <icon type="close" />
      </a>
    </div>
  </div>
</template>
