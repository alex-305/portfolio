export type Filter = {
    query:string
    tags:string[]
    sortType:"title" | "date"
    sortDirection:"ascending" | "descending"
}

export const defaultFilter:Filter = {
    query:"",
    tags: [],
    sortType: "date",
    sortDirection: "descending"
}

export type FilterTypes = "project" | "blog"