import { defineStore } from "pinia";

export const useChipsStore = defineStore('chips',() => {
    const chips: Ref<{ blogs:string[], projects:string[] }> = ref({
        blogs: [],
        projects: []
    })

    return { chips }

})