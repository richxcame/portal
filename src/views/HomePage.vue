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
						class="bml center"
					></v-img>
				</router-link>

				<v-menu
					class="bsmHide"
		      transition="slide-x-transition"
		      bottom
		      right
		      offset-y
		    >
		      <template v-slot:activator="{ on, attrs }">
		        <div
		        	class="bsmHide font-weight-bold ml-7 mr-3"
		        	v-bind="attrs"
		        	v-on="on"
		        >
		      		Movies
		      	</div>
		      </template>
		      <v-list nav>
		        <v-list-item>
		          <v-list-item-title>Popular</v-list-item-title>
		        </v-list-item>
		        <v-list-item>
		          <v-list-item-title>Now Playing</v-list-item-title>
		        </v-list-item>
		        <v-list-item>
		          <v-list-item-title>Top Rated</v-list-item-title>
		        </v-list-item>
		      </v-list>
    		</v-menu>

    		<v-menu
					class="bsmHide"
		      transition="slide-y-transition"
		      bottom
		      auto
		      offset-y
		    >
		      <template v-slot:activator="{ on, attrs }">
		        <div
		        	class="bsmHide font-weight-bold mx-3"
		        	v-bind="attrs"
		        	v-on="on"
		        >
		      		TV Shows
		      	</div>
		      </template>
		      <v-list nav>
		        <v-list-item>
		          <v-list-item-title>Popular</v-list-item-title>
		        </v-list-item>
		        <v-list-item>
		          <v-list-item-title>Now Playing</v-list-item-title>
		        </v-list-item>
		        <v-list-item>
		          <v-list-item-title>Top Rated</v-list-item-title>
		        </v-list-item>
		      </v-list>
    		</v-menu>

    		<v-menu
		      transition="slide-x-reverse-transition"
		      bottom
		      left
		      offset-y
		    >
		      <template v-slot:activator="{ on, attrs }">
		        <div
		        	class="bsmHide font-weight-bold mr-3"
		        	v-bind="attrs"
		        	v-on="on"
		        >People</div>
		      </template>
		      <v-list nav>
		        <v-list-item>
		          <v-list-item-title>Popular</v-list-item-title>
		        </v-list-item>
		        <v-list-item>
		          <v-list-item-title>Now Playing</v-list-item-title>
		        </v-list-item>
		        <v-list-item>
		          <v-list-item-title>Top Rated</v-list-item-title>
		        </v-list-item>
		      </v-list>
    		</v-menu>

				<v-spacer></v-spacer>

				<v-btn
        	class="bsmHide mr-2"
          style="background-color: rgba(3, 37, 65, 1);"
          elevation="0"
          dark
        >
        	<v-icon>mdi-plus</v-icon>
        </v-btn>

				<v-menu
					class="bsmHide"
		      transition="slide-x-transition"
		      bottom
		      right
		      auto
		      offset-y
		    >
		      <template v-slot:activator="{ on, attrs }">
		        <v-btn
		        	class="bsmHide font-weight-bold mr-2"
		        	outlined
		          style="background-color: rgba(3, 37, 65, 1);"
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
		        	class="bsmHide font-weight-bold mr-2"
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

	        <v-btn
	        	class="bsmHide font-weight-bold mr-2"
	          style="background-color: rgba(3, 37, 65, 1);"
	          elevation="0"
	          dark
	          v-bind="attrs"
	          v-on="on"
	        >
	          Login
	        </v-btn>

			</v-app-bar>

			<v-navigation-drawer
				class="pt-2"
	      v-model="drawer"
	      absolute
	      temporary
	    >
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

				<div class="ma-5">
					<h3 class="font-weight-black d-inline-flex mr-2">What's Popular</h3>
					<div
						style="border: 1px solid rgba(3,37,65,1); height: 30px; border-radius: 30px;"
						class="d-inline-flex"
					>
						<div
							class="px-5 font-weight-bold selectedDiv"
						>
							<router-link 
								to="/" 
								class="d-inline-flex selector selected justify-center align-center"
							>
								Streaming
							</router-link>
						</div>
						<div 
							style="height: 28px; border-radius: 30px;"
							class="d-inline-flex white--text justify-center align-center px-4 pl-n1" 
						>
							<router-link 
								to="/" 
								class="d-flex align-center justify-center selector  font-weight-bold"
							>
								On TV
							</router-link>
						</div>
						<div 
							style="height: 28px; border-radius: 30px;"
							class="d-inline-flex white--text justify-center align-center px-4 pl-n1 " 
						>
							<router-link 
								to="/"
								class="d-flex align-center justify-center selector  font-weight-bold"
							>
								For Rent
							</router-link>
						</div>
						<div 
							style="height: 28px; border-radius: 30px;"
							class="d-inline-flex white--text justify-center align-center px-4 pl-n1" 
						>
							<router-link 
								to="/"
								class="d-flex align-center justify-center selector  font-weight-bold"
							>
								In Theatres
							</router-link>
						</div>
					</div>
				</div>

				

				<v-row class="ma-1 d-flex flex-nowrap bScroll">
					<v-card 
						class="mx-1"
						v-for="(trending, i) in trendings"
						:key="i"
						elevation="0"
					>
						<v-img
							class="rounded-lg"
							max-width="150"
							max-height="225"
							:src="trending.image"
						></v-img>
						<v-card-actions
			        class="pt-6"
			        style="position: relative;"
			      >
			        <v-btn
			          absolute
			          color="rgba(3,37,65,1)"
			          class="white--text"
			          fab
			          small
			          top
			        >
		          	<v-progress-circular
		          		:rotate="-90"
						      :value="trending.value"
						      :color="trending.value > 50 ? '#1ed5a9' : 'red darken-1'"

						    >
						    	<span class="white--text text-caption">{{ trending.value }}<small><sup>%</sup></small></span>
						    </v-progress-circular>
			        </v-btn>
			      <h4>{{ trending.name }}</h4>
			      </v-card-actions>
					</v-card>
				</v-row>



		    <div class="my-5">
				  <h3 class="hover d-inline-flex font-weight-black">Famous movies</h3>
				  <v-slide-group
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
			  </div>

		    <h3 class="hover d-inline-flex font-weight-black">Trending tags</h3><br>        
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
	      		name: "Katherin Watson",
	      		image: "https://www.themoviedb.org/t/p/w235_and_h235_face/5xndFxJuB2QYmtoYwl1MFtFHM24.jpg"
	      	},
	      	{
	      		name: "Scarlet Johnson",
	      		image: "https://www.themoviedb.org/t/p/w235_and_h235_face/6NsMbJXRlDZuDzatN2akFdGuTvx.jpg"
	      	},
	      	{
	      		name: "Johny Depp",
	      		image: "https://www.themoviedb.org/t/p/w235_and_h235_face/ilPBHd3r3ahlipNQtjr4E3G04jJ.jpg"
	      	},
	      	{
	      		name: "Jason Staham",
	      		image: "https://www.themoviedb.org/t/p/w235_and_h235_face/lldeQ91GwIVff43JBrpdbAAeYWj.jpg"
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
	      ],
	      trendings: [
	      	{
	      		name: "Lucifer",
	      		image: "https://www.themoviedb.org/t/p/w220_and_h330_face/4EYPN5mVIhKLfxGruy7Dy41dTVn.jpg",
	      		value: 82
	      	},
	      	{
	      		name: "Love Alarm",
	      		image: "https://www.themoviedb.org/t/p/w220_and_h330_face/hQ8Hobo1RpYuZVQJQOCycNMHAG.jpg",
	      		value: 49
	      	},
	      	{
	      		name: "The Mandalorian",
	      		image: "https://www.themoviedb.org/t/p/w220_and_h330_face/sWgBv7LV2PRoQgkxwlibdGXKz1S.jpg",
	      		value: 75
	      	},
	      	{
	      		name: "Finding Ohana",
	      		image: "https://www.themoviedb.org/t/p/w220_and_h330_face/tTWl37oAYRXS3D5mEHmjveXXyrN.jpg",
	      		value: 45
	      	},
	      	{
	      		name: "Yes Day",
	      		image: "https://www.themoviedb.org/t/p/w220_and_h330_face/rejrD9ovTHJbfmpLM0mbEliEPV6.jpg",
	      		value: 78,
	      	},
	      	{
	      		name: "The Walking Dead",
	      		image: "https://www.themoviedb.org/t/p/w440_and_h660_face/rqeYMLryjcawh2JeRpCVUDXYM5b.jpg",
	      		value: 91
	      	},
	      	{
	      		name: "Joker",
	      		image: "https://www.themoviedb.org/t/p/w220_and_h330_face/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg",
	      		value: 95
	      	},
	      	{
	      		name: "Resident Alien",
	      		image: "https://www.themoviedb.org/t/p/w220_and_h330_face/bG5aqfT5lTHuSbcQofNHtH0RyyP.jpg",
	      		value: 91
	      	},
	      	{
	      		name: "Marvel Studios: Legends",
	      		image: "https://www.themoviedb.org/t/p/w220_and_h330_face/EpDuYIK81YtCUT3gH2JDpyj8Qk.jpg",
	      		value: 1
	      	},
	      	{
	      		name: "Red Dot",
	      		image: "https://www.themoviedb.org/t/p/w220_and_h330_face/xZ2KER2gOHbuHP2GJoODuXDSZCb.jpg",
	      		value: 78
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

	.bScroll {
		overflow-y: scroll;
	}

	.bScroll::-webkit-scrollbar {
	  width: 2px;
	  height: 8px !important;
	}

	.bScroll::-webkit-scrollbar-track {
	  background: #f1f1f1;
	}

	.bScroll::-webkit-scrollbar-thumb {
		border-radius: 20px;
	  background: #ccc;
	}

	.bScroll::-webkit-scrollbar-thumb:hover {
	  background: #1ed5a9 !important;
	}

	.v-app-bar-title__content{
		width: 100px !important;
	}

	.hover:hover{
		animation: hover .5s forwards;
		color: #9C27B0;
	}

	.bActive{
		background-color: rgba(3,37,65,1) !important;
		color: #c0fecf !important;
	}

	.selector{
		text-decoration: none; 
		height: 28px;
		border-radius: 30px;
		color: rgba(3,37,65,1) !important;
	}

	.selected{
		background: linear-gradient(to right, #c0fecf 0%, #1ed5a9 100%);
		-webkit-background-clip: text !important;
		-webkit-text-fill-color: transparent !important;		
	}

	.selectedDiv{
		background-color: rgba(3,37,65,1) !important; 
		border-radius:30px;
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