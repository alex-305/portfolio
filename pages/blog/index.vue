<template>
  <div>
    <FilterContent class="mb-3" storeSrc="blog"/>
    <v-row v-if="dataLoaded">
      <v-col class="mt-0" v-for="post in posts" :key="post.title+post.date" cols="12" sm="12" md="6" lg="4" xl="3" >
        <div>
          <BlogCard :post="post" />
        </div>
      </v-col>
    </v-row>
    <div v-else-if="debouncing" class="d-flex justify-center">
      <v-progress-circular indeterminate color="primary" size="200" width="10"/>
    </div>
    <div v-else-if="errorOccured" class="text-h3" style="color: red;">Error occured.</div>
    <div v-else>
      <v-row>
        <v-col v-for="i in articlesPerPage" :key="i" cols="12" sm="12" md="6" lg="4" xl="3">
          <v-skeleton-loader height="200" width="300"></v-skeleton-loader>
        </v-col>
      </v-row>
    </div>
    <div>
      <v-pagination v-model="pageNum" @click="fetch" :length="pageCount"></v-pagination>
    </div>
  </div>
</template>

<script setup lang="ts">
import BlogCard from '~/components/BlogCard.vue';
import type { BlogPost } from '../../types/BlogPost'
import { useFilterStore } from '~/stores/filterStore';
import { debounce } from '~/scripts/debounce';
import type { ParsedContent } from '@nuxt/content';
import { fetchData, fetchCount } from '~/scripts/fetch';

const filter = useFilterStore().blogFilter

const articlesPerPage = 12
const pageNum = ref(1)

const posts: Ref<BlogPost[]> = ref([])
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
const articleCount = ref(0)
const pageCount = computed(() => {
  return Math.ceil(articleCount.value/articlesPerPage)
})

const parseBlog = (data: ParsedContent[]) => {
  if(data && Array.isArray(data)) {
    return data.map((item:any) => ({
      description: item.description,
      date: item.date,
      tags: item.tags,
      title: item.title,
      content: item,
      path: item._path
    })) as BlogPost[]
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
      data = await debouncedFetch('blog', filter, articlesPerPage, pageNum.value)
    } else {
      data = await fetchData('blog', filter, articlesPerPage, pageNum.value)
    }
    posts.value = parseBlog(data)
    articleCount.value = await fetchCount('blog', filter)
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
