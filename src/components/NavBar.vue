<template>
  <v-container>
    <v-card variant="text" class="d-flex flex-row justify-center">
      <NavBtn name="projects" icon="mdi-projector-screen">Projects</NavBtn>
      <v-hover>
        <v-card @click="ToHome" variant="tonal" class="d-flex justify-center align-center" color="primary">
          <div v-if="!isMobile" class="cursor-pointer text-h2 ma-3">Alex Gonzalez</div>
          <div v-else class="cursor-pointer text-h4 ma-3">Alex</div>
        </v-card>
      </v-hover>
      <NavBtn name="blog" icon="mdi-post-outline">Blog</NavBtn>
    </v-card>
    <v-divider class="my-3"></v-divider>
  </v-container>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import { computed } from 'vue';
import NavBtn from '@/components/NavBtn.vue'

const router = useRouter()

import { useDisplay } from 'vuetify'

const { mobile } = useDisplay()

const isMobile = computed((): boolean => {
  return mobile.value
})


function ToHome() {
  router.push({ name: 'home' })
}
</script>

<style scoped></style>
