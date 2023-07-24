<script setup>
definePageMeta({
  layout: "main",
});
useHead({
  title: 'Achievements',
})

const achievements = [
  {
    text: 'Juara Satu Mencintainya Tanpa Dicintai Balik',
    class: 'i-mdi:trophy text-yellow-500 w-5 h-5'
  },
  {
    text: 'Gak Jadi Gw Gak Punya',
    class: 'i-mdi:trophy text-yellow-500 w-5 h-5'
  }
]
</script>
<template>
<section class="content">
  <div class="container mx-auto">
    <div class="section__header | text-center">
      <h1 class='section__title'>My Achievements</h1>
    </div>
    <ul class="pl-0">
      <li v-for="achievement in achievements" class="mb-3 list-none flex gap-3 items-center mb-5">
        <div :class="achievement.class"></div>
        <span>
          {{achievement.text}}
        </span>
      </li>
    </ul>
  </div>
</section>
</template>