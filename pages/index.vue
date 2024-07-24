<template>
  <div>
    <v-card variant="text" class="pa-3">
      <v-row>
        <v-col rows="6">
          <div class="d-flex justify-center">
            <ProfileCard/>
          </div>
        </v-col>
        <v-col rows="6">
          <v-expansion-panels variant="accordion">
            <AboutMeDropdown/>
            <Education />
            <ProgrammingSkills />
            <LifeSkills/>
            <HobbiesDropdown/>
          </v-expansion-panels>
        </v-col>
      </v-row>
    </v-card>
  </div>
</template>

<script setup lang="ts">
import ProfileCard from '@/components/ProfileCard.vue';
import HobbiesDropdown from '~/components/Dropdowns/HobbiesDropdown.vue';
import AboutMeDropdown from '@/components/Dropdowns/AboutMeDropdown.vue';
import Education from '@/components/Dropdowns/EduDropdown.vue';
import LifeSkills from '@/components/Dropdowns/LifeSkills.vue';
import ProgrammingSkills from '@/components/Dropdowns/ProgrammingSkillsDropdown.vue';
</script>
