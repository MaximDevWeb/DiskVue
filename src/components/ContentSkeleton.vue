<script setup lang="ts">
/**
 * Content Skeleton component
 */

defineProps({
  /**
   * Class skeleton item
   */
  type: {
    type: String,
    require: true,
  },
  /**
   * Number of elements
   */
  items: {
    type: Number,
    require: true,
  },
});
</script>

<template>
  <div
    class="skeleton"
    :class="`skeleton__${type}`"
    v-for="item in items"
    :key="item"
  ></div>
</template>
