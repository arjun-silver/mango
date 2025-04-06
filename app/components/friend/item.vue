<script setup lang="ts">
defineProps<{
  name: string
}>()
</script>

<template lang="pug">
.friend
  .friend-avatar
  .friend-name {{ name }}
</template>

<style scoped lang="scss">
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
  background-color: var(--light-gray);
}

.friend-name {
  color: var(--text-gray);
}
</style>
