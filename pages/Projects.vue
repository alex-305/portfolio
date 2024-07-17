<template>
  <div>
    <v-row v-if="dataLoaded && projects.length!=0">
      <v-col v-for="item in projects" :key="item.id" cols="12" sm="6" md="4">
        <ProjectCard :item="item" />
      </v-col>
    </v-row>
    <div v-else-if="projects.length!=0" class="text-h5">No projects exist yet.</div>
    <div v-else>Could not load projects...</div>
  </div>
</template>

<script setup lang="ts">
import ProjectCard from '~/components/ProjectCard.vue';
import type { PortfolioItem } from '../types/PortfolioItem';


const projects:Ref<PortfolioItem[]> = ref([])
const dataLoaded = ref(false)

const fetchData = async() => {
  const { data } = await useAsyncData('projects',() => queryContent('/projects').findOne())

  console.log(data)
  if(data.value && Array.isArray(data.value.projects)) {
    return data.value.projects.map((item:any) => ({
      id: item.id,
      title: item.title,
      coverImageURL: item.coverImageURL,
      tags: item.tags,
      link: item.link ?? ""
    })) as PortfolioItem[]
  }
  return []
}

onMounted(async() => {
  try {
    dataLoaded.value = false
    projects.value = await fetchData()
    dataLoaded.value = true
  } catch(error) {
    console.error(error)
  }

})



</script>

<style scoped></style>
