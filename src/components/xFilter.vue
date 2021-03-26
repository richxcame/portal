<template>
	<v-col 
		cols="12"
		sm="6" 
		md="4"
		lg="3"
		class="px-4"
	>
	<!-- <v-text-field 
		solo 
		placeholder="Type something..." 
		prepend-inner-icon="mdi-sort" 
		clearable
	></v-text-field> -->

	<v-card 
		elevation="5" 
		class="rounded-lg mb-3"
	>
		<v-list>					
      <v-list-group :value="true">
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
        	<v-text-field
        		rounded
        		prepend-inner-icon="mdi-filter"
        		outlined
        		small
        		class="mx-2 mt-2"
        		dense
        		color="rgb(1, 180, 228)"
        		clearable
        	></v-text-field>
        	<v-select
	          dense
	          :items="filterItems"
	          outlined
	          bottom
	          single-line
	          class="mx-3 mb-3"
	          menu-props="offsetY"
	          v-model="language"
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
    	language: "Turkmen",
    	select: "Popularity",
    	items: ["Popularity", "Top Rated"],
    	filterItems: ["Turkmen", "English", "Russian"]
    }
  }
}
</script>

<style>

</style>