<script setup lang="ts">
import emailjs from '@emailjs/browser'
import { ref } from 'vue'

const formValues = ref({
  subject: '',
  surname: '',
  lastname: '',
  email: '',
  message: ''
})

const public_key = 'BZt0CRiWeDdtQ-hpj'

const sendEmail = async (event: Event) => {
  event.preventDefault(); // Prevent default form submission

  // Check if all fields are filled
  const isValid = Object.values(formValues.value).every(value => value.trim() !== '');

  if (!isValid) {
    alert('Please fill in all fields.');
    return;
  }

  try {
    const res = await emailjs.send('service_rzywpjm', 'template_rqyr469', formValues.value, public_key);
    formValues.value = {
      subject: '',
      surname: '',
      lastname: '',
      email: '',
      message: ''
    };
    alert('Success: ' + res.status);
  } catch (error) {
    console.error('Error sending email:', error);
    alert('Error sending mail');
  }
}
</script>


<template>
  <div id="contact" class="row g-3 mb-4 g-2">
    <div class="col-12 bg-primary container-wrapper">
      <h2 class="headline text-md-end text-left px-4 px-md-5 pt-md-5 pt-4 pb-2 pb-md-3">
        {{ $t('container.contactForm.headline') }}
      </h2>

      <div class="linear-gradiant-element d-md-block d-none"></div>

      <div class="linear-gradiant-element d-md-block d-none"></div>

      <form class="contact" aria-labelledby="contact-form-heading" role="form" id="contact-form">
        <fieldset class="form-group">
          <div class="row mb-2 px-4 px-md-5 py-3">
            <!-- Linke Spalte: Vorname, Nachname, E-Mail, Betreff -->
            <div class="col-md-4 col-12">
              <div class="mb-3">
                <label for="surname" class="form-label">{{
                  $t('container.contactForm.inputFields.surname')
                }}</label>
                <input
                  v-model="formValues.surname"
                  id="surname"
                  :placeholder="$t('container.contactForm.inputFields.surname')"
                  name="surname"
                  type="text"
                  class="form-control"
                  required
                  aria-required="true"
                />
              </div>

              <div class="mb-3">
                <label for="lastname" class="form-label">{{
                  $t('container.contactForm.inputFields.lastname')
                }}</label>
                <input
                  v-model="formValues.lastname"
                  id="lastname"
                  :placeholder="$t('container.contactForm.inputFields.lastname')"
                  name="lastname"
                  type="text"
                  class="form-control"
                  required
                  aria-required="true"
                />
              </div>

              <div class="mb-3">
                <label for="email" class="form-label">{{
                  $t('container.contactForm.inputFields.email')
                }}</label>
                <input
                  v-model="formValues.email"
                  id="email"
                  :placeholder="$t('container.contactForm.inputFields.email')"
                  name="email"
                  type="email"
                  class="form-control"
                  required
                  aria-required="true"
                />
              </div>
            </div>
            <!-- Rechte Spalte: Nachricht (nimmt den Rest des Platzes ein) -->
            <div class="col-md-8 col-12">
              <div class="mb-3">
                <label for="subject" class="form-label">{{
                  $t('container.contactForm.inputFields.subject')
                }}</label>
                <input
                  v-model="formValues.subject"
                  id="subject"
                  :placeholder="$t('container.contactForm.inputFields.subject')"
                  name="subject"
                  type="text"
                  class="form-control"
                />
              </div>

              <div class="mb-3">
                <label for="message" class="form-label">{{
                  $t('container.contactForm.inputFields.message')
                }}</label>
                <textarea
                  v-model="formValues.message"
                  id="message"
                  :placeholder="$t('container.contactForm.inputFields.message')"
                  name="message"
                  class="form-control"
                  rows="5"
                  required
                  aria-required="true"
                ></textarea>
              </div>
            </div>
            <!--Unterer Teil-->
            <p class="info">{{ $t('container.contactForm.infoText') }}</p>

            <label for="privacy-checkbox">
              <input id="privacy-checkbox" name="privacy-checkbox" required type="checkbox" />
              <span
                v-html="
                  $t('container.contactForm.privacyCheckbox', {
                    url: '/impressum-und-datenschutz'
                  })
                "
              ></span>
            </label>

            <div class="col-12 text-end">
              <button class="btn btn-primary" type="submit" @click="sendEmail">
                {{ $t('container.contactForm.submit') }}
              </button>
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
  font-size: 0.875rem;
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

.contact input[type='checkbox'] {
  width: fit-content;
  margin-right: 0.312rem;
}

.linear-gradiant-element {
  background-image: var(--linear-gradiant-element-horizontal);
  height: 9px;
  margin-bottom: 0.625rem;
  margin-left: -8px;
  margin-right: -8px;
}
</style>
