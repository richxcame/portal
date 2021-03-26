<template>
	<v-app>
		<x-header></x-header>

		<v-main class="my-15">

			<div class="backgroundZ0">
				<v-row class="backgroundZ1 pa-4">
					<v-col 
						cols="12" 
						md="4"
						class="d-flex justify-center"
					>
						<router-link to="/watch/1">
							<v-img 
								src="https://www.themoviedb.org/t/p/w300_and_h450_bestv2/kl07N07l4XNjXF48oujzWXs40Dw.jpg"
								max-height="450"
								max-width="300"
								class="rounded-lg"
							>
								<div 
									class="d-flex align-center justify-center"
									style="height: 100%;" 
								>
									<v-btn 
										icon 
										large
										style="background-color:rgba(0,0,0, .8)"
									>
										<v-icon 
											large 
											color="white"
										>mdi-play</v-icon>
									</v-btn>
								</div>
							</v-img>
						</router-link>
					</v-col>
					<v-col 
						cols="12" 
						md="8" 
						class="pa-4 white--text d-flex align-center"
					>
					<div>
						<h1 class="text-h5 text-lg-h3">The Boarding School: Las Cumbres <span class="font-weight-light">(2021)</span></h1>
						<p>Drama, Mystery <span class="ml-7">50m</span></p>
						<v-row class="my-5">
						<div 
							style="background-color: #081c22; height:75px; width: 75px; border-radius: 50%;"
							class="d-flex align-center justify-center" 
						>
							<v-progress-circular
	          		:rotate="-90"
					      value="75"
					      color="green"
					      size="65"
					      width="5"
					    >
					    	<span class="white--text font-weight-black">75<small><sup>%</sup></small></span>
					    </v-progress-circular>
				    </div>
				    <div class="d-flex align-center px-7">
				    	<v-btn
				    		icon 
				    		color="rgb(3,37,65)"
				    		large
				    		class="mx-3"
				    	>
				    		<v-icon color="white">mdi-thumb-up</v-icon>
				    	</v-btn>
				    	<v-btn 
				    		icon 
				    		color="rgb(3,37,65)"
				    		large
				    		class="mx-3"
				    	>
				    		<v-icon color="white">mdi-thumb-down</v-icon>
				    	</v-btn>
				    </div>
				    </v-row>
						<h3 class="font-weight-bold">Overview</h3>
						<p class="body-2">In an inaccessible place between the mountains and isolated from the world, a school is located next to an old monastery. The students are rebellious and problematic young people who live under the strict and severe discipline imposed by the center to reintegrate them into society. The surrounding forest is home to ancient legends, threats that are still valid and that will immerse them in terrifying adventures.</p>
						<v-row>
							<v-col cols="6">
								<h4>Laura Belloso</h4>
								<p class="body-2 font-weight-bold">Creator</p>
							</v-col>
							<v-col cols="6">
								<h4>Asier Anduenza</h4>
								<p class="body-2 font-weight-bold">Creator</p>
							</v-col>
						</v-row>
						</div>
					</v-col>		
				</v-row>
			</div>

			<!-- Cast -->
			<div class="text-h6 ma-6">Series Cast</div>
			<v-row class="bScroll d-flex flex-nowrap ml-2">
				<v-card
					elevation="4"
					class="ma-2"
					v-for="(artist, i) in artists"
					:key="i"
					width="138"
				>
					<v-img :src="artist.image"></v-img>
					<router-link to="/" class="black--text body-2 font-weight-black">{{ artist.name }}</router-link>
					<p class="body-2">{{ artist.nameInFilm }}</p>
				</v-card>
			</v-row>
			</div>
		</v-main>

		<x-footer></x-footer>

	</v-app>
</template>

<script>
	import xHeader from '../components/xHeader.vue'
	import xFooter from '../components/xFooter.vue'

	export default {
	  name: 'MovieDetails',
	  components: {
	  	xHeader,
	  	xFooter,
	  },
	  data () {
	    return {
	    	artists: [
	    		{
	    			name: "Asia Ortega",
	    			nameInFilm: "Amaia Torres",
	    			image: "https://www.themoviedb.org/t/p/w138_and_h175_face/jWDoTmcQKLIggpoFXSDugsepPrc.jpg"
	    		},
	    		{
	    			name: "Albert Salazar",
	    			nameInFilm: "Paul Uribe",
	    			image: "https://www.themoviedb.org/t/p/w138_and_h175_face/wpbfTt6VxEpm2lj6vSbzYEnwZLT.jpg"
	    		},
	    		{
	    			name: "Joel Bosqued",
	    			nameInFilm: "Elías",
	    			image: "https://www.themoviedb.org/t/p/w138_and_h175_face/pTCPqrbf9dtHUf4be3TANv6hRSL.jpg"
	    		},
	    		{
	    			name: "Alberto Amarilla",
	    			nameInFilm: "Elvira",
	    			image: "https://www.themoviedb.org/t/p/w138_and_h175_face/gv3K3xFqKdd82KyBk4FZzKESHRM.jpg"
	    		},
	    		{
	    			name: "Mina El",
	    			nameInFilm: "Inés Mendoza",
	    			image: "https://www.themoviedb.org/t/p/w138_and_h175_face/qImBg8eRtM7gH85wBCm9X3OcRfj.jpg"
	    		},
	    		{
	    			name: "Claudia Riera",
	    			nameInFilm: "Paz Espinosa",
	    			image: "https://www.themoviedb.org/t/p/w138_and_h175_face/uBMSiIXu3Vu1xGr9bB1i8u29OxD.jpg"
	    		},
	    		{
	    			name: "Daniel Arias",
	    			nameInFilm: "Eric",
	    			image: "https://www.themoviedb.org/t/p/w138_and_h175_face/dYMczdhormnOEuY1xteiPUlkCkG.jpg"
	    		},
	    		{
	    			name: "Daniela Rubio",
	    			nameInFilm: "Adéle Uribe",
	    			image: "https://www.themoviedb.org/t/p/w138_and_h175_face/icg8ECswnXvvqp9BvYubO0mzkGY.jpg"
	    		},
	    		{
	    			name: "Asia Ortega",
	    			nameInFilm: "Amaia Torres",
	    			image: "https://www.themoviedb.org/t/p/w138_and_h175_face/jWDoTmcQKLIggpoFXSDugsepPrc.jpg"
	    		},
	    		{
	    			name: "Albert Salazar",
	    			nameInFilm: "Paul Uribe",
	    			image: "https://www.themoviedb.org/t/p/w138_and_h175_face/wpbfTt6VxEpm2lj6vSbzYEnwZLT.jpg"
	    		},
	    		{
	    			name: "Joel Bosqued",
	    			nameInFilm: "Elías",
	    			image: "https://www.themoviedb.org/t/p/w138_and_h175_face/pTCPqrbf9dtHUf4be3TANv6hRSL.jpg"
	    		}
	    	]
	    }
	  }
	}
</script>

<style>
	.a {
		text-decoration: none;
	}

	.backgroundZ0 {
		background-image: url('https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/8OrceoLR3ARlthFw0daqW7saXit.jpg');
		background-size: cover;
		background-repeat: no-repeat;
		background-position: right -200px top;
	}

	.backgroundZ1 {
		background: linear-gradient(to bottom right, rgba(3.92%, 5.49%, 11.37%, 1.00), rgba(3.92%, 5.49%, 11.37%, 0.84));
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
</style>