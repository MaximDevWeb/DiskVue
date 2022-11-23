<script setup lang="ts">
import folderImg from "@/assets/images/files/folder.svg";
import Icon from "@/components/icon/Icon.vue";
import { useRoute } from "vue-router";
import { ref } from "vue";
import { numToSize } from "@/helpers/numbers";
import type { Folder } from "@/types/app";

/**
 * Content Folder component
 */

defineProps<{
  /**
   * The item for the folder.
   */
  item: Folder;
}>();

const route = useRoute();
const visible = ref(false);

/**
 * Function change visible context menu
 */
const changeVisibleContext = () => {
  visible.value = !visible.value;
};

/**
 * Function hide context menu
 */
const focusOutContext = () => {
  visible.value = false;
};
</script>

<template>
  <router-link :to="`${route.path}/${item.slug}`" class="folder-item">
    <div class="folder-item__header">
      <img :src="folderImg" alt="Folder image" class="folder-item__image" />

      <div class="folder-item__title">
        {{ item.name }}
        <span>
          {{ item.sub_folders_count ?? 0 }} Folders |
          {{ item.files_count ?? 0 }} Files
        </span>
      </div>

      <div
        class="folder-item__option"
        tabindex="1"
        @click.prevent="changeVisibleContext"
        @focusout="focusOutContext"
      >
        <icon type="menu_dotes" />

        <div class="context" :class="{ context_active: visible }">
          <div class="context__item">Delete</div>
          <div class="context__item">Rename</div>
        </div>
      </div>
    </div>

    <div class="folder-item__bottom">
      <div class="folder-item__size">
        <span>Files size</span>
        {{ numToSize(item.files_size) }}
      </div>
    </div>
  </router-link>
</template>
