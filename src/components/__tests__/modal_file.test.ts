import { describe, expect, test, vi } from "vitest";
import { mount } from "@vue/test-utils";
import ModalFile from "@/components/ModalFile.vue";
import { createTestingPinia } from "@pinia/testing";
import { useFilesStore } from "../../stores/files";

describe("components.ComponentName", () => {
  const wrapper = mount(ModalFile, {
    global: {
      plugins: [
        createTestingPinia({
          createSpy: vi.fn,
        }),
      ],
    },
  });

  const fileStore = useFilesStore();

  fileStore.editFile = {
    id: 234,
    name: "Test.php",
    size: 1233422333,
    type: "php",
    link: "/test/test/test.php",
    created_at: "2022-12-07T19:34:39",
  };

  test("test input value", () => {
    const input = wrapper.find(".input").element as HTMLInputElement;
    expect(input.value).toBe("Test");
  });
});
