<template lang="pug">
.invite-badge
  .avatar 💸
  .text-container
    .invite-label Invite a friend
    .invite-description +3000 for you and your friend
</template>

<style scoped lang="scss">
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
</style>
