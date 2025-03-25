<script setup lang="ts">
import type { Task } from "~/task"

defineProps<{
  tasks: Task[]
}>()

const emit = defineEmits(["updateStatus"])

function changeStatus(task: { label: string, amount: number, status: string }) {
  emit("updateStatus", task)
}
</script>

<template lang="pug">
div
  task-item(v-for="task in tasks" :key="task.label" :task="task" @change-status="changeStatus")
</template>
