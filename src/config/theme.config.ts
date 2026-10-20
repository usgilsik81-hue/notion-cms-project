export const themeConfig = {
  defaultTheme: "system" as const,
  storageKey: "theme-preference",
  themes: ["light", "dark", "system"] as const,
}

export type Theme = (typeof themeConfig.themes)[number]
