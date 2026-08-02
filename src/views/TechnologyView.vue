<template>
  <div>
    <h1 class="mb-8 text-3xl font-black text-white">Technology</h1>
    <div class="tab-content-container">
      <!-- Overview Section -->
      <div class="bg-slate-800 p-6 rounded-lg shadow-md mb-4">
        <h2 class="text-2xl font-bold mb-4 text-white">Overview</h2>
        <p class="text-white text-xl">
          Flying Light Specks (FLSs) introduce a new paradigm in physical AI, 3D volumetric multimedia displays, and micro-drone swarm intelligence. An FLS is a miniature drone equipped with a lighting primitive. A swarm of FLSs self-assembles within a fixed volume, an FLS display, to illuminate and augment both virtual and physical objects. These objects are visible to the naked eye and support bare-hand interaction. The resulting intelligent engineered system enables bidirectional interaction between humans and a physics-based environment. For example, a swarm of FLSs may illuminate the bricks of a Jenga game while dynamically implementing their physics-based surface friction in response to a user's bare-hand manipulation of a brick.
        </p>
      </div>

      <!-- LightBender Section -->
      <div class="bg-slate-800 p-6 rounded-lg shadow-md mb-4">
        <h2 class="text-2xl font-bold mb-4 text-white">LightBender</h2>
        <p class="text-white text-xl">
          A <a href="https://arxiv.org/abs/2606.22499" target="_blank" class="underline">LightBender</a> is a type of Flying Light Speck, FLS. Its lighting primitive is a servo-actuated rod with a dense, addressable LED strip. It is designed to illuminate mid-air <a href="https://youtu.be/j4nlgD3iAyM" target="_blank" class="underline">line drawing</a> and letterforms. Its software implements algorithms and heuristics to estimate the minimum number of LightBenders required for a given drawing while computing staggered swarm formations that mitigate rotor downwash. The software generates a Swarm Flight and Lighting (SFL) file specifying coordinated flight trajectories and lighting commands. It is embodied in a <a href="https://youtu.be/DhsHoG3VMiQ" target="_blank" class="underline">Blender add-on</a> that launches a swarm of LightBenders with a click of a button to illuminate the line drawing. This add-on supports <a href="https://youtu.be/XbsEkBngdZY" target="_blank" class="underline">visual effects</a> such as fly-in, fly-out, fold, sparkle and others with a click of a button. When equipped with a protective cage, a LightBender provides safe <a href="https://youtu.be/LsTwUVTbn1E" target="_blank" class="underline">bare-hand interaction</a>. One application is <a href="https://youtu.be/_I6qcD0NoYM" target="_blank" class="underline">bidirectional illumination editing</a>, in which a user's direct manipulation of the rendered graphics is detected and synchronized back to the authoring software.
        </p>
        <img :src="LightBenderIMG" alt="LightBender Image" class="mt-4 w-1/2 mx-auto rounded-lg shadow-lg" />
      </div>

      <!-- FLS-Matter and 3D Displays Section -->
      <div class="bg-slate-800 p-6 rounded-lg shadow-md mb-4">
        <h2 class="text-2xl font-bold mb-4 text-white">FLS-Matter and 3D Displays</h2>
        <p class="text-white text-xl">
          FLS-matter is a pre-specified swarm of FLSs for 2D (e.g., square) and 3D (e.g.,
          a pyramid) geometric shapes. It is the building block of objects with behavior.
          Example objects include a rock, water, a teapot, a sword, etc. The behavior
          associated with an object is inherited by its FLS-matters. This behavior may
          further be specialized at the granularity of each FLS-matter. For additional
          details, see Section 4 of the
          <a
            href="https://dl.acm.org/doi/10.1145/3469877.3493698"
            target="_blank"
            class="underline"
            >Holodecks</a
          >
          paper and the
          <a href="https://youtu.be/5vvzaATa0lg" target="_blank" class="underline"
            >Video</a
          >
          of our paper on user interactions with a Crazyflie.
        </p>
        <p class="text-white text-xl mt-4">
          3D displays using swarms of FLSs is a transformative idea that will pioneer a
          new era in multimedia systems. Immersive and interactive 3D displays will
          resemble futuristic systems from sci-fi movies and shows, e.g., Star Trek’s
          Holodeck.
        </p>
        <img :src="HolodeckIMG" alt="Holodeck Image" class="mt-4 w-1/2 mx-auto rounded-lg shadow-lg" />
      </div>

      <!-- Localization and Communication Section -->
      <div class="bg-slate-800 p-6 rounded-lg shadow-md mb-4">
        <h2 class="text-2xl font-bold mb-4 text-white">Localization and Communication</h2>
        <p class="text-white text-xl">
          FLSs must localize to illuminate shapes and provide haptic interactions. An FLS
          is unable to do either by itself. The inter-FLS relationship effect of an
          organizational framework compensates for the simplicity of each individual FLS,
          enabling a swarm of cooperating FLSs to render complex shapes and provide haptic
          interactions. The framework may be an algorithm implemented in either a
          centralized or a decentralized manner. The execution of the algorithm requires
          FLSs to communicate with one another and an Orchestrator. It is interesting to
          note that the signal strength of a communication network (or time of flight) may
          be used to measure distance and angles. This information is particularly useful
          to a localizing framework.
        </p>
        <p class="text-white text-xl mt-4">
          <a href="https://youtu.be/oT5RR8RPl0I" class="underline" target="_blank"
            >Video 1</a
          >,
          <a href="https://youtu.be/TQM4hMBwLHM" class="underline" target="_blank"
            >Video 2</a
          >,
          <a href="https://youtu.be/NNlWn9VW894" class="underline" target="_blank"
            >Video 3</a
          >
        </p>
      </div>

      <!-- Fault Tolerance & Battery Section -->
      <div class="bg-slate-800 p-6 rounded-lg shadow-md mb-4">
        <h2 class="text-2xl font-bold mb-4 text-white">Fault Tolerance & Battery</h2>
        <p class="text-white text-xl">
          FLs are mechanical devices that fail and must be garbage collected. Some failed
          FLSs will recover and become operational after sometime similar to today's
          commodity servers. An FLS display must detect these and recycle them as
          operational. We are exploring the use of dark standby FLSs that substitute for a
          failed illuminating FLSs to maintain a high quality of illumination. See Section
          6 of the
          <a href="https://arxiv.org/pdf/2111.03657.pdf" class="underline" target="_blank"
            >Holodecks</a
          >
          paper.
        </p>
        <p class="text-white text-xl mt-4">
          FLSs are battery powered with a fixed flight time on a fully charged battery.
          One may use wireless charging technology per discussions of Section 3.4 of the
          <a href="https://arxiv.org/pdf/2111.03657.pdf" class="underline" target="_blank"
            >Holodecks</a
          >
          paper. Wireless charging may not be appropriate for immersive FLS displays as it
          emits EMF radiation which has been shown to be harmful to the human body. This
          motivates a framework that recycle FLSs to charge them continuously. STAG is one
          such framework. See Section 5 of the
          <a href="https://arxiv.org/pdf/2207.08346.pdf" class="underline" target="_blank"
            >3D Display</a
          >
          paper.
        </p>
      </div>

      <!-- User Safety Section -->
      <div class="bg-slate-800 p-6 rounded-lg shadow-md mb-4">
        <h2 class="text-2xl font-bold mb-4 text-white">User Safety</h2>
        <p class="text-white text-xl">
          A 3D display using FLSs must address user safety from the start to be viable. A
          holodeck's safety challenges are novel because its applications will involve
          explicit physical interactions between humans and synthesized 3D objects and
          experience in real-time. An intriguing challenge is how to ensure safety of
          researchers such as the members of the FLS lab. Rogue FLSs with rotating blades
          may cause injury to researchers, practitioners, application developers, and
          users of the technology. In the
          <a href="https://arxiv.org/pdf/2208.08398.pdf" class="underline" target="_blank"
            >Holodeck Safety</a
          >
          paper, we describe some of the challenges. In the
          <a href="https://arxiv.org/pdf/2308.10121.pdf" class="underline" target="_blank"
            >Dronevision</a
          >
          paper, we present the design of a system with glass panes that protects its user
          from rogue FLSs. User safety is an important research topic that we will keep at
          the forefront of our investigations.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import HolodeckIMG from "@/assets/images/HolodeckIMG.png";
import LightBenderIMG from "@/assets/images/LightBenderIMG.jpg";

export default {
  data() {
    return {
      HolodeckIMG,
      LightBenderIMG,
    };
  },
};
</script>

<style scoped></style>
