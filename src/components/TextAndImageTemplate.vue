<script setup lang="ts">
</script>

<template>
  <div class="row mb-4">
    <div class="col-md-4 col-12 bg-secondary text-white text-center p-0 border-radius-20-left">
      <img class="object-fit-cover w-100 h-100 border-radius-20-left" alt="Bild mit Spielbausteinen" src="@/assets/images/placeholder.png">
    </div>
    <div class="linear-gradiant-element-wrapper col-md-1 col-12 d-md-flex justify-content-end justify-content-lg-start align-items-end d-none bg-primary d-flex">
      <div class="linear-gradiant-element">
      </div>
      <div class="linear-gradiant-element">
      </div>
    </div>
    <div class="col-md-7 col-12 bg-primary text-white text-left p-4 pl-3 p-md-5 border-radius-20-right">
      <h2 class="font-bold">WIR ÜBER UNS…</h2>
      <p>
      Moin, wir sind die HA24B und das ist unsere Schülerfirma „Baller los", was so viel wie mit voller Kraft loslegen bedeutet – und das machen wir.
      </p>
      <p>
      Wir sind 24 Schülerinnen und Schüler im Alter von 15 bis 18 Jahren.
      </p>
      <p>
      Diese Schülerfirma haben wir im Rahmen der einjährigen Berufsfachschule Wirtschaft an der BBS I Lüneburg gegründet.
      </p>
      <p>
      Wir stellen ein eigenes Spiel her und wollen mit diesem Spiel auf den Umweltschutz, besonders bei den Gewässern, aufmerksam machen.
      </p>
      <p>
      Daher ist es selbstverständlich, dass wir unser Spiel so umweltfreundlich und hochwertig wie möglich produzieren.
      </p>
      <p>
      Wir nutzen einen 3D-Drucker mit recyclefähigem und sogar Recycling-Filament, um unsere Figuren selbst herstellen zu können. Auch die anderen Materialien wie Spielbrett und Verpackung sind recyclefähig oder bestehen aus recyclingmaterial.
      </p>
      <p>
      Zusätzlich untersuchen wir die Verschmutzung der Ilmenau (dieser Fluss fließt durch Lüneburg), indem wir Plastikmüll einsammeln und zählen.
      </p>
      <p>
      Für diese Website kooperieren wir mit dem Lüneburger IT-Unternehmen „webnetz“ und den Auszubildenden zum Fachinformatiker im 3. Lehrjahr aus der Klasse IT22B von unserer Schule.
      </p>
    </div>
  </div>
</template>

<style scoped>
.linear-gradiant-element-wrapper {
  gap: 0.6rem;
  .linear-gradiant-element {
    background-image: linear-gradient(#4BC3B6, #2C86A5);
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
