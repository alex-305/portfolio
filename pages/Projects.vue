<template>
  <div>
    <v-row v-if="dataLoaded && projects.length!=0">
      <v-col v-for="item in projects" :key="item.title+item.coverImageURL" cols="12" sm="6" md="4" lg="3" xl="2">
        <ProjectCard :item="item" />
      </v-col>
    </v-row>
    <div style="color: red;" v-else-if="errorOccured">Error occured.</div>
    <v-row v-else-if="projects.length!=0">
      <v-col v-for="i in 6" :key="i" cols="12" sm="6" md="4" lg="3" xl="2">
        <v-skeleton-loader height="250" width="350"/>
      </v-col>
    </v-row>
    <div v-else>No projects yet.</div>
  </div>
</template>

<script setup lang="ts">
import ProjectCard from '~/components/ProjectCard.vue';
import type { PortfolioItem } from '../types/PortfolioItem';


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
