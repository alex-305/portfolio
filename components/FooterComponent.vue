<template>
  <div class="mt-3">
    <v-footer class="ax-0" color="primary">
      <v-row justify="center" no-gutters>
        <v-col class="text-center">
          <v-btn
            class="mx-2"
            target="_blank"
            href="mailto:alexgonzdev@proton.me"
            color="white"
            rounded="xl"
            variant="text"
            prepend-icon="mdi-email-outline"
          >
            alexgonzdev@proton.me
          </v-btn>
        </v-col>
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
  </div>
</template>

<script setup lang="ts">
</script>
