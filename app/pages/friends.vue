<script setup lang="ts">
import { OIcon } from "@oruga-ui/oruga-next"

interface Friend {
  name: string
}

const friends = ref<Friend[]>([{ name: "@ArjunSilver" }, { name: "@RohanGold" }, { name: "@RamanujanBronze" }])

function copy_link() {
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
  .invite-badge
    .avatar 💸
    .text-container
      .invite-label Invite a friend
      .invite-description +3000 for you and your friend
  .button-container
    .invite-button(@click="share") Invite a friend
    .copy-button(@click="copy_link")
      o-icon(pack="mdi" icon="content-copy")
  .friend-list
    .list-label Friend list ({{ friends.length }})
    .friend(v-for="friend in friends")
      .friend-avatar
      .friend-name {{ friend.name }}
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

.invite-badge {
  display: flex;
  margin-top: 20px;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  background-color: $light-gray;
  min-width: 90%;
  height: 100px;
  gap: 20px;
  border-radius: 20px;
  margin-bottom: 20px;
  padding-left: 20px;
}

.avatar {
  font-size: 70px;
}

.text-container {
  font-family: "Chivo Mono", monospace;
  display: flex;
  flex-direction: column;
  height: 50px;
  align-items: flex-start;
  justify-content: space-between;
}

.invite-label {
  font-size: 15px;
}

.invite-description {
  font-size: 13px;
  color: $text-gray;
}

.button-container {
  display: flex;
  flex-direction: row;
  align-items: center;
  min-width: 95%;
  justify-content: space-between;
  gap: 20px;
}

.invite-button {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex-grow: 1;
  height: 50px;
  background-color: $secondary;
  border-radius: 10px;
  font-family: "Chivo Mono", monospace;
  font-size: 15px;
}

.copy-button {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  background-color: $secondary;
  border-radius: 10px;
}

.friend-list {
  margin-top: 15svh;
  font-family: "Chivo Mono", monospace;
  display: flex;
  min-width: 90%;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
}

.list-label {
  font-size: 15px;
  margin-bottom: 20px;
}

.friend {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  gap: 10px;
  margin-bottom: 20px;
}

.friend-avatar {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: $light-gray;
}

.friend-name {
  color: $text-gray;
}
</style>
