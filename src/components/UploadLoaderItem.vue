<script setup lang="ts">
import Icon from "@/components/icon/Icon.vue";
import { computed, onMounted, watchEffect } from "vue";
import getFileExt from "@/models/fileExt";
import { useRoute } from "vue-router";
import type { UploadData } from "@/types/stores";
import { useUploadStore } from "@/stores/upload";

/**
 * Upload loader item component
 */

const props = defineProps({
  /**
   * The file for the upload loader.
   */
  file: {
    type: File,
    required: true,
  },
});

const route = useRoute();
const uploadStore = useUploadStore();

/**
 * Get upload file extension icon
 */
const fileExtIcon = computed<string>(() => {
  const fileExt = props.file.name.split(".").pop() as string;
  return getFileExt(fileExt);
});

/**
 * OnMount Handler and call file upload
 */
onMounted(() => {
  const folder = ((route.params.sub || []) as Array<string>).join("/");

  const data: UploadData = {
    file: props.file,
    folder,
  };

  uploadStore.uploadFiles(data);
});

/**
 * Calculating the upload progress
 */
const progress = computed(() => {
  return uploadStore.progress[props.file.name] * 100;
});

/**
 * The function canceling file upload
 */
const abortHandler = () => {
  uploadStore.cancels[props.file.name].abort();
  uploadStore.removeFile(props.file);
};
</script>

<template>
  <div class="uploader__item">
    <img
      class="uploader__icon"
      :src="`/images/files/${fileExtIcon}`"
      :alt="file.name"
    />
    <div class="uploader__name">
      {{ file.name }}

      <div class="timeline">
        <div class="timeline__path"></div>
        <div class="timeline__line" :style="{ width: progress + '%' }"></div>
      </div>
    </div>

    <span class="uploader__option" v-if="progress === 100">
      <icon type="success" />
    </span>
    <button class="uploader__option" @click="abortHandler" v-else>
      <icon type="close" />
    </button>
  </div>
</template>

<style lang="scss"></style>
