import type { ReactNode } from "react"

import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"

interface MainLayoutProps {
  children: ReactNode
}

export function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="flex min-h-full flex-col">
      <Header />
      <main className="mx-auto w-full max-w-6xl flex-1 px-4 py-8">{children}</main>
      <Footer />
    </div>
  )
}
