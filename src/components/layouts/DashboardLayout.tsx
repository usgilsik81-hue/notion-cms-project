import type { ReactNode } from "react"

import { Header } from "@/components/layout/Header"
import { Sidebar } from "@/components/layout/Sidebar"

interface DashboardLayoutProps {
  children: ReactNode
}

export function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <div className="flex min-h-full flex-col">
      <Header />
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 overflow-x-hidden px-4 py-6 md:px-6">{children}</main>
      </div>
    </div>
  )
}
