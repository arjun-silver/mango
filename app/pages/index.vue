<script setup lang="ts">
import { OIcon } from "@oruga-ui/oruga-next"

const score = ref(0)
const energy_left = ref(100)

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
</script>

<template lang="pug">
.score $MANGO: {{ score }}
img.mango(src="/assets/mango.svg" @click="update_score")
.energy
  img.lightning(src="/assets/lightning.svg")
  .energy-bar-container
    .energy-bar
      .energy-total
      .energy-left(:style="{ width: `${energy_left}%` }")
    .energy-counter {{ `${energy_left}/100` }}
  .shop-button
    o-icon(pack="mdi" icon="storefront-outline" size="medium")
</template>

<style lang="scss" module>
.score {
  font-family: "Chivo Mono", monospace;
  font-size: 35px;
}

.mango {
  position: fixed;
  top: 50%;
  left: 50%;
  width: 300px;
  transform: translate(-50%, -50%);

  &:active {
    transform: translate(-50%, -50%) scale(1.02);
    transition: transform 0.1s linear;
  }
}

.energy {
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-around;
  left: 0;
  bottom: 80px;
  height: 80px;
  width: 100%;
  gap: 20px;
}

.lightning {
  width: 50px;
  margin-left: 20px;
}

.energy-bar-container {
  display: flex;
  flex-direction: column;
  align-items: start;
  flex-grow: 1;
  max-width: 300px;
}

.energy-bar {
  position: relative;
  width: 100%;
  margin-bottom: 5px;
}

.energy-total {
  background-color: $light-gray;
  height: 10px;
  width: 100%;
  border-radius: 45px;
}

.energy-left {
  position: absolute;
  top: 0;
  left: 0;
  background-color: $primary;
  height: 10px;
  border-radius: 45px;
  transition: width 0.3s ease-out;
}

.energy-counter {
  text-align: left;
  font-family: "Chivo Mono", monospace;
  color: $text-gray;
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
