<script setup lang="ts">
import GamingElement from '@/assets/icons/gaming-element.svg'
</script>

<template>
  <div class="row mb-4">
    <div class="col-12 text-center">
      <h1 class="headline" v-html="$t('containers.headline.content')"></h1>
    </div>
    <div class="col-12 text-center mt-4">
      <div class="d-flex justify-content-center icons-wrapper">
        <component class="mx-2" :is="GamingElement" />
        <component class="mx-2" :is="GamingElement" />
        <component class="mx-2" :is="GamingElement" />
      </div>
    </div>
  </div>
</template>

<style scoped>
h1 {
  color: white;
  filter: drop-shadow(var(--primary-shadow));
}

div {
  text-align: center;
}

@media screen and (max-width: 768px) {
  h1 {
    font-size: 2.18rem;
  }
}
@media screen and (max-width: 576px) {
  h1 {
    font-size: 1.25rem;
  }
}
</style>
