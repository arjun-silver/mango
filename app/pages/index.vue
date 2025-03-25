<script setup lang="ts">
import { OIcon } from "@oruga-ui/oruga-next"

const score = ref(0)
const energy_left = ref(100)
const show_shop_modal = ref(false)

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
    .shop-button
      o-icon(pack="mdi" icon="storefront-outline" size="medium" @click="open_modal")
  shop-modal(v-model:active="show_shop_modal")
</template>

<style lang="scss" module>
.score {
  font-family: "Chivo Mono", monospace;
  font-size: 35px;
}

.shop-button {
  margin-right: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  border-radius: 10px;
  background-color: $secondary;
}
</style>
