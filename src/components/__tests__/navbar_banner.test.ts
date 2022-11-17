import { describe, expect, test } from "vitest";
import { mount } from "@vue/test-utils";
import NavbarBanner from "@/components/NavbarBanner.vue";

describe("components.banner", () => {
  const wrapper = mount(NavbarBanner);

  test("render button", () => {
    const button = wrapper.find("a.btn_black");
    expect(button.exists()).toBeTruthy();
  });
});
