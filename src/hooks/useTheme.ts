"use client"

import { useTheme as useNextTheme } from "next-themes"
import { useEffect, useState } from "react"

export function useTheme() {
  const { theme, setTheme, systemTheme } = useNextTheme()
  const [mounted, setMounted] = useState(false)

  // 하이드레이션 불일치를 막기 위해 마운트 이후에만 실제 테마 값을 노출
  useEffect(() => {
    setMounted(true)
  }, [])

  const resolvedTheme = mounted ? theme ?? systemTheme : undefined
  const isDark = resolvedTheme === "dark"

  const toggleTheme = () => {
    setTheme(isDark ? "light" : "dark")
  }

  return { theme: resolvedTheme, setTheme, isDark, toggleTheme, mounted }
}
