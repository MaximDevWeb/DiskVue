import { describe, expect, test, vi } from "vitest";
import { mount } from "@vue/test-utils";
import AppConfirm from "@/components/AppConfirm.vue";
import { createTestingPinia } from "@pinia/testing";
import { useAppStore } from "../../stores/app";

describe("components.AppConfirm", () => {
  const wrapper = mount(AppConfirm, {
    global: {
      plugins: [
        createTestingPinia({
          createSpy: vi.fn,
          stubActions: false,
        }),
      ],
    },
  });

  let args = 45;
  const callbackFunc = (num: number) => {
    args = args * num;
  };

  const store = useAppStore();
  store.setConfirm("Hello world", callbackFunc, 3);

  test("confirm title render", () => {
    const title = wrapper.find(".confirm__header h3");
    expect(title.text()).toBe("Hello world");
  });

  test("submit confirm", async () => {
    const submitBtn = wrapper.find(".btn_default");
    expect(args).toBe(45);

    await submitBtn.trigger("click");
    expect(args).toBe(135);

    expect(store.confirm.visible).toBeFalsy();
  });
});
