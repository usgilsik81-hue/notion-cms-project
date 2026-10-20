"use client"

import { useEffect, useState } from "react"

export function useLocalStorage<T>(key: string, initialValue: T) {
  const [value, setValue] = useState<T>(() => {
    if (typeof window === "undefined") return initialValue

    try {
      const stored = window.localStorage.getItem(key)
      return stored ? (JSON.parse(stored) as T) : initialValue
    } catch {
      return initialValue
    }
  })

  useEffect(() => {
    try {
      window.localStorage.setItem(key, JSON.stringify(value))
    } catch {
      // localStorage 접근이 불가능한 환경(프라이빗 모드 등)에서는 조용히 무시
    }
  }, [key, value])

  return [value, setValue] as const
}
