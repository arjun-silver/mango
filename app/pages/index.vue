<script setup lang="ts">
async function create_invoice_link() {
  const data = await $fetch("mango/api/tg/create")
  window.open(data)
}
create_invoice_link()
</script>

<template lang="pug">
button(@click="create_invoice_link") create
pre hi!
</template>
