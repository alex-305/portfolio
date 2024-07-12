<template>
  <v-container>
    <v-card variant="text" class="d-flex justify-center">
      <v-btn variant="tonal" :to="{ name: 'home' }" class="mx-3 my-auto" prepend-icon="mdi-home"
        >Home</v-btn
      >
      <v-btn
        variant="tonal"
        :to="{ name: 'portfolio' }"
        class="mx-3 my-auto"
        prepend-icon="mdi-projector-screen"
        >Projects</v-btn
      >
      <div class="text-h2 ma-3">Alex Gonzalez</div>
      <v-btn variant="tonal" class="mx-3 my-auto" prepend-icon="mdi-post-outline">Blog</v-btn>
      <v-btn variant="tonal" class="mx-3 my-auto" prepend-icon="mdi-information">About Me</v-btn>
    </v-card>
  </v-container>
</template>

<script setup lang="ts"></script>

<style scoped></style>
