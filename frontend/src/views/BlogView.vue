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
import BlogCard from '@/components/BlogCard.vue'
import type { BlogPost } from '@/types/BlogPost'
import { ref } from 'vue'
import type { Ref } from 'vue'
const posts: Ref<BlogPost[]> = ref([
  {
    id: 1,
    title: 'First Blog Post',
    content:
      "Something that happened today is I went for a walk. You wouldn't believe it but something crazy came to me at the moment",
    date: new Date(),
    tags: ['Personal', 'Cool']
  },
  {
    id: 2,
    title: 'Second Blog Post',
    content: "something something...",
    date: new Date(),
    tags: ['Game']
  },
  {
    id: 3,
    title: 'Third Thing',
    content: "idk a third blog",
    date: new Date(),
    tags: ['Website']
  }
])
</script>

<style scoped></style>
