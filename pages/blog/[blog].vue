<template>
    <div v-if="errorOccured">
        <div class="text-body-1" style="color: red;">Error occured.</div>
    </div>
    <div v-if="dataLoaded">
        <div class="d-flex text-h4 justify-center">
            {{ post?.title ?? "untitled" }}
        </div>
        <div class="d-flex text-h6 justify-center">
          By {{ "Alex Gonzalez" }} on {{ formatDate(post.date) }}
        </div>
        <div class="py-3">
          <v-divider></v-divider>
        </div>
        <main>
          <div class="px-5">
            <v-card class="py-5 px-10 mx-2 mt-1 mb-10" elevation="5">
              <ContentRenderer :value="post.content as ParsedContent"/>
            </v-card>
          </div>
        </main>
    </div>
</template>

<script setup lang="ts">
import type { BlogPost } from '~/types/BlogPost';
import type { ParsedContent } from '@nuxt/content';
import { formatDate } from '~/scripts/formatDate';

const { path } = useRoute()
const post: Ref<BlogPost> = ref<BlogPost>({
    title: '',
    date: new Date(),
    tags: [],
    content: "",
    path: '',
    pin: false
})

const dataLoaded = ref(false)
const errorOccured = ref(false)

const fetchData = async():Promise<BlogPost> => {
  const data = await queryContent(path).findOne()

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
    useHead({ title: post.value.title })
  } catch(error) {
    errorOccured.value = true
    console.error(error)
  }
})
</script>