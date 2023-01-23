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
        path: "files/:sub*",
        name: "Files",
        component: Files,
        meta: {
          title: "Files",
        },
      },
      {
        path: "photos/:sub*",
        name: "Photos",
        component: Photos,
        meta: {
          title: "Photos",
          dev: true,
        },
      },
      {
        path: "albums/:sub*",
        name: "Albums",
        component: Albums,
        meta: {
          title: "Albums",
          dev: true,
        },
      },
      {
        path: "shared-access",
        name: "Shared",
        component: Shared,
        meta: {
          title: "Shared access",
          dev: true,
        },
      },
      {
        path: "archives",
        name: "Archives",
        component: Archives,
        meta: {
          title: "Archives",
          dev: true,
        },
      },
      {
        path: "trash",
        name: "Trash",
        component: Trash,
        meta: {
          title: "Trash",
          dev: true,
        },
      },
    ],
  },
];

export default site;
