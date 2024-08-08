<template>
  <div>
    <FilterContent storeSrc="blog"/>
    <v-row v-if="dataLoaded">
      <v-col class="" v-for="post in posts" :key="post.title+post.date" cols="12" sm="6" md="4" lg="3" xl="2" >
        <div>
          <BlogCard :post="post" />
        </div>
      </v-col>
    </v-row>
    <div v-else-if="debouncing" class="d-flex justify-center">
      <v-progress-circular indeterminate color="primary" size="200" width="10"/>
    </div>
    <div v-else-if="errorOccured" style="color: red;">Error occured.</div>
    <div v-else>
      <v-row>
        <v-col v-for="i in articlesPerPage" :key="i" cols="12" sm="6" md="4" lg="3" xl="2">
          <v-skeleton-loader height="200" width="300"></v-skeleton-loader>
        </v-col>
      </v-row>
    </div>
    <div>
      <v-pagination v-model="pageNum" @click="refetch" :length="pageCount"></v-pagination>
    </div>
  </div>
</template>

<script setup lang="ts">
import BlogCard from '~/components/BlogCard.vue';
import type { BlogPost } from '../../types/BlogPost'
import { useFilterStore } from '~/stores/filterStore';
import { debounce } from '~/scripts/debounce';

const filter = useFilterStore().blogFilter

const articlesPerPage = 12
const pageNum = ref(1)
const blogCount = ref(0)

const posts: Ref<BlogPost[]> = ref([])
const dataLoaded = ref(false)
const errorOccured = ref(false)
const debouncing = ref(true)

watch(filter, async(newFilter, oldFilter) => {
  try {
    refetch()
  } catch(error) {
    console.error(error)
  }
})

const pageCount = computed(() => {
  const pageCount = Math.ceil(blogCount.value/articlesPerPage)
  return pageCount
})

const fetchCount = async() => {
  return await queryContent('blog').count()
}

const fetchData = async():Promise<BlogPost[]> => {
  const dir = filter.sortDirection==='descending' ? -1 : 1
  const data = await queryContent('blog')
    .where({ 'title': { $icontains: filter.query ?? "" } })
    .where({ 'tags': { $contains: filter.tags } })
    .sort({[filter.sortType]: dir})
    .skip(articlesPerPage*(pageNum.value-1))
    .limit(articlesPerPage)
    .find()

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
const debouncedFetch = debounce(fetchData, 300)
const refetch = async() => {
  try {
    dataLoaded.value = false
    errorOccured.value = false
    posts.value = await debouncedFetch()
    dataLoaded.value = true
  } catch(error) {
    errorOccured.value = true
    console.error(error)
  }
}

const fetch = async() => {
  try {
    dataLoaded.value = false
    errorOccured.value = false
    posts.value = await fetchData()
    blogCount.value = await fetchCount()
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
