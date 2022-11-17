import { describe, expect, test, vi } from "vitest";
import { mount } from "@vue/test-utils";
import Toasts from "@/components/Toasts.vue";
import ToastsItem from "@/components/ToastsItem.vue";
import { createTestingPinia } from "@pinia/testing";
import { ToastType } from "../../types/toasts";

describe("components.Toasts", () => {
  const wrapper = mount(Toasts, {
    global: {
      plugins: [
        createTestingPinia({
          createSpy: vi.fn,
          initialState: {
            toasts: {
              toasts: [
                { id: "gfRReds", message: "hello", type: ToastType.success },
                { id: "dfgRRes", message: "hello 2", type: ToastType.danger },
              ],
            },
          },
        }),
      ],
    },
  });

  test("toasts list render", () => {
    const toasts = wrapper.findAllComponents(ToastsItem);
    expect(toasts.length).toBe(2);
  });

  test("toasts success type", () => {
    const toast_success = wrapper.find(".toast_success");
    expect(toast_success.exists()).toBe(true);
  });

  test("toasts danger type", () => {
    const toast_danger = wrapper.find(".toast_danger");
    expect(toast_danger.exists()).toBe(true);
  });
});
