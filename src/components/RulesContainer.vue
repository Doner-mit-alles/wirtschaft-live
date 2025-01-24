<script setup lang="ts">
</script>

<template>
  <div class="row g-3 mb-4 rules-wrapper" id="gamingRules">
    <div class="col-12 col-md-5 col-xl-3 col-12">
      <img
        src="@/assets/images/spielbrett.jpg"
        class="w-100"
        :alt="$t('container.gamingRules.imageAltText')"
      />
    </div>
    <div class="col-12 col-md-7 col-xl-9 col-12 text-white pb-0 pb-md-3 p-3 p-md-3 h-3 content-wrapper">
      <div class="rules-content text-left">
        <h2>{{ $t('container.gamingRules.rulesHeadline') }}</h2>
        <h6>{{ $t('container.gamingRules.rulesSecondHeadline') }}</h6>
        <p>
          <span class="fw-bold">{{ $t('container.gamingRules.numberOfPlayersLabel')}}</span> {{ $t('container.gamingRules.numberOfPlayers')}} <br />
          <span class="fw-bold">{{ $t('container.gamingRules.ageLabel')}}</span> {{ $t('container.gamingRules.age')}}<br />
          <span class="fw-bold">{{ $t('container.gamingRules.timeLabel')}}</span> {{ $t('container.gamingRules.time')}}<br />
        </p>
        <h6>{{ $t('container.gamingRules.gameMaterials')}}</h6>
        <ul>
          <li>
            {{ $t('container.gamingRules.gameMaterialsOne')}}
          </li>
          <li>
            {{ $t('container.gamingRules.gameMaterialsTwo')}}
          </li>
          <li>
            {{ $t('container.gamingRules.gameMaterialsThree')}}
          </li>
          <li>
            {{ $t('container.gamingRules.gameMaterialsFourth')}}
          </li>
        </ul>
        <h6>{{ $t('container.gamingRules.gamePreparation')}}</h6>
        <ol>
          <li>
            {{ $t('container.gamingRules.gamePreparationContent1')}}
          </li>
          <li>
            {{ $t('container.gamingRules.gamePreparationContent2')}}
          </li>
        </ol>
      </div>
    </div>
    <div class="col-12 text-white content-wrapper">
      <h6>{{ $t('container.gamingRules.gameplayLabel')}}</h6>
      <ol>
        <li>
          {{ $t('container.gamingRules.gameplayStep1')}}
        </li>
        <li>
          {{ $t('container.gamingRules.gameplayStep2')}}
          <ul>
            <li>
              {{ $t('container.gamingRules.gameplayStep2ConditionTrue')}}
            </li>
            <li>
              {{ $t('container.gamingRules.gameplayStep2ConditionFalse')}}
            </li>
          </ul>
        </li>
        <li>
          {{ $t('container.gamingRules.gameplayStep3')}}
          <ul>
            <li>
              {{ $t('container.gamingRules.gameplayStep3ConditionTrue')}}
            </li>
            <li>
              {{ $t('container.gamingRules.gameplayStep3ConditionFalse')}}
            </li>
          </ul>
        </li>
        <li>
          {{ $t('container.gamingRules.gameplayStep4')}}
        </li>
      </ol>
      <h6>{{ $t('container.gamingRules.gameGoalLabel')}}</h6>
      <p>
        {{ $t('container.gamingRules.gameGoal')}}
      </p>
      <p>
        {{ $t('container.gamingRules.notice')}}
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

.content-wrapper > *{
  text-shadow: 3px 4px 10px #000000;
}
</style>
