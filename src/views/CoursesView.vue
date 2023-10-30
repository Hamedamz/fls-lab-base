<template>
  <div>
    <h1 class="mb-8 text-4xl font-black text-white">Announcements</h1>

    <div class="tab-content-container">
      <ul class="text-white text-2xl"> <!-- Adjusted text size and color -->
        <li v-for="(announcement, i) in announcements" :key="i" class="mb-4"> <!-- Added margin-bottom for spacing -->
          <span class="mr-2">{{ i + 1 }}.</span> <!-- Enumeration -->
          {{ announcement.textPreLink }}
          <a v-if="announcement.link" :href="announcement.link" target="_blank" class="underline">
            {{ announcement.linkText }}
          </a>
          {{ announcement.textPostLink }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
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
