<script setup lang="ts">
import Icon from "@/components/icon/Icon.vue";
import menuList from "@/models/menu";

/**
 * This is the navbar mobile menu component.
 */
</script>

<template>
  <nav class="mobile-menu">
    <ul class="mobile-menu__list">
      <li v-for="item in menuList" :key="item.name">
        <RouterLink :to="{ name: item.name }" class="mobile-menu__item">
          <icon :type="item.icon" />
          {{ item.name }}
        </RouterLink>
      </li>
    </ul>
  </nav>
</template>
