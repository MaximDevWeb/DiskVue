<script setup lang="ts">
import { computed, ref, Ref } from "vue";
import Icon from "@/components/icon/Icon.vue";
import _ from "lodash";

/**
 * This is the password component.
 */

const props = defineProps({
  /**
   * The placeholder for the input.
   */
  placeholder: {
    type: String,
    default: "",
  },

  /**
   * The Errors for the input.
   */
  errors: {
    type: Array,
    default: [],
  },

  /**
   * The Value for the input.
   */
  modelValue: {
    type: String,
  },
});

/**
 * Event registration
 */
defineEmits(["update:modelValue", "focus"]);

/**
 * The first error value
 */
const error: Ref<string> = computed(() => {
  return _.head(props.errors) as string;
});

/**
 * Password display indicator
 */
const visible = ref(false);
</script>

<template>
  <div :class="{ input__block_error: error }" class="input__block">
    <div class="input__error">{{ error }}</div>
    <input
      :type="visible ? 'text' : 'password'"
      class="input"
      :placeholder="placeholder"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
      @focus="$emit('focus')"
    />

    <div class="input__visible" @click="visible = !visible">
      <icon v-if="visible" type="unlock" />
      <icon v-else type="lock" />
    </div>
  </div>
</template>

<style lang="scss"></style>
