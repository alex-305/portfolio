import type { Filter } from "@/types/Filter"
export const fetchCount = async(content:string, filter:Filter) => {
    return await queryContent(content)
      .where({ 'title': { $icontains: filter.query ?? "" } })
      .where({ 'tags': { $contains: filter.tags } })
      .count()
}
  
export const fetchData = async(content:string, filter:Filter, articlesPerPage:number, pageNum:number) => {
    const directionValue = filter.sortDirection==='descending' ? -1 : 1

    return await queryContent(content)
      .where({ 'title': { $icontains: filter.query ?? "" } })
      .where({ 'tags': { $contains: filter.tags } })
      .sort({[filter.sortType]: directionValue, $sensitivity: 'base'})
      .skip(articlesPerPage*(pageNum-1))
      .limit(articlesPerPage)
      .find()
}