import { describe, expect, test } from "vitest";
import { mount } from "@vue/test-utils";
import InputSwitch from "@/components/InputSwitch.vue";
import type { InputSwitchItem } from "@/types/app";

describe("components.ComponentName", () => {
  const items: Array<InputSwitchItem> = [
    { value: "list", icon: "list" },
    { value: "grid", icon: "grid" },
  ];

  const wrapper = mount(InputSwitch, {
    props: {
      name: "test",
      items,
      value: "list",
    },
  });

  test("test change value", async () => {
    let input = wrapper.find('input[name="test"]:checked')
      .element as HTMLInputElement;
    expect(input.value).toBe("list");

    await wrapper.setProps({ value: "grid" });

    input = wrapper.find('input[name="test"]:checked')
      .element as HTMLInputElement;
    expect(input.value).toBe("grid");
  });

  test("test items length", () => {
    let items = wrapper.findAll('input[name="test"]');
    expect(items.length).toBe(items.length);
  });
});
