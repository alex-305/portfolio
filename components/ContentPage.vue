<template>
    <div>
        <FilterContent :loading="debouncing || !dataLoaded" class="mb-3" :storeSrc="filterType"/>
        <v-row v-if="dataLoaded || debouncing">
        <v-col class="mt-0" v-for="item in items" :key="item.title+item.date" cols="12" sm="12" md="6" lg="4" xl="3" >
            <div v-if="filterType==='blog'">
                <BlogCard :item="item as BlogPost" />
            </div>
            <div v-else>
                <ProjectCard :item="item as Project"/>
            </div>
        </v-col>
        </v-row>
        <div v-else-if="errorOccured" class="text-h3" style="color: red;">Error occured.</div>
        <div v-else>
        <v-row>
            <v-col v-for="i in itemsPerPage" :key="i" cols="12" sm="12" md="6" lg="4" xl="3">
            <v-skeleton-loader height="200" width="300"></v-skeleton-loader>
            </v-col>
        </v-row>
        </div>
        <div>
            <v-pagination v-if="pageCount>1" v-model="pageNum" @click="fetch" :length="pageCount"></v-pagination>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useFilterStore } from '~/stores/filterStore';
import { debounce } from '~/scripts/debounce';
import type { ParsedContent } from '@nuxt/content';
import { fetchData, fetchCount } from '~/scripts/fetch';
import type { FilterTypes } from '~/types/Filter';
import type { ContentTypes } from '~/types/Content';
import { parseProject, type Project } from '~/types/Project';
import { parseBlog, type BlogPost } from '~/types/BlogPost';

const store = useFilterStore()
const props = withDefaults(defineProps<{
    filterType: FilterTypes,
    itemsPerPage?: number
}>(), {
    itemsPerPage: 6
})

const filter = props.filterType==="project" ? store.projectsFilter : store.blogFilter

const pageNum = ref(1)

const items: Ref<ContentTypes[]> = ref([])
const dataLoaded = ref(false)
const errorOccured = ref(false)
const debouncing = ref(false)
const oldQuery = ref("")

watch(filter, async(newFilter, oldFilter) => {
    console.log("FILTER CHANGED")
    try {
        if(newFilter.query!==oldQuery.value) {
            await fetch(true)
        } else {
            await fetch()
        }
    } catch(error) {
        console.error(error)
    } finally {
        oldQuery.value = filter.query
    }
})
const itemCount = ref(0)
const pageCount = computed(() => {
    return Math.ceil(itemCount.value/props.itemsPerPage)
})

const parse = (data:ParsedContent[]) => {
    if(props.filterType==="project") {
        return parseProject(data)
    }
    return parseBlog(data)
}

const debouncedFetch = debounce(fetchData, 300, debouncing)

const fetch = async(debounce:boolean = false) => {
try {
    dataLoaded.value = false
    errorOccured.value = false
    let data:ParsedContent[]

    if(debounce) {
        data = await debouncedFetch(props.filterType, filter, props.itemsPerPage, pageNum.value)
    } else {
        data = await fetchData(props.filterType, filter, props.itemsPerPage, pageNum.value)
    }

    items.value = parse(data)
    itemCount.value = await fetchCount(props.filterType, filter)
    dataLoaded.value = true
} catch(error) {
    errorOccured.value = true
    console.error(error)
}
}

onBeforeMount(async() => {
fetch()
})
</script>

<style scoped></style>
