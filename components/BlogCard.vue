<template>
  <div>
    <ContentItemCard link :to="props.post.path" :tags="props.post.tags">
      <v-card-title class="d-flex text-h3 justify-center rounded-lg pa-0">{{
        props.post.title
      }}</v-card-title>
      <v-divider></v-divider>
      <v-card-text style="height: 200px;" class="overflow-elipsis">
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
