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
    content: 'We are organizing the First International Conference on Holodecks, visit <a href="http://www.holodecks.quest" target="_blank" class="underline">www.holodecks.quest</a> for details. Paper submission deadline is Nov 10, 2023.'
  },
  {
    content: 'In Spring 2024, we are introducing a graduate seminar entitled <a href="https://web-app.usc.edu/soc/syllabus/20241/30010.pdf" target="_blank" class="underline">Introduction to Holodecks</a>.'
  },
  {
    content: 'Our paper on group formation has been accepted to appear at the ACM Multimedia Asia, December 2023.'
  },
  {
    content: 'Source code available at <a href="https://github.com/flyinglightspeck" target="_blank" class="underline">GitHub</a>'
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
