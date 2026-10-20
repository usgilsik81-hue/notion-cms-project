import dayjs from "dayjs"

export function formatDate(date: string | Date, pattern = "YYYY-MM-DD"): string {
  return dayjs(date).format(pattern)
}

export function formatCurrency(amount: number, currency = "KRW"): string {
  return new Intl.NumberFormat("ko-KR", { style: "currency", currency }).format(amount)
}

export function formatFileSize(bytes: number): string {
  if (bytes === 0) return "0 B"

  const units = ["B", "KB", "MB", "GB", "TB"]
  const exponent = Math.floor(Math.log(bytes) / Math.log(1024))

  return `${(bytes / 1024 ** exponent).toFixed(1)} ${units[exponent]}`
}
