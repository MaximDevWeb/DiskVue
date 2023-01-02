import { describe, expect, test, vi } from "vitest";
import { mount } from "@vue/test-utils";
import ContentEditFile from "@/components/ContentEditFile.vue";
import { createTestingPinia } from "@pinia/testing";
import { useFilesStore } from "../../stores/files";

describe("components.ComponentName", () => {
  const wrapper = mount(ContentEditFile, {
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
    private_link: "/test/test/test.php",
    public_link: "/test/test/test.php",
    public_hash: "dfg454gg54ggrtg",
    created_at: "2022-12-07T19:34:39",
  };

  test("test file name", () => {
    const name = wrapper.find(".footer__name");
    expect(name.text()).toBe("Test.php");
  });

  test("test close editor", async () => {
    const close = wrapper.find(".footer__close");
    await close.trigger("click");

    expect(fileStore.editFile).toBeFalsy();
  });
});
