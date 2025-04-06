<script setup lang="ts">
import type { Task } from "~/task"

defineProps<{ task: Task }>()

function changeStatus(task: Task) {
  if (task.status === "incomplete") {
    task.status = "checking"

    setTimeout(() => {
      task.status = "done"
    }, 3000)
  }
}

function taskLabel(task: Task) {
  if (task.type === "subscribe") {
    return task.status === "done" ? "done" : "start"
  }

  if (task.type === "progress") {
    return `${task.current}/${task.total}`
  }

  return "start"
}

function handleTaskAction(task: Task) {
  if (task.type === "subscribe" && task.url) {
    window.open(task.url, "_blank")
    changeStatus(task)
  }

  if (task.type === "progress") {
    task.status = "checking"
    task.current++
    setTimeout(() => {
      task.status = "incomplete"
    }, 1000)
    if (task.current >= task.total) {
      task.status = "checking"
      setTimeout(() => {
        task.status = "done"
      }, 1000)
    }
  }
}
</script>

<template lang="pug">
.task
  .info
    .avatar
    .text-container
      .label {{ task.label }}
      .amount {{ `+${task.amount} $MANGO` }}
  ui-button(:loading="task.status === 'checking'" :disabled="task.status === 'done'" @click="handleTaskAction(task)") {{ taskLabel(task) }}
</template>

<style scoped lang="scss">
.task {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100svw;
  gap: 20px 10px;
  padding: 20px;
}

.info {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 20px;
}

.avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: var(--light-gray);
  margin-left: 20px;
}

.text-container {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
}

.label {
  font-family: "Chivo Mono", monospace;
  font-size: 17px;
  color: black;
}

.amount {
  font-family: "Chivo Mono", monospace;
  font-size: 13px;
  color: var(--text-gray);
}
</style>
