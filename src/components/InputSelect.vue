<script setup lang="ts">
import type { InputSelectItem } from "@/types/app";
import Icon from "@/components/icon/Icon.vue";

/**
 * Content Input Select component
 */
defineProps<{
  /**
   * The options items
   */
  items: Array<InputSelectItem>;
  /**
   * The select value
   */
  modelValue: string;
}>();
</script>

<template>
  <div class="select">
    <select
      class="select"
      @change="$emit('update:modelValue', $event.target.value)"
    >
      <option
        v-for="item in items"
        :key="item.name"
        :value="item.value"
        :selected="modelValue === item.value"
      >
        {{ item.name }}
      </option>
    </select>
    <icon type="down_arrow" />
  </div>
</template>
