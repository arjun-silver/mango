<script setup lang="ts">
const activeTab = ref(0)

const cards = ref([
  { name: "Surface area of fields", cost: 100, level: 0, category: 0 },
  { name: "Fields workers", cost: 100, level: 0, category: 0 },
  { name: "Tractors & Machinery", cost: 150, level: 5, category: 0 },
  { name: "Mango Tree Variety", cost: 120, level: 3, category: 0 },
  { name: "Irrigation Systems", cost: 140, level: 2, category: 0 },
  { name: "International trade routes", cost: 250, level: 0, category: 1 },
])
</script>

<template lang="pug">
.page
  .title
    .label
      div Upgrade your
      div mango business
    .description Increase your hour profit
  upgrade-tabs(v-model="activeTab")
  .cards-container
    upgrade-card(v-for="card in cards.filter(card => card.category === activeTab)" :key="card.name" :card="card")
</template>

<style module lang="scss">
.page {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  font-family: "Chivo Mono", monospace;
  text-align: center;
  gap: 20px;
  padding: 20px 20px 100px;
  height: 100vh;
  margin-bottom: 80px;
}

.label {
  font-size: 30px;
}

.description {
  font-size: 15px;
  color: var(--text-gray);
}

.cards-container {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 20px;
  max-height: 100vh;
  overflow-y: auto;
  padding-bottom: 80px;
}
</style>
