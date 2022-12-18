<script setup lang="ts">
import ModalBox from "@/components/ModalBox.vue";
import InputText from "@/components/InputText.vue";
import { useFilesStore } from "@/stores/files";
import { ref, watchEffect } from "vue";

/**
 * This is the modal file component.
 */

const filesStore = useFilesStore();
const fileName = ref("");
const fileExt = ref("");

/**
 * Monitor update of editFile
 */
watchEffect(() => {
  const file = filesStore.editFile;

  fileName.value = file?.name.split(".").slice(0, -1).join(".") ?? "";
  fileExt.value = file?.name.split(".").pop() ?? "";
});

/**
 * The function close modal
 */
const closeModal = () => {
  filesStore.modalFileVisible = false;
};

/**
 * The function update filename
 */
const update = () => {
  if (filesStore.editFile) {
    const id = filesStore.editFile.id;
    const name = `${fileName.value}.${fileExt.value}`;

    filesStore.updateFile(id, name);
  }
};
</script>

<template>
  <modal-box
    title="Rename File"
    :visible="filesStore.modalFileVisible"
    @close="closeModal"
  >
    <template v-slot:modal-body>
      <input-text placeholder="File name" v-model="fileName" />
    </template>

    <template v-slot:modal-footer>
      <a href="#" class="btn" @click.prevent="closeModal">Отмена</a>
      <a
        href="#"
        class="btn btn_default"
        :class="{ btn_inactive: filesStore.saving }"
        @click.prevent="update"
      >
        Сохранить
      </a>
    </template>
  </modal-box>
</template>
