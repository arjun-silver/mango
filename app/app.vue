<script setup lang="ts">
import { TonConnectUIProvider } from "@townsquarelabs/ui-vue"

useHead({
  script: [
    {
      innerHTML: `
        window.TelegramAdsController = new TelegramAdsController();
        window.TelegramAdsController.initialize({
          pubId: "966020",
          appId: "1965",
        });
      `,
      type: "text/javascript",
    },
  ],
})

const options = {
  manifestUrl: "https://arjun-silver.github.io/mango/ton-connect-manifest.json",
}
</script>

<template lang="pug">
ton-connect-u-i-provider(:options="options")
  nuxt-layout
    nuxt-page
</template>
