<script setup lang="ts">
const { useWebApp } = await import("vue-tg")
const score = ref(0)
const energy_left = ref(100)
const show_shop_modal = ref(false)

function onReward() {
  score.value = score.value * 2
}
function onError(result: ShowPromiseResult) {
  // eslint-disable-next-line no-console
  console.log(JSON.stringify(result, null, 4))
}

const { showAd } = useAdsgram({ blockId: "9237", onReward, onError })

function update_score() {
  if (energy_left.value > 0) {
    score.value += 10
    energy_left.value -= 1
  }
}

setInterval(() => {
  if (energy_left.value < 100) {
    energy_left.value += 1
  }
}, 1500)

function open_modal() {
  show_shop_modal.value = true
}
</script>

<template lang="pug">
.page
  .score $MANGO: {{ score }}
  mango(:score="score" @click="update_score")
  energy-bar(:energy-left="energy_left")
    shop-button(@open-modal="open_modal")
  shop-modal(v-model:active="show_shop_modal" :show-ad="showAd")
</template>

<style lang="scss" module>
.score {
  font-family: "Chivo Mono", monospace;
  font-size: 35px;
}
</style>
