"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { LayoutDashboard, Settings, Users } from "lucide-react"

import { cn } from "@/lib/utils"
import { useUiStore } from "@/store/ui.store"

interface SidebarItem {
  title: string
  href: string
  icon: typeof LayoutDashboard
}

const sidebarItems: SidebarItem[] = [
  { title: "개요", href: "/dashboard", icon: LayoutDashboard },
  { title: "사용자", href: "/dashboard/users", icon: Users },
  { title: "설정", href: "/dashboard/settings", icon: Settings },
]

export function Sidebar() {
  const pathname = usePathname()
  const { isSidebarOpen } = useUiStore()

  return (
    <aside
      className={cn(
        "shrink-0 border-r bg-sidebar transition-all",
        isSidebarOpen ? "w-56" : "w-16"
      )}
    >
      <nav className="flex flex-col gap-1 p-3">
        {sidebarItems.map((item) => {
          const isActive = pathname === item.href
          const Icon = item.icon

          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-colors",
                isActive
                  ? "bg-sidebar-accent text-sidebar-accent-foreground"
                  : "text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
              )}
            >
              <Icon className="size-4 shrink-0" />
              {isSidebarOpen ? <span>{item.title}</span> : null}
            </Link>
          )
        })}
      </nav>
    </aside>
  )
}
