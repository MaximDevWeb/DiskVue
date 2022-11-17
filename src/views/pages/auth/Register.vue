<script setup lang="ts">
import InputText from "@/components/InputText.vue";
import { reactive } from "vue";
import type { RegisterData } from "@/types/auth";
import InputPassword from "@/components/InputPassword.vue";
import InputCheckbox from "@/components/InputCheckbox.vue";
import { useAuthStore } from "@/stores/auth";

const authStore = useAuthStore();

const data = reactive<RegisterData>({
  email: "",
  name: "",
  password: "",
  confirm: "",
  accept: true,
});

const createAccount = () => {
  authStore.createUser(data);
};

const clean = (name: string) => {
  authStore.cleanErrors(name);
};
</script>

<template>
  <div class="auth__form">
    <h2 class="auth__header">Sign Up</h2>

    <input-text
      type="email"
      placeholder="Email"
      :errors="authStore.errors.email"
      @focus="clean('email')"
      v-model="data.email"
    />

    <input-text
      placeholder="Name"
      :errors="authStore.errors.name"
      @focus="clean('name')"
      v-model="data.name"
    />

    <input-password
      placeholder="Password"
      :errors="authStore.errors.password"
      @focus="clean('password')"
      v-model="data.password"
    />

    <input-password
      placeholder="Confirm password"
      :errors="authStore.errors.confirm"
      @focus="clean('confirm')"
      v-model="data.confirm"
    />

    <input-checkbox v-model="data.accept" class="mb_d">
      I accept the
      <router-link :to="{ name: 'Policy' }" target="_blank">
        user agreement
      </router-link>
    </input-checkbox>

    <div class="input__btn">
      <button
        type="submit"
        class="btn btn_default"
        :class="{ btn_inactive: authStore.load }"
        @click.prevent="createAccount"
      >
        Register
      </button>
    </div>

    <div class="auth__separator">
      <div class="separator__line"></div>
      <span>done have an account?</span>
    </div>

    <div class="input__btn">
      <router-link :to="{ name: 'Login' }" class="btn btn_outline_cusses">
        Log In
      </router-link>
    </div>
  </div>
</template>
