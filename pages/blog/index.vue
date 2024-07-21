<template>
  <div>
    <v-row v-if="dataLoaded">
      <v-col class="" v-for="post in posts" :key="post.title+post.date" cols="12" md="6" >
        <div class="h-100">
          <BlogCard :post="post" />
        </div>
      </v-col>
    </v-row>
    <div v-else-if="errorOccured" style="color: red;">Error occured.</div>
    <div v-else>Loading blog posts...</div>
  </div>
</template>

<script setup lang="ts">
import BlogCard from '~/components/BlogCard.vue';
import type { BlogPost } from '../../types/BlogPost'
const posts: Ref<BlogPost[]> = ref([])
const dataLoaded = ref(false)
const errorOccured = ref(false)

const fetchData = async():Promise<BlogPost[]> => {
  const data = await queryContent('blog').find()


  console.log(data)
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
    errorOccured.value = false
    dataLoaded.value = false
    posts.value = await fetchData()
    dataLoaded.value = true
  } catch(error) {
    errorOccured.value = true
    console.error(error)
  }
})
</script>

<style scoped></style>
