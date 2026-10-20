import axios from "axios"

import { useAuthStore } from "@/store/auth.store"
import { envConfig } from "@/config/env.config"

export const apiClient = axios.create({
  baseURL: envConfig.apiUrl,
  timeout: 10000,
})

apiClient.interceptors.request.use((config) => {
  const token = useAuthStore.getState().token

  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }

  return config
})

apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      useAuthStore.getState().logout()
    }

    return Promise.reject(error)
  }
)
