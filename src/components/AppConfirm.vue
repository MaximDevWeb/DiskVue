<script setup lang="ts">
import { useAppStore } from "@/stores/app";
import { computed } from "vue";

/**
 * App confirm component
 */
const appStore = useAppStore();
const confirm = computed(() => appStore.confirm);

/**
 * The function run confirm callback
 */
const confirmAccept = () => {
  if (confirm.value.callback) {
    confirm.value.callback(confirm.value.callbackArgs);
  }

  appStore.closeConfirm();
};

/**
 * The function close confirm
 */
const confirmReset = () => {
  appStore.closeConfirm();
};
</script>

<template>
  <aside class="confirm" :class="{ confirm__active: confirm.visible }">
    <div class="confirm__content">
      <div class="confirm__header">
        <h3>{{ confirm.message }}</h3>
      </div>
      <div class="confirm__footer">
        <button class="btn" @click="confirmReset">Cancel</button>
        <button class="btn btn_default" @click="confirmAccept">Confirm</button>
      </div>
    </div>
    <div class="confirm__bg"></div>
  </aside>
</template>
