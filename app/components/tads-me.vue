<script setup lang="ts">
interface TadsAdController {
  loadAd: () => Promise<void>
  showAd: () => Promise<void>
  destroy?: () => void
}

const props = defineProps<{
  widgetId: string | number
  debug?: boolean
}>()

const adController = ref<TadsAdController | null>(null)

function onShowReward(adId: string) {
  console.log("Show ad:", adId)
  // Add your reward logic here
}

function onClickReward(adId: string) {
  console.log("Click on ad:", adId)
  // Add click handling logic here
}

function adsNotFoundCallback() {
  console.log("No ads found to show")
  // Add fallback logic for no ads
}

async function initializeAds() {
  try {
    if (!window.tads) {
      throw new Error("TADS library not loaded")
    }

    adController.value = window.tads.init({
      widgetId: props.widgetId,
      debug: props.debug ?? false,
      onShowReward,
      onClickReward,
      onAdsNotFound: adsNotFoundCallback,
    })

    await adController.value.loadAd()
    await adController.value.showAd()
  } catch (err) {
    console.error("Ad error:", err)
    adsNotFoundCallback()
  }
}

onMounted(() => {
  initializeAds()
})

onBeforeUnmount(() => {
  if (adController.value?.destroy) {
    adController.value.destroy()
  }
})
</script>

<template>
  <div class="ad-container"></div>
</template>
