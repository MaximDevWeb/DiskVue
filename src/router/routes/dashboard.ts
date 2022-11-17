import type { RouteRecordRaw } from "vue-router";
import Dashboard from "@/views/layouts/Dashboard.vue";
import Files from "@/views/pages/dasboard/Files.vue";
import Photos from "@/views/pages/dasboard/Photos.vue";
import Albums from "@/views/pages/dasboard/Albums.vue";
import Shared from "@/views/pages/dasboard/Shared.vue";
import Archives from "@/views/pages/dasboard/Archives.vue";
import Trash from "@/views/pages/dasboard/Trash.vue";
import { auth } from "@/router/middleware";

const site: Array<RouteRecordRaw> = [
  {
    path: "/dashboard",
    component: Dashboard,
    meta: {
      middleware: [auth],
    },

    children: [
      {
        path: "",
        name: "Files",
        component: Files,
        meta: {
          title: "All files",
        },
      },
      {
        path: "photos",
        name: "Photos",
        component: Photos,
        meta: {
          title: "Photos",
        },
      },
      {
        path: "albums",
        name: "Albums",
        component: Albums,
        meta: {
          title: "Albums",
        },
      },
      {
        path: "shared-access",
        name: "Shared",
        component: Shared,
        meta: {
          title: "Shared access",
        },
      },
      {
        path: "archives",
        name: "Archives",
        component: Archives,
        meta: {
          title: "Archives",
        },
      },
      {
        path: "trash",
        name: "Trash",
        component: Trash,
        meta: {
          title: "Trash",
        },
      },
    ],
  },
];

export default site;
