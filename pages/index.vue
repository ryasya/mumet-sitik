<script setup>
definePageMeta({
  layout: "main",
});
useHead({
  title: 'Home',
})
</script>
<template>
<section class="content">
  <div class="container mx-auto">
    <div class="prose">
      <h1 class="text-center">Hi, Aryok's here!</h1>
      <p>
        I am Aryok
      </p>
      <p>
      You can see <nuxt-link to="projects">list of my projects here</nuxt-link>.
      </p>
      <p>
      You can also <nuxt-link to="contact">reach me here</nuxt-link>.
      </p>
      <p>
        <p> <a href="teer.id/aryoks" target="_blank">Support Me on Trakteer</a></p>
      </p>
      <hr>
      <p> <a href="https://github.com/sponsors/ryasya" target="_blank">GitHub Sponsor</a></p>
    </div>
  </div>
</section>
</template>