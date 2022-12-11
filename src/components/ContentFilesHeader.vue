<script setup lang="ts">
import InputSwitch from "@/components/InputSwitch.vue";
import InputSelect from "@/components/InputSelect.vue";
import { useFilesStore } from "@/stores/files";
/**
 * Content Files Header component
 */
const filesStore = useFilesStore();

/**
 * The switch values
 */
const styleSwitch = [
  { value: "list", icon: "list" },
  { value: "grid", icon: "grid" },
];

/**
 * The filter values
 */
const fileFilters = [
  { value: "", name: "All files" },
  { value: "images", name: "Images" },
  { value: "documents", name: "Documents" },
  { value: "archives", name: "Archives" },
  { value: "designs", name: "Designs" },
];

/**
 * The function change switch
 *
 * @param style
 */
const setStyleHandler = (style: string) => {
  filesStore.setStyle(style);
};
</script>

<template>
  <div class="files__header">
    <input-select :items="fileFilters" v-model="filesStore.filter" />

    <InputSwitch
      name="style"
      :items="styleSwitch"
      :value="filesStore.style"
      @change="setStyleHandler"
    />
  </div>
</template>
