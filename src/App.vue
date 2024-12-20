<script setup lang="ts">
import BootstrapTemplate from './components/BootstrapTemplate.vue';
import TextAndImageTemplate from './components/TextAndImageTemplate.vue'
import HeadlineContainer from './components/HeadlineContainer.vue'
import FooterContainer from '@/components/FooterContainer.vue'
</script>

<template>
  <main class="container mt-5 px-5 px-lg-5 px-md-4">
<!--    BootstrapTemplate wieder reinsetzen-->
    <BootstrapTemplate />
    <HeadlineContainer />
    <TextAndImageTemplate />
  </main>
    <FooterContainer/>
</template>

<style scoped>
</style>
