import { describe, expect, test } from "vitest";
import { mount } from "@vue/test-utils";
import ModalBox from "@/components/ModalBox.vue";

describe("components.ModalBox", () => {
  const wrapper = mount(ModalBox, {
    props: {
      title: "Create Folder",
      visible: true,
    },
    slots: {
      "modal-body": "<p>body</p>",
      "modal-footer": "<p>footer</p>",
    },
  });

  test("title render", () => {
    const title = wrapper.find(".modal__header h2");
    expect(title.text()).toBe("Create Folder");
  });

  test("visible modal", () => {
    const modal = wrapper.find(".modal");
    expect(modal.element.classList.contains("modal__active")).toBeTruthy();
  });

  test("body slots render", () => {
    const modalBody = wrapper.find(".modal__body");
    expect(modalBody.html()).toContain("<p>body</p>");
  });

  test("footer slots render", () => {
    const modalFooter = wrapper.find(".modal__footer");
    expect(modalFooter.html()).toContain("<p>footer</p>");
  });
});
