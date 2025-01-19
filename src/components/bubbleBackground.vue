<script setup lang="ts">
import { onMounted, ref } from 'vue'

const bubbles = ref<{ top: number; left: number; size: number; rotation: number }[]>([])


const numberOfBubbles = Math.floor(Math.random() * 31) + 30


function generateRandomBubbles() {
  bubbles.value = Array.from({ length: numberOfBubbles }, () => {
    const top = Math.random() * 100
    const left = Math.random() * 100


    const size = Math.random() * 120 + 60
    const rotation = Math.random() * 180

    return { top, left, size, rotation }
  })
}

onMounted(() => {
  generateRandomBubbles()
})
</script>

<template>
  <div class="bubble-container position-relative">
    <div class="bubble w-100 h-100 position-absolute">
      <img
        v-for="(bubble, index) in bubbles"
        :key="index"
        src="@/assets/bubbles.png"
        :style="{
          position: 'absolute',
          top: bubble.top + '%',
          left: bubble.left + '%',
          width: bubble.size + 'px',
          height: (bubble.size * 1.8) + 'px',
          transform: `rotate(${bubble.rotation}deg)`
        }"
        alt="bubble"
      />
    </div>
    <slot></slot>
  </div>
</template>

<style scoped>
.bubble-container {
  position: relative;
  width: 100%;
  min-height: 200vh;
  overflow: hidden;
}

.bubble {
  z-index: -1;
}

slot {
  position: relative;
  z-index: 1;
}
</style>
