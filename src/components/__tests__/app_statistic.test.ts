import { describe, expect, test, vi } from "vitest";
import { shallowMount } from "@vue/test-utils";
import AppStatistic from "@/components/AppStatistic.vue";
import router from "../../router";
import { createTestingPinia } from "@pinia/testing";

describe("components.AppStatistic", () => {
  const wrapper = shallowMount(AppStatistic, {
    global: {
      plugins: [
        router,
        createTestingPinia({
          createSpy: vi.fn,
          initialState: {
            files: {
              statistic: {
                disk: 5000,
                free: 2500,
                useImages: 2000,
                useDocuments: 200,
                useOther: 300,
              },
            },
          },
        }),
      ],
    },
  });

  const labels = wrapper.findAll(".labels__percent");

  test("test render chart percent", () => {
    const percent = wrapper.find(".chart__percent");

    expect(percent.text()).toBe("50.0%");
  });

  test("test render Images label", () => {
    expect(labels[0].text()).toBe("40.0%");
  });

  test("test render Document label", () => {
    expect(labels[1].text()).toBe("4.0%");
  });

  test("test render Other label", () => {
    expect(labels[2].text()).toBe("6.0%");
  });

  test("test render Free label", () => {
    expect(labels[3].text()).toBe("50.0%");
  });
});
