<script setup lang="ts">
defineProps({
  text: {
    type: String,
    required: true
  },
  svg: {
    type: Object,
    required: true
  },
  isMinimised: {
    type: Boolean,
    default: false
  }
})
</script>

<template>
  <div class="menu-bar-element">
    <component :is="svg" />
    <p :class="['menu-bar-element-text', { 'menu-bar-element-text-hidden': isMinimised }]">
      {{ text }}
    </p>
  </div>
</template>

<style scoped>
.menu-bar-element {
  width: min-content;
  margin: 0 5px 0 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
  font-size: 16px;
}

.menu-bar-element-text {
  font-weight: 700;
  text-shadow: 4px 8px 6px #000000;
}

.menu-bar-element-text-hidden {

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
