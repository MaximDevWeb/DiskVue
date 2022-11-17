<script setup lang="ts">
import { onMounted, Ref, ref } from "vue";
import { randString } from "@/helpers/random";

/**
 * This is the custom checkbox component.
 */

defineProps({
  /**
   * The checked value for the checkbox.
   */
  modelValue: {
    type: Boolean,
  },
});

/**
 * Event registration
 */
defineEmits(["update:modelValue"]);

/**
 * Unique id for the checkbox.
 */
const id: Ref<string> = ref("");

onMounted(() => {
  id.value = randString();
});
</script>

<template>
  <div class="input__block input__checkbox">
    <input
      :id="id"
      type="checkbox"
      :checked="modelValue"
      @change="$emit('update:modelValue', $event.target.checked)"
    />
    <label :for="id">
      <slot />
    </label>
  </div>
</template>
