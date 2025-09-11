<template>
  <div class="flex flex-col items-left">
    <h1 class="mb-8 text-3xl font-black text-white">Announcements</h1>

    <div class="tab-content-container w-full">
      <ul class="text-white text-2xl">
        <li v-for="(announcement, i) in announcements" :key="i" class="mb-4">
          <span class="mr-2">{{ i + 1 }}.</span>
          <span v-html="announcement.content"></span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
const announcements = [
  {
    content:
      '<a href="https://www.holodecks.quest" target="_blank" class="underline">The Third International Conference on Holodecks</a> will take place on Jan. 8, 2026.',
  },
  {
    content:
      '<a href=" https://www.holodecks.quest/agenda-2024" target="_blank" class="underline">The Second International Conference on Holodecks</a> was held on December 19, 2024.',
  },
  {
    content:
      "NSF has made a second award in support of our efforts.  This time for Dronevision, a physics-based environment using FLSs.",
  },
  {
    content:
      "The First International Conference on Holodecks was a huge success with 6 keynote speakers, 8 regular paper presentations, and more than 100 registrants. ",
  },
  {
    content:
      'All source code is available at <a href="https://github.com/flyinglightspeck" target="_blank" class="underline">GitHub</a>.',
  },
];
</script>

<style scoped></style>
