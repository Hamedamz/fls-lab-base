<template>
  <div class="flex flex-col items-left"> <!-- Added flex layout -->
    <h1 class="mb-8 text-4xl font-black text-white">Announcements</h1>

    <div class="tab-content-container w-full"> <!-- Added full width -->
      <ul class="text-white text-2xl">
        <li v-for="(announcement, i) in announcements" :key="i" class="mb-4">
          <span class="mr-2">{{ i + 1 }}.</span>
          {{ announcement.textPreLink }}
          <a v-if="announcement.link" :href="announcement.link" target="_blank" class="underline">
            {{ announcement.linkText }}
          </a>
          {{ announcement.textPostLink }}
        </li>
      </ul>
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
</template>

<script setup>
import NSFLogoImage from "@/assets/images/NSF_logo.png"; // Importing the NSF logo image

const announcements = [
  {
    textPreLink: 'We are organizing the First International Conference on Holodecks, visit ',
    link: 'http://www.holodecks.quest',
    linkText: 'www.holodecks.quest',
    textPostLink: ' for details.  Paper submission deadline is Nov 10, 2023.'
  },
  {
    textPreLink: 'In Spring 2024, we are introducing a graduate seminar entitled "Introduction to Holodecks". This is the 2nd offering of the seminar. The syllabus for the first offering is available here.',
    link: 'https://web-app.usc.edu/soc/syllabus/20223/30034.pdf',
    linkText: 'Syllabus',
    textPostLink: ' Details of the 2nd offering are forthcoming.'
  },
  {
    textPreLink: 'Our paper on group formation has been accepted to appear at the ACM Multimedia Asia, December 2023.',
  },
  {
    textPreLink: 'Source code available at ',
    link: 'https://github.com/flyinglightspeck',
    linkText: 'GitHub'
  }
];
</script>

<style scoped>
/* Add specific styles for the Announcements tab here if needed */
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
