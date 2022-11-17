<script setup lang="ts">
import { Toast, ToastType } from "@/types/toasts";
import { computed, onMounted, Ref } from "vue";
import Icon from "@/components/icon/Icon.vue";
import { useToastsStore } from "@/stores/toasts";

/**
 * This is the Toast item component.
 */

const toastStore = useToastsStore();
let timeoutId: number = 0;

const props = defineProps<{
  /**
   * The item value for the toast.
   */
  item: Toast;
}>();

/**
 * Еhe class computed from the type
 */
const toastClass: Ref<string> = computed(() => {
  switch (props.item.type) {
    case ToastType.success: {
      return "toast_success";
    }
    case ToastType.danger: {
      return "toast_danger";
    }
    default: {
      return "";
    }
  }
});

/**
 * Handling the deletion event
 */
const remove = () => {
  clearTimeout(timeoutId);
  toastStore.remove(props.item.id);
};

onMounted(() => {
  /**
   * Automatic deletion of toast
   */
  timeoutId = setTimeout(() => {
    toastStore.remove(props.item.id);
  }, 10000);
});
</script>

<template>
  <div class="toast" :class="toastClass">
    <div class="toast__content">{{ item.message }}</div>

    <icon type="close" @click="remove" />
  </div>
</template>
