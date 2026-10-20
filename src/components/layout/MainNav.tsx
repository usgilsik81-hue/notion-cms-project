"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

import { cn } from "@/lib/utils"
import { siteConfig } from "@/config/site.config"

export function MainNav() {
  const pathname = usePathname()

  return (
    <nav className="flex items-center gap-6">
      {siteConfig.nav.map((item) => {
        const isActive = pathname === item.href

        return (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              "text-sm font-medium transition-colors hover:text-foreground",
              isActive ? "text-foreground" : "text-muted-foreground"
            )}
          >
            {item.title}
          </Link>
        )
      })}
    </nav>
  )
}
