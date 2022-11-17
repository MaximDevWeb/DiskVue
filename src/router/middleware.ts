import type { MiddlewareType } from "@/types/middleware";
import { useAuthStore } from "@/stores/auth";
import router from "@/router/index";

export const auth: MiddlewareType = {
  rule(data?: any) {
    const authStore = useAuthStore();

    if (!authStore.token) {
      this.action();
    }
  },
  action() {
    router.push({ name: "Login" });
  },
};

export const guest: MiddlewareType = {
  rule(data?: any) {
    const authStore = useAuthStore();

    if (authStore.token) {
      this.action();
    }
  },
  action() {
    const authStore = useAuthStore();

    router.push(authStore.target);
  },
};
