<script setup lang="ts"></script>

<template>
  <div class="row g-3 mb-4 rules-wrapper" id="gamingRules">
    <div class="col-md-5 col-lg-5 col-12">
      <img
        src="@/assets/images/spielbrett.jpg"
        class="w-100"
        :alt="$t('containers.gamingRules.imageAltText')"
      />
    </div>
    <div class="col-md-7 col-lg-7 col-12 text-white p-3 h-3">
      <div class="rules-content text-left">
        <h2>{{ $t('containers.gamingRules.rulesHeadline') }}</h2>
        <h6>{{ $t('containers.gamingRules.rulesSecondHeadline') }}</h6>
        <p>
          <span class="fw-bold">Spieleranzahl:</span> 2 bis 6 Spieler <br />
          <span class="fw-bold">Alter:</span> 12 bis 99 Jahre <br />
          <span class="fw-bold">Spieldauer:</span> 10 bis 15 Minuten<br />
        </p>
        <h6>Spielmaterialien:</h6>
        <ul>
          <li>
            Spielbrett mit Feldern (Fragefelder mit Fragezeichen, Ereignisfelder mit Ausrufezeichen)
          </li>
          <li>Spielfiguren für jeden Spieler</li>
          <li>Fragen- und Ereigniskarten</li>
          <li>Würfel</li>
        </ul>
        <h6>Spielvorbereitung:</h6>
        <ol>
          <li>
            Die Spieler wählen eine Spielfigur und stellen sie auf das Startfeld der Plattform.
          </li>
          <li>Die Karten für Fragen und Ereignisse werden gemischt und bereitgelegt.</li>
        </ol>
      </div>
    </div>
    <div class="col-12 text-white">
      <h6>Spielablauf</h6>
      <ol>
        <li>
          Die Spieler würfeln reihum und ziehen ihre Spielfigur entsprechend der Augenzahl des
          Würfels.
        </li>
        <li>
          Landet ein Spieler auf einem Fragefeld, zieht er eine Fragekarte und muss die Frage
          beantworten.
          <ul>
            <li>Bei richtiger Antwort darf der Spieler ggf. ein paar Felder vor ziehen.</li>
            Bei falscher Antwort muss der Spieler ggf. zurück ziehen.
          </ul>
        </li>
        <li>
          Landet ein Spieler auf einem Ereignisfeld, zieht er eine Ereigniskarte und muss die
          Aufgabe erfüllen.
          <ul>
            <li>
              Wird die Aufgabe erfolgreich erledigt, darf der Spieler ggf.. ein paar Felder weiter
              ziehen.
            </li>
            <li>Bei Nichterfüllung muss der Spieler ebenfalls zurück ziehen.</li>
          </ul>
        </li>
        <li>
          Das Spiel wird fortgesetzt, bis ein Spieler das letzte Feld des Spielbretts erreicht.
        </li>
      </ol>
      <h6>Ziel des Spieles</h6>
      <p>
        Der Spieler, der als erster das letzte Feld erreicht, gewinnt das Spiel und hat somit die
        anderen Spieler überlistet.
      </p>
      <p>Viel Spaß beim Spielen!</p>
    </div>
  </div>
</template>

<style scoped>
.rules-wrapper {
  position: relative;
  border: 5px solid #4bc3b6;
  padding: 10px;
  border-radius: 20px;
}

.rules-content {
  background-color: transparent;
}
</style>
