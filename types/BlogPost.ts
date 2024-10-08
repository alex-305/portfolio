import type { ParsedContent } from "@nuxt/content"

export type BlogPost = {
  title: string
  content: ParsedContent | string
  date: Date
  tags: string[]
  path: string
  pin: boolean
}

export const parseBlog = (data: ParsedContent[]) => {
  if(data && Array.isArray(data)) {
    return data.map((item:any) => ({
      description: item.description,
      date: item.date,
      tags: item.tags,
      title: item.title,
      content: item,
      path: item._path,
      pin: item.pin ?? false
    })) as BlogPost[]
  }
  return []
}
