export interface ApiResponse<T> {
  success: boolean
  data: T
  message?: string
}

export type StatusType = "idle" | "loading" | "success" | "error"
