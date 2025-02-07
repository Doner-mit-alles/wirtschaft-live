<script lang="ts" setup>
import InstagramElement from '@/assets/icons/instagram.svg'
</script>

<template>
  <div id="aboutUs" class="row mb-4 default-shadow border-radius-20">
    <div class="col-md-4 col-12 bg-primary text-white text-center p-0 border-radius-20-left">
      <!-- Vorschau-Bild -->
      <img
        class="object-fit-cover w-100 h-100 border-radius-20-left about-us-image"
        :alt="$t('container.aboutUs.imageAltText')"
        src="../../assets/images/about-us-1.jpeg"
        data-bs-toggle="modal"
        data-bs-target="#imageModal"
      />

      <!-- Bootstrap Modal -->
      <div
        class="modal fade"
        id="imageModal"
        tabindex="-1"
        aria-labelledby="imageModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered modal-lg">
          <div class="modal-content">
            <!-- Modal Header mit Schließen-Button -->
            <div class="modal-header">
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>

            <div class="modal-body p-0">
              <!-- Vergrößertes Bild -->
              <img
                src="../../assets/images/about-us-1.jpeg"
                class="w-100"
                :alt="$t('teamContainer.classPhotoAlt')"
              />
            </div>
          </div>
        </div>
      </div>
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
      <h2 class="font-bold mb-3">{{ $t('container.aboutUs.headline') }}</h2>
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
            target="_blank"
            href="https://www.instagram.com/bbs1lg/"
            tabindex="50"
          >
            <component :is="InstagramElement" />
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.about-us-image {
  cursor: pointer;
  transition: filter 0.5s ease;
}

.about-us-image:hover {
  filter: brightness(75%);
}

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

.instagram a:hover {
  color: var(--fifth-color);
}

.instagram svg {
  @media (max-width: 576px) {
    width: 31px;
  }
}

.gentle-hover-shake:hover {
  animation: tilt-shaking 0.25s infinite;
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
