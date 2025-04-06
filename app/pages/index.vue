<script setup lang="ts">
import { ShopModal } from "#components"
// We need this to use Adsgram
// eslint-disable-next-line unused-imports/no-unused-vars
const { useWebApp } = await import("vue-tg")
const score = ref(0)
const energyLeft = ref(100)

const openModal = useOpenModal()

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
</script>

<template lang="pug">
.page
  .score $MANGO: {{ score }}
  mango(:score="score" @click="updateScore")
  energy-bar(:energy-left="energyLeft")
    shop-button(@click="openModal(ShopModal)")
</template>

<style lang="scss" module>
.score {
  font-family: "Chivo Mono", monospace;
  font-size: 35px;
}
</style>
