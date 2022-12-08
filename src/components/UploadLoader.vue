<script setup lang="ts">
import Icon from "@/components/icon/Icon.vue";
import { useUploadStore } from "@/stores/upload";
import UploadLoaderItem from "@/components/UploadLoaderItem.vue";
import { ref } from "vue";

/**
 * Upload loader component
 */

const minimize = ref(false);
const uploadStore = useUploadStore();

/**
 * The function for minimize handler
 */
const minimizeHandler = () => {
  minimize.value = !minimize.value;
};
</script>

<template>
  <div
    class="uploader"
    :class="{
      uploader_min: minimize,
      uploader_active: uploadStore.files.length,
    }"
  >
    <div class="uploader__header">
      <p>Upload files</p>

      <div>
        <button @click="minimizeHandler">
          <icon type="down_angle" class="icon__min" />
        </button>

        <button @click="uploadStore.cleanFiles">
          <icon type="close" />
        </button>
      </div>
    </div>

    <div class="uploader__list">
      <upload-loader-item
        v-for="item in uploadStore.files"
        :file="item"
        :key="item.name"
      />
    </div>
  </div>
</template>

<style lang="scss"></style>
