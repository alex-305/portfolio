<template>
  <div>
    <SearchContent storeSrc="blog"/>
    <v-row v-if="dataLoaded">
      <v-col class="" v-for="post in posts" :key="post.title+post.date" cols="12" sm="6" md="4" lg="3" xl="2" >
        <div>
          <BlogCard :post="post" />
        </div>
      </v-col>
    </v-row>
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

const articlesPerPage = 12
const pageNum = ref(1)
const blogCount = ref(0)

const posts: Ref<BlogPost[]> = ref([])
const dataLoaded = ref(false)
const errorOccured = ref(false)

const pageCount = computed(() => {
  const pageCount = Math.ceil(blogCount.value/articlesPerPage)
  return pageCount
})

const fetchCount = async() => {
  return await queryContent('blog').count()
}

const refetch = async() => {
  posts.value = await fetchData()
  dataLoaded.value = true
  
}

const fetchData = async():Promise<BlogPost[]> => {
  errorOccured.value = false
  dataLoaded.value = false
  const data = await queryContent('blog').sort({date: -1}).skip(articlesPerPage*(pageNum.value-1)).limit(articlesPerPage).find()

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

onBeforeMount(async() => {
  try {
    posts.value = await fetchData()
    blogCount.value = await fetchCount()
    dataLoaded.value = true
  } catch(error) {
    errorOccured.value = true
    console.error(error)
  }
})
</script>

<style scoped></style>
