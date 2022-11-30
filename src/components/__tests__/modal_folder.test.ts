import { describe, expect, test, vi } from "vitest";
import { mount } from "@vue/test-utils";
import ModalFolder from "@/components/ModalFolder.vue";
import { createTestingPinia } from "@pinia/testing";
import { useFoldersStore } from "../../stores/folders";

describe("components.ModalFolder", () => {
  const wrapper = mount(ModalFolder, {
    global: {
      plugins: [
        createTestingPinia({
          createSpy: vi.fn,
        }),
      ],
    },
  });

  let folderStore = useFoldersStore();
  folderStore.data.id = 45;

  test("title rename render", () => {
    let title = wrapper.find(".modal__header h2");
    expect(title.text()).toBe("Rename folder");
  });
});
