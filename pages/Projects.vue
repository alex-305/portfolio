<template>
  <div>
    <SearchContent storeSrc="project"/>
    <!-- <ChipContainer class="w-100" chipClass="my-1" variant="tonal" removable storeSrc="project"/> -->
    <div v-if="errorOccured" class="text-h2" style="color: #F44336;">Error occured.</div>
    <v-row>
      <v-col v-if="dataLoaded" v-for="item in projects" :key="item.title+item.coverImageURL" cols="12" sm="6" md="4" lg="3" xl="2">
        <ProjectCard :item="item" />
      </v-col>
      <v-col v-else v-for="_ in 24" cols="12" sm="6" md="4" lg="3" xl="2">
        <div class="d-flex justify-center align-center h-100">
          <v-skeleton-loader class="w-90 h-90" width="300" height="250"/>
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script setup lang="ts">
import ProjectCard from '~/components/ProjectCard.vue';
import ChipContainer from '~/components/ChipContainer.vue';
import type { PortfolioItem } from '../types/PortfolioItem';

const selectedChips:Ref<string[]> = ref([])
const projects:Ref<PortfolioItem[]> = ref([])
const dataLoaded = ref(false)
const errorOccured = ref(false)

const fetchData = async() => {
  const data = await queryContent('/projects').findOne()
  if(data && Array.isArray(data.projects)) {
    return data.projects.map((item:any) => ({
      title: item.title,
      coverImageURL: item.coverImageURL,
      tags: item.tags,
      link: item.link ?? ""
    })) as PortfolioItem[]
  }
  return []
}

onBeforeMount(async() => {
  try {
    errorOccured.value = false
    dataLoaded.value = false
    projects.value = await fetchData()
    dataLoaded.value = true
  } catch(error) {
    errorOccured.value = true
    console.error(error)
  }

})



</script>

<style scoped></style>
