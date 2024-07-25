<template>
  <v-container class="mb-5">
    <v-card variant="text" class="d-flex flex-row justify-center">
      <NavBtn route="/projects" :active="isActive('/projects')" icon="mdi-projector-screen">Projects</NavBtn>
      <NavBtn route="/" :active="isActive('/')"><span v-if="isWideEnough">Alex Gonzalez</span><span v-else>Alex</span></NavBtn>
      <NavBtn route="/blog" :active="isActive('/blog')" icon="mdi-post-outline">Blog</NavBtn>
    </v-card>
  </v-container>
</template>

<script setup lang="ts">
import NavBtn from './NavBtn.vue';
import { useDisplay } from 'vuetify'

const { width } = useDisplay()

const route = useRoute()

const isActive = (path:string) => { return path === route.path }

const isWideEnough = computed(()=> { return width.value > 460})
</script>

<style scoped></style>
