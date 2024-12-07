<script setup lang="ts">
import { onMounted, onUpdated, ref } from 'vue'

const props = defineProps({
  text: {
    type: String,
    required: true
  },
  svg: {
    type: String,
    required: true
  },
  isMinimised: {
    type: Boolean,
    default: false
  },
  targetId: {
    type: String,
    required: true
  }
})
const targetElement = ref<HTMLElement | null>(null)
const menuHeight = ref<number>(0)
onMounted(() => {
  targetElement.value = document.getElementById(props.targetId)
})

onUpdated(() => {
  const menu = document.getElementById('menu')
  menuHeight.value = menu ? menu.clientHeight : 0
})

const scrollToTarget = () => {
  if (targetElement.value) {
    const rect = targetElement.value.getBoundingClientRect()
    const elementTop = rect.top + window.scrollY // Get the top position of the element relative to the document
    const elementHeight = rect.height // Height of the element
    const viewportHeight = window.innerHeight // Height of the viewport

    // Calculate the scroll position to center the element, adjusted for the menu height
    const scrollToPosition = elementTop - viewportHeight / 2 + elementHeight / 2 - menuHeight.value

    // Scroll to the calculated position smoothly
    window.scrollTo({
      top: scrollToPosition,
      behavior: 'smooth'
    })
    // targetElement.value.scrollIntoView({ behavior: 'smooth' });
  }
}
</script>

<template>
  <div class="menu-bar-element" @click="scrollToTarget">
    <component :is="svg" />
    <p
      v-if="!isMinimised"
      :class="['menu-bar-element-text', { 'menu-bar-element-text-hidden': isMinimised }]"
    >
      {{ text }}
    </p>
  </div>
</template>

<style scoped>
.menu-bar-element {
  width: fit-content;
  margin: 0 5px 0 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
  font-size: 16px;
  cursor: pointer;
}

.menu-bar-element-text {
  font-weight: 700;
  text-shadow: 4px 8px 6px #000000;
}

@keyframes shrink {
  from {
    width: 100%;
  }
  to {
    width: 0;
  }
}
</style>
