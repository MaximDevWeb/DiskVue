import { describe, expect, test, vi } from "vitest";
import { mount } from "@vue/test-utils";
import UploadLoader from "@/components/UploadLoader.vue";
import UploadLoaderItem from "@/components/UploadLoaderItem.vue";
import router from "../../router";
import { createTestingPinia } from "@pinia/testing";

describe("components.UploadLoader", () => {
  const fileOne = new File(["Hello World!"], "file_one.txt", {
    type: "text/html",
  });
  const fileTwo = new File(["Hello World!"], "file_two.txt", {
    type: "text/html",
  });

  const wrapper = mount(UploadLoader, {
    global: {
      plugins: [
        router,
        createTestingPinia({
          createSpy: vi.fn,
          initialState: {
            upload: {
              files: [fileOne, fileTwo],
            },
          },
        }),
      ],
    },
  });

  test("items count", () => {
    const items = wrapper.findAllComponents(UploadLoaderItem);
    expect(items.length).toBe(2);
  });
});
