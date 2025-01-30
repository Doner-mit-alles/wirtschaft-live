<script setup lang="ts">
import MenuBar from '@/components/menuBar/menu-bar.vue'
import FooterContainer from '@/components/FooterContainer.vue'
</script>
<template>
  <menu-bar />
  <router-view />
  <FooterContainer />
</template>
<style scoped></style>
