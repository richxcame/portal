<template>
	<div>
		<v-app>
			<!-- app bar -->
			<v-app-bar
				height="60"
				style="background-color: rgba(3, 37, 65, 1);"
				dark
				elevate-on-scroll
				fixed>
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
		      offset-y>
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
		      offset-y>
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
		      offset-y>
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
          dark >
        	<v-icon>mdi-plus</v-icon>
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
		      offset-y>
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
	        >
	          Login
	        </v-btn>
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

			<v-main style="margin-top: 72px !important;">

				<!-- picture -->
		    <v-row class="mb-1">
	    		<v-img 
	    			src="https://www.themoviedb.org/t/p/w1920_and_h600_multi_faces_filter(duotone,032541,01b4e4)/uozb2VeD87YmhoUP1RrGWfzuCrr.jpg"
	    			min-height="250"
	    			max-height="350"
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

				<div class="ma-5 bsmHide">
					<h3 class="font-weight-black d-inline-flex mr-2">What's Popular</h3>
					<div
						style="border: 1px solid rgba(3,37,65,1); height: 30px; border-radius: 30px;"
						class="d-inline-flex mx-4"
					>
						<div
							class="px-5 font-weight-bold selectedDiv"
							style="background-color: rgba(3,37,65,1) !important;"
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

				<div class="ma-5 bmdHide">
					<h3 class="font-weight-black d-inline-flex mr-2">What's Popular</h3>
					<div
						style="border: 1px solid rgba(3,37,65,1); height: 30px; border-radius: 30px;"
						class="d-inline-flex ml-4"
					>
						<div 
							class="pl-3 pr-2 font-weight-bold selectedDiv"
							style="background-color: rgba(3,37,65,1)">
							<router-link 
								to="/" 
								class="d-inline-flex selector selected justify-center align-center"
							>
								Streaming
							</router-link>
							<v-icon color="#1ed5a9">mdi-chevron-down</v-icon>
						</div>
					</div>
				</div>				

				<v-row class="ma-1 mb-3 d-flex flex-nowrap bScroll" style="background-image: url(https://www.themoviedb.org/assets/2/v4/misc/trending-bg-39afc2a5f77e31d469b25c187814c0a2efef225494c038098d62317d923f8415.svg);">
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

				<div class="column_wrapper">
				<div
					:style="backgroundImg"
					
				>
				<div 
					style="background: linear-gradient(to right, rgba(3,37,65, 0.75) 0%, rgba(3,37,65, 0.75) 100%)"
					class="pt-4 pb-7 bScroll">
					<div class="bsmHide" style="margin-top:30px;">
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

						<div class="ma-2 bmdHide">
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
				
					<v-row class="mx-1 d-flex flex-nowrap" style="padding-top: 40px">
						<div
							class="mx-1"
							v-for="(item,i) in latestTrailers"
							:key="i"
						>
							<v-hover v-slot="{ hover }">
								<v-img
									class="rounded-lg"
									max-width="300"
									max-height="168"
									:src="item.image"
									@mouseenter="changeBackground(item.backgroundImage)"
								>
									<div class="d-flex align-center justify-center" style="height:100%; width: 100%">
										<v-btn icon x-large>
											<v-icon color="white" size="60">mdi-play</v-icon>
										</v-btn>
									</div>
								</v-img>
							</v-hover>
								<center><h4 class="font-weight-bold white--text">{{ item.name }}</h4></center>
				      	<center><h5 class="font-weight-bold white--text">{{ item.text }}</h5></center>
						</div>
					</v-row>
				</div>
				</div>
				</div>

				<!-- famous movies -->
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

			  <!-- community -->
			  <div class="community my-5">
		  		<div class="pa-10">
		  				<h2 class="my-3">Join Today</h2>
		  				<v-row>
					  		<v-col cols="12" sm="6">
					  			<p class="body-1 mb-4">Get access to maintain your own custom personal lists, track what you've seen and search and filter for what to watch next—regardless if it's in theatres, on TV or available on popular streaming services like Netflix, Disney Plus, and Amazon Prime Video</p>
					  			<router-link 
					  				class="community-link"
					  				to="/" 
					  			>Sign Up</router-link>
					  		</v-col>
					  		<v-col cols="12" sm="6">
					  			<ul class="body-1 ml-3">
					  				<li>Enjoy TMDb ad free</li>
					  				<li>Maintain a personal watchlist</li>
					  				<li>Log the movies and TV shows you've seen</li>
					  				<li>Build custom lists</li>
					  				<li>Contribute to and improve our database</li>
					  			</ul>
					  		</v-col>
					  	</v-row>
					  </div>
				</div>

			  <!-- trending tags -->
			  <div>
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
			<v-footer class="footer">
				<v-container>
					<v-row>
						<v-col cols="6" md="4">
							<center>
								<v-img
									src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_2-d537fb228cf3ded904ef09b136fe3fec72548ebc1fea3fbbd1ad9e36364db38b.svg"
									height="95"
									width="130"
								></v-img>
								<router-link 
									to="/" 
									class="footer-link my-3 mx-auto"
								>COMMUNITY</router-link>
							</center>
						</v-col>
						<v-col cols="6" md="4" class="justify-center">
							<center><h3 class="white--text">The Basics</h3>
								<p class="ma-0 white--text">About TMDb</p>
								<p class="ma-0 white--text">Contact us</p>
								<p class="ma-0 white--text">System status</p>
								<p class="ma-0 white--text">Privacy Policy</p>
							</center>
						</v-col>
						<v-col cols="6" md="4" class="justify-center bsmHide">
							<center>
								<h3 class="white--text">COMMUNITY</h3>
								<p class="ma-0 white--text">Guidelines</p>
								<p class="ma-0 white--text">Discussions</p>
								<p class="ma-0 white--text">Leaderboard</p>
								<p class="ma-0 white--text">Twitter</p>
							</center>
						</v-col>
					</v-row>
				</v-container>
			</v-footer>

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
					backgroundImage: "https://www.themoviedb.org/t/p/w1920_and_h427_multi_faces/rhulVKUoGXLB66d1LqJUhOcDB9O.jpg",
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
			}
		},
		methods: {
			changeBackground(query){
				this.backgroundImage = query;
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

	.footer{
		background-image: radial-gradient(at 30% top, #031d33 0%, rgba(3,37,65, 1) 70%);
	}

	.footer-link{
		text-decoration: none;
		color: rgba(1,180,228, 1);
		background-color: #fff;
		font-weight: bold;
		display: inline-block;
		border: 2px solid #fff;
    border-radius: 5px;
    padding: 8px 16px;
	}

	.community{
		background-image: url(../assets/lMnoYqPIAVL0YaLP5YjRy7iwaYv.jpg);
    background-position: center center;
    background-size: cover;
    background-repeat: no-repeat;
    color: #fff;
	}

	.community-link{
		background-color: rgb(128,91,231, 1);
		border-color: #805be7; 
		text-decoration: none;
		color: #fff !important;
		font-size: 0.9em;
		font-weight: 600;
		border: 2px solid #fff;
    border-radius: 5px;
    padding: 8px 16px;
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