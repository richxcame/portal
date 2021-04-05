<template>
	<div>
		<v-simple-table>
	    <template v-slot:default>
	      <thead>
	        <tr>
	        	<th class="text-left">
	        		T/b
	        	</th>
	        	<th>
	        		SURATY
	        	</th>
	          <th class="text-left">
	            ADY
	          </th>
	          <th class="text-left">
	            DUSUNDIRILISI
	          </th>
	          <th class="text-right">
	          	UYTGET
	          </th>
	        </tr>
	      </thead>
	      <tbody>
	        <tr
	          v-for="(item, i) in items"
	          :key="i"
	        >	
	        	<td>{{ item.id }}</td>
	        	<td>
	        			<img :src="item.image">
	        	</td>
	          <td>{{ item.name }}</td>
	          <td>{{ item.description }}</td>
	          <td class="text-right">
	          	<v-dialog
	          		v-model="dialog"
	          		persistant
	          		max-width="800px"
	          	>
	          		<template v-slot:activator="{ on, attrs }">
	          			<v-btn 
	          				icon
	          				v-bind="attrs"
	          				v-on="on"
	          			>
			          		<v-icon color="primary">mdi-update</v-icon>
			          	</v-btn>
	          		</template>
	          		<v-card>
	          			<create-new></create-new>
	          		</v-card>
	          	</v-dialog>
	          	<v-btn icon>
	          		<v-icon color="red darken-3" fab>mdi-delete</v-icon>
	          	</v-btn>
	          </td>
	        </tr>
	      </tbody>
	    </template>
	  </v-simple-table>
	</div>
</template>

<script>
	import createNew from './createNew.vue'

	export default {
		components: {
			createNew,
		},
	  data() {
	    return {
	    	dialog: false,
	    	items: [
	    		{ id: 1, 
	    			image: "../pages/logo.svg", 
	    			name: "lorem", 
	    			description: "lorem ipsum dolor sit amet" 
	    		},
	    		{ 
	    			id: 2, 
	    			image: "../../../assets/logo.png", 
	    			name: "lorem", 
	    			description: "lorem ipsum dolor sit amet" 
	    		},
	    		{ 
	    			id: 3, 
	    			image: "../../../assets/logo.png", 
	    			name: "lorem", 
	    			description: "lorem ipsum dolor sit amet" 
	    		}
	    	],
		  }
		}
	}
</script>

<style>
</style>