<script setup lang="ts">
import logo from "../../../assets/images/logo.svg";
import loader from "../../../assets/images/loader.svg";
import { useRoute } from "vue-router";
import { onMounted, ref } from "vue";
import type { FileType } from "@/types/stores";
import { useFilesStore } from "@/stores/files";
import getFileExt from "@/models/fileExt";

const route = useRoute();
const fileStore = useFilesStore();
const load = ref<boolean>(true);
const file = ref<FileType | null>();

const copyLink = () => {
  if (file.value) {
    const link = fileStore.generatePublicPageLink(file.value.public_hash);
    fileStore.copyPublicLink(link as string);
  }
};

onMounted(async () => {
  const hash = route.params.hash as string;

  try {
    const response = await fileStore.loadPublicLinkFile(hash);
    file.value = response.data.file;
  } catch (e) {
    file.value = null;
  } finally {
    load.value = false;
  }
});
</script>

<template>
  <div class="download">
    <div>
      <img :src="logo" alt="Yandex Logo" class="download__logo" />
    </div>

    <div class="download__preload" v-if="load">
      <img :src="loader" alt="loader" />

      <div class="download__name">File loading</div>
    </div>

    <template v-else>
      <div class="download__file" v-if="file">
        <img
          :src="`/images/files/${getFileExt(file.type)}`"
          :alt="file.name"
          class="download__icon"
        />

        <div class="download__name">{{ file.name }}</div>

        <div class="download__button">
          <a href="#" class="btn btn_black" @click.prevent="copyLink">
            Copy link
          </a>

          <a :href="file.public_link" class="btn btn_default">Download</a>
        </div>
      </div>

      <div class="download__file" v-else>
        <img
          src="/images/files/file_not_found.svg"
          alt="Not file"
          class="download__icon"
        />

        <div class="download__name">File not found</div>

        <div class="download__button">
          <RouterLink to="/" class="btn btn_black">Home</RouterLink>
        </div>
      </div>
    </template>
  </div>
</template>
