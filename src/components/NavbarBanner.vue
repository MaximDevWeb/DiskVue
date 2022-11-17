<script setup lang="ts">
import upgradeImg from "@/assets/images/upgrade.svg";

/**
 * This is the navbar banner component.
 */
</script>

<template>
  <div class="banner">
    <div class="banner__header">Upgrade your account!</div>

    <img :src="upgradeImg" alt="Upgrade your account" />

    <a href="#" class="mt_lg btn btn_black">Upgrade now</a>
  </div>
</template>
