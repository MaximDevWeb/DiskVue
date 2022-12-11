<script setup lang="ts">
import Icon from "@/components/icon/Icon.vue";
import { onMounted } from "vue";
import type { InputSwitchItem } from "@/types/app";
import { randString } from "@/helpers/random";

/**
 * Input Switch component
 */
const props = defineProps<{
  /**
   * The name input field
   */
  name: string;
  /**
   * The values items
   */
  items: Array<InputSwitchItem>;
  /**
   * The value switch
   */
  value: string;
}>();

/**
 * Create random id for items switch
 */
onMounted(() => {
  props.items.map((item: InputSwitchItem) => {
    item.id = randString();
  });
});
</script>

<template>
  <div class="radio-switch">
    <div class="radio-switch__item" v-for="item in items" :key="item.id">
      <input
        :id="item.id"
        type="radio"
        :name="name"
        :value="item.value"
        :checked="value === item.value"
      />
      <label :for="item.id" @click.prevent="$emit('change', item.value)">
        <icon :type="item.icon" />
      </label>
    </div>
  </div>
</template>
