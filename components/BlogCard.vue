<template>
    <ContentItemCard 
    link="Read" 
    :to="props.post.path"
    linkIcon="mdi-page-next-outline"
    :tags="props.post.tags">
      <v-card class="d-flex align-center">
        <div style="height: 300px;" class="d-flex flex-column align-center justify-center">
          <v-row class="fill-height d-flex align-center justify-center">
            <v-col cols="12" class="d-flex flex-column align-center justify-center">
              <v-card rounded="0" variant="tonal">
                <v-card-title 
                  style="white-space: normal; text-align: center; font-weight: bold; text-shadow: 2px 2px 2px #FFFFFF58;"
                  :class="'text-h4'" 
                  class="d-flex align-center justify-center rounded-lg py-0 px-2"
                  >{{ props.post.title }}</v-card-title>
                  <v-card-text class="pa-0 pb-3 ma-0 d-flex justify-center">By Alex Gonzalez</v-card-text>
              </v-card>
              <v-card-text class="pb-0 mb-0">{{ 'Posted on ' + formatDate(props.post.date) }}</v-card-text>
            </v-col>
          </v-row>
        </div>
      </v-card>
    </ContentItemCard>
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
