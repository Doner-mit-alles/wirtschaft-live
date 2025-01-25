<script setup lang="ts">
import MenuBar from '@/components/menuBar/menu-bar.vue'
import FooterContainer from '@/components/FooterContainer.vue'
import ImprintContainer from '@/components/ImprintContainer.vue'
import PrivacyPoliceContainer from '@/components/PrivacyPoliceContainer.vue'
import SpacingTool from '@/components/SpacingTool.vue'
</script>

<template>
  <menu-bar />
  <main class="container mt-5 px-5 px-lg-5 px-md-4">
    <h1 style="display: none;">Impressum & Datenschutz</h1>
    <ImprintContainer />
    <SpacingTool height="1rem"></SpacingTool>
    <PrivacyPoliceContainer />
  </main>
  <FooterContainer />
</template>

<style scoped>
</style>
