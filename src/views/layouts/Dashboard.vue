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

const authStore = useAuthStore();

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
        <router-view />

        <aside class="statistic">
          <h2 class="statistic__header">Statistic</h2>

          <div class="chart">
            <canvas id="chart"></canvas>
            <div class="chart__legend">
              <div class="chart__percent">85%</div>
              <div class="chart__used">Used storage</div>
            </div>
          </div>

          <div class="labels">
            <div class="labels__item">
              <div
                class="labels__color"
                style="background-color: #0f8ce9"
              ></div>
              <div>
                <div class="labels__name">Photo</div>
                <div class="labels__percent">29%</div>
              </div>
            </div>

            <div class="labels__item">
              <div
                class="labels__color"
                style="background-color: #1c35b4"
              ></div>
              <div>
                <div class="labels__name">File</div>
                <div class="labels__percent">9%</div>
              </div>
            </div>

            <div class="labels__item">
              <div
                class="labels__color"
                style="background-color: #feb101"
              ></div>
              <div>
                <div class="labels__name">Album</div>
                <div class="labels__percent">62%</div>
              </div>
            </div>

            <div class="labels__item">
              <div
                class="labels__color"
                style="background-color: #fa3f6c"
              ></div>
              <div>
                <div class="labels__name">Space</div>
                <div class="labels__percent">12%</div>
              </div>
            </div>
          </div>

          <div class="store">
            <p>Free space: 420.2 GB of 500 GB used</p>

            <div class="timeline">
              <div class="timeline__path"></div>
              <div class="timeline__line" style="width: 80%"></div>
            </div>
          </div>

          <a href="#" class="btn">+1 TB for 50$</a>
        </aside>
      </div>
    </div>

    <modal-folder />
    <app-confirm />
    <toasts />
  </div>
</template>
