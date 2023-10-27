<template>
  <div>
    <h1 class="mb-8 text-4xl font-black text-white">Courses</h1>

    <div class="tab-content-container"> <!-- Unique class for Courses tab content -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div v-for="(course, i) in courses" :key="i" class="bg-gray-800 p-6 rounded-lg shadow-md">
          <span class="text-white">{{ i + 1 }}</span>
          <span class="text-cyan-500">.</span>

          {{ course.number }}, {{ course.title }}

          <a v-if="course.syllabus" :href="course.syllabus" target="_blank">
            syllabus
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const courses = [
  {
    number: "CSCI 599",
    title: "Introduction to Holodecks",
    syllabus: "https://web-app.usc.edu/soc/syllabus/20223/30034.pdf",
  },
];
</script>
