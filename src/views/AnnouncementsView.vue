<template>
  <div class="flex flex-col items-left announcements-view">
    <h1 class="mb-8 text-3xl font-black text-white">Announcements</h1>

    <div class="tab-content-container w-full">
      <ul class="text-white text-2xl">
        <li v-for="(announcement, i) in displayedAnnouncements" :key="i" class="mb-4">
          <span class="mr-2">{{ i + 1 }}.</span>
          <span v-html="announcement.content"></span>
        </li>
      </ul>
      <button 
        v-if="announcements.length > initialDisplayCount"
        @click="showAll = !showAll"
        class="mt-4 px-6 py-2 bg-white/10 hover:bg-white/20 text-white rounded-lg transition-colors text-xl font-medium"
      >
        {{ showAll ? 'Show Less' : 'Show More' }}
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';

const initialDisplayCount = 6;
const showAll = ref(false);

const announcements = [
  {
    content:
      'LightBender has been accepted to appear at the upcoming ACM Multimedia 2026 conference.'
  },
  {
    content:
      'Hamed won second place at the SIGGRAPH 2026 Student Research Competition for his poster <a href="https://doi.org/10.1145/3799825.3818746" target="_blank" class="underline">paper on visual effects</a> using LightBenders.'
  },
  {
    content:
      'We organized an ACM SIGGRAPH Frontiers workshop entitled <a href="https://www.flsworkshop.com" target="_blank" class="underline">Dronevision, Holodecks, Spatial Computing using Flying Light Specks</a> on July 23, 2026 at the Los Angeles Convention Center.'
  },
  {
    content:
      'We organized the <a href="https://holodecks.quest" target="_blank" class="underline">Third International Conference on Holodecks</a> on the USC campus on July 24, 2026.'
  },
  {
    content:
      '<a href="https://arxiv.org/abs/2606.22499" target="_blank" class="underline">LightBender</a> took its first flight in December of 2025.'
  },
  {
    content:
      'All source code is available at <a href="https://github.com/flyinglightspeck" target="_blank" class="underline">GitHub</a>.'
  },
  {
    content:
      '<a href="https://www.holodecks.quest/agenda-2024" target="_blank" class="underline">The Second International Conference on Holodecks</a> was held on December 19, 2024.'
  },
  {
    content:
      'NSF has made a second award in support of our efforts.  This time for Dronevision, a physics-based environment using FLSs.'
  },
  {
    content:
      'The First International Conference on Holodecks was a huge success with 6 keynote speakers, 8 regular paper presentations, and more than 100 registrants.'
  }
];

const displayedAnnouncements = computed(() => 
  showAll.value ? announcements : announcements.slice(0, initialDisplayCount)
);
</script>

<style scoped>
.announcements-view :deep(.tab-content-container > ul) {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 14px;
  padding: 0;
  list-style: none;
}
.announcements-view :deep(.tab-content-container > ul > li) {
  display: grid;
  grid-template-columns: 34px minmax(0, 1fr);
  gap: 10px;
  align-items: start;
  margin: 0;
  padding: 18px;
  border: 1px solid #e4ebf1;
  border-radius: 14px;
  background: #fff;
  color: #26364b !important;
  font-size: 15px;
  line-height: 1.55;
}
.announcements-view :deep(.tab-content-container > ul > li > span:first-child) {
  display: grid;
  width: 30px;
  height: 30px;
  place-items: center;
  border-radius: 50%;
  background: #e0f7f4;
  color: #078da4;
  font-size: 13px;
  font-weight: 700;
}
.announcements-view :deep(.tab-content-container > button) {
  color: #fff;
  background: linear-gradient(105deg, #12b8ad, #14a8d6 48%, #6e5cf0);
  font-size: 14px;
}
@media (max-width: 760px) {
  .announcements-view :deep(.tab-content-container > ul) {
    grid-template-columns: 1fr;
  }
}
</style>
