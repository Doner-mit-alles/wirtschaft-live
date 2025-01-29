<script setup lang="ts">
import ImprintContainer from '@/components/ImprintContainer.vue'
import PrivacyPoliceContainer from '@/components/PrivacyPoliceContainer.vue'
import SpacingTool from '@/components/SpacingTool.vue'
import { onMounted } from 'vue'
import BubbleBackground from '@/components/bubbleBackground.vue'

//when creating the component,
// we automatically scroll to the beginning of the page
onMounted(() => {
  window.scrollTo(0, 0)
})
</script>

<template>
  <bubble-background>
    <main class="container mt-5 px-5 px-lg-5 px-md-4">
      <h1 style="display: none">Impressum & Datenschutz</h1>
      <ImprintContainer />
      <SpacingTool height="1rem"></SpacingTool>
      <PrivacyPoliceContainer />
    </main>
  </bubble-background>
</template>

<style scoped></style>
