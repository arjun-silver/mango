<script setup lang="ts">
// We need this to use Adsgram
// eslint-disable-next-line unused-imports/no-unused-vars
const { useWebApp } = await import("vue-tg")
const score = ref(0)
const energyLeft = ref(100)
const showShopModal = ref(false)

function onReward() {
  score.value *= 2
}

function onError() {
  console.error("error")
}

const { showAd } = useAdsgram({ blockId: "9237", onReward, onError })

function updateScore() {
  if (energyLeft.value > 0) {
    score.value += 10
    energyLeft.value -= 1
  }
}

setInterval(() => {
  if (energyLeft.value < 100) {
    energyLeft.value += 1
  }
}, 1500)

function openModal() {
  showShopModal.value = true
}
</script>

<template lang="pug">
.page(id="tads-container-401")
  .score $MANGO: {{ score }}
  mango(:score="score" @click="updateScore")
  energy-bar(:energy-left="energyLeft")
    shop-button(@open-modal="openModal")
  shop-modal(v-model:active="showShopModal" :show-ad="showAd")
</template>

<style lang="scss" module>
.score {
  font-family: "Chivo Mono", monospace;
  font-size: 35px;
}
</style>
