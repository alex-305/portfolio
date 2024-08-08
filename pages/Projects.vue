<template>
  <div>
    <FilterContent storeSrc="project"/>
    <div v-if="errorOccured" class="text-h2" style="color: #F44336;">Error occured.</div>
    <v-row>
      <v-col v-if="dataLoaded" v-for="item in projects" :key="item.title+item.coverImageURL" cols="12" sm="6" md="4" lg="3" xl="2">
        <ProjectCard :item="item" />
      </v-col>
      <v-col v-else v-for="_ in 24" cols="12" sm="6" md="4" lg="3" xl="2">
        <div class="d-flex justify-center align-center h-100">
          <v-skeleton-loader class="w-90 h-90" width="300" height="250"/>
        </div>
      </v-col>
    </v-row>
    <div>
      <v-pagination v-model="pageNum" @click="fetch" :length="pageCount"></v-pagination>
    </div>
  </div>
</template>

<script setup lang="ts">
import ProjectCard from '~/components/ProjectCard.vue';
import type { Project } from '../types/Project';
import { useFilterStore } from '~/stores/filterStore';
import type { ParsedContent } from '@nuxt/content';
import { debounce } from '~/scripts/debounce';
import { fetchData, fetchCount } from '~/scripts/fetch';

const store = useFilterStore()

const itemsPerPage = 6
const pageNum = ref(1)
const itemCount = ref(0)

const filter = store.projectsFilter
const projects:Ref<Project[]> = ref([])
const dataLoaded = ref(false)
const errorOccured = ref(false)
const debouncing = ref(false)

const pageCount = computed(() => {
  return Math.ceil(itemCount.value/itemsPerPage)
})

watch(filter, async(newFilter, oldFilter) => {
  try {
    await fetch(true)
  } catch(error) {
    console.error(error)
  }
})

const parseProject = (data:ParsedContent[]) => {
  if(data && Array.isArray(data)) {
    return data.map((item:any) => ({
      title: item.title,
      coverImageURL: item.coverImageURL,
      tags: item.tags,
      link: item.link ?? "",
      date: item.date
    })) as Project[]
  }
  return []
}

const debouncedFetch = debounce(fetchData, 300, debouncing)

const fetch = async(debounce:boolean = false) => {
  try {
    dataLoaded.value = false
    errorOccured.value = false
    let data:ParsedContent[]
    if(debounce) {
      data = await debouncedFetch('projects', filter, itemsPerPage, pageNum.value)
    } else {
      data = await fetchData('projects', filter, itemsPerPage, pageNum.value)
    }
    projects.value = parseProject(data)
    itemCount.value = await fetchCount('projects', filter)
    dataLoaded.value = true
  } catch(error) {
    errorOccured.value = true
    console.error(error)
  }
}

onBeforeMount(async() => {
  try {
    errorOccured.value = false
    dataLoaded.value = false
    fetch()
    dataLoaded.value = true
  } catch(error) {
    errorOccured.value = true
    console.error(error)
  }

})



</script>

<style scoped></style>
