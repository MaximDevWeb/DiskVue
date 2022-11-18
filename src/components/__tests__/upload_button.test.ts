import { describe, expect, test, vi } from "vitest";
import { mount } from "@vue/test-utils";
import UploadButton from "@/components/UploadButton.vue";
import { createTestingPinia } from "@pinia/testing";

describe("components.ComponentName", () => {
  const wrapper = mount(UploadButton, {
    global: {
      plugins: [
        createTestingPinia({
          createSpy: vi.fn,
        }),
      ],
    },
  });

  const input = wrapper.find("input");

  test("the presence of input file element", () => {
    expect(input.exists()).toBe(true);
  });
});
