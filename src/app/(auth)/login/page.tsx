import Link from "next/link"

import { LoginForm } from "@/components/features/auth"

export default function LoginPage() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-1 text-center">
        <h1 className="text-xl font-semibold">로그인</h1>
        <p className="text-sm text-muted-foreground">계정에 로그인하세요</p>
      </div>

      <LoginForm />

      <p className="text-center text-sm text-muted-foreground">
        계정이 없으신가요?{" "}
        <Link href="/signup" className="font-medium text-foreground underline-offset-4 hover:underline">
          회원가입
        </Link>
      </p>
    </div>
  )
}
