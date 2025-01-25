<script setup lang="ts">
import ImprintContainer from '@/components/ImprintContainer.vue'
import PrivacyPoliceContainer from '@/components/PrivacyPoliceContainer.vue'
import SpacingTool from '@/components/SpacingTool.vue'
</script>

<template>
  <main class="container mt-5 px-5 px-lg-5 px-md-4">
    <h1 style="display: none;">Impressum & Datenschutz</h1>
    <ImprintContainer />
    <SpacingTool height="1rem"></SpacingTool>
    <PrivacyPoliceContainer />
  </main>
</template>

<style scoped>
</style>
