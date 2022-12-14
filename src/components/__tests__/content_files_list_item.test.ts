import { describe, expect, test, vi } from "vitest";
import { mount } from "@vue/test-utils";
import ContentFilesListItem from "@/components/ContentFilesListItem.vue";
import type { FileType } from "../../types/stores";
import { createTestingPinia } from "@pinia/testing";

describe("components.ComponentFilesListItem", () => {
  const wrapper = mount(ContentFilesListItem, {
    global: {
      plugins: [
        createTestingPinia({
          createSpy: vi.fn,
        }),
      ],
    },
    props: {
      item: {
        id: 234,
        name: "Test.php",
        size: 1233422333,
        type: "php",
        private_link: "/test/test/test.php",
        public_link: "/test/test/test.php",
        public_hash: "dfg454gg54ggrtg",
        created_at: "2022-12-07T19:34:39",
      } as FileType,
    },
  });

  test("test icon render", () => {
    const img = wrapper.find(".file__icon");
    expect(img.attributes("src")).toBe("/images/files/php.svg");
  });

  test("test name render", () => {
    const name = wrapper.find(".file__name");
    expect(name.text()).toBe("Test.php");
  });

  test("test date render", () => {
    const date = wrapper.find(".file__date");
    expect(date.text()).toBe("07.12.2022");
  });

  test("test size render", () => {
    const size = wrapper.find(".file__size");
    expect(size.text()).toBe("1.2 GB");
  });
});
