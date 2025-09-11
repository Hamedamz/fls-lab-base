<template>
  <div class="tab-content-container flex flex-col items-center">
    <!-- Content specific to the Home tab -->
    <div class="text-white text-2xl mb-4">
      <p class="mb-2">
        Advances in computing, storage, communication, and robotics have enabled
        the vision of intelligent 3D multimedia systems.
      </p>
      <p class="mb-2">
        We investigate the design, implementation, applications, and social
        implications of these systems.
      </p>
      <p class="mb-2">
        Applications are diverse ranging from healthcare to entertainment. They
        include haptic interactions.
      </p>
      <p class="mb-2">Their data is multi-modal and rich with semantics.</p>
      <p class="mb-2">
        We foresee the systems and their applications to revolutionize how we
        work, learn, play and entertain, receive medical care, and socialize.
      </p>
    </div>
    <!-- Importing and displaying the image -->
    <img
      :src="dataInfoKnowImage"
      alt="Data, Info, Know"
      class="w-1/2 h-auto mb-16"
    />
  </div>
</template>

<script>
// Importing the images
import DataInfoKnowImage from "@/assets/images/Data,Info,Know.png";
export default {
  name: "HomeView",
  data() {
    return {
      dataInfoKnowImage: DataInfoKnowImage,
    };
  },
};
</script>

<style scoped></style>
