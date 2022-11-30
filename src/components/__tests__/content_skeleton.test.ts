import { describe, expect, test } from "vitest";
import { mount } from "@vue/test-utils";
import ContentSkeleton from "@/components/ContentSkeleton.vue";

describe("components.ContentSkeleton", () => {
  const wrapper = mount(ContentSkeleton, {
    props: {
      type: "folders",
      items: 5,
    },
  });

  test("skeleton render", () => {
    const elements = wrapper.findAll(".skeleton__folders");
    expect(elements.length).toBe(5);
  });
});
