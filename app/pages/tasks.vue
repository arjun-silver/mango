<script setup lang="ts">
interface Task {
  label: string
  amount: number
  status: string
}

const tasks = ref<Task[]>([
  { label: "Join mango (Telegram)", amount: 4200, status: "incomplete" },
  { label: "Join mango (X)", amount: 4200, status: "incomplete" },
  { label: "Join mango (Facebook)", amount: 4200, status: "done" },
  { label: "Join hashcat", amount: 4200, status: "incomplete" },
  { label: "Task name", amount: 4200, status: "done" },
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
