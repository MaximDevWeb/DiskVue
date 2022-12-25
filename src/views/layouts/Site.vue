<script lang="ts" setup>
import Toasts from "@/components/Toasts.vue";
</script>

<template>
  <div class="container_center">
    <router-view />

    <toasts />
  </div>
</template>
