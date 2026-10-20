"use client"

import { useQuery } from "@tanstack/react-query"

import { apiClient } from "@/lib/api/client"

export function useFetch<T>(key: string, url: string) {
  return useQuery<T>({
    queryKey: [key, url],
    queryFn: async () => {
      const { data } = await apiClient.get<T>(url)
      return data
    },
  })
}
