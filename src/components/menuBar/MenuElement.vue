<script setup lang="ts">
import * as bootstrap from 'bootstrap'
import { useRoute, useRouter } from 'vue-router'
import { useScrollStore } from '@/stores/useScrollStore'

const router = useRouter()
const route = useRoute()
const scrollStore = useScrollStore()
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

const scrollToTarget = async () => {
  if (props.targetId) {
    if (route.path !== '/') {
      await router.push({ path: '/', query: router.currentRoute.value.query })
    }
    scrollStore.setTargetId(props.targetId)
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

function handleKeydown(event: KeyboardEvent) {
  if (event.key === 'Enter' || event.key === ' ' || event.key === 'Spacebar') {
    scrollToTarget()
  }
}
</script>

<template>
  <li
    class="menu-bar-element d-md-inline-block d-none"
    @click.stop="scrollToTarget"
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
