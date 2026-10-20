"use client"

import Link from "next/link"
import { Menu, Moon, Sun, X } from "lucide-react"

import { Button } from "@/components/ui/button"
import { MainNav } from "@/components/layout/MainNav"
import { useTheme } from "@/hooks/useTheme"
import { useUiStore } from "@/store/ui.store"
import { siteConfig } from "@/config/site.config"

export function Header() {
  const { isDark, toggleTheme, mounted } = useTheme()
  const { isMobileMenuOpen, toggleMobileMenu } = useUiStore()

  return (
    <header className="sticky top-0 z-40 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4">
        <div className="flex items-center gap-6">
          <Link href="/" className="text-base font-semibold">
            {siteConfig.name}
          </Link>
          <div className="hidden md:block">
            <MainNav />
          </div>
        </div>

        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            aria-label="테마 전환"
            onClick={toggleTheme}
          >
            {mounted && isDark ? <Sun className="size-4" /> : <Moon className="size-4" />}
          </Button>

          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            aria-label="모바일 메뉴 열기"
            onClick={toggleMobileMenu}
          >
            {isMobileMenuOpen ? <X className="size-4" /> : <Menu className="size-4" />}
          </Button>
        </div>
      </div>

      {isMobileMenuOpen ? (
        <div className="border-t px-4 py-3 md:hidden">
          <MainNav />
        </div>
      ) : null}
    </header>
  )
}
