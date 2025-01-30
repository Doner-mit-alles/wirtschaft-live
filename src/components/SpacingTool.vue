<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'

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
})

const isMobile = ref(false)

/**
 * Define the threshold value for mobile here (e.g. 768px)
 */
const checkMobile = () => {
  isMobile.value = window.innerWidth <= 768
}

/**
 * Calculated height based on mobileHeight and the screen size
 */
const dynamicHeight = computed(() => {
  return isMobile.value && props.mobileHeight ? props.mobileHeight : props.height
})

onMounted(() => {
  checkMobile()
  window.addEventListener('resize', checkMobile)
})
</script>

<template>
  <div
    class="row mb-4"
    :style="{ height: dynamicHeight, width: props.width || 'auto' }"
    aria-hidden="true"
  ></div>
</template>

<style scoped></style>
