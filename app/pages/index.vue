<script setup lang="ts">
async function create_invoice_link() {
  const data = await $fetch("/api/tg/create")
  window.open(data)
}
</script>

<template lang="pug">
button(@click="create_invoice_link") create
pre hi!
</template>
