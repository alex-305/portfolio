import type { ParsedContent } from "@nuxt/content"

export type BlogPost = {
  title: string
  content: ParsedContent | string
  date: Date
  tags: string[]
  path: string
}
