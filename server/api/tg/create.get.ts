import { Bot } from "grammy"

const bot = new Bot(process.env.TELEGRAM_TOKEN)
export default defineEventHandler(async () => {
  const invoiceLink = await bot.api.createInvoiceLink(
    "My Product",
    "Buy this item",
    "payload",
    "",
    "XTR",
    [{ label: "Product", amount: 1 }],
  )
  return invoiceLink
})
