import { describe, expect, test, vi } from "vitest";
import { mount } from "@vue/test-utils";
import { createTestingPinia } from "@pinia/testing";
import HeaderButtons from "@/components/HeaderButtons.vue";
import UploadButton from "@/components/UploadButton.vue";
import { useFoldersStore } from "../../stores/folders";

describe("components.HeaderSearch", () => {
  const wrapper = mount(HeaderButtons, {
    global: {
      plugins: [
        createTestingPinia({
          createSpy: vi.fn,
        }),
      ],
    },
  });

  const folderStore = useFoldersStore();

  test("change visible state modal create folder", async () => {
    const button = wrapper.find("a.btn_black");
    expect(folderStore.modalFolderVisible).toBe(false);

    await button.trigger("click");
    expect(folderStore.modalFolderVisible).toBe(true);
  });

  test("the presence of the file upload button component", () => {
    expect(wrapper.findComponent(UploadButton).exists()).toBe(true);
  });
});
