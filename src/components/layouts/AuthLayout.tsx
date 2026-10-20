import type { ReactNode } from "react"
import Link from "next/link"

import { siteConfig } from "@/config/site.config"

interface AuthLayoutProps {
  children: ReactNode
}

export function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <div className="flex min-h-full flex-col items-center justify-center bg-muted/30 px-4 py-12">
      <Link href="/" className="mb-8 text-lg font-semibold">
        {siteConfig.name}
      </Link>
      <div className="w-full max-w-sm rounded-lg border bg-card p-6 shadow-sm">
        {children}
      </div>
    </div>
  )
}
