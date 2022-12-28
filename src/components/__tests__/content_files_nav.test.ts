import { describe, expect, test, vi } from "vitest";
import { mount } from "@vue/test-utils";
import ContentFilesNav from "@/components/ContentFilesNav.vue";
import { createTestingPinia } from "@pinia/testing";
import { useFilesStore } from "../../stores/files";

describe("components.ContentFilesNav", () => {
  const wrapper = mount(ContentFilesNav, {
    global: {
      plugins: [
        createTestingPinia({
          createSpy: vi.fn,
          stubActions: false,
        }),
      ],
    },
    props: {
      files: 300,
    },
  });

  const fileStore = useFilesStore();

  test("test count page render", () => {
    expect(wrapper.find(".files-nav__counter span").text()).toBe("out of 6");
  });

  test("test go to last page", async () => {
    const lastBtn = wrapper.find('[data-direction="last"]');
    await lastBtn.trigger("click");

    expect(fileStore.currentPage).toBe(6);
  });

  test("test go to first page", async () => {
    const firstBtn = wrapper.find('[data-direction="first"]');
    await firstBtn.trigger("click");

    expect(fileStore.currentPage).toBe(1);
  });

  test("test go to next page", async () => {
    const nextBtn = wrapper.find('[data-direction="next"]');
    await nextBtn.trigger("click");
    await nextBtn.trigger("click");

    expect(fileStore.currentPage).toBe(3);
  });

  test("test go to prev page", async () => {
    const prevBtn = wrapper.find('[data-direction="prev"]');
    await prevBtn.trigger("click");

    expect(fileStore.currentPage).toBe(2);
  });
});
