---
description: src/components/에 TypeScript + Tailwind CSS 기반 React 함수형 컴포넌트를 새로 생성합니다
argument-hint: [component-name]
---

`$1` 이름으로 새 React 컴포넌트를 생성하세요.

## 입력 검증

- `$1`이 비어 있으면 컴포넌트 이름을 입력하라고 안내하고 중단하세요.
- `$1`을 PascalCase로 변환하세요 (예: `user-card`, `user_card`, `userCard` → `UserCard`).

## 생성 위치

- 파일 경로: `src/components/<PascalCase 이름>.tsx`
- 이미 같은 이름의 파일이 있으면 그대로 덮어쓰지 말고 사용자에게 확인하세요.

## 템플릿 규칙

- TypeScript 함수형 컴포넌트로 작성하고, named export를 사용하세요 (`export function ComponentName(...)`).
- Props는 `interface ComponentNameProps`로 정의하고, 최소한 `className?: string`을 포함하세요.
- 스타일링은 Tailwind CSS 유틸리티 클래스를 사용하고, `className` 병합에는 `src/lib/utils.ts`의 `cn` 헬퍼를 사용하세요 (없다면 `import { cn } from "@/lib/utils"`로 가정).
- 들여쓰기는 2칸을 사용하세요.
- 상호작용(useState, 이벤트 핸들러 등)이 필요한 경우에만 파일 최상단에 `"use client"`를 추가하세요. 정적 컴포넌트라면 생략하세요.
- 불필요한 주석은 작성하지 마세요. 꼭 필요한 경우에만 한국어로 간단히 작성하세요.

## 기본 템플릿 예시

```tsx
import { cn } from "@/lib/utils"

interface ComponentNameProps {
  className?: string
}

export function ComponentName({ className }: ComponentNameProps) {
  return (
    <div className={cn("", className)}>
      ComponentName
    </div>
  )
}
```

## 완료 후

- 생성한 파일 경로를 알려주세요.
- 같은 폴더에 `index.ts`가 있다면 새 컴포넌트의 export를 추가할지 물어보세요.
