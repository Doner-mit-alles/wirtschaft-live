<script lang="ts" setup></script>

<template>
  <div id="news-and-appointments" class="row mb-4">
    <div class="col-lg-5 col-12 me-auto">
      <div class="default-shadow border-radius-20">
        <div id="news-top-text" class="leftpad">
          <div id="news-top-text-headline" class="leftpad">
            <h2>{{ $t('container.news.headline') }}</h2>
          </div>
          <div class="leftpad">
            <p>{{ $t('container.news.content') }}</p>
          </div>
        </div>
        <div id="news-bottom-text" v-html="$t('container.appointments.bottom_text')"></div>
      </div>
    </div>
    <div class="col-lg-5 col-12 ms-auto">
      <div class="default-shadow border-radius-20">
        <div id="appointments-top-text" class="leftpad">
          <div id="appointments-top-text-headline" class="leftpad">
            <h2>{{ $t('container.appointments.headline') }}</h2>
          </div>
          <div class="leftpad">
            <p v-html="$t('container.appointments.content')"></p>
          </div>
        </div>
        <div id="appointments-bottom-text" v-html="$t('container.appointments.bottom_text')"></div>
      </div>
    </div>
  </div>
</template>

<style scoped>
@media (max-width: 992px) {
  #news-bottom-text {
    margin-bottom: 10%;
  }
}

#news-and-appointments {
  color: white;
}

.leftpad {
  padding-left: 4%;
}

#news-top-text {
  padding: 4%;
  background-color: #2c86a5;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
}

#news-top-text-headline,
#appointments-top-text-headline {
  padding-top: 3%;
  padding-bottom: 3%;
  text-shadow: black 2px 2px 2px;
}

#news-bottom-text {
  padding: 2%;
  background-color: #11333f;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  text-align: center;
}

#appointments-top-text {
  padding: 4%;
  background-color: #4bc3b6;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
}

#appointments-bottom-text {
  padding: 2%;
  background-color: #245d57;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  text-align: center;
}
</style>
