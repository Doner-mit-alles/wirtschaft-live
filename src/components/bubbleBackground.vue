<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { Bubble } from '@/classes/bubble'

const bubbles = ref<Bubble[]>([])

/**
 * Generate a random number, min 30.
 */
const numberOfBubbles = Math.floor(Math.random() * 21) + 30

/**
 * Generate based on numberOfBubbles, a number of bubbles with different sizes and positions
 * @see Bubble
 */
function generateRandomBubbles() {
  bubbles.value = Array.from({ length: numberOfBubbles }, () => {
    return new Bubble()
  })
}

onMounted(() => {
  generateRandomBubbles()
})
</script>

<template>
  <div class="bubble-container position-relative">
    <div class="bubble w-100 h-100 position-absolute no-select no-print">
      <img
        v-for="(bubble, index) in bubbles"
        :key="index"
        src="@/assets/bubbles.png"
        :style="{
          position: 'absolute',
          top: bubble.getTop() + '%',
          left: bubble.getLeft() + '%',
          width: bubble.getWidth() + 'px',
          height: bubble.getHeight() + 'px',
          transform: `rotate(${bubble.getRotation()}deg)`
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
