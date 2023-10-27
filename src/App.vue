<template>
  <div class="mx-auto my-0 lg:p-0 max-w-screen-xl h-full">
    <!-- Header Section -->
    <header class="pt-4 sticky top-0 bg-gray-900 backdrop-blur-md backdrop-filter firefox-opacity-90 lg:pt-0 fixed w-full z-10 border-b border-r-gray-800 place-items-center flex justify-between">
      <!-- FLS Lab Title (small) -->
      <div class="text-white font-bold text-sm px-4">FLS Lab</div>
      <!-- Navigation Links -->
      <nav class="lg:flex gap-4 overflow-x-scroll border-b-0 lg:border-b-0 space-x-8 py-2">
        <RouterLink active-class="active-link" :to="{ name: 'home' }" class="text-white py-2 px-4 hover:bg-gray-700 rounded">Home</RouterLink>
        <RouterLink active-class="active-link" :to="{ name: 'technology' }" class="text-white py-2 px-4 hover:bg-gray-700 rounded">Technology</RouterLink>
        <RouterLink active-class="active-link" :to="{ name: 'personnel' }" class="text-white py-2 px-4 hover:bg-gray-700 rounded">Personnel</RouterLink>
        <RouterLink active-class="active-link" :to="{ name: 'courses' }" class="text-white py-2 px-4 hover:bg-gray-700 rounded">Courses</RouterLink>
        <RouterLink active-class="active-link" :to="{ name: 'publications' }" class="text-white py-2 px-4 hover:bg-gray-700 rounded">Publications</RouterLink>
      </nav>
    </header>

    <!-- FLS Lab Logo (larger, slightly below the header) -->
    <div class="flex justify-center items-center pt-16 pb-8">
      <FLSTitle />
    </div>

    <!-- Content Area - Home Tab -->
    <div class="tab-content-container"> <!-- Unique class for Home tab content -->
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import { RouterLink, RouterView } from "vue-router";
import FLSTitle from "./components/FLSTitle.vue";

export default {
  name: "App",
  components: {
    RouterLink,
    RouterView,
    FLSTitle
  },
};
</script>

<style>
/* Add your global styles here */
</style>
