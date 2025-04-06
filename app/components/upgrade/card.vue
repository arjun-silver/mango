<script setup lang="ts">
const props = defineProps<{
  card: {
    name: string
    cost: number
    level: number
    category: number
  }
}>()

const emit = defineEmits(["buy"])
</script>

<template lang="pug">
.card
  .cover
  .info
    .name {{ props.card.name }}
    .level Level {{ props.card.level }}
    ui-button(@click="emit('buy')") {{ props.card.cost }} $MANGO
</template>

<style module lang="scss">
.card {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  border-radius: 10px;
  height: 200px;
  width: calc(50% - 10px);
  background: var(--light-gray);
  gap: 5px;
}

.cover {
  width: 100%;
  height: 100px;
  border-radius: 10px 10px 0 0;
  background: var(--white);
}
.info {
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 10px;
}

.name {
  font-size: 12px;
  height: 20px;
}

.level {
  font-size: 12px;
}
</style>
