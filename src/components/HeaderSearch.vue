<script setup lang="ts">
import Icon from "@/components/icon/Icon.vue";
import { useAppStore } from "@/stores/app";

/**
 * Header search component
 */

const appStore = useAppStore();
</script>

<template>
  <aside class="search">
    <div class="input__block">
      <icon type="search" class="input__prefix" />

      <input
        type="text"
        class="input"
        placeholder="search..."
        v-model="appStore.search"
      />
    </div>
  </aside>
</template>
