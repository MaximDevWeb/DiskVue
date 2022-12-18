<script setup lang="ts">
import ModalBox from "@/components/ModalBox.vue";
import { useFoldersStore } from "@/stores/folders";
import { ref, watchEffect } from "vue";
import InputText from "@/components/InputText.vue";

/**
 * This is the modal folder component.
 */

const folderStore = useFoldersStore();
const title = ref("");

/**
 * Calculating the title modal
 */
watchEffect(() => {
  title.value = folderStore.data.id ? "Rename folder" : "Create Folder";
});

/**
 * The function closing modal handler
 */
const closeModal = () => {
  folderStore.modalFolderVisible = false;
  folderStore.cleanData();
};

/**
 * The function save folder
 */
const saveFolder = () => {
  folderStore.save();
};

/**
 * The function clean errors messages
 */
const clean = () => {
  folderStore.cleanErrors();
};
</script>

<template>
  <modal-box
    :title="title"
    :visible="folderStore.modalFolderVisible"
    @close="closeModal"
  >
    <template v-slot:modal-body>
      <input-text
        placeholder="Name Folder"
        :errors="folderStore.errors.name"
        v-model="folderStore.data.name"
        @focus="clean"
      />
    </template>

    <template v-slot:modal-footer>
      <a href="#" class="btn" @click.prevent="closeModal">Отмена</a>
      <a
        href="#"
        class="btn btn_default"
        :class="{ btn_inactive: folderStore.saving }"
        @click.prevent="saveFolder"
      >
        Сохранить
      </a>
    </template>
  </modal-box>
</template>
