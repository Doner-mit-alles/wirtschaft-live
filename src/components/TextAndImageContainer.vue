<script lang="ts" setup>
import InstagramElement from '@/assets/icons/instagram.svg'
</script>

<template>
  <div id="aboutUs" class="row mb-4">
    <div class="col-md-4 col-12 bg-primary text-white text-center p-0 border-radius-20-left">
      <img
        class="object-fit-cover w-100 h-100 border-radius-20-left"
        srcset="@/assets/images/about-us-small.jpeg 600w, @/assets/images/about-us.jpeg 1200w"
        sizes="(max-width: 600px) 100vw, 50vw"
        :alt="$t('container.aboutUs.imageAltText')"
        src="@/assets/images/about-us.jpeg"
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
      <h2 class="font-bold">{{ $t('container.aboutUs.headline') }}</h2>
      <div v-html="$t('container.aboutUs.content')"></div>
      <div class="col-3 d-flex instagram align-items-end w-100 mb-2 justify-content-between">
        <p class="social-media-text mt-4 mb-0">
          {{ $t('container.aboutUs.socialMedia1') }}<br />
          {{ $t('container.aboutUs.socialMedia2') }}
          <b>{{ $t('container.aboutUs.socialMedia2Bold') }} </b>
        </p>
        <div class="icon me-0 me-md-2 gentle-hover-shake">
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
    height: 100%;
    @media (min-width: 992px) {
      &:first-child {
        margin-left: 0.9rem;
      }
    }
  }
}

.instagram a {
  color: white;
}

.gentle-hover-shake:hover {
  animation: tilt-shaking 0.25s infinite;
}

.instagram a:hover {
  color: orangered;
}

@keyframes tilt-shaking {
  0% {
    transform: rotate(0deg);
  }
  25% {
    transform: rotate(5deg);
  }
  50% {
    transform: rotate(0deg);
  }
  75% {
    transform: rotate(-5deg);
  }
  100% {
    transform: rotate(0deg);
  }
}
</style>
