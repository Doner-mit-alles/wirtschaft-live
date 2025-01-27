<script setup lang="ts">
</script>

<template>
  <div class="row mb-4">
    <div class="col-12 bg-primary text-white privacy-police p-4 pl-3 p-md-5">
      <h2 class="break" v-html="$t('container.privacyPolice.headline')">
      </h2>
      
      <p>
        {{ $t('container.privacyPolice.generalInfo') }}
      </p>

      <p>
        BBS I Lüneburg<br>
        Spillbrunnenweg 1<br>
        21337 Lüneburg<br>
      </p>

      <h6>{{ $t('container.privacyPolice.secondHeadline') }}</h6>
      <p>{{ $t('container.privacyPolice.secondContent1') }}</p>
      <ul>
        <li>{{ $t('container.privacyPolice.listElement1') }}</li>
        <li>{{ $t('container.privacyPolice.listElement2') }}</li>
        <li>{{ $t('container.privacyPolice.listElement3') }}</li>
      </ul>
      <p>
        {{ $t('container.privacyPolice.secondContent2') }}
      </p>

      <h6>{{ $t('container.privacyPolice.thirdHeadline') }}</h6>
      <p>
        {{ $t('container.privacyPolice.thirdContent') }}
      </p>

      <h6>{{ $t('container.privacyPolice.fourthHeadline') }}</h6>
      <p>
        {{ $t('container.privacyPolice.fourthContent') }}
        <a tabindex=401 class="break" href="https://www.emailjs.com/legal/privacy-policy/">https://www.emailjs.com/legal/privacy-policy/</a>
      </p>

      <p>
        {{ $t('container.privacyPolice.time') }}
      </p>
    </div>
  </div>
</template>

<style scoped>
.privacy-police {
  border-radius: 20px;
}

.break {
  hyphens: auto;
  word-wrap: break-word;
  white-space: normal;
}

</style>
