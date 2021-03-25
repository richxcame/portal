<template>
	<v-col 
		cols="12"
		sm="6" 
		md="4"
		lg="3"
		class="px-4"
	>
	<v-card 
		elevation="5" 
		class="rounded-lg mb-3"
	>
		<v-list>							
      <v-list-group
        :value="true"
      >
        <template v-slot:activator>
          <v-list-item-title class="font-weight-bold black--text">Sort</v-list-item-title>
        </template>
        <v-divider class="mt-1"></v-divider>
        <div>
        	<v-select
	          :items="items"
	          dense
	          outlined
	          bottom
	          single-line
	          class="ma-3"
	          menu-props="offsetY"
	          v-model="select"
	        ></v-select>
        </div>
	    </v-list-group>
	    </v-list>
	  </v-card>

	  <v-card 
			elevation="5" 
			class="rounded-lg"
		>
		<v-list>							
      <v-list-group>
        <template v-slot:activator>
          <v-list-item-title class="font-weight-bold black--text">Filters</v-list-item-title>
        </template>
        <v-divider class="mt-1"></v-divider>
        <div>
        	<v-select
	          :items="items"
	          dense
	          outlined
	          bottom
	          single-line
	          class="ma-3"
	          menu-props="offsetY"
	          v-model="select"
	        ></v-select>
        </div>
	    </v-list-group>
	    </v-list>
	  </v-card>
	  <v-btn 
	  	class="rounded-lg my-5 button font-weight-bold"
	  	dark
	  >
			Search
		</v-btn>
	</v-col>
</template>

<script>
export default {
  data() {
    return {
    	select: "Popularity",
    }
  }
}
</script>

<style>

</style>