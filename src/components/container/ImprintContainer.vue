<script setup lang="ts"></script>

<template>
  <div class="row mb-4">
    <div class="col-12 bg-primary text-white imprint p-4 pl-3 p-md-5 default-shadow">
      <h2>
        {{ $t('container.imprint.headline') }}
      </h2>

      <p>
        {{ $t('container.imprint.contentOwner') }}:<br />
        BBS I Lüneburg <br />
        Spillbrunnenweg 1 <br />
        21337 Lüneburg <br />
      </p>

      <p>
        {{ $t('container.imprint.agencyHeadline') }}<br />
        {{ $t('container.imprint.agency') }}<br />
      </p>

      <h6>{{ $t('container.imprint.privacyPoliceHeadline') }}</h6>
      <p>{{ $t('container.imprint.privacyPolice') }}<br /></p>

      <p>{{ $t('container.imprint.legalNotice') }}<br /></p>
    </div>
  </div>
</template>

<style scoped>
.imprint {
  border-radius: 20px;
}
</style>
