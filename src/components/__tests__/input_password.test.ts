import { describe, expect, test } from "vitest";
import { mount } from "@vue/test-utils";
import Input from "@/components/InputPassword.vue";

describe("components.InputPassword", () => {
  const wrapper = mount(Input, {
    props: {
      placeholder: "Password",
      errors: ["Password is invalid", "Password is required"],
    },
  });

  const input = wrapper.find("input");

  test("input placeholder attribute", () => {
    expect(input.attributes().placeholder).toBe("Password");
  });

  test("input class error", () => {
    expect(wrapper.classes("input__block_error")).toBe(true);
  });

  test("input error text", () => {
    const errorElem = wrapper.find("div.input__error");
    expect(errorElem.text()).toBe("Password is invalid");
  });

  test("input password hide", () => {
    expect(input.attributes().type).toBe("password");
  });

  test("input password show", async () => {
    const btn = wrapper.find("div.input__visible");
    await btn.trigger("click");

    expect(input.attributes().type).toBe("text");
  });
});
