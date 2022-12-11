import { describe, expect, test } from "vitest";
import { mount } from "@vue/test-utils";
import type { InputSelectItem } from "../../types/app";
import InputSelect from "@/components/InputSelect.vue";

describe("components.ComponentName", () => {
  const items: Array<InputSelectItem> = [
    { value: "", name: "All" },
    { value: "files", name: "Files" },
    { value: "archives", name: "Archives" },
  ];

  const wrapper = mount(InputSelect, {
    props: {
      items,
      modelValue: "",
    },
  });

  const select = wrapper.find("select");

  test("test change value", async () => {
    expect(select.element.value).toBe("");
    await wrapper.setProps({ modelValue: "files" });
    expect(select.element.value).toBe("files");
  });

  test("test option length", () => {
    const option = select.findAll("option");
    expect(option.length).toBe(items.length);
  });
});
