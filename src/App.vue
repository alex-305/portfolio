<template>
  <v-app>
    <v-main>
      <v-container fluid>
        <div>
          <Navbar />
        </div>
        <div>
          <RouterView />
        </div>
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
import Navbar from '@/components/NavBar.vue'
</script>

<style scoped></style>
