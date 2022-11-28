<script setup lang="ts">
import Icon from "@/components/icon/Icon.vue";

/**
 * This is the modal component.
 */

defineProps({
  /**
   * The title for the modal.
   */
  title: {
    type: String,
    required: true,
  },
  /**
   * The visible for the modal.
   */
  visible: {
    type: Boolean,
    default: false,
  },
});

/**
 * Event registration
 */
defineEmits(["close"]);
</script>

<template>
  <aside class="modal" :class="{ modal__active: visible }">
    <div class="modal__content">
      <div class="modal__header">
        <h2>{{ title }}</h2>

        <a href="#" class="modal__close" @click.prevent="$emit('close')">
          <icon type="close" />
        </a>
      </div>

      <div class="modal__body">
        <slot name="modal-body" />
      </div>

      <div class="modal__footer">
        <slot name="modal-footer" />
      </div>
    </div>

    <div class="modal__bg" @click.prevent="$emit('close')"></div>
  </aside>
</template>
