import Link from "next/link"

import { MainLayout } from "@/components/layouts/MainLayout"
import {
  Badge,
  Button,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui"

const features = [
  {
    title: "레이아웃 시스템",
    description: "Header, Footer, Sidebar를 조합한 3가지 레이아웃 제공",
  },
  {
    title: "shadcn/ui 컴포넌트",
    description: "button, input, card 등 13개 UI 프리미티브 설치 완료",
  },
  {
    title: "상태 관리",
    description: "Zustand 기반 auth, ui, theme 스토어",
  },
  {
    title: "폼 검증",
    description: "React Hook Form + Zod로 타입 안전한 폼 처리",
  },
]

export default function Home() {
  return (
    <MainLayout>
      <div className="flex flex-col gap-10">
        <section className="flex flex-col items-center gap-4 text-center">
          <Badge>v1.0.0</Badge>
          <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            범용 웹 스타트업 킷
          </h1>
          <p className="max-w-xl text-muted-foreground">
            Next.js 16 + React 19 기반으로 레이아웃, UI 컴포넌트, 상태 관리,
            테마 시스템까지 미리 구성된 프로덕션-레디 스타터입니다.
          </p>
          <div className="flex gap-3">
            <Button nativeButton={false} render={<Link href="/dashboard" />}>
              대시보드 보기
            </Button>
            <Button
              variant="outline"
              nativeButton={false}
              render={<Link href="/login" />}
            >
              로그인 페이지
            </Button>
          </div>
        </section>

        <section className="grid gap-4 sm:grid-cols-2">
          {features.map((feature) => (
            <Card key={feature.title}>
              <CardHeader>
                <CardTitle>{feature.title}</CardTitle>
                <CardDescription>{feature.description}</CardDescription>
              </CardHeader>
              <CardContent />
            </Card>
          ))}
        </section>
      </div>
    </MainLayout>
  )
}
