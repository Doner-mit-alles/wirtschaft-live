<template>
  <div class="bubble-container" ref="containerRef">
    <div v-for="(image, index) in images" :key="index" class="random-image" :style="getRandomStyle()">
      <img src="../assets/bubbles.png" :alt="image.alt" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, reactive, onMounted, onUpdated } from 'vue';

export default defineComponent({
  name: 'RandomImageBehindText',
  setup() {
    const containerRef = ref<HTMLElement | null>(null);

    const updateFullPageDivHeight = () => {
      if (containerRef.value) {
        containerRef.value.style.height = `${document.documentElement.scrollHeight}px`;
      }
    };

    const images = reactive([
      { src: 'bubbles.png', alt: 'Random Image' },
      { src: 'bubbles.png', alt: 'Random Image' },
      { src: 'bubbles.png', alt: 'Random Image' },
      { src: 'bubbles.png', alt: 'Random Image' },
      { src: 'bubbles.png', alt: 'Random Image' },
      { src: 'bubbles.png', alt: 'Random Image' },
      { src: 'bubbles.png', alt: 'Random Image' },
      { src: 'bubbles.png', alt: 'Random Image' },
      { src: 'bubbles.png', alt: 'Random Image' },
      { src: 'bubbles.png', alt: 'Random Image' },
      { src: 'bubbles.png', alt: 'Random Image' },
      { src: 'bubbles.png', alt: 'Random Image' },
      { src: 'bubbles.png', alt: 'Random Image' },
      { src: 'bubbles.png', alt: 'Random Image' },
      { src: 'bubbles.png', alt: 'Random Image' },
      { src: 'bubbles.png', alt: 'Random Image' },
      { src: 'bubbles.png', alt: 'Random Image' },
      { src: 'bubbles.png', alt: 'Random Image' },
      { src: 'bubbles.png', alt: 'Random Image' },
    ]);

    // Generate random style for each image
    const getRandomStyle = () => {
      if (!containerRef.value) return {};

      const containerWidth: number = containerRef.value.offsetWidth;
      const containerHeight: number = containerRef.value.offsetHeight;

      // Set random position within container bounds
      const size: number = Math.random() * 250 + 50 - 50;
      const rotation: number = Math.random() * 20 + 5 - 5;
      const randomX: number = Math.random() * (containerWidth - size); // Adjust image size as needed
      const randomY: number = Math.random() * (containerHeight - size); // Adjust image size as needed

      return {
        position: 'absolute',
        left: `${randomX}px`,
        top: `${randomY}px`,
        rotate: `${rotation}deg`,
        width: `${size}px`,
        objectFit: 'cover',
        zIndex: -1,
      };
    };

    // Handle window resize to adjust the layout
    onMounted(() => {
      updateFullPageDivHeight();
      window.addEventListener('resize', updateFullPageDivHeight);

      const resizeObserver = new ResizeObserver(() => {
        // Logic to handle container resize can be added here
      });
      if (containerRef.value) {
        resizeObserver.observe(containerRef.value);
      }
    });

    onUpdated(() => {
      updateFullPageDivHeight();
    });

    return {
      containerRef,
      images,
      getRandomStyle,
    };
  },
});
</script>

<style scoped>
.bubble-container {
  position: absolute;
  width: 95%;
  overflow: hidden;
  top: 0;
  left: 0;
  margin: 0;
  padding: 0;
  z-index: -1;
}

.random-image {
  position: absolute;
}

img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
