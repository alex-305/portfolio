<template>
  <v-app>
    <v-main>
      <v-container fluid>
        <div>
          <Navbar />
        </div>
        <div>
          <NuxtLoadingIndicator/>
          <NuxtPage />
        </div>
        <div>
          <Footer />
        </div>
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
import Navbar from './components/NavBar.vue'
import Footer from './components/FooterComponent.vue'
</script>
