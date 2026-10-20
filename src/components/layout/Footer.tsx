"use client"

import Link from "next/link"
import { useEffect, useState } from "react"

import { siteConfig } from "@/config/site.config"

export function Footer() {
  // 빌드 시점 prerender에서 고정되지 않도록 마운트 이후에 연도를 계산
  const [year, setYear] = useState<number>()

  useEffect(() => {
    setYear(new Date().getFullYear())
  }, [])

  return (
    <footer className="border-t">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 py-6 text-sm text-muted-foreground sm:flex-row">
        <p>
          © {year ?? ""} {siteConfig.name}. All rights reserved.
        </p>

        <nav className="flex items-center gap-4">
          {siteConfig.footerLinks.map((link) => (
            <Link key={link.href} href={link.href} className="hover:text-foreground">
              {link.title}
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  )
}
