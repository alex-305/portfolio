<template>
    <ContentItemCard 
    chipStore="blog"
    link="Read" 
    :to="props.item.path"
    linkIcon="mdi-page-next-outline"
    :tags="props.item.tags"
    :pin="props.item.pin && props.pins">
      <v-card class="d-flex align-center">
        <div style="height: 200px;" class="d-flex flex-column align-center justify-center pa-auto w-100">
          <v-card-title 
            style="white-space: normal; text-align: center; font-weight: bold;"
            class="py-0 px-2 text-h4"
            >{{ props.item.title }}</v-card-title>
          <template v-if="!props.loading">
            <v-card-text class="pa-0 pb-3 ma-0 d-flex justify-center">By Alex Gonzalez</v-card-text>
            <v-card-text class="pb-0 mb-0">{{ 'Posted on ' + formatDate(props.item.date) }}</v-card-text>
          </template>
          <template v-else>
            <v-progress-circular class="h-100 w-100" indeterminate color="primary" size="100" width="10"/>
          </template>
        </div>
      </v-card>
    </ContentItemCard>
</template>

<script setup lang="ts">
import ContentItemCard from './ContentItemCard.vue';
import type { BlogPost } from '../types/BlogPost'
import { formatDate } from '~/scripts/formatDate';

const props = withDefaults(defineProps<{
  item: BlogPost
  loading?: boolean
  pins?: boolean
}>(),
{
  loading: false,
  pins: false
})

</script>
