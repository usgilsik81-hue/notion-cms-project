import { z } from "zod"

export const userSchema = z.object({
  id: z.string(),
  name: z.string().min(2, "이름은 2자 이상이어야 합니다"),
  email: z.string().email("올바른 이메일 형식이 아닙니다"),
  role: z.enum(["admin", "user"]),
})

export type UserFormValues = z.infer<typeof userSchema>
