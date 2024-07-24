<template>
  <div>
    <ContentItemCard link :to="props.post.path" :tags="props.post.tags">
      <v-card-title :class="'text-'+widthHeader" class="d-flex justify-center rounded-lg pa-0">{{
        props.post.title
      }}</v-card-title>
      <v-divider></v-divider>
      <v-card-text style="height: 200px;" class="overflow-elipsis">
        <ContentRenderer :value="props.post.content as ParsedContent" />
      </v-card-text>
    </ContentItemCard>
  </div>
</template>

<script setup lang="ts">
import ContentItemCard from './ContentItemCard.vue';
import type { BlogPost } from '../types/BlogPost'
import { useDisplay } from 'vuetify'
import type { ParsedContent } from '@nuxt/content';

const { width } = useDisplay()

const widthHeader = computed(()=> {
  if(width.value < 500) return 'h6'
  if(width.value < 1000) return 'h4'
  if(width.value < 2000) return 'h3'
  if(width.value < 3000) return 'h2'
  return 'h1'
})

const props = defineProps<{
  post: BlogPost
}>()
</script>
