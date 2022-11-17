<script setup lang="ts">
import logo from "../../../assets/images/logo.svg";
</script>

<template>
  <div class="home">
    <div class="home__logo">
      <img :src="logo" alt="Yandex Logo" />
    </div>

    <div class="home__text">
      <h3>Welcome to the website!</h3>
      <p>
        You can use it to store your files. To do this, use the demo login and
        password data. Or go through a simple registration.
      </p>

      <h3>Demo data</h3>

      <p>Email: <strong>demo@site.su</strong></p>
      <p>Password: <strong>password</strong></p>
    </div>

    <div class="home__buttons">
      <router-link :to="{ name: 'Login' }" class="btn btn_default">
        Log In
      </router-link>

      <router-link :to="{ name: 'Register' }" class="btn btn_black">
        Sign Up
      </router-link>
    </div>
  </div>
</template>
