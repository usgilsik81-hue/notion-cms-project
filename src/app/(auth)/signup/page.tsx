import Link from "next/link"

import { SignupForm } from "@/components/features/auth"

export default function SignupPage() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-1 text-center">
        <h1 className="text-xl font-semibold">회원가입</h1>
        <p className="text-sm text-muted-foreground">새 계정을 만들어보세요</p>
      </div>

      <SignupForm />

      <p className="text-center text-sm text-muted-foreground">
        이미 계정이 있으신가요?{" "}
        <Link href="/login" className="font-medium text-foreground underline-offset-4 hover:underline">
          로그인
        </Link>
      </p>
    </div>
  )
}
