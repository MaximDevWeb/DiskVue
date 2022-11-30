<script setup lang="ts">
import Icon from "@/components/icon/Icon.vue";
import menuList from "@/models/menu";

/**
 * This is the navbar menu component.
 */
</script>

<template>
  <ul class="mt_xl navbar__list">
    <li v-for="item in menuList" :key="item.name">
      <RouterLink :to="{ name: item.name }" class="navbar__item">
        <icon :type="item.icon" />
        {{ item.name }}
      </RouterLink>
    </li>
  </ul>
</template>
