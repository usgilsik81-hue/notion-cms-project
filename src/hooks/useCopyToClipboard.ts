"use client"

import { useCallback, useState } from "react"
import { toast } from "sonner"

export function useCopyToClipboard() {
  const [isCopied, setIsCopied] = useState(false)

  const copy = useCallback(async (text: string) => {
    try {
      await navigator.clipboard.writeText(text)
      setIsCopied(true)
      toast.success("클립보드에 복사되었습니다")
      setTimeout(() => setIsCopied(false), 2000)
    } catch {
      toast.error("복사에 실패했습니다")
    }
  }, [])

  return { isCopied, copy }
}
