<template>
  <div>
    <ContentItemCard :tags="props.post.tags">
      <v-card-title class="d-flex justify-center rounded-lg pa-0">{{
        props.post.title
      }}</v-card-title>
      <v-card-text class="overflow-elipsis">{{ props.post.content }}</v-card-text>
    </ContentItemCard>
  </div>
</template>

<script setup lang="ts">
import type { BlogPost } from '@/types/BlogPost'
import ContentItemCard from './ContentItemCard.vue'

const props = defineProps<{
  post: BlogPost
}>()
</script>
