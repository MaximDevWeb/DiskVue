import { describe, expect, test, vitest } from "vitest";
import { mount } from "@vue/test-utils";
import Input from "@/components/InputCheckbox.vue";

describe("components.InputCheckbox", () => {
  const wrapper = mount(Input, {
    props: {
      label: "Remember my",
      modelValue: true,
    },
    slots: {
      default: "Remember my",
    },
  });

  const label = wrapper.find("label");
  const input = wrapper.find("input");

  test("checkbox label text", () => {
    expect(label.text()).toBe("Remember my");
  });

  test("checkbox checked change", async () => {
    expect(input.element.checked).toBe(true);
    await label.trigger("click");
    expect(input.element.checked).toBe(false);
  });
});
