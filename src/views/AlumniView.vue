<template>
  <h1 class="mb-8 text-3xl font-black text-white">Alumni</h1>
  <div v-for="group in alumniGroups" :key="group.title">
    <h2 class="text-2xl font-bold mb-4 text-white">{{ group.title }}</h2>
    <ul class="list-disc pl-6 text-xl mb-4">
      <li v-for="person in group.items" :key="person.name">
        <span class="text-white">{{ person.name }}</span>
        <span class="text-slate-300"> ({{ person.email }})</span>
      </li>
    </ul>
  </div>
</template>

<script setup>
const alumniGroups = [
  {
    title: "Former PhD Students",
    items: [
      {
        name: "Nima Yazdani",
        email: "nimayazd at usc dot edu",
      },
    ],
  },
  {
    title: "Former Affiliated PhD Students",
    items: [
      {
        name: "Yang Chen",
        email: "chen716 at usc dot edu",
      },
    ],
  },
  {
    title: "Former Undergraduate Students",
    items: [
      {
        name: "Wallace Browning",
        email: "wbrownin at usc dot edu",
      },
      {
        name: "Jasmine Carrion",
        email: "jecarrio at usc dot edu",
      },
      {
        name: "Xuanyu Pan",
        email: "xuanyupa at usc dot edu",
      },
      {
        name: "Kariena Panpaliya",
        email: "kpanpali at usc dot edu",
      },
      {
        name: "George Scholefield",
        email: "gscholef at usc dot edu",
      },
    ],
  },
];
</script>

<style scoped></style>
