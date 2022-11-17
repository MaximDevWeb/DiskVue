import { createRouter, createWebHistory } from "vue-router";
import site from "@/router/routes/site";
import auth from "@/router/routes/auth";
import dashboard from "@/router/routes/dashboard";
import type { MiddlewareType } from "@/types/middleware";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [...site, ...auth, ...dashboard],
});

router.afterEach((to) => {
  const middlewares: Array<MiddlewareType> =
    (to.meta.middleware as Array<MiddlewareType>) || [];

  middlewares.forEach((item) => {
    item.rule();
  });

  const postfix: string = import.meta.env.VITE_TITLE_PREFIX;
  document.title = to.meta.title + postfix;
});

export default router;
