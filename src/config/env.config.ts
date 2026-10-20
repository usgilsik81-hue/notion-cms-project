export const envConfig = {
  apiUrl: process.env.NEXT_PUBLIC_API_URL ?? "/api",
  isDev: process.env.NODE_ENV === "development",
  isProduction: process.env.NODE_ENV === "production",
}
