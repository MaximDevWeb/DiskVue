<script setup lang="ts">
import Toasts from "@/components/Toasts.vue";
import HeaderProfile from "@/components/HeaderProfile.vue";
import { onMounted } from "vue";
import { useAuthStore } from "@/stores/auth";
import logo from "@/assets/images/logo.svg";
import NavbarBanner from "@/components/NavbarBanner.vue";
import NavbarMenu from "@/components/NavbarMenu.vue";
import HeaderSearch from "@/components/HeaderSearch.vue";
import HeaderButtons from "@/components/HeaderButtons.vue";
import ModalFolder from "@/components/ModalFolder.vue";
import AppConfirm from "@/components/AppConfirm.vue";
import NavbarMobileMenu from "@/components/NavbarMobileMenu.vue";
import UploadLoader from "@/components/UploadLoader.vue";
import ContentEditFile from "@/components/ContentEditFile.vue";
import ModalFile from "@/components/ModalFile.vue";
import AppStatistic from "@/components/AppStatistic.vue";
import { useRoute } from "vue-router";
import ContentDevelopment from "@/components/ContentDevelopment.vue";

const authStore = useAuthStore();
const route = useRoute();

onMounted(() => {
  authStore.loadUser();
});
</script>

<template>
  <div class="container_content" v-if="authStore.user">
    <nav class="navbar">
      <div>
        <div class="navbar__logo">
          <img :src="logo" alt="Yandex Disk" />
        </div>

        <navbar-menu />
      </div>

      <navbar-banner />
    </nav>

    <div class="content">
      <header class="header">
        <a href="#" class="header__logo">
          <img :src="logo" alt="Yandex Disk" />
        </a>

        <header-search />

        <aside class="user">
          <header-buttons />

          <header-profile />
        </aside>
      </header>

      <navbar-mobile-menu />

      <div class="content__wrapper">
        <main class="main">
          <template v-if="route.meta.dev">
            <content-development />
          </template>

          <template v-else>
            <router-view />
          </template>
        </main>

        <app-statistic />
      </div>
    </div>

    <content-edit-file />
    <upload-loader />
    <modal-folder />
    <modal-file />
    <app-confirm />
    <toasts />
  </div>
</template>
