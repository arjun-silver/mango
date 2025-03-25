<script setup lang="ts">
import type { Task } from "~/task"

const tasks = ref<Task[]>([
  { label: "Join mango (Telegram)", amount: 4200, status: "incomplete", type: "subscribe", url: "https://t.me/mangotoken_bot" },
  { label: "Join mango (X)", amount: 4200, status: "incomplete", type: "subscribe", url: "https://t.me/mangotoken_bot" },
  { label: "Join mango (Facebook)", amount: 4200, status: "done", type: "subscribe", url: "https://t.me/mangotoken_bot" },
  { label: "Join hashcat", amount: 4200, status: "incomplete", type: "subscribe", url: "https://t.me/mangotoken_bot" },
  { label: "Invite friends", amount: 4200, status: "incomplete", type: "progress", current: 1, total: 5 },
])

function changeStatus(task: Task) {
  if (task.status === "incomplete") {
    task.status = "checking"
    setTimeout(() => {
      task.status = "done"
    }, 3000)
  }
}
</script>

<template lang="pug">
.page
  task-list(:tasks="tasks" @update-status="changeStatus")
</template>
