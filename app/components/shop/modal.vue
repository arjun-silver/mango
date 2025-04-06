<script setup lang="ts">
import { ShopBuy } from "#components"

const emit = defineEmits<{
  close: []
}>()

const openModal = useOpenModal()

interface Item {
  name: string
  avatar: string
  price: number
  label: string
  description: string
}

const selectedItem = ref<Item | null>(null)

function openBuyModal() {
  openModal({
    component: ShopBuy,
    props: {
      selectedItem: selectedItem.value,
    },
  })
}

const items = ref<Item[]>([
  { name: "Power up", avatar: "️️🏎️", price: 4000, label: "buy", description: "increase your profit per tap for 5 seconds?" },
  { name: "Regenerate", avatar: "⚡", price: 4000, label: "buy", description: "regenerate your energy?" },
  { name: "Capacity", avatar: "🔋", price: 4000, label: "3/5", description: "increase your capacity by 10%?" },
  { name: "Regeneration", avatar: "⏳", price: 4000, label: "2/5", description: "increase your regeneration speed by 10%?" },
  { name: "Tap profit", avatar: "💪", price: 4000, label: "5/5", description: "Increase your tap profit by 10%?" },
])

function handleItemBuy(item: Item) {
  selectedItem.value = item
  openBuyModal()
}
</script>

<template lang="pug">
ui-modal(title="Shop" @close="emit('close')")
  .content
    shop-item(
      v-for="item in items"
      :key="item.name"
      :item="item"
      @buy="handleItemBuy(item)"
    )
</template>

<style lang="scss" scoped>
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  border-radius: 10px;
  height: 50svh;
}
</style>
