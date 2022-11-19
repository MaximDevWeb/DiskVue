import { describe, expect, test, vi } from "vitest";
import { mount } from "@vue/test-utils";
import ContentBreadcrumbs from "@/components/ContentBreadcrumbs.vue";
import router from "../../router";
import { createTestingPinia } from "@pinia/testing";
import _ from "lodash";

describe("components.ContentBreadcrumbs", () => {
  const wrapper = mount(ContentBreadcrumbs, {
    global: {
      plugins: [
        router,
        createTestingPinia({
          createSpy: vi.fn,
        }),
      ],
    },
  });

  test("breadcrumbs render", async () => {
    await router.push("/dashboard/photos/cities/moscow");

    const items = wrapper.findAll("li");
    expect(_.last(items)?.text()).toBe("Moscow");
  });
});
