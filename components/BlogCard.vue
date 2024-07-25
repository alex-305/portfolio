<template>
  <div>
    <ContentItemCard :tags="props.post.tags">
      <v-card variant="tonal">
        <div style="height: 300px;" class="d-flex flex-column align-center justify-center">
          <v-card-title style="white-space: normal; text-align: center; font-weight: bold; text-shadow: 2px 2px 2px #FFFFFF58;" :class="'text-h4'" class="d-flex align-center justify-center rounded-lg py-0 px-2">{{
            props.post.title
          }}</v-card-title>
          <v-card-text>{{ formatDate(props.post.date) }}</v-card-text>
          <v-divider style="width: 95%;" color="primary" rounded thickness="5"></v-divider>
          <div class="w-50 h-50">
            <v-btn block prepend-icon="mdi-page-next-outline" :to="props.post.path" class="mt-5" color="tertiary">Read</v-btn>
          </div>
        </div>
      </v-card>
    </ContentItemCard>
  </div>
</template>

<script setup lang="ts">
import ContentItemCard from './ContentItemCard.vue';
import type { BlogPost } from '../types/BlogPost'
import { useDisplay } from 'vuetify'

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

const formatDate = (date:Date) => {
  console.log(typeof date)
  let d = new Date(date)
  
  return d.toLocaleDateString('en-US', {
    month: 'long',
    day: '2-digit',
    year: 'numeric'
  })
}

</script>
