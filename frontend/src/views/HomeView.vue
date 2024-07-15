<template>
  <div>
    <v-card class="pa-3">
      <v-expansion-panels variant="accordion" multiple>
        <Education />
        <ProgrammingSkills />
      </v-expansion-panels>
    </v-card>
  </div>
</template>

<script setup lang="ts">
import ProgrammingSkills from '@/components/AboutDropdowns/ProgrammingSkillsDropdown.vue'
import Education from '@/components/AboutDropdowns/EducationDropdown.vue'
</script>
