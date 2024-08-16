import type { ParsedContent } from "@nuxt/content"
export type Project = {
  title: string
  coverImageURL: string
  tags: string[]
  link?: string
  date: Date
  pin: boolean
}

export const parseProject = (data:ParsedContent[]) => {
  if(data && Array.isArray(data)) {
    return data.map((item:any) => ({
      title: item.title,
      coverImageURL: item.coverImageURL,
      tags: item.tags,
      link: item.link ?? "",
      date: item.date,
      pin: item.pin ?? false
    })) as Project[]
  }
  return []
}