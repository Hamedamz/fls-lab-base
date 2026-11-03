import { describe, expect, it } from "vitest";
import { mount, RouterLinkStub } from "@vue/test-utils";
import { createMemoryHistory, createRouter } from "vue-router";
import HomeView from "../HomeView.vue";
import DesignInfoView from "../DesignInfoView.vue";
import PublicationsView from "../PublicationsView.vue";
import AnnouncementsView from "../AnnouncementsView.vue";

window.matchMedia = window.matchMedia || (() => ({
  matches: false,
  addEventListener() {},
  removeEventListener() {},
}));

describe("redesigned pages", () => {
  it("shows the homepage content and primary product routes", () => {
    const wrapper = mount(HomeView, {
      global: { stubs: { RouterLink: RouterLinkStub } },
    });

    expect(wrapper.text()).toContain("3D Visualization");
    expect(wrapper.text()).toContain("Brought to Life");
    expect(wrapper.findAllComponents(RouterLinkStub).map((link) => link.props("to"))).toContain("/dronevision");
    expect(wrapper.findAllComponents(RouterLinkStub).map((link) => link.props("to"))).toContain("/tiles");
  });

  it("makes it clear that contact preview does not send a message", async () => {
    const router = createRouter({
      history: createMemoryHistory(),
      routes: [{ path: "/contact", component: DesignInfoView, meta: { page: "contact" } }],
    });
    await router.push("/contact");
    await router.isReady();
    const wrapper = mount(DesignInfoView, { global: { plugins: [router] } });

    await wrapper.get('input[name="name"]').setValue("Test Visitor");
    await wrapper.get('input[name="email"]').setValue("visitor@example.com");
    await wrapper.get('textarea[name="message"]').setValue("Hello FLS Lab");
    await wrapper.get("form").trigger("submit");

    expect(wrapper.get('[role="status"]').text()).toContain("nothing was sent");
    expect(wrapper.text()).toContain("Preview message details");
  });

  it("preserves publication and announcement content", () => {
    const publications = mount(PublicationsView);
    const announcements = mount(AnnouncementsView);

    expect(publications.text()).toContain("LightBenders: Authoring and Illuminating Line Drawings");
    expect(publications.find('a[href="https://doi.org/10.1145/3799825.3818746"]').exists()).toBe(true);
    expect(announcements.text()).toContain("LightBender has been accepted to appear");
    expect(announcements.find('a[href="https://github.com/flyinglightspeck"]').exists()).toBe(true);
  });
});
