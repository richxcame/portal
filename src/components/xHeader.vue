<template>
	<section>
		<v-app-bar
			height="60"
			style="background-color: rgba(3, 37, 65, 1);"
			dark
			elevate-on-scroll
			fixed
		>
			<v-app-bar-nav-icon 
				class="bmdHide" 
				@click="changeDrawer"
			></v-app-bar-nav-icon>

			<router-link 
				to="/"
				class="mr-8"
				v-if="isVisible"
			>
				<v-img
					src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg"
					max-width="154"
					max-height="20"
					class="bml center"
				></v-img>
			</router-link>

			<v-spacer></v-spacer>

			<!-- search icon-->
			<v-btn 
				background-color="rgba(3, 37, 65, 1)"
				icon
				class="mr-3"
				@click="searchChange"
				v-if="isVisible"
			>
				<v-icon color="white--text">mdi-magnify</v-icon>
			</v-btn>

    	<v-expand-transition>
        <v-text-field
        	class="mt-7 mr-4"
        	v-if="!isVisible"
          dense
          label="Search"
          type="search"
          placeholder="More than you know..."
          clearable
          outlined
          @keypress.enter="handleSearch"
        ></v-text-field>
    	</v-expand-transition>

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

  		<v-tooltip bottom>
	      <template v-slot:activator="{ on, attrs }">
	        <v-btn
	        	class="bsmHide font-weight-bold mr-3"
	          style="background-color: rgba(3,37,65, 1);"
	          elevation="0"
	          dark
	          v-bind="attrs"
	          v-on="on"
	          icon
	          @click="goToLoginPage"
	        >
	          <v-icon>mdi-login</v-icon>
	        </v-btn>
	      </template>
	      <span>Login</span>
	     </v-tooltip>

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
      style="z-index: 9999;"
      v-model="drawer"
      temporary
      fixed
      dark
      color="rgba(1,180,228)"
    >
      <v-list
        nav
        dense
      >
        <v-list-item-group
          v-model="group"      
          active-class="deep-purple--text text--accent-4"
        >
        	<v-list-item 
        		v-for="(item, i) in navItems"
        		:key="i"
        		:to="item.route"
        		link
        	>
        		<v-list-item-icon>
        			<v-icon>{{ item.icon }}</v-icon>
        		</v-list-item-icon>
        		<v-list-item-content>
            	<v-list-item-title>{{ item.name }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>

      <template v-slot:append>
        <div class="pa-2">
          <v-btn 
          	style="background-color:rgba(30,213,169,1)"
          	class="white--text font-weight-black"
          	elevation="0"
          	block
          	@click="goToLoginPage"
          >
            Login
          </v-btn>
        </div>
      </template>
    </v-navigation-drawer>



	</section>
</template>

<script>
	export default{
		data() {
			return{
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
						name: "Videos",
						transition: "slide-x-reverse-transition",
						route: "/videos"
					}
				],
				group: null,
				navItems: [
					{
						name: 'Home',
						icon: 'mdi-home',
						route: '/'
					},
					{
						name: 'Movies',
						icon: 'mdi-movie',
						route: '/movies'
					},
					{
						name: 'Tracks',
						icon: 'mdi-music-note',
						route: '/tracks'
					},
					{
						name: 'Videos',
						icon: 'mdi-video',
						route: '/videos'
					}
				]
			}
		},
		methods: {
			searchChange() {
				this.isVisible = !this.isVisible;
			},
			handleSearch() {
				console.log('...');
				this.isVisible = !this.isVisible;
			},
			changeDrawer() {
				this.drawer = !this.drawer;
			},
			goToLoginPage() {
				this.$router.push('/login');
			}
		}
	}
</script>

<style>
</style>