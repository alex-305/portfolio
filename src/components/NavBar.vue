<template>
  <v-container>
    <v-card variant="text" class="d-flex justify-center">
      <NavBtn name="home" icon="mdi-home">Home</NavBtn>
      <NavBtn name="portfolio" icon="mdi-projector-screen">Projects</NavBtn>
      <div class="text-h2 ma-3">Alex Gonzalez</div>
      <NavBtn name="blog" icon="mdi-post-outline">Blog</NavBtn>
      <NavBtn name="about" icon="mdi-information">About Me</NavBtn>
    </v-card>
  </v-container>
</template>

<script setup lang="ts">
import NavBtn from '@/components/NavBtn.vue'
</script>

<style scoped></style>
