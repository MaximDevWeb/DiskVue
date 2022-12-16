import { describe, expect, test, vi } from "vitest";
import { mount } from "@vue/test-utils";
import ContentFilesList from "@/components/ContentFilesList.vue";
import ContentFilesListItem from "@/components/ContentFilesListItem.vue";
import { createTestingPinia } from "@pinia/testing";
import router from "../../router";
import { useFilesStore } from "../../stores/files";

describe("components.ContentFileList", () => {
  const wrapper = mount(ContentFilesList, {
    global: {
      plugins: [
        router,
        createTestingPinia({
          createSpy: vi.fn,
        }),
      ],
    },
  });

  const filesStore = useFilesStore();
  filesStore.files = [
    {
      id: 234,
      name: "Test.php",
      size: 1233422333,
      type: "php",
      link: "/test/test/test.php",
      created_at: "2022-12-07T19:34:39",
    },
    {
      id: 120,
      name: "Test.txt",
      size: 1233422,
      type: "txt",
      link: "/test/test/test.txt",
      created_at: "2022-12-07T19:34:39",
    },
  ];

  test("test list render", () => {
    const items = wrapper.findAllComponents(ContentFilesListItem);
    expect(items.length).toBe(2);
  });

  test("test empty file list", () => {
    expect(wrapper.find(".alert").exists()).toBeFalsy();
  });
});
