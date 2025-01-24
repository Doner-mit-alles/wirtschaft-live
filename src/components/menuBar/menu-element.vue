<script setup lang="ts">
import { onMounted, onUpdated, ref, nextTick } from 'vue'
import * as bootstrap from 'bootstrap'
import { useRouter, useRoute } from 'vue-router'

const router = useRouter()
const route = useRoute()

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
  },
  tabIndex: {
    type: Number,
    required: true
  }
})

const targetElement = ref<HTMLElement | null>(null)
const menuHeight = ref<number>(0)

onMounted(() => {
  targetElement.value = document.getElementById(props.targetId)
  scrollToTarget()
})

onUpdated(() => {
  const menu = document.getElementById('menu')
  menuHeight.value = menu ? menu.clientHeight : 0
})

const scrollToTarget = () => {
  if (targetElement.value) {
    const rect = targetElement.value.getBoundingClientRect()
    console.log(targetElement);
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

    const offCanvasElement = document.querySelector('#offcanvasMenu') as HTMLElement
    if (offCanvasElement) {
      const offCanvas = bootstrap.Offcanvas.getInstance(offCanvasElement)
      if (!offCanvas) {
        const offcanvas = new bootstrap.Offcanvas(offCanvasElement)
        offcanvas.hide()
      } else {
        offCanvas.hide()
      }
    }
  }
}

const handleKeydown = (event: KeyboardEvent) => {
  if (event.key === 'Enter' || event.key === ' ' || event.key === 'Spacebar') {
    scrollToTarget()
  }
}

const scrollAndNavigate = async () => {
  if (route.path !== '/') {
    await router.push('/')
    await nextTick(() => {
      scrollToTarget()
    })
  } else {
    scrollToTarget()
  }
}
</script>

<template>
  <li
    class="menu-bar-element d-md-inline-block d-none"
    @click="scrollAndNavigate"
    @keydown="handleKeydown"
    role="menuitem"
    :tabindex="tabIndex"
  >
    <component :is="svg" />
    <a
      v-if="!isMinimised"
      :class="['menu-bar-element-text', { 'menu-bar-element-text-hidden': isMinimised }]"
      :aria-label="`Navigation zu ${text}`"
      class="text-decoration-none"
      :title="text"
      itemprop="url"
    >
      {{ text }}
    </a>
  </li>
</template>

<style scoped>
.menu-bar-element {
  width: fit-content;
  margin: 0 5px;
  justify-content: center;
  align-items: center;
  gap: 5px;
  font-size: 1rem;
  cursor: pointer;
  transition: font-size 0.3s ease;
  svg {
    transition:
      width 0.3s ease,
      height 0.3s ease;
  }
}

@media (min-width: 768px) {
  .menu-bar-element {
    font-size: 0.812rem;
  }
}

@media (min-width: 992px) {
  .menu-bar-element {
    font-size: 1rem;
  }
}

.menu-bar-element-text {
  margin: 0 5px;
  color: white;
  font-weight: 500;
  text-shadow: var(--primary-shadow);
}

@media (min-width: 768px) {
  .menu-bar-element {
    svg {
      height: 1.375rem;
      width: 1.375rem;
    }
  }
}

@media (min-width: 992px) {
  .menu-bar-element {
    svg {
      height: 1.5rem;
      width: 1.5rem;
    }
  }
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
