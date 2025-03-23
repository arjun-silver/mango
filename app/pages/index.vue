<script setup lang="ts">
import { OIcon } from "@oruga-ui/oruga-next"

const score = ref(0)
const energy_left = ref(70)
</script>

<template lang="pug">
.score $MANGO: {{ score }}
.mango(@click="score += 10, energy_left -= 1") 🥭
.energy
  .lightning ⚡
  .energy-bar
    .energy-total
    .energy-left(:style="{ width: `${energy_left}%` }")
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
  transform: translate(-50%, -50%);
  font-size: 250px;

  &:active {
    transform: translate(-50%, -50%) scale(1.02);
    transition: transform 0.1s linear;
  }

  &:active:after {
    content: "";
    display: block;
    transform: scale(1);
    transition: transform 0.1s linear;
  }
}

.energy {
  position: fixed;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  left: 0;
  bottom: 80px;
  height: 80px;
  width: 100%;
}

.energy-bar {
  flex-grow: 1;
}

.lightning {
  font-size: 50px;
}

.energy-total {
  position: absolute;
  background-color: #d9d9d9;
  height: 10px;
  width: 70%;
  border-radius: 45px;
}

.energy-left {
  position: absolute;
  background-color: #dc7d33;
  height: 10px;
  border-radius: 45px;
}

.shop-button {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: rgba($color: #ec8a3d, $alpha: 0.2);
  width: 50px;
  height: 50px;
  border-radius: 10px;
}
</style>
