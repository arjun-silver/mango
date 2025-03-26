<script setup lang="ts">
import { TonConnectUIProvider } from "@townsquarelabs/ui-vue"

const options = {
  manifestUrl: "https://arjun-silver.github.io/mango/ton-connect-manifest.json",
}

window.telegramAdsController = new telegramAdsController()
window.telegramAdsController.initialize({
  pubId: "966020",
  appId: "1877",
})
</script>

<template lang="pug">
ton-connect-u-i-provider(:options="options")
  nuxt-layout
    nuxt-page
</template>
