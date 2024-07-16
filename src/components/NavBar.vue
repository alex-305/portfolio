<template>
  <v-container>
    <v-card variant="text" class="d-flex flex-md-row flex-column justify-center">
      <NavBtn name="portfolio" icon="mdi-projector-screen">Projects</NavBtn>
      <v-hover>
        <v-card variant="tonal" class="d-flex justify-center align-center" color="primary">
          <div class="cursor-pointer text-h2 ma-3" @click="ToHome">Alex Gonzalez</div>
        </v-card>
      </v-hover>
      <NavBtn name="blog" icon="mdi-post-outline">Blog</NavBtn>
    </v-card>
  </v-container>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import NavBtn from '@/components/NavBtn.vue'

const router = useRouter()

function ToHome() {
  router.push({ name: 'home' })
}
</script>

<style scoped></style>
