<script setup lang="ts">
import BootstrapTemplate from './components/BootstrapTemplate.vue';
import TextAndImageTemplate from './components/TextAndImageTemplate.vue'
import HeadlineContainer from './components/HeadlineContainer.vue'
import ContactForm from './components/ContactForm.vue'
</script>

<template>
  <main class="container mt-5 px-5 px-lg-5 px-md-4">
    <BootstrapTemplate />
    <HeadlineContainer />
    <TextAndImageTemplate />
    <ContactForm />
  </main>
  <footer class="container mt-5 px-5 px-md-5 mb-4" id="footer">
  </footer>
</template>

<style scoped>
</style>
