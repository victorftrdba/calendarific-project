<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <RouterLink class="text-blue-400 p-3 hover:bg-blue-100 rounded" to="/">
          Home
        </RouterLink>
      </v-col>
    </v-row>
    <RouterView />
  </v-container>
</template>
