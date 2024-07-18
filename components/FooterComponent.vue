<template>
  <v-footer class="ax-0" color="primary">
    <v-row justify="center" no-gutters>
      <v-btn
        v-for="link in links"
        :key="link.link"
        class="mx-2"
        target="_blank"
        :href="link.link"
        color="white"
        rounded="xl"
        variant="text"
        :prepend-icon="link.icon"
      >
        {{ link.name }}
      </v-btn>
      <v-col class="text-center mt-4" cols="12">
        {{ new Date().getFullYear() }} — <strong>Alex Gonzalez</strong
        ><a
          href="https://www.google.com/maps/place/Miami,+FL"
          style="text-decoration: none; color: inherit"
          class="mx-2"
          target="_blank"
          ><v-icon icon="mdi-map-marker" />Miami, FL</a
        >
      </v-col>
    </v-row>
  </v-footer>
</template>

<script setup lang="ts">
import type { SocialLink } from '../types/SocialLink'
const links: SocialLink[] = [
  {
    link: 'https://github.com/alex-305',
    name: 'github',
    icon: 'fa:fa-brands fa-github'
  },
  {
    link: 'https://alex305.itch.io',
    name: 'itch.io',
    icon: 'fa:fa-brands fa-itch-io'
  },
  {
    link: 'https://x.com/itsslax',
    name: 'x',
    icon: 'fa:fa-brands fa-x-twitter'
  },
  {
    link: 'mailto:alexgonzdev@proton.me',
    name: 'alexgonzdev@proton.me',
    icon: 'mdi-email-outline'
  }
]
</script>
