<template>
  <v-card class="ma-2">
    <v-card-title>
      Movies
      <v-spacer></v-spacer>
  		<v-text-field 
  			v-model="search"
  			append-icon="mdi-magnify"
  			label="Tablisadan islendik maglumaty gozlap bilersiniz"
  			single-line
  			color="cyan darken-2"
  			outlined
  			dense
  			hide-details
  		></v-text-field>
    </v-card-title>
		<v-data-table
	    :headers="headers"
	    :items="desserts"
	    :items-per-page="5"
	    class="elevation-2"
	    :search="search"
      :footer-props="{
        itemsPerPageText: 'Her sahypa element:',
        itemsPerPageAllText: 'Ahlisi',
        pageText: ''
      }"
    >
      <template v-slot:item.icon="{ item }">
        <v-btn icon>
          <v-icon color="primary">mdi-update</v-icon>
        </v-btn>
        <v-btn icon>
          <v-icon color="red darken-2">mdi-delete</v-icon>
        </v-btn>
      </template>
    </v-data-table>
  </v-card>
</template>

<script>
	export default{
		data() {
			return {
				search: "",
				headers: [
          {
            text: 'T/b',
            align: 'start',
            value: 'id',
          },
          {
            text: 'Ady',
            align: 'start',
            sortable: true,
            value: 'name',
          },
          { 
            text: 'Suraty', 
            value: 'image' 
          },
          { 
            text: 'Dusundirilisi', 
            value: 'description' 
          },
          { 
            text: 'Uytget/Poz', 
            value: 'icon' 
          },
        ],
        desserts: [
          {
            id: 1,
            name: 'Frozen Yogurt',
            image: 159,
            description: 'Lorem ipsum sit amet lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum dolor sit amet',
          },
          {
            id: 2,
            name: 'Ice cream sandwich',
            image: 237,
            description: "Lorem ipsum sit amet lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum dolor sit amet",
          },
          {
            id: 3,
            name: 'Eclair',
            image: 262,
            description: "Lorem ipsum sit amet lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum dolor sit amet",
          },
          {
            id: 4,
            name: 'Cupcake',
            image: 305,
            description: "Lorem ipsum sit amet lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum dolor sit amet",
          },
          {
            id: 5,
            name: 'Gingerbread',
            image: 356,
            description: "Lorem ipsum sit amet lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum dolor sit amet",
          },
          {
            id: 6,
            name: 'Jelly bean',
            image: 375,
            description: "Lorem ipsum sit amet lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum dolor sit amet",
          },
          {
            id: 7,
            name: 'Lollipop',
            image: 392,
            description: "Lorem ipsum sit amet lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum dolor sit amet",
          },
          {
            id: 8,
            name: 'Honeycomb',
            image: 408,
            description: "Lorem ipsum sit amet lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum dolor sit amet",
          },
          {
            id: 9,
            name: 'Donut',
            image: 452,
            description: "Lorem ipsum sit amet lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum dolor sit amet",
          },
          {
            id: 10,
            name: 'KitKat',
            image: 518,
            description: "Lorem ipsum sit amet lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum dolor sit amet",
          },
        ],
			}
		}
	}
</script>