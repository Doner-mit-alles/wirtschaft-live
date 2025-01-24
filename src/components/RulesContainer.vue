<script setup lang="ts">
</script>

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
          <span class="fw-bold">{{ $t('containers.gamingRules.numberOfPlayersLabel')}}</span> {{ $t('containers.gamingRules.numberOfPlayers')}} <br />
          <span class="fw-bold">{{ $t('containers.gamingRules.ageLabel')}}</span> {{ $t('containers.gamingRules.age')}}<br />
          <span class="fw-bold">{{ $t('containers.gamingRules.timeLabel')}}</span> {{ $t('containers.gamingRules.time')}}<br />
        </p>
        <h6>{{ $t('containers.gamingRules.gameMaterials')}}</h6>
        <ul>
          <li>
            {{ $t('containers.gamingRules.gameMaterialsOne')}}
          </li>
          <li>
            {{ $t('containers.gamingRules.gameMaterialsTwo')}}
          </li>
          <li>
            {{ $t('containers.gamingRules.gameMaterialsThree')}}
          </li>
          <li>
            {{ $t('containers.gamingRules.gameMaterialsFourth')}}
          </li>
        </ul>
        <h6>{{ $t('containers.gamingRules.gamePreparation')}}</h6>
        <ol>
          <li>
            {{ $t('containers.gamingRules.gamePreparationContent1')}}
          </li>
          <li>
            {{ $t('containers.gamingRules.gamePreparationContent2')}}
          </li>
        </ol>
      </div>
    </div>
    <div class="col-12 text-white">
      <h6>{{ $t('containers.gamingRules.gameplayLabel')}}</h6>
      <ol>
        <li>
          {{ $t('containers.gamingRules.gameplayStep1')}}
        </li>
        <li>
          {{ $t('containers.gamingRules.gameplayStep2')}}
          <ul>
            <li>
              {{ $t('containers.gamingRules.gameplayStep2ConditionTrue')}}
            </li>
            <li>
              {{ $t('containers.gamingRules.gameplayStep2ConditionFalse')}}
            </li>
          </ul>
        </li>
        <li>
          {{ $t('containers.gamingRules.gameplayStep3')}}
          <ul>
            <li>
              {{ $t('containers.gamingRules.gameplayStep3ConditionTrue')}}
            </li>
            <li>
              {{ $t('containers.gamingRules.gameplayStep3ConditionFalse')}}
            </li>
          </ul>
        </li>
        <li>
          {{ $t('containers.gamingRules.gameplayStep4')}}
        </li>
      </ol>
      <h6>{{ $t('containers.gamingRules.gameGoalLabel')}}</h6>
      <p>
        {{ $t('containers.gamingRules.gameGoal')}}
      </p>
      <p>
        {{ $t('containers.gamingRules.notice')}}
      </p>
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

img {
  border-radius: 20px;
}
</style>
