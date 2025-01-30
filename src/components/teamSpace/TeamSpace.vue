<script setup lang="ts"></script>

<template>
  <div id="team" class="row mb-4 team border-radius-20">
    <div class="team-wrapper p-3">
      <div class="col-md-12 col-12 text-center">
        <!-- Vorschau-Bild -->
        <img
          src="@/assets/images/classPhotoLogo.png"
          class="class-photo-image"
          :alt="$t('teamContainer.classPhotoAlt')"
          data-bs-toggle="modal"
          data-bs-target="#teamImageModal"
        />

        <!-- Bootstrap Modal -->
        <div
          class="modal fade"
          id="teamImageModal"
          tabindex="-1"
          aria-labelledby="teamImageModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog modal-dialog-centered modal-lg">
            <div class="modal-content">
              <!-- Schließen-Button oben rechts -->
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
                  src="@/assets/images/classPhotoLogo.png"
                  class="w-100"
                  :alt="$t('teamContainer.classPhotoAlt')"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        class="col-lg-12 col-12 text-light p-4 p-md-5 gradient-box-color-transition team-content"
      >
        <h2 class="text-left">{{ $t('teamContainer.title') }}</h2>
        <p class="team-content">
          {{ $t('teamContainer.content') }}
        </p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.team {
  border: 5px solid var(--fifth-color);
}

.logo-image {
  @media (max-width: 767px) {
    width: 100%;
  }

  @media (max-width: 1400px) and (min-width: 992px) {
    width: 100%;
  }

  @media (min-width: 768px) and (max-width: 992px) {
    max-height: 180px;
  }
}

.team-content {
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
}

.class-photo-image {
  cursor: pointer;
  transition:
    transform 0.3s ease,
    filter 0.5s ease;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  border-top-width: 0;
  width: 100%;
}

.class-photo-image:hover {
  filter: brightness(75%);
}

.dark-background {
  background-color: var(--primary-color);
  border-radius: 20px;
  box-shadow: var(--primary-shadow);
}

.gradient-box-color-transition {
  position: relative;
  box-sizing: border-box;
  $border: 2px;
  background: var(--primary-color);
  background-clip: padding-box;
  border: solid $border transparent;
  border-top-width: 0;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: -1;
    margin: -$border;
    border-radius: inherit;
    background: linear-gradient(to right, #2c86a5 29%, #4bc3b6 64%);
  }
}

.team-content {
  text-align: left;
  font-size: 18px;
}
</style>
