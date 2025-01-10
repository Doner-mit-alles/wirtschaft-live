<script setup lang="ts"></script>

<template>
  <div class="row mb-4" id="aboutUs">
    <div class="col-md-4 col-12 bg-primary text-white text-center p-0 border-radius-20-left">
      <img
        class="object-fit-cover w-100 h-100 border-radius-20-left"
        :alt="$t('containers.aboutUs.imageAltText')"
        src="@/assets/images/placeholder.png"
      />
    </div>
    <div
      class="linear-gradiant-element-wrapper col-md-1 col-12 d-md-flex justify-content-end justify-content-lg-start align-items-end d-none bg-primary d-flex"
    >
      <div class="linear-gradiant-element"></div>
      <div class="linear-gradiant-element"></div>
    </div>
    <div
      class="col-md-7 col-12 bg-primary text-white text-left p-4 pl-3 p-md-5 border-radius-20-right"
    >
      <h2 class="font-bold">{{ $t('containers.aboutUs.headline') }}</h2>
      <div v-html="$t('containers.aboutUs.content')"></div>
    </div>
  </div>
</template>

<style scoped>
.linear-gradiant-element-wrapper {
  gap: 0.6rem;
  .linear-gradiant-element {
    background-image: linear-gradient(#4bc3b6, #2c86a5);
    width: 9px;
    height: 97%;
    @media (min-width: 992px) {
      &:first-child {
        margin-left: 0.9rem;
      }
    }
  }
}
</style>
