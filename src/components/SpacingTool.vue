<script setup lang="ts">
const props = defineProps({
  height: {
    type: String,
    required: true
  },
  width: {
    type: String,
    required: false
  }
})
</script>

<template>
  <div
    class="row mb-4"
    :style="{ height: props.height, width: props.width || 'auto' }"
    aria-hidden="true"
  ></div>
</template>

<style scoped></style>
