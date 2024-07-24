<template>
  <div>
    <v-card variant="text" class="pa-3">
      <div class="d-flex justify-center">
        <ProfileCard/>
      </div>
      <v-expansion-panels variant="accordion" multiple>
        <AboutMeDropdown/>
        <Education />
        <ProgrammingSkills />
        <LifeSkills/>
      </v-expansion-panels>
    </v-card>
  </div>
</template>

<script setup lang="ts">
import ProfileCard from '~/components/ProfileCard.vue';
import AboutMeDropdown from '~/components/AboutMeDropdown.vue';
import Education from '~/components/EduDropdown.vue';
import LifeSkills from '~/components/LifeSkills.vue';
import ProgrammingSkills from '~/components/ProgrammingSkillsDropdown.vue';
</script>
