<script lang="ts" setup>
import InstagramElement from '@/assets/icons/instagram.svg'
</script>

<template>
  <div id="aboutUs" class="row mb-4">
    <div class="col-md-4 col-12 bg-primary text-white text-center p-0 border-radius-20-left">
      <img
        :alt="$t('containers.aboutUs.imageAltText')"
        class="object-fit-cover w-100 h-100 border-radius-20-left"
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
      <p>Ihr wollt noch mehr erfahren? <br> Besucht uns auch gerne auf <b>Social Media!</b></p>
      <div class="col-3 d-flex instagram align-items-center mb-2">
        <div class="icon me-0 me-md-2 position-sticky">
          <a
            :aria-label="$t('footer.instagramAriaLabel')"
            :title="$t('footer.instagramTitle')"
            href="https://www.instagram.com/bbs1lg/"
            tabindex="104"
          >
            <component :is="InstagramElement" />
          </a>
        </div>
      </div>
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
