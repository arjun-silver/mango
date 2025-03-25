<script setup lang="ts">
import { OIcon, OModal } from "@oruga-ui/oruga-next"

interface Item {
  name: string
  avatar: string
  price: number
  label: string
  description: string
}

const is_active = defineModel<boolean>("active")

const show_buy_modal = ref(false)

const selected_item = ref<Item | null>(null)

const items = ref<Item[]>([
  { name: "Power up", avatar: "️️🏎️", price: 4000, label: "buy", description: "increase your profit per tap for 5 seconds?" },
  { name: "Regenerate", avatar: "⚡", price: 4000, label: "buy", description: "regenerate your energy?" },
  { name: "Capacity", avatar: "🔋", price: 4000, label: "3/5", description: "increase your capacity by 10%?" },
  { name: "Regeneration", avatar: "⏳", price: 4000, label: "2/5", description: "increase your regeneration speed by 10%?" },
  { name: "Tap profit", avatar: "💪", price: 4000, label: "5/5", description: "Increase your tap profit by 10%?" },
])
</script>

<template lang="pug">
o-modal(v-model:active="is_active" teleport close-icon="" @click="is_active = false")
  .content(@click.stop.prevent)
    o-icon.cancel-icon(pack="mdi" icon="close" size="medium" @click="is_active = false")
    .item(v-for="item in items")
      .avatar {{ item.avatar }}
      .text-container
        .name {{ item.name }}
        .price {{ item.price }} $MANGO
      .button(:class="item.label === '5/5' ? 'sold' : ''" @click="show_buy_modal = true; selected_item = item") {{ item.label }}
  o-modal(v-model:active="show_buy_modal" teleport close-icon="" @click="show_buy_modal = false")
    .buy-content(@click.stop.prevent)
      .top-section
        .item-avatar {{ selected_item?.avatar }}
        o-icon.cancel-icon(pack="mdi" icon="close" size="medium" @click="show_buy_modal = false")
      .description {{ selected_item?.description }}
      .buttons
        .button(style="width: 100px" @click="show_buy_modal = false") buy
        .button(style="width: 100px" @click="show_buy_modal = false") whatch ad
</template>

<style lang="scss" scoped>
.content {
  background-color: $background;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  border-radius: 10px;
  width: 80%;
  height: 50svh;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
}

.item {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  gap: 20px;
  margin-bottom: 20px;
}

.cancel-icon {
  margin-left: auto;
  margin-right: 20px;
  margin-top: 20px;
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
  color: $text-gray;
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
  background-color: $primary;
  color: white;
  margin-left: auto;
  margin-right: 20px;

  &.sold {
    background-color: $secondary;
  }
}

.buy-content {
  background-color: $background;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  border-radius: 10px;
  width: 80%;
  height: 25svh;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
}

.top-section {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-bottom: 20px;
}

.item-avatar {
  margin-left: auto;
  font-size: 60px;
}

.description {
  font-family: "Chivo Mono", monospace;
  margin-left: 20px;
  margin-right: 20px;
  font-size: 17px;
  text-align: center;
}

.buttons {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  gap: 20px;
  margin-top: auto;
  margin-bottom: 20px;
}
</style>
