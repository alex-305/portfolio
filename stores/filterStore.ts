import { defineStore } from "pinia";
import type { Filter, FilterTypes } from "@/types/Filter";
import { defaultFilter } from "@/types/Filter";

export const useFilterStore = defineStore('filter',() => {
    
    const blogFilter:Ref<Filter> = ref(JSON.parse(JSON.stringify(defaultFilter)))
    const projectsFilter:Ref<Filter> = ref(JSON.parse(JSON.stringify(defaultFilter)))

    const resetFilter = (f:Filter) => { Object.assign(f, JSON.parse(JSON.stringify(defaultFilter))) }

    const filtersEqual = (f1:Filter, f2:Filter) => {
        return f1.query === f2.query
        && JSON.stringify(f1.tags) === JSON.stringify(f2.tags)
        && f1.sortDirection === f2.sortDirection
        && f1.sortType === f2.sortType
        && f1.pin === f2.pin
    }

    const addChip = (f:Filter, chip:string):boolean => {
        let success = false
        if(f.tags.indexOf(chip)===-1) {
            f.tags.push(chip)
            success = true
        }
        return success
    }

    const isDefault = (fil:Filter):boolean => { 
        const def = filtersEqual(fil, defaultFilter)
        fil.pin = def ? fil.pin : false
        return def
     }

    const getFilter = (str:FilterTypes) => {
        switch(str) {
            case "project":
                return projectsFilter
            case "blog":
                return blogFilter
        }
    }

    return { blogFilter, projectsFilter, getFilter, resetFilter, filtersEqual, isDefault, addChip }

})