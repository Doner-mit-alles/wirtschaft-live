<script setup lang="ts">
defineProps({
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
  }
})
</script>

<template>
  <div class="menu-bar-element">
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
