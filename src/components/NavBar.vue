<template>
  <v-container>
    <v-card variant="text" class="d-flex flex-row justify-center">
      <NavBtn name="projects" icon="mdi-projector-screen">Projects</NavBtn>
      <NavBtn name="home"><span v-if="isWideEnough">Alex Gonzalez</span><span v-else>Alex</span></NavBtn>
      <NavBtn name="blog" icon="mdi-post-outline">Blog</NavBtn>
    </v-card>
    <v-divider class="my-3"></v-divider>
  </v-container>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import NavBtn from '@/components/NavBtn.vue'
import { useDisplay } from 'vuetify'

const { width } = useDisplay()

const isWideEnough = computed(()=> { return width.value > 400})
</script>

<style scoped></style>
