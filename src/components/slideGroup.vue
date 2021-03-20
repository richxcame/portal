<template>
    <v-slide-group
      v-model="model"
      class="pa-4"
      active-class="success"
    >
      <v-slide-item
        v-for="n in 15"
        :key="n"
        v-slot="{ active, toggle }"
      >
        <v-card
          :color="active ? undefined : 'grey lighten-1'"
          class="ma-4"
          height="150"
          width="150" 
          @click="toggle"
          elevation="0"
        >
          <v-img src="../assets/logo.png"></v-img>
        </v-card>
      </v-slide-item>
    </v-slide-group>
</template>


<script>
  export default {
    data: () => ({
      model: null,
    }),
  }
</script>