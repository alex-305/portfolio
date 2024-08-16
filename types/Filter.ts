export type Filter = {
    query:string
    tags:string[]
    sortType:"title" | "date"
    sortDirection:"ascending" | "descending"
    pin:boolean
}

export const defaultFilter:Filter = {
    query:"",
    tags: [],
    sortType: "date",
    sortDirection: "descending",
    pin: true
}

export type FilterTypes = "project" | "blog"