<template>
	<div>
		<v-app-bar
			height="60"
			style="background-color: rgba(3, 37, 65, 1);"
			dark
			elevate-on-scroll
			fixed
		>
			<v-app-bar-nav-icon 
				class="bmdHide" 
				@click.stop="drawer = !drawer"
			></v-app-bar-nav-icon>

			<router-link 
				to="/"
				class="mr-8"
			>
				<v-img
					src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg"
					max-width="154"
					max-height="20"
					class="bml center"
				></v-img>
			</router-link>

			<v-menu
				v-for="(item, i) in menuItems"
				:key="i"
				class="bsmHide"
	      :transition="item.transition"
	      bottom
	      right
	      offset-y
	    >
	      <template v-slot:activator="{ on, attrs }">
	        <div
	        	class="bsmHide font-weight-bold mr-6"
	        	v-bind="attrs"
	        	v-on="on"
	        >
	      		<router-link 
	      			:to="item.route"
	      			class="white--text"
	      		>{{ item.name }}</router-link>
	      	</div>
	      </template>
  		</v-menu>

			<v-spacer></v-spacer>

      	<v-expand-transition>
	        <v-text-field
	        	class="mt-7 mr-4"
            v-show="isClicked"
            dense
            label="Search"
            type="search"
            placeholder="More than you know..."
            clearable
            outlined
            @keypress.enter="handleSearch"
          ></v-text-field>
      	</v-expand-transition>

			<!-- search -->
			<v-btn 
				background-color="rgba(3, 37, 65, 1)"
				icon
				class="mr-3"
				@click="searchChange"
				v-if="isVisible"
			>
				<v-icon color="white--text">mdi-magnify</v-icon>
			</v-btn>

			<v-menu
				class="bsmHide"
	      transition="slide-x-transition"
	      bottom
	      right
	      auto
	      offset-y>
	      <template v-slot:activator="{ on, attrs }">
	        <v-btn
	        	class="bsmHide font-weight-bold mr-3"
	        	outlined
	          style="background-color: rgba(3,37,65, 1);"
	          elevation="0"
	          dark
	          v-bind="attrs"
	          v-on="on"
	        >
	          EN
	        </v-btn>
	      </template>
	      <v-list>
	        <v-list-item>
	          <v-list-item-title>Turkmen</v-list-item-title>
	        </v-list-item>
	      </v-list>
	      <v-list>
	        <v-list-item>
	          <v-list-item-title>English</v-list-item-title>
	        </v-list-item>
	      </v-list>
	      <v-list>
	        <v-list-item>
	          <v-list-item-title>Russian</v-list-item-title>
	        </v-list-item>
	      </v-list>
  		</v-menu>

  		<!-- <v-menu
  			class="bsmHide"
	      transition="slide-y-transition"
	      bottom
	      right
	      auto
	      offset-y>
	      <template v-slot:activator="{ on, attrs }">
	      	<div
	        	class="bsmHide font-weight-bold ml-7 mr-2"
	        	v-bind="attrs"
	        	v-on="on"
	        >
	      		Categories
	         <v-icon>mdi-chevron-down</v-icon>
	      	</div>
	      </template>

	      <v-list>
	        <v-list-item>
	          <v-list-item-title>All categories</v-list-item-title>
	        </v-list-item>
	      </v-list>
  		</v-menu> -->

				<!-- <div class="bsmHide font-weight-bold ml-7 mr-3">
      		<router-link 
      			to="/login" 
      			class="white--text"
      		>
      			Login
      		</router-link>
      	</div> -->

		</v-app-bar>

		<v-navigation-drawer
			class="pt-2"
      v-model="drawer"
      absolute
      temporary>
	    <v-row justify="center">
		    <v-expansion-panels popout>
		      <v-expansion-panel>
		        <v-expansion-panel-header>Phone</v-expansion-panel-header>
		        <v-expansion-panel-content>
		        	<v-list>
					      <v-list-item-group
					        active-class="border"
					        color="deep-purple"
					      >
					        <v-list-item
					          v-for="(item, i) in navItems"
					          :key="i"
					        >
					          <v-list-item-icon>
					            <v-icon>{{ item.icon }}</v-icon>
					          </v-list-item-icon>

					          <v-list-item-content>
					            <v-list-item-title>{{ item.text }}</v-list-item-title>
					          </v-list-item-content>
					        </v-list-item>
					      </v-list-item-group>
					    </v-list>
		        </v-expansion-panel-content>
		      </v-expansion-panel>
		    </v-expansion-panels>
		  </v-row>
    </v-navigation-drawer>
	</div>
</template>

<script>
	export default{
		data() {
			return{
				isClicked: false,
				isVisible: true,
				drawer: false,
				menuItems: [
					{
						name: "Movies",
						transition: "slide-x-transition",
						route: "/movies"
					},
					{
						name: "Tracks",
						transition: "slide-y-transition",
						route: "/tracks"
					},
					{
						name: "Images",
						transition: "slide-x-reverse-transition",
						route: "/images"
					}
				],
				navItems: [
		    	{
		        icon: 'mdi-wifi',
		        text: 'Wifi',
		      },
		      {
		        icon: 'mdi-bluetooth',
		        text: 'Bluetooth',
		      },
		      {
		        icon: 'mdi-chart-donut',
		        text: 'Data Usage',
		      },
		    ]
			}
		},
		methods: {
			searchChange() {
				this.isVisible = !this.isVisible;
				this.isClicked = !this.isClicked;
			},
			handleSearch() {
				console.log('...');
				this.isVisible = !this.isVisible;
				this.isClicked = !this.isClicked;
			}
		}
	}
</script>

<style>

</style>