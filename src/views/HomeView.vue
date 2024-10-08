<template>
  <div class="tab-content-container flex flex-col items-center">
    <!-- Content specific to the Home tab -->
    <div class="text-center text-white text-2xl mb-4">
      <p class="mb-2">
        Advances in computing, storage, communication, and robotics have enabled the vision of intelligent 3D multimedia systems.
      </p>
      <p class="mb-2">
        We investigate the design, implementation, applications, and social implications of these systems.
      </p>
      <p class="mb-2">
        Applications are diverse ranging from healthcare to entertainment. They include haptic interactions.
      </p>
      <p class="mb-2">
        Their data is multi-modal and rich with semantics.
      </p>
      <p class="mb-2">
        We foresee the systems and their applications to revolutionize how we work, learn, play and entertain, receive medical care, and socialize.
      </p>
    </div>
    <!-- Importing and displaying the image -->
    <img :src="dataInfoKnowImage" alt="Data, Info, Know" class="w-1/2 h-auto mb-16">
    <!-- Footer -->
    <div class="footer w-full">
      <!-- NSF Logo at the bottom -->
      <div class="text-center">
        <a href="https://urldefense.com/v3/__https://www.nsf.gov/awardsearch/showAward?AWD_ID=2425754&HistoricalAwards=false__;!!LIr3w8kk_Xxm!rBmrWhQdSpF4Abq7sdxr1i6DrvsTB3WgkYk6D6W7o4csESD-1lkX-mk8csyu-v2EY9JAG5mTc9mFUT7h$" target="_blank" class="nsf-logo-link">
          <img :src="nsfLogoImage" alt="NSF Logo" class="nsf-logo">
        </a>
      </div>
    </div>
  </div>
</template>

<script>
// Importing the images
import DataInfoKnowImage from "@/assets/images/Data,Info,Know.png";
import NSFLogoImage from "@/assets/images/NSF_logo.png";

export default {
  name: "HomeView",
  data() {
    return {
      dataInfoKnowImage: DataInfoKnowImage,
      nsfLogoImage: NSFLogoImage,
    };
  },
};
</script>

<style scoped>
/* Add specific styles for the HomeView here if needed */
.footer {
  background-color: #2D3748;
  width: 100%;
  padding: 10px 0;
}

.nsf-logo-link {
  display: inline-block;
  width: 80px;  /* Adjusted size */
  height: 80px;  /* Adjusted size */
  outline: none !important;
  border: none !important;
}

.nsf-logo {
  width: 100%;
  height: auto;
}
</style>
