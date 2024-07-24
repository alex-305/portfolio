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
