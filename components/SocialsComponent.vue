<template>
    <div v-if="dataLoaded" class="pa-0">
        <v-card class="px-5 pb-5 pt-0 mt-5 mx-5" elevation="10">
            <v-card-title class="text-h4 d-flex justify-center">Socials</v-card-title>
            <v-row justify="center">
                <div v-for="link in links">
                    <v-col>
                        <v-tooltip :text="link.name">
                            <template v-slot:activator="{ props }">
                                <v-btn
                                v-bind="props"
                                color="primary"
                                :key="link.link"
                                class="mx-2"
                                target="_blank"
                                :href="link.link"
                                rounded="xl"
                                :icon="link.icon"
                                ></v-btn>
                            </template>
                        </v-tooltip>
                    </v-col>
                </div>
            </v-row>
        </v-card>
    </div>
</template>

<script setup lang="ts">
import type { SocialLink } from '~/types/SocialLink';
const links: Ref<SocialLink[]> = ref([])
const dataLoaded = ref(false)
const errorOccured = ref(false)

const fetchData = async():Promise<SocialLink[]> => {
  errorOccured.value = false
  dataLoaded.value = false
  const data = await queryContent('/socials').findOne()
  if(data && Array.isArray(data.links)) {
    return data.links.map((item:any) => ({
      link: item.link,
      icon: item.icon,
      name: item.name
    })) as SocialLink[]
  }
  return []
}

onBeforeMount(async() => {
  try {
    links.value = await fetchData()
    dataLoaded.value = true
  } catch(error) {
    errorOccured.value = true
    console.error(error)
  }
})
</script>