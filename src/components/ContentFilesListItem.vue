<script setup lang="ts">
import Icon from "@/components/icon/Icon.vue";
import { numToSize } from "@/helpers/numbers";
import getFileExt from "@/models/fileExt";
import { DateTime } from "luxon";
import { FileType } from "@/types/stores";
import { useFilesStore } from "@/stores/files";

/**
 * Content Files List Item component
 */

const props = defineProps<{
  item: FileType;
}>();

const filesStore = useFilesStore();

/**
 * Parse the file creation date
 *
 * @param date
 */
const parseDate = (date: string): string => {
  return DateTime.fromISO(date).setLocale("ru").toLocaleString();
};

/**
 * Set edit file
 */
const setEditFile = () => {
  filesStore.editFile = props.item;
};

/**
 * The function copy public link
 */
const copyLink = () => {
  const link = filesStore.generatePublicPageLink(props.item.public_hash);
  filesStore.copyPublicLink(link as string);
};
</script>

<template>
  <div class="file" @click="setEditFile">
    <img
      class="file__icon"
      :src="'/images/files/' + getFileExt(item.type)"
      :alt="item.name"
    />
    <div class="file__name">{{ item.name }}</div>
    <div class="file__date">{{ parseDate(item.created_at) }}</div>
    <div class="file__size">{{ numToSize(item.size) }}</div>

    <div class="file__share">
      <div
        class="file__link"
        v-if="item.public_link"
        @click.prevent.stop="copyLink"
      >
        <icon type="link" />
      </div>
    </div>
  </div>
</template>
