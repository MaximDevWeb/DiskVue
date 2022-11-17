import { describe, expect, test, vi } from "vitest";
import { mount } from "@vue/test-utils";
import { createTestingPinia } from "@pinia/testing";
import HeaderSearch from "../HeaderSearch.vue";
import { useAppStore } from "../../stores/app";

describe("components.HeaderSearch", () => {
  const wrapper = mount(HeaderSearch, {
    global: {
      plugins: [
        createTestingPinia({
          createSpy: vi.fn,
        }),
      ],
    },
  });

  const appStore = useAppStore();

  test("change state search value", () => {
    const input = wrapper.find("input");
    expect(appStore.search).toBe("");

    input.setValue("Hello");
    expect(appStore.search).toBe("Helo");
  });
});
