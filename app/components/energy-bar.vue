<script setup lang="ts">
const props = defineProps<{ energyLeft: number }>()
</script>

<template lang="pug">
.energy
  img.lightning(src="/assets/lightning.svg")
  .energy-bar-container
    .energy-bar
      .energy-total
      .energy-left(:style="{ width: `${props.energyLeft}%` }")
    .energy-counter {{ `${props.energyLeft}/100` }}
  slot
</template>

<style lang="scss" module>
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
  padding: 0 20px;
}

.lightning {
  width: 50px;
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
  background-color: var(--light-gray);
  height: 10px;
  width: 100%;
  border-radius: 45px;
}

.energy-left {
  position: absolute;
  top: 0;
  left: 0;
  background-color: var(--primary);
  height: 10px;
  border-radius: 45px;
  transition: width 0.3s ease-out;
}

.energy-counter {
  text-align: left;
  font-family: "Chivo Mono", monospace;
  color: var(--text-gray);
}
</style>
