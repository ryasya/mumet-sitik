<script setup>
definePageMeta({
  layout: "main",
});
useHead({
  title: 'Contact',
})
</script>
<template>
<section class="content">
  <div class="container mx-auto">
    <div class="prose">
      <h1 class="text-center">Reach Me!</h1>

      <div class="cards max-w-[300px] mx-auto">
        <div class="contact | flex items-center gap-3 mb-5">
          <div class="i-mdi-gmail w-6 h-6 bg-red-500"></div>
          <a href="https://mail.google.com/mail/u/0/?view=cm&tf=1&fs=1&to=cielrya666@gmail.com">aryoks</a>
        </div>
        <div class="contact | flex items-center gap-3 mb-5">
          <div class="i-mdi-telegram w-6 h-6 bg-[#2294cf]"></div>
          <a href="https://t.me/Syulitdiketahui" target="_blank">@yoks</a>
        </div>
        <div class="contact | flex items-center gap-3 mb-5">
          <div class="i-mdi-github w-6 h-6 bg-blue-500"></div>
          <a href="https://github.com/ryasya" target="_blank">Ryasya</a>
        </div>
        <div class="contact | flex items-center gap-3 mb-5">
          <div class="i-mdi-instagram w-6 h-6 bg-red-500"></div>
          <a href="https://instagram.com/aryaeka.r.p" target="_blank">@aryaeka.r.p</a>
        </div>
      </div>
    </div>
  </div>
</section>
</template>