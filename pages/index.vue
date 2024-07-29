<template>
  <ClientOnly>
    <div>
      <v-card variant="text" class="pa-3">
        <v-row>
          <v-col lg="5">
            <div class="d-flex justify-center">
              <ProfileCard/>
            </div>
            <div class="mt-10 hidden-sm-and-down">
              <SocialsComponent/>
            </div>
          </v-col>
          <v-col lg="7">
            <v-card elevation="10" class="mx-2 mb-3">
              <v-expansion-panels variant="accordion">
                <AboutMeDropdown/>
                <Education />
                <ProgrammingSkills />
                <LifeSkills/>
                <HobbiesDropdown/>
              </v-expansion-panels>
            </v-card>
          </v-col>
          <div class="d-md-none pa-0 pb-5">
            <SocialsComponent/>
          </div>
        </v-row>
      </v-card>
    </div>
  </ClientOnly>
</template>

<script setup lang="ts">
import SocialsComponent from '~/components/SocialsComponent.vue';
import ProfileCard from '@/components/ProfileCard.vue';
import HobbiesDropdown from '~/components/Dropdowns/HobbiesDropdown.vue';
import AboutMeDropdown from '@/components/Dropdowns/AboutMeDropdown.vue';
import Education from '@/components/Dropdowns/EduDropdown.vue';
import LifeSkills from '@/components/Dropdowns/LifeSkills.vue';
import ProgrammingSkills from '@/components/Dropdowns/ProgrammingSkillsDropdown.vue';
</script>
