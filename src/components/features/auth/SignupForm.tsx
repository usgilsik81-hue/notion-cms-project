"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { toast } from "sonner"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { signupSchema, type SignupFormValues } from "@/schemas/auth.schema"

export function SignupForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SignupFormValues>({
    resolver: zodResolver(signupSchema),
  })

  const onSubmit = async (values: SignupFormValues) => {
    // TODO: 실제 회원가입 API 연동
    toast.success(`${values.name}님, 회원가입을 시도했습니다`)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
      <div className="flex flex-col gap-2">
        <Label htmlFor="name">이름</Label>
        <Input id="name" {...register("name")} />
        {errors.name ? (
          <p className="text-sm text-destructive">{errors.name.message}</p>
        ) : null}
      </div>

      <div className="flex flex-col gap-2">
        <Label htmlFor="email">이메일</Label>
        <Input id="email" type="email" placeholder="you@example.com" {...register("email")} />
        {errors.email ? (
          <p className="text-sm text-destructive">{errors.email.message}</p>
        ) : null}
      </div>

      <div className="flex flex-col gap-2">
        <Label htmlFor="password">비밀번호</Label>
        <Input id="password" type="password" {...register("password")} />
        {errors.password ? (
          <p className="text-sm text-destructive">{errors.password.message}</p>
        ) : null}
      </div>

      <div className="flex flex-col gap-2">
        <Label htmlFor="confirmPassword">비밀번호 확인</Label>
        <Input id="confirmPassword" type="password" {...register("confirmPassword")} />
        {errors.confirmPassword ? (
          <p className="text-sm text-destructive">{errors.confirmPassword.message}</p>
        ) : null}
      </div>

      <Button type="submit" disabled={isSubmitting} className="mt-2">
        회원가입
      </Button>
    </form>
  )
}
