<script setup lang="ts">
import avatar from "@/assets/images/avatar.jpeg";
import { ref } from "vue";
import type { Ref } from "vue";
import { useAuthStore } from "@/stores/auth";
import { storeToRefs } from "pinia";

/**
 * Header profile component
 */

const authStore = useAuthStore();
const show: Ref<boolean> = ref(false);
const { user } = storeToRefs(authStore);
/**
 * Function change show menu
 */
const changeShow = () => {
  show.value = !show.value;
};

/**
 * Function hide menu
 */
const hideShow = () => {
  show.value = false;
};

/**
 * Logout user
 */
const logOut = () => {
  authStore.logoutUser();
};
</script>

<template>
  <div
    class="user__profile"
    :class="{ user__profile_active: show }"
    @focusout="hideShow"
    tabindex="1"
  >
    <div
      class="user__avatar"
      :style="{ backgroundImage: `url('${avatar}')` }"
      @click.prevent="changeShow"
    ></div>

    <div class="user__menu">
      <p>{{ user ? user.name : "user" }}</p>
      <a href="#" @click.prevent="logOut">Log Out</a>
    </div>
  </div>
</template>
