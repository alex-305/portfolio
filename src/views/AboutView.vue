<template>
  <div>
    <v-card class="pa-3">
      <v-expansion-panels variant="accordion" multiple>
        <Education />
        <Skills />
      </v-expansion-panels>
    </v-card>
  </div>
</template>

<script setup lang="ts">
import Skills from '@/components/AboutDropdowns/SkillsDropdown.vue'
import Education from '@/components/AboutDropdowns/EducationDropdown.vue'
</script>
