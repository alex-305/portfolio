import type { ParsedContent } from "@nuxt/content"

export type BlogPost = {
  id: number
  title: string
  content: ParsedContent
  date: Date
  tags: string[]
}
