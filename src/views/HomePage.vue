<template>
	<div>
		<v-app>
			<!-- app bar -->
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

				<router-link to="/">
					<v-img 
						src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg"
						max-width="154"
						max-height="20"
						class="bml"
					></v-img>
				</router-link>

				<v-spacer></v-spacer>

				<v-menu
		      transition="slide-x-transition"
		      bottom
		      right
		      auto
		      offset-y
		    >
		      <template v-slot:activator="{ on, attrs }">
		        <v-btn
		        	class="bsmHide"
		          style="background-color: rgba(3, 37, 65, 1);"
		          elevation="0"
		          dark
		          v-bind="attrs"
		          v-on="on"
		        >
		          Movies
		        </v-btn>
		      </template>
		      <v-list>
		        <v-list-item>
		          <v-list-item-title>Trending movies</v-list-item-title>
		        </v-list-item>
		      </v-list>
    		</v-menu>

    		<v-menu
		      transition="slide-x-transition"
		      bottom
		      right
		      auto
		      offset-y
		    >
		      <template v-slot:activator="{ on, attrs }">
		        <v-btn
		        	class="bsmHide"
		          style="background-color: rgba(3, 37, 65, 1);"
		          elevation="0"
		          dark
		          v-bind="attrs"
		          v-on="on"
		        >
		          Tracks
		          <v-icon right>mdi-chevron-down</v-icon>
		        </v-btn>
		      </template>

		      <v-list>
		        <v-list-item>
		          <v-list-item-title>Tranding tracks</v-list-item-title>
		        </v-list-item>
		      </v-list>
    		</v-menu>

    		<v-menu
    			class="bsmHide"
		      transition="slide-y-transition"
		      bottom
		      right
		      auto
		      offset-y
		    >
		      <template v-slot:activator="{ on, attrs }">
		        <v-btn
		        	class="bsmHide"
		          style="background-color: rgba(3, 37, 65, 1);"
		          elevation="0"
		          dark
		          v-bind="attrs"
		          v-on="on"
		        >
		          Categories
		          <v-icon right>mdi-chevron-down</v-icon>
		        </v-btn>
		      </template>

		      <v-list>
		        <v-list-item>
		          <v-list-item-title>All categories</v-list-item-title>
		        </v-list-item>
		      </v-list>
    		</v-menu>

    		<v-menu
		      transition="slide-x-transition"
		      bottom
		      right
		      auto
		      offset-y
		    >
		      <template v-slot:activator="{ on, attrs }">
		        <v-btn
		        	class="bsmHide"
		          style="background-color: rgba(3, 37, 65, 1);"
		          elevation="0"
		          dark
		          v-bind="attrs"
		          v-on="on"
		        >
		          Videos
		        </v-btn>
		      </template>

		      <v-list>
		        <v-list-item>
		          <v-list-item-title>Trending videos</v-list-item-title>
		        </v-list-item>
		      </v-list>
    		</v-menu>
			</v-app-bar>

			<v-navigation-drawer
	      v-model="drawer"
	      absolute
	      temporary
	    >
		    <v-row justify="center">
			    <v-expansion-panels popout>
			      <v-expansion-panel
			        v-for="(singer,i) in singers"
			        :key="i"
			      >
			        <v-expansion-panel-header>{{ singer.name }}</v-expansion-panel-header>
			        <v-expansion-panel-content>
			          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
			        </v-expansion-panel-content>
			      </v-expansion-panel>
			    </v-expansion-panels>
			  </v-row>
	    </v-navigation-drawer>


			<v-main style="margin-top: 72px !important;">

		    <v-row class="mb-1">
	    		<v-img 
	    			src="https://www.themoviedb.org/t/p/w1920_and_h600_multi_faces_filter(duotone,032541,01b4e4)/uozb2VeD87YmhoUP1RrGWfzuCrr.jpg"
	    			min-height="250"
	    			max-height="350"
	    		></v-img>
	    		<div style="position: absolute; color: white;" class="ml-15 mt-4">
		    		<p class="text-h4 text-md-h2 font-weight-bold">Welcome.</p>
		    		<p class="text-h6 text-md-h4 font-weight-bold">Millions of movies, TV shows and people to discover. Explore now.</p>
	    		</div>
	    		<div 
	    			style="position: absolute; color: white; width:100%; margin-top: 140px;"
	    			class="ml-2"
	    		>
					    <v-container>
					      <v-row>
					        <v-col cols="12">
					          <v-text-field
					            rounded
					            placeholder="Search movies, images, tracks..."
					            background-color="white"
					            height="46"
					          >
					            <template v-slot:append>
						            <v-btn
						            	style="background:linear-gradient(to right, rgba(30,213,169,1) 0%, rgba(1,180,228,1) 100%); margin-top:-4px; margin-right:-24px; color: white;"
						            	class="font-weight-bold"
						            	rounded
						            	height="46"
						            >Search</v-btn>
					            </template>
					          </v-text-field>
					        </v-col>
					      </v-row>
					    </v-container>
	    		</div>
		    </v-row>


			  <h3 class="hover d-inline-flex font-weight-black">Famous movies</h3>
			  <v-slide-group
		      class="pa-4"
		      active-class="success"
		    >
		      <v-slide-item
		        v-for="(movie, i) in movies"
		        :key="i"
		        v-slot="{ active, toggle }"
		      >
		        <v-card
		          :color="active ? undefined : 'success lighten-1'"
		          class="ma-4"
		          height="330"
		          width="220" 
		          @click="toggle"
		          elevation="0"
		        >
		          <v-img  
		            :src="movie.img"
		            height="330"
		            width="220"
		          ></v-img>
		        </v-card>
		      </v-slide-item> 
		    </v-slide-group>

		    <h3 class="hover d-inline-flex font-weight-bold">Trending tags</h3><br>        
					<v-row justify="space-around">
				    <v-col
				      cols="12"
				      md="10"
				    >
			        <v-chip-group
			          active-class="deep-purple--text"
			          show-arrows
			        >
			          <v-chip
			          	outlined
			          	color="rgba(3, 37, 65, 1)"
			            v-for="tag in tags"
			            :key="tag"
			          >
			            {{ tag }}
			          </v-chip>
				        </v-chip-group>
				    </v-col>
				  </v-row>


		  		<h3 class="hover mt-4 font-weight-black">Popular people</h3>
	  	    <v-card 
			    	elevation="0"
			    	class="d-flex justify-space-around mb-6 flex-wrap"
			    	flat
			    	tile
			    >
			    	<v-card
			        v-for="(artist, i) in artists"
			        :key="i"
			        outlined
			        class="my-1"
			        elevation="5"
			        tile
			      >
			      	<v-img :src="artist.image" width="235" height="235"></v-img>
			      	<v-card-title class="font-weight-black justify-center">{{ artist.name }}</v-card-title>
			      </v-card>	    	
			    </v-card>

	    		<slide-group></slide-group>

       		<h3 class="hover d-inline-flex font-weight-black">New songs</h3>
       		<download-music></download-music>

				  <h3 class="hover d-inline-flex font-weight-black">Pleylists</h3>
						<div class="ma-1 d-flex">
							<v-hover v-slot="{ hover }">
								<v-card 
									width="220" 
									height="330" 
									class="ma-1"
									elevation="0"
								>
				          <v-img
				            src="https://www.themoviedb.org/t/p/w220_and_h330_face/pwDvkDyaHEU9V7cApQhbcSJMG1w.jpg"
				            :class="hover ? 'deep-purple--text align-end' : 'white--text align-end'"
				            height="330"
				            width="220"
				            gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.2)"
				          ></v-img>
				        </v-card>
			        </v-hover>
		        </div>
			</v-main>
		</v-app>
	</div>
</template>

<script>
	import downloadMusic from "../components/downloadMusic.vue";
	import slideGroup from '../components/slideGroup.vue'

	export default {
		components: {
			downloadMusic,
			slideGroup,
		},
		data() {
			return{
					drawer: false,
					tags: [
	        'Alan Walker',
	        'Martin Garrix',
	        'GitLab',
	        'Facebook',
	        'Instagram',
	        'Twitter',
	        'Twitch',
	        'Vimeo',
	        'Youtube',
	        'Github',
	        'Portal',
	        'Shageldi',
	        'Hangeldi',
	        'Baygeldi',
	        'Cholukov'
	      ],
	      movies:[
	      	{ name: "Foo", 
	      		img: "https://www.themoviedb.org/t/p/w220_and_h330_face/d0OdD1I8qAfETvE9Rp9Voq7R8LR.jpg"
	      	},
	      	{ name: "Bar", 
	      		img: "https://www.themoviedb.org/t/p/w220_and_h330_face/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg"
	      	},
	      	{ name: "Baz", 
	      		img: "https://www.themoviedb.org/t/p/w220_and_h330_face/dbsS4oBDwLTVTuIiqwTls9wD1I1.jpg"
	      	},
	      	{ name: "Bee", 
	      		img: "https://www.themoviedb.org/t/p/w220_and_h330_face/bOth4QmNyEkalwahfPCfiXjNh1r.jpg"
	      	},
	      	{ name: "Foo", 
	      		img: "https://www.themoviedb.org/t/p/w220_and_h330_face/d0OdD1I8qAfETvE9Rp9Voq7R8LR.jpg"
	      	},
	      	{ name: "Bar", 
	      		img: "https://www.themoviedb.org/t/p/w220_and_h330_face/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg"
	      	},
	      	{ name: "Baz", 
	      		img: "https://www.themoviedb.org/t/p/w220_and_h330_face/dbsS4oBDwLTVTuIiqwTls9wD1I1.jpg"
	      	},
	      	{ name: "Bee", 
	      		img: "https://www.themoviedb.org/t/p/w220_and_h330_face/bOth4QmNyEkalwahfPCfiXjNh1r.jpg"
	      	},
	      	{ name: "Bee", 
	      		img: "https://www.themoviedb.org/t/p/w220_and_h330_face/d0OdD1I8qAfETvE9Rp9Voq7R8LR.jpg"
	      	}
	      ],
	      artists: [
	      	{
	      		name: "Gal Gadot", 
	      		image: "https://www.themoviedb.org/t/p/w235_and_h235_face/1uFvXHf18NBnlwsJHVaikLXwp9Y.jpg" 
	      	},
	      	{
      		name: "Katherine Waterson",
      		image: "https://www.themoviedb.org/t/p/w235_and_h235_face/5xndFxJuB2QYmtoYwl1MFtFHM24.jpg"
	      	},
	      	{
	      		name: "Zack Snyder",
	      		image: "https://www.themoviedb.org/t/p/w235_and_h235_face/iD0GDqkvJXDXiNEZej198hjt3Tt.jpg"
	      	},
	      	{
	      		name: "Scarlett Johansonn",
	      		image: "https://www.themoviedb.org/t/p/w235_and_h235_face/6NsMbJXRlDZuDzatN2akFdGuTvx.jpg"
	      	}
	      ]
			}
		}
	}
</script>

<style>
	*{
		font-family: Source Sans Pro, Arial, sans-serif;
	}

	.v-app-bar-title__content{
		width: 100px !important;
	}

	.hover:hover{
		animation: hover .5s forwards;
		color: #9C27B0;
	}

	@keyframes hover {
		0% {
			margin-left: 0px;
		}
		100% {
			margin-left: 4px;
		}
	}

	@media all and (max-width: 960px){
		.bsmHide{
			display:none !important;
		}
		.bmd{
			margin-left: 5px;
		}
	}

  @media all and (min-width: 960px){
		.bmdHide{
			display:none !important;
		}
		.bml{
			margin-left: 20px;
		}
  }
</style>