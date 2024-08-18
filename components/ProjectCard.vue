<template>
  <div>
    <ContentItemCard 
    chipStore="project"
    :link="props.item.link !== '' ? 'View' : ''" 
    :to="props.item.link" 
    newTab 
    :linkIcon="props.item.link!== '' ? 'mdi-eye-outline' : ''"
    :tags="props.item.tags"
    :pin="props.item.pin && props.pins">
      <v-img
        class="mx-auto w-100"
        height="200"
        cover
        width="300"
        :src="props.item.coverImageURL"
      >
        <template class="d-flex align-center justify-center" v-slot:placeholder>
            <v-progress-circular class="h-100 w-100" indeterminate color="primary" size="100" width="10"/>
        </template>
    </v-img>
      <div class="d-flex position-relative justify-center">
        <div 
        class="d-flex justify-center position-absolute px-0 pt-auto ma-0 w-100"
        style="color: black; transform: translate(0%, -125%);">
          <v-card-title
            class="mt-auto d-flex justify-center rounded-lg py-0 px-3 ma-0" style="font-weight: bold;text-shadow: 0px 0px 2px white; background: white; box-shadow: 2px 2px #eeeeee;"
            >{{ props.item.title }}</v-card-title>
        </div>
      </div>
    </ContentItemCard>
  </div>
</template>

<script setup lang="ts">
import ContentItemCard from './ContentItemCard.vue';
import type { Project } from '../types/Project'

const props = withDefaults(defineProps<{
  item: Project
  loading: boolean
  pins?: boolean
}>(),
{
  loading: false,
  pins: false
})
</script>

<style scoped>
.gwng {
  color: #4e4e4e48;
}
</style>
