<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';

const props = defineProps({
  height: {
    type: String,
    required: true
  },
  width: {
    type: String,
    required: false
  },
  mobileHeight: {
    type: String,
    required: false
  }
});

const isMobile = ref(false);

const checkMobile = () => {
  isMobile.value = window.innerWidth <= 768; // Definiere hier den Schwellenwert für Mobile (z.B. 768px)
};

onMounted(() => {
  checkMobile();
  window.addEventListener('resize', checkMobile);
});

// Berechnete Höhe basierend auf mobileHeight und der Bildschirmgröße
const dynamicHeight = computed(() => {
  return isMobile.value && props.mobileHeight ? props.mobileHeight : props.height;
});
</script>

<template>
  <div
    class="row mb-4"
    :style="{ height: dynamicHeight, width: props.width || 'auto' }"
    aria-hidden="true"
  ></div>
</template>

<style scoped></style>