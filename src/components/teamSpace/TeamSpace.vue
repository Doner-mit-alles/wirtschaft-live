<script setup lang="ts"></script>

<template>
  <div class="row mb-4 team border-radius-20" >
    <div class="col-md-12 col-12 text-center p-3">
      <div class="row g-3 m-1" style="display: flex; justify-content: center">
        <img
          src="@/assets/images/classPhotoLogo.png"
          class="class-photo-image border-radius-20"
          alt=""
        />
      </div>
      <div class="row g-3 m-1">
        <div class="col-lg-12 col-12 text-light p-3 gradient-box-color-transition">
          <h2 style="text-align: left">{{$t('teamContainer.title') }}</h2>
          <p style="text-align: left; font-size: 18px; margin-top: 30px">
            At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no
            sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet,
            consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore
            magna aliquyam erat, sed diam volup
          </p>
        </div>
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

.class-photo-image {
  width: 100%;
}

.dark-background {
  background-color: var(--primary-color);
  border-radius: 20px;
  box-shadow: var(--primary-shadow);
}

.gradient-box {
  //border: solid 1px var(--fifth-color);
  //background-color: #acacac;
}

.gradient-box-color-transition {
  position: relative;
  box-sizing: border-box;
  $border: 2px;
  background: var(--primary-color);
  background-clip: padding-box;
  border: solid $border transparent;
  border-radius: 1.5em;

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
</style>
