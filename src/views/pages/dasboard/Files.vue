<script setup lang="ts">
import ContentBreadcrumbs from "@/components/ContentBreadcrumbs.vue";
import ContentFolders from "@/components/ContentFolders.vue";
import ContentFiles from "@/components/ContentFiles.vue";
</script>

<template>
  <main class="main">
    <content-breadcrumbs />

    <content-folders />

    <content-files />
  </main>
</template>
