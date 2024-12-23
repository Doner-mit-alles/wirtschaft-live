<script setup lang="ts">
</script>

<template>
  <div class="row g-3 mb-4 g-2">
    <div class="col-12 bg-primary container-wrapper">
      <h2 class="headline text-md-end text-left px-4 px-md-5 pt-md-5 pt-4 pb-2 pb-md-3">
        {{ $t("container.contactForm.headline")}}
      </h2>

      <div class="linear-gradiant-element d-md-block d-none">
      </div>

      <div class="linear-gradiant-element d-md-block d-none">
      </div>

      <form class="contact" aria-labelledby="contact-form-heading" role="form">
        <fieldset class="form-group">
          <div class="row mb-2 px-4 px-md-5 py-3">
            <!-- Linke Spalte: Vorname, Nachname, E-Mail, Betreff -->
            <div class="col-md-4 col-12">
              <div class="mb-3">
                <label for="surname" class="form-label">{{ $t("container.contactForm.inputFields.surname") }}</label>
                <input id="surname" :placeholder="$t('container.contactForm.inputFields.surname')" name="surname" type="text" class="form-control" required aria-required="true">
              </div>

              <div class="mb-3">
                <label for="lastname" class="form-label">{{ $t("container.contactForm.inputFields.lastname") }}</label>
                <input id="lastname" :placeholder="$t('container.contactForm.inputFields.lastname')" name="lastname" type="text" class="form-control" required aria-required="true">
              </div>

              <div class="mb-3">
                <label for="email" class="form-label">{{ $t("container.contactForm.inputFields.email") }}</label>
                <input id="email" :placeholder="$t('container.contactForm.inputFields.email')" name="email" type="email" class="form-control" required aria-required="true">
              </div>
            </div>
            <!-- Rechte Spalte: Nachricht (nimmt den Rest des Platzes ein) -->
            <div class="col-md-8 col-12">
              <div class="mb-3">
                <label for="subject" class="form-label">{{ $t("container.contactForm.inputFields.subject") }}</label>
                <input id="subject" :placeholder="$t('container.contactForm.inputFields.subject')" name="subject" type="text" class="form-control">
              </div>

              <div class="mb-3">
                <label for="message" class="form-label">{{ $t("container.contactForm.inputFields.message") }}</label>
                <textarea id="message" :placeholder="$t('container.contactForm.inputFields.message')" name="message" class="form-control" rows="5" required aria-required="true"></textarea>
              </div>
            </div>
            <!--Unterer Teil-->
            <p class="info">{{ $t("container.contactForm.infoText") }}</p>

            <label for="privacy-checkbox">
              <input id="privacy-checkbox" name="privacy-checkbox" type="checkbox">
              <span v-html="$t('container.contactForm.privacyCheckbox', { url: 'https://example.com/datenschutz' })"></span>
            </label>

            <div class="col-12 text-end">
              <button class="btn btn-primary" type="submit">{{ $t("container.contactForm.submit") }}</button>
            </div>
          </div>
        </fieldset>
      </form>
    </div>
  </div>
</template>

<style scoped>
.headline {
  color: white;
}

#message {
  height: 124px;
}

.container-wrapper {
  border-radius: var(--border-radius);
}

.info {
  color: white;
  font-size: 0.875rem
}

#privacy-checkbox input {
  margin-right: 10px;
}

.contact {
  input {
    width: 100%;
  }

  label {
    color: white;
  }
}

.contact input[type=checkbox] {
  width: fit-content;
  margin-right: 0.312rem;
}

.linear-gradiant-element {
  background-image: var(--linear-gradiant-element-horizontal);
  height: 9px;
  margin-bottom: 0.625rem;
  margin-left: 46px;
  margin-right: -8px;
}
</style>
