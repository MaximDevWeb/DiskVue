import { describe, expect, test } from "vitest";
import { mount } from "@vue/test-utils";
import Input from "@/components/InputText.vue";

describe("components.InputText", () => {
  const wrapper = mount(Input, {
    props: {
      type: "email",
      placeholder: "Email",
      errors: ["Email is invalid", "Email is required"],
      modelValue: "",
    },
  });

  const input = wrapper.find("input");

  test("input type attribute", () => {
    expect(input.attributes().type).toBe("email");
  });

  test("input placeholder attribute", () => {
    expect(input.attributes().placeholder).toBe("Email");
  });

  test("input class error", () => {
    expect(wrapper.classes("input__block_error")).toBe(true);
  });

  test("input error text", () => {
    const errorElem = wrapper.find("div.input__error");
    expect(errorElem.text()).toBe("Email is invalid");
  });

  test("input change value", async () => {
    expect(input.element.value).toBe("");
    await input.setValue("hello");
    expect(input.element.value).toBe("hello");
  });
});
