import type { RouteRecordRaw } from "vue-router";
import Auth from "@/views/layouts/Auth.vue";
import Login from "@/views/pages/auth/Login.vue";
import Register from "@/views/pages/auth/Register.vue";
import Forgot from "@/views/pages/auth/Forgot.vue";
import Password from "@/views/pages/auth/Password.vue";
import { guest } from "@/router/middleware";

const auth: Array<RouteRecordRaw> = [
  {
    path: "/auth",
    component: Auth,
    meta: {
      middleware: [guest],
    },

    children: [
      {
        path: "login",
        name: "Login",
        component: Login,
        meta: {
          title: "Log In",
        },
      },
      {
        path: "register",
        name: "Register",
        component: Register,
        meta: {
          title: "Sing Up",
        },
      },
      {
        path: "forgot-password",
        name: "Forgot",
        component: Forgot,
        meta: {
          title: "Forgot password",
        },
      },
      {
        path: "new-password",
        name: "Password",
        component: Password,
        meta: {
          title: "New password",
        },
      },
    ],
  },
];

export default auth;
