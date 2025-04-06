<script setup lang="ts">
const props = defineProps<{
  item: {
    name: string
    avatar: string
    price: number
    label: string
    description: string
  }
}>()

const emit = defineEmits(["buy"])

function handleClick() {
  if (props.item.label !== "5/5") {
    emit("buy")
  }
}
</script>

<template lang="pug">
.item
  .avatar {{ item.avatar }}
  .text-container
    .name {{ item.name }}
    .price {{ item.price }} $MANGO
  .button(:class="item.label === '5/5' ? 'sold' : ''" @click="handleClick") {{ item.label }}
</template>

<style lang="scss" scoped>
.item {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  gap: 20px;
  margin-bottom: 20px;
}

.avatar {
  margin-left: 20px;
  font-size: 35px;
}

.text-container {
  font-family: "Chivo Mono", monospace;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 5px;
}

.name {
  font-size: 15px;
}

.price {
  font-size: 13px;
  color: var(--text-gray);
}

.button {
  font-family: "Chivo Mono", monospace;
  font-size: 13px;
  width: 70px;
  height: 30px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--primary);
  color: white;
  margin-left: auto;
  margin-right: 20px;

  &.sold {
    background-color: var(--secondary);
  }
}
</style>
