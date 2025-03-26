// useTadsAd.ts
import { onScopeDispose, ref } from "vue"

interface TadsAdController {
  loadAd: () => Promise<void>
  showAd: () => Promise<void>
  destroy?: () => void
}

interface UseTadsAdOptions {
  widgetId: string | number
  debug?: boolean
  onShowReward?: (adId: string) => void
  onClickReward?: (adId: string) => void
  onAdsNotFound?: () => void
}

export function useTadsAd(options: UseTadsAdOptions) {
  const adController = ref<TadsAdController | null>(null)
  const isLoaded = ref(false)
  const isShowing = ref(false)
  const error = ref<Error | null>(null)

  const defaultCallbacks = {
    onShowReward: (adId: string) => {
      options.onShowReward?.(adId)
    },
    onClickReward: (adId: string) => {
      options.onClickReward?.(adId)
    },
    onAdsNotFound: () => {
      options.onAdsNotFound?.()
    },
  }

  const initialize = async () => {
    try {
      if (!window.tads) {
        throw new Error("TADS library not loaded")
      }

      adController.value = window.tads.init({
        widgetId: options.widgetId,
        debug: options.debug ?? false,
        ...defaultCallbacks,
      })

      await adController.value.loadAd()
      isLoaded.value = true
    } catch (err) {
      error.value = err as Error
      defaultCallbacks.onAdsNotFound()
    }
  }

  const showAd = async () => {
    console.log("trying to show the ad")
    console.log(!adController.value)
    if (!adController.value) {
      return
    }
    try {
      console.log("really trying!")
      isShowing.value = true
      await adController.value.showAd()
    } catch (err) {
      console.log("oh no! some errors!")
      error.value = err as Error
      console.log(error.value)
      defaultCallbacks.onAdsNotFound()
    } finally {
      isShowing.value = false
    }
  }

  onScopeDispose(() => {
    if (adController.value?.destroy) {
      adController.value.destroy()
    }
  })

  // Auto-initialize by default
  initialize()

  return {
    /**
     * Show the loaded ad
     */
    showAd,
    /**
     * Reload the ad
     */
    reload: initialize,
    /**
     * Whether an ad is currently loaded
     */
    isLoaded,
    /**
     * Whether an ad is currently being shown
     */
    isShowing,
    /**
     * Any error that occurred during ad operations
     */
    error,
  }
}
