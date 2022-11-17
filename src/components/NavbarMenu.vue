<script setup lang="ts">
import Icon from "@/components/icon/Icon.vue";
import { useRoute } from "vue-router";
import { computed } from "vue";
import menuList from "@/models/menu";

/**
 * This is the navbar menu component.
 */

const route = useRoute();
const routeName = computed(() => route.name);
</script>

<template>
  <ul class="mt_xl navbar__list">
    <li>
      <RouterLink
        v-for="item in menuList"
        :to="{ name: item.name }"
        class="navbar__item"
        :class="{ navbar__item_active: item.name === routeName }"
      >
        <icon :type="item.icon" />
        {{ item.name }}
      </RouterLink>
    </li>
  </ul>
</template>
