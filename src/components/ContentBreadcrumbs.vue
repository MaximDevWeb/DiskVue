<script setup lang="ts">
import Icon from "@/components/icon/Icon.vue";
import { useRoute } from "vue-router";
import { computed } from "vue";
import type { Breadcrumbs } from "@/types/app";
import _ from "lodash";

/**
 * Content Breadcrumbs component
 */

const route = useRoute();

const breadcrumbs = computed(() => {
  const items: Array<Breadcrumbs> = [];
  let parentPath = route.fullPath;
  let subPath: Array<string> = [];

  /**
   * Changing the parent link if there are subpages
   */
  if (route.params.sub) {
    const subPages = (route.params.sub as Array<string>).join("/");

    parentPath = parentPath.replace("/" + subPages, "");
    subPath = route.params.sub as Array<string>;
  }

  /**
   * Add parent link in items array
   */
  items.push({
    name: route.meta.title as string,
    link: parentPath != route.fullPath ? parentPath : "",
  });

  /**
   * Add subpages link in items array
   */
  subPath.forEach((item) => {
    parentPath += "/" + item;
    items.push({
      name: _.capitalize(_.startCase(item)),
      link: parentPath != route.fullPath ? parentPath : "",
    });
  });

  return items;
});
</script>

<template>
  <ul class="breadcrumbs">
    <template v-for="item in breadcrumbs" :key="item.name">
      <template v-if="item.link">
        <li>
          <RouterLink :to="item.link">{{ item.name }}</RouterLink>
        </li>
        <li>
          <icon type="right_arrow" />
        </li>
      </template>
      <template v-else>
        <li>{{ item.name }}</li>
      </template>
    </template>
  </ul>
</template>
