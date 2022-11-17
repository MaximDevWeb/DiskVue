<script setup lang="ts">
import Toasts from "@/components/Toasts.vue";
import HeaderProfile from "@/components/HeaderProfile.vue";
import { onMounted } from "vue";
import { useAuthStore } from "@/stores/auth";
import logo from "@/assets/images/logo.svg";
import NavbarBanner from "@/components/NavbarBanner.vue";
import NavbarMenu from "@/components/NavbarMenu.vue";

const authStore = useAuthStore();

onMounted(() => {
  authStore.loadUser();
});
</script>

<template>
  <div class="container_content">
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
          <img src="/images/logo.svg" alt="Yandex Disk" />
        </a>
        <aside class="search">
          <div class="input__block">
            <svg class="icon input__prefix">
              <use xlink:href="#search"></use>
            </svg>

            <input type="text" class="input" placeholder="search..." />
          </div>
        </aside>

        <aside class="user">
          <a href="#" class="btn btn_default">
            <svg class="icon">
              <use xlink:href="#upload"></use>
            </svg>
            <span>Upload</span>
          </a>

          <a href="#" class="btn btn_black">
            <svg class="icon">
              <use xlink:href="#add_folder"></use>
            </svg>
            <span>Create</span>
          </a>

          <header-profile />
        </aside>
      </header>

      <nav class="mobile-menu">
        <ul class="mobile-menu__list">
          <li>
            <a href="#" class="mobile-menu__item mobile-menu_active">
              <svg class="icon">
                <use xlink:href="#files"></use>
              </svg>
              Files
            </a>
          </li>

          <li>
            <a href="#" class="mobile-menu__item">
              <svg class="icon">
                <use xlink:href="#photo"></use>
              </svg>
              Photos
            </a>
          </li>

          <li>
            <a href="#" class="mobile-menu__item">
              <svg class="icon">
                <use xlink:href="#album"></use>
              </svg>
              Albums
            </a>
          </li>

          <li>
            <a href="#" class="mobile-menu__item">
              <svg class="icon">
                <use xlink:href="#shared"></use>
              </svg>
              Shared access
            </a>
          </li>

          <li>
            <a href="#" class="mobile-menu__item">
              <svg class="icon">
                <use xlink:href="#archive"></use>
              </svg>
              Archives
            </a>
          </li>

          <li>
            <a href="#" class="mobile-menu__item">
              <svg class="icon">
                <use xlink:href="#delete"></use>
              </svg>
              Trash
            </a>
          </li>
        </ul>
      </nav>

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

    <aside class="modal">
      <div class="modal__content">
        <div class="modal__header">
          <h2>Rename file</h2>

          <a href="#" class="modal__close">
            <svg class="icon">
              <use xlink:href="#close"></use>
            </svg>
          </a>
        </div>

        <div class="modal__body">
          <div class="input__block">
            <div class="input__error">login not found</div>
            <input type="text" class="input" placeholder="File name" />
          </div>
          <div class="input__block">
            <div class="input__error">login not found</div>
            <input type="text" class="input" placeholder="File name" />
          </div>
        </div>

        <div class="modal__footer">
          <a href="#" class="btn">Отмена</a>
          <a href="#" class="btn btn_default">Сохранить</a>
        </div>
      </div>
      <div class="modal__bg"></div>
    </aside>

    <toasts />
  </div>
</template>
