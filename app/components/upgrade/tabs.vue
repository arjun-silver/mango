<script setup lang="ts">
import { computed, ref } from "vue"

const activeTab = defineModel<number>({ required: true })
const tabs = ["Farm", "Export", "High-Tech"]

const sliderStyle = computed(() => ({
  left: `${(activeTab.value * 100) / 3}%`,
  width: `${100 / 3}%`,
}))

function activateTab(index: number) {
  activeTab.value = index
}

defineExpose({ activeTab })
</script>

<template lang="pug">
.container
  .tabs-wrapper
    .slider(:style="sliderStyle")
    button.tab(
      v-for="(tab, index) in tabs"
      :key="tab"
      :mclass="[{ active: index === activeTab }]"
      @click="activateTab(index)") {{ tab }}
</template>

<style module lang="scss">
.container {
  width: 90vw;
  background: var(--light-gray);
  border-radius: 10px;
  font-size: 15px;
}

.tabs-wrapper {
  position: relative;
  display: flex;
  align-items: center;
  border-radius: 8px;
}

.tab {
  flex: 1;
  padding: 12px 20px;
  border: none;
  background: transparent;
  position: relative;
  z-index: 1;
  color: var(--text-gray);
  font-weight: 500;
  transition: color 0.3s ease;

  &.active {
    color: white;
  }
}

.slider {
  position: absolute;
  height: 100%;
  background: var(--primary);
  border-radius: 8px;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}
</style>
