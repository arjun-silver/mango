<script setup lang="ts">
defineProps<{
  friends: { name: string }[]
}>()
</script>

<template lang="pug">
.friend-list
  .list-label Friend list ({{ friends.length }})
  friend-item(v-for="friend in friends" :key="friend.name" :name="friend.name")
</template>

<style scoped lang="scss">
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
</style>
