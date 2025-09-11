<template>
  <div class="mx-auto my-0 xl:p-0 p-4 max-w-screen-xl h-full">
    <!-- Header Section -->
    <header
      class="sticky px-3 py-1 top-6 bg-gray-900 bg-opacity-50 backdrop-blur backdrop-filter firefox-opacity-90 w-full z-10 border-opacity-20 border border-white shadow-sm place-items-center flex justify-between rounded-xl"
    >
      <FLSTitle class="px-1" />

      <!-- Navigation Links -->
      <nav
        class="flex gap-2 overflow-x-scroll border-b-0 lg:border-b-0 space-x-8 py-2"
      >
        <RouterLink
          active-class="active-link"
          :to="{ name: 'home' }"
          class="text-white py-2 px-4 hover:bg-gray-700 rounded"
          >Home</RouterLink
        >
        <RouterLink
          active-class="active-link"
          :to="{ name: 'technology' }"
          class="text-white py-2 px-4 hover:bg-gray-700 rounded"
          >Technology</RouterLink
        >
        <RouterLink
          active-class="active-link"
          :to="{ name: 'personnel' }"
          class="text-white py-2 px-4 hover:bg-gray-700 rounded"
          >Personnel</RouterLink
        >
        <RouterLink
          active-class="active-link"
          :to="{ name: 'courses' }"
          class="text-white py-2 px-4 hover:bg-gray-700 rounded"
          >Announcements</RouterLink
        >
        <!-- Text changed to Announcements -->
        <RouterLink
          active-class="active-link"
          :to="{ name: 'publications' }"
          class="text-white py-2 px-4 hover:bg-gray-700 rounded"
        >
          Publications
        </RouterLink>
      </nav>

      <div class="px-2">
        <a
          href="https://github.com/flyinglightspeck"
          target="_blank"
          class="text-white mt-2"
        >
          GitHub
        </a>
      </div>
    </header>

    <!-- Content Area - Home Tab -->
    <div class="tab-content-container mt-16 px-4">
      <router-view></router-view>
    </div>

    <!-- Footer -->
    <div class="w-full p-4 mt-8 border-t border-opacity-20 border-white">
      <!-- NSF Logo at the bottom -->
      <div class="text-center">
        <a
          href="https://urldefense.com/v3/__https://www.nsf.gov/awardsearch/showAward?AWD_ID=2425754&HistoricalAwards=false__;!!LIr3w8kk_Xxm!rBmrWhQdSpF4Abq7sdxr1i6DrvsTB3WgkYk6D6W7o4csESD-1lkX-mk8csyu-v2EY9JAG5mTc9mFUT7h$"
          target="_blank"
          class="inline-block"
        >
          <img :src="nsfLogoImage" alt="NSF Logo" class="w-16 h-16" />
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import { RouterLink, RouterView } from "vue-router";
import FLSTitle from "./components/FLSTitle.vue";
import NSFLogoImage from "@/assets/images/NSF_logo.png";

export default {
  name: "App",
  components: {
    RouterLink,
    RouterView,
    FLSTitle,
  },
  data() {
    return {
      nsfLogoImage: NSFLogoImage,
    };
  },
};
</script>

<style></style>
