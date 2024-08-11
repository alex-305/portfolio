<template>
    <div>
        <FilterContent :loading="debouncing || !dataLoaded" class="mb-8" :storeSrc="filterType"/>
        <v-row>
            <v-col class="mt-0" v-for="(item, i) in dataLoaded ? items : itemCount > itemsPerPage ? itemsPerPage : itemCount" :key="i" cols="12" sm="12" md="6" lg="4" xl="3" >
                <div v-if="filterType==='blog'">
                    <BlogCard :loading="!dataLoaded" :item="item as BlogPost" />
                </div>
                <div v-else>
                    <ProjectCard :loading="!dataLoaded" :item="item as Project"/>
                </div>
            </v-col>
        </v-row>
        <div v-if="!store.isDefault(filter)" class="text-body-1 text-center">
            <span v-if="itemCount!=0">{{ itemCount }}</span>
            <span v-else>No</span>
            results found.
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

const countFetched = ref(false)

const fetch = async(debounce:boolean = false) => {
try {
    countFetched.value = false
    dataLoaded.value = false
    errorOccured.value = false
    let data:ParsedContent[]

    itemCount.value = await fetchCount(props.filterType, filter)

    countFetched.value = true
    if(debounce) {
        data = await debouncedFetch(props.filterType, filter, props.itemsPerPage, pageNum.value)
    } else {
        data = await fetchData(props.filterType, filter, props.itemsPerPage, pageNum.value)
    }

    items.value = parse(data)
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
