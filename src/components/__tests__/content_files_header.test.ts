import { describe, expect, test, vi } from "vitest";
import { mount } from "@vue/test-utils";
import { createTestingPinia } from "@pinia/testing";
import ContentFilesHeader from "@/components/ContentFilesHeader.vue";
import InputSelect from "@/components/InputSelect.vue";
import InputSwitch from "@/components/InputSwitch.vue";

describe("components.ContentFilesHeader", () => {
  const wrapper = mount(ContentFilesHeader, {
    global: {
      plugins: [
        createTestingPinia({
          createSpy: vi.fn,
        }),
      ],
    },
  });

  test("test input select render", () => {
    expect(wrapper.findComponent(InputSelect)).toBeTruthy();
  });

  test("test switch render", () => {
    expect(wrapper.findComponent(InputSwitch)).toBeTruthy();
  });
});
