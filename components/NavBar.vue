<template>
  <v-container>
    <v-card variant="text" class="d-flex flex-row justify-center">
      <NavBtn route="/projects" icon="mdi-projector-screen">Projects</NavBtn>
      <NavBtn route="/"><span v-if="isWideEnough">Alex Gonzalez</span><span v-else>Alex</span></NavBtn>
      <NavBtn route="/blog" icon="mdi-post-outline">Blog</NavBtn>
    </v-card>
  </v-container>
</template>

<script setup lang="ts">
import NavBtn from './NavBtn.vue';
import { useDisplay } from 'vuetify'

const { width } = useDisplay()

const isWideEnough = computed(()=> { return width.value > 400})
</script>

<style scoped></style>
