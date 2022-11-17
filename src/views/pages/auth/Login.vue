<script setup lang="ts">
import type { LoginData } from "@/types/auth";
import { reactive } from "vue";
import InputText from "@/components/InputText.vue";
import InputPassword from "@/components/InputPassword.vue";
import InputCheckbox from "@/components/InputCheckbox.vue";
import { useAuthStore } from "@/stores/auth";

const authStore = useAuthStore();

const data = reactive<LoginData>({
  email: "",
  password: "",
  remember: false,
});

const login = () => {
  authStore.loginUser(data);
};

const clean = (name: string) => {
  authStore.cleanErrors(name);
};
</script>

<template>
  <div class="auth__form">
    <h2 class="auth__header">Log In</h2>

    <input-text
      type="email"
      placeholder="Email"
      :errors="authStore.errors.email"
      v-model="data.email"
      @focus="clean('email')"
    />

    <input-password
      placeholder="Password"
      :errors="authStore.errors.password"
      v-model="data.password"
      @focus="clean('password')"
    />

    <div class="auth__info mb_d">
      <input-checkbox v-model="data.remember"> Remember My </input-checkbox>

      <div>
        <router-link :to="{ name: 'Forgot' }">Forgot password</router-link>
      </div>
    </div>

    <div class="input__btn">
      <button
        type="submit"
        class="btn btn_default"
        :class="{ btn_inactive: authStore.load }"
        @click.prevent="login"
      >
        Log in
      </button>
    </div>

    <div class="auth__separator">
      <div class="separator__line"></div>
      <span>don't have an account?</span>
    </div>

    <div class="input__btn">
      <router-link :to="{ name: 'Register' }" class="btn btn_outline_cusses">
        Sign Up
      </router-link>
    </div>
  </div>
</template>
