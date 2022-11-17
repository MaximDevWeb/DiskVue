<script setup lang="ts">
import { reactive } from "vue";
import type { ForgotData } from "@/types/auth";
import InputText from "@/components/InputText.vue";
import { useAuthStore } from "@/stores/auth";

const authStore = useAuthStore();

const data = reactive<ForgotData>({
  email: "",
});

const forgot = () => {
  authStore.forgotUser(data);
};

const clean = (name: string) => {
  authStore.cleanErrors(name);
};
</script>

<template>
  <div class="auth__form">
    <h2 class="auth__header">Forgot Password</h2>
    <div class="auth__subheader">Enter your recovery email</div>

    <input-text
      type="email"
      placeholder="Email"
      v-model="data.email"
      :errors="authStore.errors.email"
      @focus="clean('email')"
    />

    <div class="input__btn">
      <button
        type="submit"
        class="btn btn_default"
        :class="{ btn_inactive: authStore.load }"
        @click.prevent="forgot"
      >
        Forgot
      </button>
    </div>

    <div class="auth__separator">
      <div class="separator__line"></div>
      <span>remembered the password?</span>
    </div>

    <div class="input__btn">
      <router-link :to="{ name: 'Login' }" class="btn btn_outline_cusses">
        Log In
      </router-link>
    </div>
  </div>
</template>
