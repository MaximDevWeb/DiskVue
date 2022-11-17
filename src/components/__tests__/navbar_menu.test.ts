import { describe, expect, test, vi } from "vitest";
import { mount } from "@vue/test-utils";
import NavbarMenu from "@/components/NavbarMenu.vue";
import { RouterLink } from "vue-router";
import router from "../../router";
import { createTestingPinia } from "@pinia/testing";

describe("components.NavbarMenu", () => {
  const wrapper = mount(NavbarMenu, {
    global: {
      plugins: [
        router,
        createTestingPinia({
          createSpy: vi.fn,
        }),
      ],
    },
  });

  test("the component must contain RouterLink components", () => {
    expect(wrapper.findAllComponents(RouterLink).length).not.toBe(0);
  });

  test("active link", async () => {
    await router.push({ name: "Photos" });
    const activeLink = wrapper.find(".navbar__item_active");

    expect(activeLink.attributes("href")).toBe("/dashboard/photos");
  });
});
