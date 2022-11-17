<script setup lang="ts">
import logo from "../../assets/images/logo.svg";
import Toasts from "@/components/Toasts.vue";
</script>

<template>
  <div class="container_center container_bg">
    <div class="auth">
      <div class="auth__logo">
        <img :src="logo" alt="Yandex Disk" />
      </div>

      <router-view />
    </div>

    <toasts />
  </div>
</template>
