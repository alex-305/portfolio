<template>
  <div>
    <ContentItemCard :link="props.item.link!=''" :to="props.item.link" newTab :tags="props.item.tags">
      <v-img
        class="mx-auto w-100"
        height="200"
        cover
        width="300"
        :src="props.item.coverImageURL"
      ></v-img>
      <div class="d-flex justify-center">
        <div 
        class="d-flex justify-center position-absolute h-25 px-0 pt-auto ma-0 w-100"
        style="color: black; transform: translate(0%, -100%); background: linear-gradient(to top, #eeeeee 20%, #eeeeee42 80%, #eeeeee00 100%);">
          <v-card-title
            class="mt-auto d-flex justify-center rounded-lg pa-0 ma-0" style="text-shadow: 0px 0px 2px white;"
            >{{ props.item.title }}</v-card-title>
        </div>
      </div>
    </ContentItemCard>
  </div>
</template>

<script setup lang="ts">
import ContentItemCard from './ContentItemCard.vue';
import type { PortfolioItem } from '../types/PortfolioItem'
const props = defineProps<{
  item: PortfolioItem
}>()
</script>

<style scoped>
.gwng {
  color: #4e4e4e48;
}
</style>
