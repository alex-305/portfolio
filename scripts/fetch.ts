import type { Filter } from "@/types/Filter"

const baseQuery = (content:string, filter:Filter) => {
  return queryContent(content)
      .where({ 'title': { $icontains: filter.query ?? "" } })
      .where({ 'tags': { $contains: filter.tags } })
}

const paginatedQuery = (content:string, filter:Filter, itemsPerPage:number, pageNum:number) => {
  const directionValue = filter.sortDirection==='descending' ? -1 : 1
  return baseQuery(content, filter)
    .sort({ [filter.sortType]: directionValue, $sensitivity: 'base', ...(filter.pin && {pin: 1})})
    .skip(itemsPerPage*(pageNum-1))
    .limit(itemsPerPage)
}

export const fetchCount = async(content:string, filter:Filter) => {
    return await baseQuery(content, filter).count()
}

export const fetchData = async(content:string, filter:Filter, itemsPerPage:number, pageNum:number) => {
    return await paginatedQuery(content, filter, itemsPerPage, pageNum).find()
}