import { describe, expect, test, vi } from "vitest";
import { mount } from "@vue/test-utils";
import ContentFolder from "@/components/ContentFolder.vue";
import { createRouter, createWebHistory } from "vue-router";
import { createTestingPinia } from "@pinia/testing";
import type { Folder } from "../../types/stores";

describe("components.ContentFolder", async () => {
  const router = createRouter({
    history: createWebHistory(),
    routes: [
      {
        path: "/photos/cities/:sub*",
        component: ContentFolder,
      },
    ],
  });

  await router.push("/photos/cities");

  const item: Folder = {
    id: 3,
    name: "Moscow",
    slug: "moscow",
    sub_folders_count: 2,
    files_count: 5,
    files_size: 2231434534,
  };

  const wrapper = mount(ContentFolder, {
    props: {
      item: item,
    },
    global: {
      plugins: [
        router,
        createTestingPinia({
          createSpy: vi.fn,
        }),
      ],
    },
  });

  test("render link attribute", () => {
    const link = wrapper.find(".folder-item");
    expect(link.element.getAttribute("href")).toBe("/photos/cities/moscow");
  });

  test("render counters", () => {
    const counter = wrapper.find(".folder-item__title span");
    expect(counter.text()).toBe("2 Folders | 5 Files");
  });

  test("render folder size", () => {
    const size = wrapper.find(".folder-item__size");
    expect(size.text()).toBe("Files size 2.2 GB");
  });
});
