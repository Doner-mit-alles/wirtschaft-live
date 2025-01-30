<script setup lang="ts">
import MenuBar from '@/components/menuBar/menu-bar.vue'
import FooterContainer from '@/components/FooterContainer.vue'
import { setLanguageToBrowserLanguage } from '@/i18n'
import { onMounted } from 'vue'

onMounted(() => {
  setLanguageToBrowserLanguage()
})
</script>
<template>
  <menu-bar />
  <router-view />
  <FooterContainer />
</template>
<style scoped></style>
