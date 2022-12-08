import { describe, expect, test, vi } from "vitest";
import { mount } from "@vue/test-utils";
import UploadLoaderItem from "@/components/UploadLoaderItem.vue";
import router from "../../router";
import { createTestingPinia } from "@pinia/testing";

describe("components.UploadLoaderItem", () => {
  const data = new Blob(["Hello"], { type: "text/html" });
  const file = new File([data], "sample.txt", {
    type: "text/html",
  });

  const wrapper = mount(UploadLoaderItem, {
    props: {
      file: file,
    },
    global: {
      plugins: [
        router,
        createTestingPinia({
          createSpy: vi.fn,
        }),
      ],
    },
  });

  test("test file name", () => {
    const fileName = wrapper.find(".uploader__name");
    expect(fileName.text()).toBe("sample.txt");
  });

  test("test image icon", () => {
    const img = wrapper.find(".uploader__icon");
    expect(img.attributes("src")).toBe("/images/files/txt.svg");
  });
});
