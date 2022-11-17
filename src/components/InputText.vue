<script setup lang="ts">
import { computed, Ref } from "vue";
import _ from "lodash";

/**
 * This is the input component.
 */

const props = defineProps({
  /**
   * The type for the input.
   * @values text, email
   */
  type: {
    type: String,
    default: "text",
    validator: (value: string) => ["text", "email"].includes(value),
  },

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
</script>

<template>
  <div :class="{ input__block_error: error }" class="input__block">
    <div class="input__error">{{ error }}</div>
    <input
      :type="type"
      class="input"
      :placeholder="placeholder"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
      @focus="$emit('focus')"
    />
  </div>
</template>

<style lang="scss"></style>
