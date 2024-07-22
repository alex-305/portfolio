<template>
    <div v-if="errorOccured">
        <div class="text-body-1" style="color: red;">Error occured.</div>
    </div>
    <div v-if="dataLoaded">
        <div class="d-flex text-h4 justify-center">
            {{ post?.title ?? "untitled" }}
        </div>
        <div class="d-flex text-h6 justify-center">
          By {{ "Alex Gonzalez" }}
        </div>
        <div class="py-3">
          <v-divider></v-divider>
        </div>
        <main>
          <div class="px-5">
            <ContentRenderer :value="post.content as ParsedContent"/>
          </div>
        </main>
    </div>
</template>

<script setup lang="ts">
import type { BlogPost } from '~/types/BlogPost';
import type { ParsedContent } from '@nuxt/content';

const { path } = useRoute()
const post: Ref<BlogPost> = ref<BlogPost>({
    title: '',
    date: new Date(),
    tags: [],
    content: "",
    path: '',

})
const dataLoaded = ref(false)
const errorOccured = ref(false)

const fetchData = async():Promise<BlogPost> => {
  console.log("path: " + path)
  const data = await queryContent(path).findOne()

  console.log(data)
    return {
        title: data.title,
        date: data.date,
        tags: data.tags,
        content: data,
        path: data._path
    } as BlogPost
}

onBeforeMount(async() => {
  try {
    errorOccured.value = false
    dataLoaded.value = false
    post.value = await fetchData()
    dataLoaded.value = true
  } catch(error) {
    errorOccured.value = true
    console.error(error)
  }
})
</script>