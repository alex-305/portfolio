<template>
  <v-footer color="indigo-lighten-2">
    <v-row justify="center" no-gutters>
      <v-btn
        v-for="link in links"
        :key="link.link"
        class="mx-2"
        :href="link.link"
        color="white"
        rounded="xl"
        variant="text"
        :prepend-icon="link.icon"
      >
        {{ link.name }}
      </v-btn>
      <v-col class="text-center mt-4" cols="12">
        {{ new Date().getFullYear() }} — <strong>Alex Gonzalez</strong>
      </v-col>
    </v-row>
  </v-footer>
</template>

<script setup lang="ts">
import { SocialLink } from '@/types/SocialLink'
const links: SocialLink[] = [
  {
    link: 'github.com',
    name: 'github',
    icon: 'fa:fa-brands fa-github'
  },
  { link: 'itch.io', name: 'itch.io', icon: 'fa:fa-brands fa-itch-io' }
]
</script>
