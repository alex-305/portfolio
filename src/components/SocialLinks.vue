<template>
  <div class="w-25">
    <v-card
      elevation="2"
      color="indigo-lighten-5"
      rounded-xl
      class="d-flex flex-column align-center justify-center"
    >
      <div class="text-h5 mx-3 mt-3">My Socials</div>
      <div class="d-flex">
        <v-btn class="my-3 mx-1" color="blue" icon="fa:fa-brands fa-github" variant="tonal"></v-btn>
        <v-btn
          class="my-3 mx-1"
          color="blue"
          icon="fa:fa-brands fa-itch-io"
          variant="tonal"
        ></v-btn>
        <v-btn
          class="my-3 mx-1"
          color="blue"
          icon="fa:fa-brands fa-x-twitter"
          variant="tonal"
        ></v-btn>
      </div>
    </v-card>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
