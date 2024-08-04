import { defineStore } from "pinia";
import type { Filter } from "@/types/Filter";

export const useFilterStore = defineStore('filter',() => {
    
    const blogFilter:Ref<Filter> = ref({
        query: "",
        tags: []
    })
    const projectsFilter:Ref<Filter> = ref({
        query: "",
        tags: []
    })

    const getFilter = (str:string) => {
        switch(str) {
            case "project":
                return projectsFilter
            case "blog":
                return blogFilter
            default:
                return null
        }
    }

    return { blogFilter, projectsFilter, getFilter }

})