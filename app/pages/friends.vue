<script setup lang="ts">
interface Friend {
  name: string
}

const friends = ref<Friend[]>([{ name: "@ArjunSilver" }, { name: "@RohanGold" }, { name: "@RamanujanBronze" }])

function copyLink() {
  navigator.clipboard.writeText("https://t.me/mango_token_bot/app")
}

function share() {
  window.open("https://t.me/share/url?url=https://t.me/mango_token_bot/app", "_blank")
}
</script>

<template lang="pug">
.page
  .label Invite friends
  .description You and your friend will receive bonuses
  friend-badge
  friend-buttons(@copy="copyLink" @share="share")
  friend-list(:friends="friends")
</template>

<style lang="scss" scoped>
.page {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
}
.label {
  font-family: "Chivo Mono", monospace;
  font-size: 30px;
}

.description {
  font-family: "Chivo Mono", monospace;
  font-size: 15px;
  color: $text-gray;
}
</style>
