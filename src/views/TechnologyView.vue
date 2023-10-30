<template>
  <div>
    <h1 class="mb-8 text-4xl font-black text-white">Technology</h1>
    <div class="tab-content-container">
      <!-- Overview Section -->
      <div class="bg-gray-800 p-6 rounded-lg shadow-md mb-4">
        <h2 class="text-2xl font-bold mb-4 text-white">Overview</h2>
        <p class="text-white text-xl">
          Our current efforts are focused on 3D multimedia displays using the Flying Light Specks, FLSs.
          An FLS is a miniature sized drone configured with light sources to illuminate 3D multimedia objects in a fixed volume, an FLS display.
          A swarm of FLSs may provide haptic interactions by exerting force back at a user’s touch.
          Our technical efforts can be divided into four thrusts: FLS-Matter and 3D Displays, Localization and Communication, Fault Tolerance & Battery, User Safety.
        </p>
      </div>

      <!-- FLS-Matter and 3D Displays Section -->
      <div class="bg-gray-800 p-6 rounded-lg shadow-md mb-4">
        <h2 class="text-2xl font-bold mb-4 text-white">FLS-Matter and 3D Displays</h2>
        <p class="text-white text-xl">
          FLS-matter is a pre-specified swarm of FLSs for 2D (e.g., square) and 3D (e.g., a pyramid) geometric shapes.
          It is the building block of objects with behavior. Example objects include a rock, water, a teapot, a sword, etc.
          The behavior associated with an object is inherited by its FLS-matters.
          This behavior may further be specialized at the granularity of each FLS-matter.
          For additional details, see Section 4 of the <a href="https://dl.acm.org/doi/10.1145/3469877.3493698" class="underline text-white">Holodecks</a> paper.
        </p>
        <p class="text-white text-xl mt-4">
          3D displays using swarms of FLSs is a transformative idea that will pioneer a new era in multimedia systems.
          Immersive and interactive 3D displays will resemble futuristic systems from sci-fi movies and shows, e.g., Star Trek’s Holodeck.
        </p>
        <img :src="HolodeckIMG" alt="Holodeck Image" class="mt-4 w-1/2 mx-auto">
      </div>

      <!-- Localization and Communication Section -->
      <div class="bg-gray-800 p-6 rounded-lg shadow-md mb-4">
        <h2 class="text-2xl font-bold mb-4 text-white">Localization and Communication</h2>
        <p class="text-white text-xl">
          FLSs must localize to illuminate shapes and provide haptic interactions. An FLS is unable to do either by itself.
          The inter-FLS relationship effect of an organizational framework compensates for the simplicity of each individual FLS,
          enabling a swarm of cooperating FLSs to render complex shapes and provide haptic interactions.
          The framework may be an algorithm implemented in either a centralized or a decentralized manner.
          The execution of the algorithm requires FLSs to communicate with one another and an Orchestrator.
          It is interesting to note that the signal strength of a communication network (or time of flight) may be used to measure distance and angles.
          This information is particularly useful to a localizing framework.
        </p>
        <p class="text-white text-xl mt-4">
          <a href="https://youtu.be/oT5RR8RPl0I" class="underline text-white">Video 1</a>,
          <a href="https://youtu.be/TQM4hMBwLHM" class="underline text-white">Video 2</a>,
          <a href="https://youtu.be/NNlWn9VW894" class="underline text-white">Video 3</a>
        </p>
      </div>

      <!-- Fault Tolerance & Battery Section -->
      <div class="bg-gray-800 p-6 rounded-lg shadow-md mb-4">
        <h2 class="text-2xl font-bold mb-4 text-white">Fault Tolerance & Battery</h2>
        <p class="text-white text-xl">
          FLs are mechanical devices that fail and must be garbage collected. Some failed FLSs will recover and become operational after sometime similar to today's commodity servers.
          An FLS display must detect these and recycle them as operational. We are exploring the use of dark standby FLSs that substitute for a failed illuminating FLSs to maintain a high quality of illumination.
          See Section 6 of the <a href="https://arxiv.org/pdf/2111.03657.pdf" class="underline text-white">Holodecks</a> paper.
        </p>
        <p class="text-white text-xl mt-4">
          FLSs are battery powered with a fixed flight time on a fully charged battery. One may use wireless charging technology per discussions of Section 3.4 of the <a href="https://arxiv.org/pdf/2111.03657.pdf" class="underline text-white">Holodecks</a> paper.
          Wireless charging may not be appropriate for immersive FLS displays as it emits EMF radiation which has been shown to be harmful to the human body. This motivates a framework that recycle FLSs to charge them continuously. STAG is one such framework.
          See Section 5 of the <a href="https://arxiv.org/pdf/2207.08346.pdf" class="underline text-white">3D Display</a> paper.
        </p>
      </div>

      <!-- User Safety Section -->
      <div class="bg-gray-800 p-6 rounded-lg shadow-md mb-4">
        <h2 class="text-2xl font-bold mb-4 text-white">User Safety</h2>
        <p class="text-white text-xl">
          A 3D display using FLSs must address user safety from the start to be viable. A holodeck's safety challenges are novel because its applications will involve explicit physical interactions between humans and synthesized 3D objects and experience in real-time.
          An intriguing challenge is how to ensure safety of researchers such as the members of the FLS lab. Rogue FLSs with rotating blades may cause injury to researchers, practitioners, application developers, and users of the technology.
          In the <a href="https://arxiv.org/pdf/2208.08398.pdf" class="underline text-white">Holodeck Safety</a> paper, we describe some of the challenges.
          In the <a href="https://arxiv.org/pdf/2308.10121.pdf" class="underline text-white">Dronevision</a> paper, we present the design of a system with glass panes that protects its user from rogue FLSs. User safety is an important research topic that we will keep at the forefront of our investigations.
        </p>
      </div>

      <!-- Footer -->
      <div class="footer w-full">
        <!-- NSF Logo at the bottom -->
        <div class="text-center">
          <a href="https://www.nsf.gov/awardsearch/showAward?AWD_ID=2232382&HistoricalAwards=false" target="_blank" class="nsf-logo-link">
            <img :src="NSFLogoImage" alt="NSF Logo" class="nsf-logo">
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HolodeckIMG from "@/assets/images/HolodeckIMG.png";
import NSFLogoImage from "@/assets/images/NSF_logo.png";

export default {
  data() {
    return {
      HolodeckIMG,
      NSFLogoImage
    };
  }
};
</script>

<style scoped>
/* Add specific styles for the TechnologyView here if needed */
.footer {
  background-color: #2D3748;
  width: 100%;
  padding: 10px 0;
}

.nsf-logo-link {
  display: inline-block;
  width: 80px;
  height: 80px;
  outline: none !important;
  border: none !important;
}

.nsf-logo {
  width: 100%;
  height: auto;
}
</style>
