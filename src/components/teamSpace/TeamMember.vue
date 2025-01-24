<script setup lang="ts">
defineProps({
  memberName: {
    type: String,
    required: true
  },
  imagePath: {
    type: String,
    required: true
  }
})
</script>

<template>
  <div class="teamMember">
    <img
      :src="imagePath"
      style="
        width: 150px;
        height: 160px;
        border-radius: 40px;
        box-shadow: 0 4px 4px rgba(0, 0, 0, 0.5);
      "
      alt=""
    />
    <p style="color: white; margin-top: 10px">{{ memberName }}</p>
  </div>
</template>

<style lang="scss" scoped>
.teamMember {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 250px;
  height: 280px;
  box-shadow: 4px 8px 6px rgba(0, 0, 0, 0.5);
  border-radius: 40px;
  border: solid silver 1px;
  background-color: #ffffff1a;
  backdrop-filter: blur(50px);
}

.dark-background {
  background-color: var(--primary-color);
  border-radius: 20px;
  box-shadow: var(--primary-shadow);
}
</style>
