<script setup lang="ts">
import MenuBar from '@/components/menuBar/MenuBar.vue'
import FooterContainer from '@/components/container/FooterContainer.vue'
</script>
<template>
  <menu-bar />
  <router-view />
  <FooterContainer />
</template>
<style scoped></style>
