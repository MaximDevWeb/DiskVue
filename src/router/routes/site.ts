import type { RouteRecordRaw } from "vue-router";
import Site from "@/views/layouts/Site.vue";
import Home from "@/views/pages/site/Home.vue";
import Policy from "@/views/pages/site/Policy.vue";

const site: Array<RouteRecordRaw> = [
  {
    path: "/",
    component: Site,

    children: [
      {
        path: "",
        name: "Home",
        component: Home,
        meta: {
          title: "Home demo",
        },
      },
      {
        path: "/policy",
        name: "Policy",
        component: Policy,
        meta: {
          title: "Privacy policy",
        },
      },
    ],
  },
];

export default site;
