export interface NavItem {
  title: string
  href: string
}

export const siteConfig = {
  name: "Startup Kit",
  description: "범용 웹 스타트업 킷",
  url: "https://example.com",
  nav: [
    { title: "홈", href: "/" },
    { title: "대시보드", href: "/dashboard" },
  ] satisfies NavItem[],
  footerLinks: [
    { title: "이용약관", href: "/terms" },
    { title: "개인정보처리방침", href: "/privacy" },
  ] satisfies NavItem[],
  links: {
    github: "https://github.com",
    twitter: "https://twitter.com",
  },
}
