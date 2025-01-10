<script setup lang="ts">
import BootstrapTemplate from './components/BootstrapTemplate.vue';
import TextAndImageTemplate from './components/TextAndImageTemplate.vue'
import HeadlineContainer from './components/HeadlineContainer.vue'
import BubbleBackground from './components/bubbleBackground.vue'
</script>

<template>
  <BubbleBackground/>
  <main class="container mt-5 px-5 px-lg-5 px-md-4">
<!--    BootstrapTemplate wieder reinsetzen-->
    <BootstrapTemplate />
    <HeadlineContainer />
    <TextAndImageTemplate />
  </main>
  <footer class="container mt-5 px-5 px-md-5 mb-4" id="footer">
  </footer>
</template>
<style scoped>

</style>
