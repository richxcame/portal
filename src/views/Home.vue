<template>
	<div>
		<v-app>
			<!-- app bar -->
			<x-header></x-header>

			<v-main style="margin-top: 72px !important;">

				<!-- picture -->
		    <v-row class="mb-1">
	    		<v-img 
	    			src="https://www.themoviedb.org/t/p/w1920_and_h600_multi_faces_filter(duotone,032541,01b4e4)/uozb2VeD87YmhoUP1RrGWfzuCrr.jpg"
	    			min-height="250"
	    			max-height="350"
	    			gradient="to top right, rgba(0,0,0, 0), rgba(0,0,0, .5)"
	    		></v-img>
	    		<div style="position: absolute; color: white;" class="ml-15 mt-5">
		    		<p class="text-h4 text-md-h2 font-weight-bold">Welcome.</p>
		    		<p class="text-h6 text-md-h4 font-weight-bold">Millions of movies, TV shows and people to discover. Explore now.</p>
	    		</div>
	    		<div 
	    			style="position: absolute; color: white; width:100%; margin-top: 150px;"
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
					            v-model="search"
					          >
					            <template v-slot:append>
						            <v-btn
						            	style="background:linear-gradient(to right, rgba(30,213,169,1) 0%, rgba(1,180,228,1) 100%); margin-top:-4px; margin-right:-24px; color: white;"
						            	class="font-weight-bold"
						            	rounded
						            	height="46"
						            	@click="searchQuery"
						            >Search</v-btn>
					            </template>
					          </v-text-field>
					        </v-col>
					      </v-row>
					    </v-container>
	    		</div>
		    </v-row>	

				<div class="ma-5">
					<x-selector></x-selector>
				</div>

				<v-row class="ma-1 mb-3 d-flex flex-nowrap bScroll">
					<v-card 
						class="mx-1"
						v-for="(trending, i) in trendings"
						:key="i"
						elevation="0"
					>
					<router-link :to="goToMovieDetails(trending.id)">
						<v-img
							class="rounded-lg"
							max-width="150"
							max-height="225"
							:src="trending.image"
							gradient="to top right, rgba(0,0,0, 0), rgba(0,0,0, .5)"
						></v-img>
						</router-link>
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

				<div
					:style="backgroundImg"
				>
				<div 
					style="background: linear-gradient(to right, rgba(3,37,65, 0.75) 0%, rgba(3,37,65, 0.75) 100%);"
					class="pt-4 pb-7 bScroll"
				>
					<div 
						class="bsmHide" 
						style="margin-top:30px;"
					>
						<h3 class="font-weight-bold d-inline-flex mx-3">Latest Trailers</h3>
						<div
							style="border: 1px solid #1ed5a9; height: 30px; border-radius: 30px;"
							class="d-inline-flex mx-4"
						>
							<div
								class="px-5 font-weight-bold selectedDivReverse"
								style="background: linear-gradient(to right, #c0fecf 0%, #1ed5a9 100%) !important;"
							>
								<router-link 
									to="/" 
									class="d-inline-flex selectorReverse selectedReverse justify-center align-center"
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
									class="d-flex align-center justify-center selectorReverse  font-weight-bold"
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
									class="d-flex align-center justify-center selectorReverse  font-weight-bold"
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
									class="d-flex align-center justify-center selectorReverse  font-weight-bold"
								>
									In Theatres
								</router-link>
							</div>
						</div>
						</div>

						<div class="mx-2 mt-2 bmdHide">
							<h3 class="font-weight-bold d-inline-flex mr-2">Latest Trailers</h3>
							<div
								style="border: 1px solid #1ed5a9; height: 30px; border-radius: 30px; overflow: hidden;"
								class="d-inline-flex ml-4"
							>
								<div 
									class="pl-3 pr-2 font-weight-bold"
									style="background: linear-gradient(to right, #c0fecf 0%, #1ed5a9 100%); color: rgba(3,37,65, 1) !important">
									<router-link 
										to="/" 
										class="d-inline-flex selector justify-center align-center"
									>
										Streaming
									</router-link>
									<v-icon color="rgba(3,37,65, 1)">mdi-chevron-down</v-icon>
								</div>
							</div>
						</div>	
				
					<div class="mx-1 d-flex flex-nowrap" style="padding-top: 40px">
						<div
							class="mx-1"
							v-for="(item,i) in latestTrailers"
							:key="i"
							style="max-height: 240px;"
						>
							<v-hover v-slot="{ hover }">
								<v-img
									class="rounded-lg"
									max-width="300"
									max-height="168"
									:src="item.image"
									gradient="to top right, rgba(0,0,0, 0), rgba(0,0,0, .5)"
									@mouseover="changeBackground(item.backgroundImage)"
								>
									<div class="d-flex align-center justify-center" style="height:100%; width: 100%">
										<v-btn 
											icon 
											style="background-color:rgba(0,0,0, .5)"
											@click="movieDetails"
										>
											<v-icon 
												color="white" 
												size="40"
											>mdi-play</v-icon>
										</v-btn>
									</div>
								</v-img>
							</v-hover>
								<center><h4 class="font-weight-bold white--text">{{ item.name }}</h4></center>
				      	<center><h5 class="font-weight-bold white--text">{{ item.text }}</h5></center>
						</div>
					</div>
				</div>
				</div>

				<!-- famous movies -->
				<h3 class="hover d-inline-flex font-weight-black mt-4">Famous movies</h3>
		    <div class="mb-4 bScroll">
				  <!-- <v-slide-group
			      active-class="#1ed5a9"
			    >
			      <v-slide-item
			        v-for="(movie, i) in movies"
			        :key="i"
			        v-slot="{ active, toggle }"
			      >
			        <v-card
			          :color="active ? undefined : '#1ed5a9'"
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
			    </v-slide-group> -->
			    <div class="d-flex flex-nowrap mt-2 mb-4">
			    	<v-card
			    		v-for="(movie, i) in movies"
			    		:key="i"
			    		class="respectiveImg mx-1"
			    		elevation="0"
			    		to="/movie/1"
			    	>
				    	<v-img
				    		:src="movie.img" 
				    		class="rounded-lg"
				    	></v-img>
				    </v-card>
			    </div>
			  </div>

			  <!-- community -->
			  <div class="community my-5">
		  		<div class="pa-10">
		  				<h2 class="my-3">Join Today</h2>
		  				<v-row>
					  		<v-col cols="12" sm="6">
					  			<p class="body-1 mb-4">Get access to maintain your own custom personal lists, track what you've seen and search and filter for what to watch next—regardless if it's in theatres, on TV or available on popular streaming services like Netflix, Disney Plus, and Amazon Prime Video</p>
					  			<router-link 
					  				class="community-link"
					  				to="/login" 
					  			>Sign Up</router-link>
					  		</v-col>
					  		<v-col cols="12" sm="6">
					  			<ul class="body-1 ml-3">
					  				<li>Enjoy TMDb free</li>
					  				<li>Maintain a personal watchlist</li>
					  				<li>Log the movies, tracks, videos shows you've seen</li>
					  				<li>Build custom lists</li>
					  				<li>Contribute to and improve our database</li>
					  			</ul>
					  		</v-col>
					  	</v-row>
					  </div>
				</div>

			  <!-- trending tags -->
			  <div>
		    	<h3 class="hover d-inline-flex font-weight-black">Popular tags</h3><br>        
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
				 </div>

			  <!-- popular people -->
			  <div>
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
			  </div>

			</v-main>

			<!-- footer -->
			<x-footer></x-footer>
			

		</v-app>
	</div>
</template>

<script>
	import Vuex from 'vuex';
	import { mapState, mapActions } from 'vuex';
	import downloadMusic from "../components/downloadMusic.vue"
	import slideGroup from '../components/slideGroup.vue'
	import xHeader from '../components/xHeader.vue'
	import xFooter from '../components/xFooter.vue'
	import xSelector from '../components/xSelector.vue'
	import loader from '../components/loader.vue'

	export default {
		components: {
			downloadMusic,
			slideGroup,
			xHeader,
			xFooter,
			xSelector,
			loader,
		},
		data() {
			return{
					search: '',
					backgroundImage: "https://www.themoviedb.org/t/p/w1920_and_h427_multi_faces/rhulVKUoGXLB66d1LqJUhOcDB9O.jpg",
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
		      trendings: [
		      	{
		      		name: "Lucifer",
		      		image: "https://www.themoviedb.org/t/p/w220_and_h330_face/4EYPN5mVIhKLfxGruy7Dy41dTVn.jpg",
		      		value: 82,
		      		id: 1,
		      	},
		      	{
		      		name: "Love Alarm",
		      		image: "https://www.themoviedb.org/t/p/w220_and_h330_face/hQ8Hobo1RpYuZVQJQOCycNMHAG.jpg",
		      		value: 49,
		      		id: 2,
		      	},
		      	{
		      		name: "The Mandalorian",
		      		image: "https://www.themoviedb.org/t/p/w220_and_h330_face/sWgBv7LV2PRoQgkxwlibdGXKz1S.jpg",
		      		value: 75,
		      		id: 3,
		      	},
		      	{
		      		name: "Finding Ohana",
		      		image: "https://www.themoviedb.org/t/p/w220_and_h330_face/tTWl37oAYRXS3D5mEHmjveXXyrN.jpg",
		      		value: 45,
		      		id: 4
		      	},
		      	{
		      		name: "Yes Day",
		      		image: "https://www.themoviedb.org/t/p/w220_and_h330_face/rejrD9ovTHJbfmpLM0mbEliEPV6.jpg",
		      		value: 78,
		      		id: 5
		      	},
		      	{
		      		name: "The Walking Dead",
		      		image: "https://www.themoviedb.org/t/p/w440_and_h660_face/rqeYMLryjcawh2JeRpCVUDXYM5b.jpg",
		      		value: 91,
		      		id: 6
		      	},
		      	{
		      		name: "Joker",
		      		image: "https://www.themoviedb.org/t/p/w220_and_h330_face/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg",
		      		value: 95,
		      		id: 7
		      	},
		      	{
		      		name: "Resident Alien",
		      		image: "https://www.themoviedb.org/t/p/w220_and_h330_face/bG5aqfT5lTHuSbcQofNHtH0RyyP.jpg",
		      		value: 91,
		      		id: 8
		      	},
		      	{
		      		name: "Marvel Studios: Legends",
		      		image: "https://www.themoviedb.org/t/p/w220_and_h330_face/EpDuYIK81YtCUT3gH2JDpyj8Qk.jpg",
		      		value: 1,
		      		id: 9
		      	},
		      	{
		      		name: "Red Dot",
		      		image: "https://www.themoviedb.org/t/p/w220_and_h330_face/xZ2KER2gOHbuHP2GJoODuXDSZCb.jpg",
		      		value: 78,
		      		id: 10
		      	}
		      ],
		      latestTrailers: [
		      	{
		      		name: "The Girlfriend Experience",
		      		text: "The Girlfriend Experience | Season 3 Official Trailer | STARZ",
		      		image: "https://www.themoviedb.org/t/p/w355_and_h200_multi_faces/rhulVKUoGXLB66d1LqJUhOcDB9O.jpg",
		      		backgroundImage: "https://www.themoviedb.org/t/p/w1920_and_h427_multi_faces/rhulVKUoGXLB66d1LqJUhOcDB9O.jpg"
		      	},
		      	{
		      		name: "The Invisible Man vs. The Human Fly",
		      		text: "The Invisible Man Appears & The Invisible Man vs. The Human Fly Official Trailer",
		      		image: "https://www.themoviedb.org/t/p/w355_and_h200_multi_faces/eRAZqPpFkGEHB0kitBdJ4bZFjwY.jpg",
		      		backgroundImage: "https://www.themoviedb.org/t/p/w1920_and_h427_multi_faces/eRAZqPpFkGEHB0kitBdJ4bZFjwY.jpg"
		      	},
		      	{
		      		name: "Hallow Point",
		      		text: "Hollow Point | Official Trailer (HD) | Vertical Entertainment",
		      		image: "https://www.themoviedb.org/t/p/w355_and_h200_multi_faces/v0dXDmenDx5ElQZvI5VhzdGamRP.jpg",
		      		backgroundImage: "https://www.themoviedb.org/t/p/w1920_and_h427_multi_faces/v0dXDmenDx5ElQZvI5VhzdGamRP.jpg"
		      	},
		      	{
		      		name: "Attack on Titan",
		      		text: "Attack on Titan Final Season | SEASON FINALE TRAILER",
		      		image: "https://www.themoviedb.org/t/p/w355_and_h200_multi_faces/yvKrycViRMQcIgdnjsM5JGNWU4Q.jpg",
		      		backgroundImage: "https://www.themoviedb.org/t/p/w1920_and_h427_multi_faces/yvKrycViRMQcIgdnjsM5JGNWU4Q.jpg"
		      	},
		      	{
		      		name: "The World Famous Kid Detective",
		      		text: "The World Famous Kid Detective Trailer",
		      		image: "https://www.themoviedb.org/t/p/w355_and_h200_multi_faces/waLs5o9IT1KGsG2KAkqR1H2F0eK.jpg",
		      		backgroundImage: "https://www.themoviedb.org/t/p/w1920_and_h427_multi_faces/waLs5o9IT1KGsG2KAkqR1H2F0eK.jpg"
		      	},
		      	{
		      		name: "The Girlfriend Experience",
		      		text: "The Girlfriend Experience | Season 3 Official Trailer | STARZ",
		      		image: "https://www.themoviedb.org/t/p/w355_and_h200_multi_faces/rhulVKUoGXLB66d1LqJUhOcDB9O.jpg",
		      		backgroundImage: "https://www.themoviedb.org/t/p/w1920_and_h427_multi_faces/rhulVKUoGXLB66d1LqJUhOcDB9O.jpg"
		      	},
		      	{
		      		name: "The Invisible Man vs. The Human Fly",
		      		text: "The Invisible Man Appears & The Invisible Man vs. The Human Fly Official Trailer",
		      		image: "https://www.themoviedb.org/t/p/w355_and_h200_multi_faces/eRAZqPpFkGEHB0kitBdJ4bZFjwY.jpg",
		      		backgroundImage: "https://www.themoviedb.org/t/p/w1920_and_h427_multi_faces/eRAZqPpFkGEHB0kitBdJ4bZFjwY.jpg"
		      	},
		      	{
		      		name: "Hallow Point",
		      		text: "Hollow Point | Official Trailer (HD) | Vertical Entertainment",
		      		image: "https://www.themoviedb.org/t/p/w355_and_h200_multi_faces/v0dXDmenDx5ElQZvI5VhzdGamRP.jpg",
		      		backgroundImage: "https://www.themoviedb.org/t/p/w1920_and_h427_multi_faces/v0dXDmenDx5ElQZvI5VhzdGamRP.jpg"
		      	},
		      	{
		      		name: "Attack on Titan",
		      		text: "Attack on Titan Final Season | SEASON FINALE TRAILER",
		      		image: "https://www.themoviedb.org/t/p/w355_and_h200_multi_faces/yvKrycViRMQcIgdnjsM5JGNWU4Q.jpg",
		      		backgroundImage: "https://www.themoviedb.org/t/p/w1920_and_h427_multi_faces/yvKrycViRMQcIgdnjsM5JGNWU4Q.jpg"
		      	},
		      	{
		      		name: "The World Famous Kid Detective",
		      		text: "The World Famous Kid Detective Trailer",
		      		image: "https://www.themoviedb.org/t/p/w355_and_h200_multi_faces/waLs5o9IT1KGsG2KAkqR1H2F0eK.jpg",
		      		backgroundImage: "https://www.themoviedb.org/t/p/w1920_and_h427_multi_faces/waLs5o9IT1KGsG2KAkqR1H2F0eK.jpg"
		      	}
		      ]
			}
		},
		computed: {
			backgroundImg() {
				return "background-image: url(" + this.backgroundImage + ");" + "background-position: center center; background-size: cover; background-repeat: no-repeat; color: #fff; max-width: 1400px";
			},
			...mapState([
				'searchResults',
			])
		},
		methods: {
			changeBackground(query){
				this.backgroundImage = query;
			},
			goToMovieDetails(query) {
				return `movie/${query}`; 
			},
			searchQuery() {
				this.$store.dispatch('searchQuery', this.search)
					.then((res) => console.log('...'));
			},
			movieDetails() {
				this.$router.push('/movie/1');
			}
		}
	}
</script>

<style>
	*{
		font-family: Source Sans Pro, Arial, sans-serif;
	}

	a {
		text-decoration: none;
	}

	.bScroll {
		overflow-y: scroll;
	}

	.bScroll::-webkit-scrollbar {
	  width: 1px;
	  height: 10px !important;
	}

	.bScroll::-webkit-scrollbar-track {
	  background: #f1f1f1;
	}

	.bScroll::-webkit-scrollbar-thumb {
		border-radius: 20px;
	  background: #999;
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
		background: linear-gradient(to right, #c0fecf 0%, #1ed5a9 100%) !important;
		-webkit-background-clip: text !important;
		-webkit-text-fill-color: transparent !important;		
	}

	.selectedDiv{
		background-color: linear-gradient(to right, #c0fecf 0%, #1ed5a9 100%) !important; 
		border-radius:30px;
	}

	.selectorReverse{
		text-decoration: none; 
		height: 28px;
		border-radius: 30px;
		color: white !important;
	}

	.selectedReverse{
		background: rgba(3,37,65,1) !important;
		-webkit-background-clip: text !important;
		-webkit-text-fill-color: transparent !important;		
	}

	.selectedDivReverse{
		background-color: linear-gradient(to right, #c0fecf 0%, #1ed5a9 100%) !important; 
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
		.respectiveImg {
			height: 250;
			width: 200;
		}
	}

  @media all and (min-width: 960px){
		.bmdHide{
			display:none !important;
		}
		.bml{
			margin-left: 20px;
		}
		.respectiveImg {
			height: 330;
			width: 220;
		}
  }
</style>