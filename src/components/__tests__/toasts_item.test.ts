import { describe, expect, test, vi } from "vitest";
import { mount } from "@vue/test-utils";
import ToastsItem from "@/components/ToastsItem.vue";
import { ToastType } from "../../types/toasts";
import { createTestingPinia } from "@pinia/testing";

describe("components.ToastsItem", () => {
  const wrapper = mount(ToastsItem, {
    props: {
      item: {
        type: ToastType.default,
        message: "Hello world!",
      },
    },
    global: {
      plugins: [
        createTestingPinia({
          createSpy: vi.fn,
        }),
      ],
    },
  });

  test("toast message render", () => {
    const message = wrapper.find("div.toast__content");
    expect(message.text()).toBe("Hello world!");
  });

  test("toast type render", async () => {
    await wrapper.setProps({
      item: {
        type: ToastType.success,
      },
    });

    expect(wrapper.classes("toast_success")).toBe(true);
  });
});
