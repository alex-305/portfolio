<template>
  <div>
    <v-row>
      <v-col v-for="post in posts" :key="post.id" cols="12">
        <div class="h-100">
          <BlogCard :post="post" />
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script setup lang="ts">
import BlogCard from '~/components/BlogCard.vue';
import type { BlogPost } from '../types/BlogPost'
const posts: Ref<BlogPost[]> = ref([])
const dataLoaded = ref(false)

const fetchData = async():Promise<BlogPost[]> => {
  const { data } = await useAsyncData('blogs',() => queryContent('/blog').find())


  console.log(data)
  if(data.value && Array.isArray(data.value)) {
    return data.value.map((item:any) => ({
      id: item.id,
      description: item.description,
      date: item.date,
      tags: item.tags,
      title: item.title,
      content: item
    })) as BlogPost[]
  }
  return []
}

onMounted(async() => {
  try {
    dataLoaded.value = false
    posts.value = await fetchData()
    dataLoaded.value = true
  } catch(error) {
    console.error(error)
  }
})
</script>

<style scoped></style>
