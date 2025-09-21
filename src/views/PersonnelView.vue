<template>
  <div>
    <h1 class="mb-8 text-3xl font-black text-white">Personnel</h1>
    <div class="tab-content-container">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div v-for="group in personnelGroups" :key="group.title">
          <h2 class="text-2xl font-bold mb-4 text-white">{{ group.title }}</h2>
          <div class="grid gap-4">
            <div
              v-for="person in group.items"
              :key="person.name"
              class="bg-slate-800 p-6 rounded-lg shadow-md relative"
            >
              <button
                v-if="person.bio"
                @click="toggleBio(person)"
                class="absolute top-2 right-2 w-12 h-12 rounded-full hover:bg-slate-700 text-2xl text-white"
              >
                +
              </button>
              <img
                :src="person.photo"
                alt="Person"
                class="mx-auto w-32 h-32 rounded-full mb-4"
              />
              <p class="text-center text-xl text-white mt-2">
                {{ person.name }}
              </p>
              <p class="text-center text-sm text-slate-300 mt-1">
                {{ person.email }}
              </p>
              <p v-show="person.showBio" class="text-sm mt-4 text-white">
                {{ person.bio }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="mt-12 text-2xl text-center">
      <router-link
        to="/alumni"
        class="text-cyan-500 transition-colors rounded p-px underline hover:bg-cyan-500/25"
      >
        View Alumni
      </router-link>
    </div>
  </div>
</template>

<script setup>
import HamedAlimohammadzadeh from "@/assets/images/HamedAlimohammadzadeh.jpg";
import HeatherCulbertson from "@/assets/images/HeatherCulbertson.jpg";
import ShahramGhandeharizadeh from "@/assets/images/ShahramGhandeharizadeh.jpg";
import ShuqinZhu from "@/assets/images/ShuqinZhu.jpg";
import BlankProfile from "@/assets/images/Blank_Profile.png";
import AllenLam from "@/assets/images/allen_lam.jpg";

import { ref } from "vue";

const personnelGroups = ref([
  {
    title: "Lab Director",
    items: [
      {
        name: "Shahram Ghandeharizadeh",
        email: "shahram at usc dot edu",
        photo: ShahramGhandeharizadeh,
        bio: "Shahram Ghandeharizadeh received his Ph.D. degree in Computer Science from the University of Wisconsin, Madison, in 1990. Since then, he has been on the faculty at the University of Southern California. In 1992, Dr. Ghandeharizadeh received the National Science Foundation Young Investigator's Award for his research on the physical design of parallel database systems. In 1995, he received an award from the School of Engineering at USC in recognition of his research activities. He was a recipient of the ACM Software System Award 2008 for his contributions to Gamma, a scalable database management system. His research interests include design, implementation and evaluation of novel architectures for high performance data intensive applications, multimedia-based social networking systems, parallel database systems, and active databases. He has served on the organizing committees of numerous conferences; most recently as the general chair of FAB 2019 and VLDB 2019. His activities are supported by several grants from the National Science Foundation, Oracle, Microsoft, BMC Software, and Hewlett-Packard. He is the director of the database laboratory at USC. He was a member of ACM SIGMOD executive committee and the Editor-in-Chief of ACM SIGMOD DiSC from 2003 to 2006. He served as a member of the Council of Directors of Kodaikanal International School from 2005 to 2008.",
        showBio: false,
      },
    ],
  },
  {
    title: "Affiliated Faculty",
    items: [
      {
        name: "Heather Culbertson",
        email: "hculbert at usc dot edu",
        photo: HeatherCulbertson,
        bio: "Heather Culbertson is a Gabilan Assistant Professor of Computer Science at the University of Southern California. Her research focuses on the design and control of haptic devices and rendering systems, human-robot interaction, and virtual reality. Particularly she is interested in creating haptic interactions that are natural and realistically mimic the touch sensations experienced during interactions with the physical world. Previously, she was a research scientist in the Department of Mechanical Engineering at Stanford University where she worked in the Collaborative Haptics and Robotics in Medicine (CHARM) Lab. She received her PhD in the Department of Mechanical Engineering and Applied Mechanics (MEAM) at the University of Pennsylvania in 2015 working in the Haptics Group, part of the General Robotics, Automation, Sensing and Perception (GRASP) Laboratory. She completed a Masters in MEAM at the University of Pennsylvania in 2013, and earned a BS degree in mechanical engineering at the University of Nevada, Reno in 2010. She is currently serving as Publications Chair for IEEE Haptics Symposium. Her awards include the NSF CAREER Award, IEEE Technical Committee on Haptics Early Career Award, citation for meritorious service as a reviewer for the IEEE Transactions on Haptics, Best Paper at UIST 2017, and the Best Hands-On Demonstration Award at IEEE World Haptics 2013.",
        showBio: false,
      },
    ],
  },
  {
    title: "Ph.D. Students",
    items: [
      {
        name: "Hamed Alimohammadzadeh",
        email: "halimoha at usc dot edu",
        photo: HamedAlimohammadzadeh,
        bio: "",
        showBio: false,
      },
      {
        name: "Shuqin Zhu",
        email: "shuqinzh at usc dot edu",
        photo: ShuqinZhu,
        bio: "",
        showBio: false,
      },
    ],
  },
  {
    title: "Undergraduate Students",
    items: [
      {
        name: "Allen Lam",
        email: "allennla at usc dot edu",
        photo: AllenLam,
        bio: "",
        showBio: false,
      },
      {
        name: "Phong Nguyen",
        email: "phongtng at usc dot edu",
        photo: BlankProfile,
        bio: "",
        showBio: false,
      },
    ],
  },
]);

function toggleBio(person) {
  person.showBio = !person.showBio;
}
</script>

<style scoped></style>
