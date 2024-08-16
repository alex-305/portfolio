<template>
  <ClientOnly>
    <v-container class="mb-5">
      <v-card variant="text" class="d-flex flex-row justify-center">
        <NavBtn route="/projects" :active="isActive('/projects')" icon="mdi-projector-screen">Projects</NavBtn>
        <NavBtn route="/" :active="isActive('/')">
          <span v-if="isWideEnough">Alex Gonzalez</span>
          <span v-else>Alex</span></NavBtn>
        <NavBtn route="/blog" :active="isActive('/blog')" icon="mdi-post-outline">Blog</NavBtn>
        <div class="position-absolute right-0 pa-1">
          <v-tooltip text="Toggle theme">
            <template v-slot:activator="{props}">
              <v-fab
                v-bind="props"
                @click="toggleTheme(theme)" 
                variant="text" class="right-0 pa-0 mr-2" 
                style="font-size: 20px; width: 38px; height: 38px;" 
                icon="mdi-shield-sun"/>
            </template>
          </v-tooltip>
        </div>
      </v-card>
    </v-container>
  </ClientOnly>
</template>

<script setup lang="ts">
import NavBtn from './NavBtn.vue';
import { useDisplay, useTheme } from 'vuetify'
import { toggleTheme } from '~/scripts/theme';

const theme = useTheme()

const { width } = useDisplay()

const route = useRoute()

const isActive = (path:string) => { return path === route.path || path==='/blog' && route.path.includes('/blog') }

const isWideEnough = computed(()=> { return width.value > 600})
</script>

<style scoped></style>
