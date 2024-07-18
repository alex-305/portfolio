<template>
  <DropDownComponent title="Programming Languages" icon="mdi-monitor-account">
    <v-list>
      <v-list-item prepend-icon="fa:fa-brands fa-vuejs" title="Vue.js"
      >I have used Vue.js for about a year and have learned a lot about component driven
      development. I thoroughly enjoy using it and it is my library of choice for the web. So much
      so that I am using it for this website you are on right now.</v-list-item>
      <v-list-item prepend-icon="fa:fa-brands fa-golang" title="Golang"
      >Golang is my programming language of choice for backend services. I think the ease of use,
      the rich ecosystem of packages, and the nice syntax is what I love about the
      language.</v-list-item>
      <v-list-item prepend-icon="fa:fa-solid fa-c" title="C#"
      >C# is a language I have used in conjuction with .NET MAUI to make a full stack cross platform application with XAML as the templating language.</v-list-item>
      <v-list-item prepend-icon="fa:fa-solid fa-database" title="SQL"
      >I have learned how to use SQL to query data, create tables, create roles, assign roles. Additionally, I have also learned how to normalize tables. PostgreSQL is my DBMS of choice because of its extensability.</v-list-item>
      <v-list-item prepend-icon="fa:fa-brands fa-python" title="Python"
      >Python is a language I use primarily for Leetcode or learning new concepts because of its ease of use. Additionally, I use it for simple scripts from time to time.</v-list-item>
      <v-list-item prepend-icon="fa:fa-brands fa-java" title="Java"
      >Java is one of the earliest languages I learned </v-list-item>
      <v-list-item prepend-icon="fa:fa-brands fa-js" title="Javascript"
      >This is likely the language I have the most experience with and the one I have had to usually consistently the most for my projecets.</v-list-item>
      <v-list-item prepend-icon="fa:fa-solid fa-c" title="C++"
      >This was the first language I learned and one that I am very comfortable using.</v-list-item>
      <v-list-item prepend-icon="fa:fa-solid fa-terminal" title="Bash"
      >Bash is my language of choice for scripting on the terminal. I use it for various tasks and I feel comfortable using piping, output and input redirection. I am also very familiar with awk, xargs, grep, and other command line utilities.</v-list-item>
    </v-list>
  </DropDownComponent>
</template>

<script setup lang="ts">
import DropDownComponent from './DropDownComponent.vue';
</script>
