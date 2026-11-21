import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
      meta: { title: "Home" },
    },
    {
      path: "/technology",
      name: "technology",
      component: () => import("../views/TechnologyView.vue"),
      meta: { title: "Research and Technology" },
    },
    {
      path: "/products",
      name: "products",
      component: () => import("../views/DesignInfoView.vue"),
      meta: { page: "products", title: "Products" },
    },
    {
      path: "/dronevision",
      name: "dronevision",
      component: () => import("../views/DesignInfoView.vue"),
      meta: { page: "dronevision", title: "Dronevision" },
    },
    {
      path: "/tiles",
      name: "tiles",
      component: () => import("../views/DesignInfoView.vue"),
      meta: { page: "tiles", title: "Tile" },
    },
    {
      path: "/resources",
      name: "resources",
      component: () => import("../views/DesignInfoView.vue"),
      meta: { page: "resources", title: "Resources" },
    },
    {
      path: "/personnel",
      name: "personnel",
      component: () => import("../views/PersonnelView.vue"),
      meta: { title: "Personnel" },
    },
    {
      path: "/about",
      name: "about",
      component: () => import("../views/DesignInfoView.vue"),
      meta: { page: "about", title: "About FLS Lab" },
    },
    {
      path: "/contact",
      name: "contact",
      component: () => import("../views/DesignInfoView.vue"),
      meta: { page: "contact", title: "Contact Us" },
    },
    {
      path: "/github",
      name: "github",
      component: () => import("../views/DesignInfoView.vue"),
      meta: { page: "github", title: "GitHub" },
    },
    {
      path: "/announcements",
      name: "announcements",
      component: () => import("../views/AnnouncementsView.vue"),
      meta: { title: "Announcements" },
    },
    {
      path: "/publications",
      name: "publications",
      component: () => import("../views/PublicationsView.vue"),
      meta: { title: "Publications" },
    },
    {
      path: "/alumni",
      name: "alumni",
      component: () => import("../views/AlumniView.vue"),
      meta: { title: "Alumni" },
    },
    {
      path: "/:pathMatch(.*)*",
      name: "not-found",
      component: () => import("../views/DesignInfoView.vue"),
      meta: { page: "notFound", title: "Page not found" },
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    return savedPosition || { top: 0 };
  },
});

router.afterEach((to) => {
  if (typeof document !== "undefined") {
    document.title = `${to.meta.title || "FLS Lab"} | FLS Lab`;
  }
});

export default router;
