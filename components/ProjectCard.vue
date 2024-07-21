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
      <v-card-title
        class="d-flex justify-center position-absolute rounded-lg pa-0 ma-0"
        style="color: black; transform: translate(0%, -100%); background-color: #ebebebca; box-shadow: 0px 0px 5px 2px #ebebebca;"
        >{{ props.item.title }}</v-card-title>
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
  color: #ebebebca;
}
</style>
