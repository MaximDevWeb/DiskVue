<script setup lang="ts">
import Icon from "@/components/icon/Icon.vue";
import { numToSize } from "@/helpers/numbers";
import getFileExt from "@/models/fileExt";
import { DateTime } from "luxon";
import { FileType } from "@/types/stores";

/**
 * Content Files List Item component
 */
const props = defineProps<{
  item: FileType;
}>();

/**
 * Parse the file creation date
 *
 * @param date
 */
const parseDate = (date: string): string => {
  return DateTime.fromISO(date).setLocale("ru").toLocaleString();
};
</script>

<template>
  <div class="file">
    <img
      class="file__icon"
      :src="'/images/files/' + getFileExt(item.type)"
      :alt="item.name"
    />
    <div class="file__name">{{ item.name }}</div>
    <div class="file__date">{{ parseDate(item.created_at) }}</div>
    <div class="file__size">{{ numToSize(item.size) }}</div>
    <div class="file__link">
      <icon type="link" />
    </div>
  </div>
</template>
