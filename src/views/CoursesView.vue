<template>
  <div class="flex flex-col items-left">
    <h1 class="mb-8 text-4xl font-black text-white">Announcements</h1>

    <div class="tab-content-container w-full">
      <ul class="text-white text-2xl">
        <li v-for="(announcement, i) in announcements" :key="i" class="mb-4">
          <span class="mr-2">{{ i + 1 }}.</span>
          <span v-html="announcement.content"></span>
        </li>
      </ul>
    </div>

    <!-- Footer -->
    <div class="footer w-full">
      <div class="text-center">
        <a href="https://www.nsf.gov/awardsearch/showAward?AWD_ID=2232382&HistoricalAwards=false" target="_blank" class="nsf-logo-link">
          <img :src="NSFLogoImage" alt="NSF Logo" class="nsf-logo">
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
import NSFLogoImage from "@/assets/images/NSF_logo.png";

const announcements = [
  {
    content: 'The <a href="https://www.holodecks.quest" target="_blank" class="underline"> Second International Conference on Holodecks</a> will take place on December 19, 2024.'
  },
  {
    content: 'Two papers have been accepted for publication.  One reporting user interactions with a Crazyflie.  And, a second describing the use of standby FLSs to enhance the quality of an illumination.   See the Publications tab for details.'
  },
  {
    content: 'The First International Conference on Holodecks was a huge success with 6 keynote speakers, 8 regular paper presentations, and more than 100 registrants. '
  },
  {
    content: 'All source code is available at <a href="https://github.com/flyinglightspeck" target="_blank" class="underline">GitHub</a>.'
  }
];
</script>

<style scoped>
.footer {
  background-color: #2D3748;
  width: 100%;
  padding: 10px 0;
  margin-top: 20px;
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
