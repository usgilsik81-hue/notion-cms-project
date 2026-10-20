---
description: src/app/에 새 Next.js App Router 페이지를 생성하고 적절한 레이아웃을 연결합니다
argument-hint: [route-path] (예: about, dashboard/settings, blog/[slug])
---

`$1`로 지정된 경로에 새 페이지를 생성하세요.

## 입력 검증

- `$1`이 비어 있으면 라우트 경로를 입력하라고 안내하고 중단하세요.
- `$1`은 슬래시로 구분된 경로로 취급하세요 (예: `blog/[slug]`는 동적 라우트).

## 레이아웃 판단

이 프로젝트에는 레이아웃 3종이 있습니다: `src/components/layouts/MainLayout.tsx`, `DashboardLayout.tsx`, `AuthLayout.tsx`.

- 경로가 `dashboard`로 시작하면 `src/app/dashboard/layout.tsx`가 이미 `DashboardLayout`을 적용하고 있으니, 새 `page.tsx`는 레이아웃을 다시 감싸지 말고 콘텐츠만 작성하세요.
- 경로가 `login`, `signup` 등 인증 관련이면 `src/app/(auth)/` 라우트 그룹 안에 만들고, `(auth)/layout.tsx`가 `AuthLayout`을 이미 적용하므로 `page.tsx`에서 레이아웃을 감싸지 마세요.
- 그 외 최상위 페이지는 `src/app/page.tsx`의 패턴처럼 `page.tsx`에서 직접 `MainLayout`으로 감싸세요.
- 어느 쪽에도 해당하지 않으면 사용자에게 어떤 레이아웃을 쓸지 물어보세요.

## 생성 위치

- 파일 경로: `src/app/<경로>/page.tsx`
- 라우트 그룹(`(auth)` 등) 생성이 필요한 경우가 아니면 기존 폴더 구조를 그대로 따르세요.
- 이미 같은 경로에 `page.tsx`가 있으면 덮어쓰지 말고 사용자에게 확인하세요.

## 템플릿 규칙

- TypeScript로 작성하고 기본 export 함수형 컴포넌트를 사용하세요 (`export default function PageName() { ... }`).
- 컴포넌트 이름은 경로를 PascalCase로 변환하고 `Page`를 접미사로 붙이세요 (예: `about` → `AboutPage`).
- 스타일링은 Tailwind CSS 유틸리티 클래스를 사용하고, 들여쓰기는 2칸을 사용하세요.
- `src/components/ui`에 이미 있는 컴포넌트(Card, Badge 등)를 적극 재사용하세요. 없는 걸 새로 만들지 마세요.
- 동적 라우트(`[slug]` 등)라면 `params`를 받는 시그니처로 작성하세요.
- 불필요한 주석은 작성하지 마세요.

## MainLayout을 직접 감싸는 경우 예시

```tsx
import { MainLayout } from "@/components/layouts/MainLayout"

export default function AboutPage() {
  return (
    <MainLayout>
      <div className="flex flex-col gap-6">
        <h1 className="text-2xl font-semibold tracking-tight">제목</h1>
      </div>
    </MainLayout>
  )
}
```

## dashboard/auth 그룹 하위인 경우 예시 (레이아웃이 이미 적용됨)

```tsx
export default function SettingsPage() {
  return (
    <div className="flex flex-col gap-6">
      <h1 className="text-2xl font-semibold tracking-tight">제목</h1>
    </div>
  )
}
```

## 완료 후

- 생성한 파일 경로와 접근 URL을 알려주세요.
- 상단 네비게이션에 추가해야 하면 `src/config/site.config.ts`의 `nav` 배열에 링크를 추가할지 물어보세요.
