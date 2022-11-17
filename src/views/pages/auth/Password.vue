<script setup lang="ts">
import { onMounted, reactive } from "vue";
import type { PasswordData } from "@/types/auth";
import InputPassword from "@/components/InputPassword.vue";
import { useAuthStore } from "@/stores/auth";
import { useRoute } from "vue-router";
import InputText from "@/components/InputText.vue";

const authStore = useAuthStore();
const route = useRoute();

const data = reactive<PasswordData>({
  email: "",
  password: "",
  confirm: "",
  token: "",
});

const change = () => {
  authStore.passwordUser(data);
};

const clean = (name: string) => {
  authStore.cleanErrors(name);
};

onMounted(() => {
  data.token = route.query.token as string;
});
</script>

<template>
  <div class="auth__form">
    <h2 class="auth__header">New Password</h2>
    <div class="auth__subheader">Enter a new password</div>

    <input-text
      type="email"
      placeholder="Email"
      v-model="data.email"
      :errors="authStore.errors.email"
      @focus="clean('email')"
    />

    <input-password
      placeholder="Password"
      :errors="authStore.errors.password"
      v-model="data.password"
      @focus="clean('password')"
    />

    <input-password
      placeholder="Confirm password"
      :errors="authStore.errors.confirm"
      v-model="data.confirm"
      @focus="clean('confirm')"
    />

    <div class="input__btn">
      <button
        type="submit"
        class="btn btn_default"
        :class="{ btn_inactive: authStore.load }"
        @click.prevent="change"
      >
        Change password
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
