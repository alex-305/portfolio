<template>
  <div>
    <v-card class="pa-3">
      <v-expansion-panels variant="accordion" multiple>
        <!-- <Education /> -->
        <ProgrammingSkills />
      </v-expansion-panels>
    </v-card>
  </div>
</template>

<script setup lang="ts">
// import Education from '~/components/EducationDropdown.vue';
import ProgrammingSkills from '~/components/ProgrammingSkillsDropdown.vue';
</script>
