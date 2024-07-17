<template>
  <div>
    <ContentItemCard :tags="props.post.tags">
      <v-card-title class="d-flex justify-center rounded-lg pa-0">{{
        props.post.title
      }}</v-card-title>
      <v-card-text class="overflow-elipsis">
        <ContentRenderer :value="props.post.content"/>
      </v-card-text>
    </ContentItemCard>
  </div>
</template>

<script setup lang="ts">
import ContentItemCard from './ContentItemCard.vue';
import type { BlogPost } from '../types/BlogPost'

const props = defineProps<{
  post: BlogPost
}>()
</script>
