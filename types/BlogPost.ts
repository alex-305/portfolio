import type { ParsedContent } from "@nuxt/content"

export type BlogPost = {
  title: string
  content: ParsedContent
  date: Date
  tags: string[]
}
