interface BaseTask {
  label: string
  amount: number
  status: "incomplete" | "checking" | "done"
  type: "subscribe" | "progress"
}

interface SubscribeTask extends BaseTask {
  type: "subscribe"
  url: string
}

interface ProgressTask extends BaseTask {
  type: "progress"
  current: number
  total: number
}

export type Task = SubscribeTask | ProgressTask
