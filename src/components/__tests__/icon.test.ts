import { describe, expect, test } from "vitest";
import { mount } from "@vue/test-utils";
import Icon from "@/components/icon/Icon.vue";

describe("components.icon.Icon", () => {
  const icon = mount(Icon, {
    props: {
      type: "lock",
    },
  });

  test("icon style render", () => {
    expect(icon.classes("icon")).toBe(true);
  });

  test("icon link attribute", () => {
    const attributes = icon.find("use").attributes();

    expect(attributes.href).toBe("/src/components/icon/sprite.svg#lock");
  });
});
