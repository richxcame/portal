<template>
	<v-app>
		<x-header></x-header>

		<v-main class="mt-15 pa-4">
			<h3 class="mb-3">Movies</h3>
			<v-row>
				
				<x-filter></x-filter>

				<v-col 
					cols="12"
					sm="6"
					md="8"
					lg="9"
				>

					<v-row class="d-flex justify-space-around">
						<v-card 
							class="ma-2 rounded-lg"
							v-for="(trending, i) in trendings"
							:key="i"
							elevation="4"
							max-width="150"
							to="/movie/1"
						>
							<v-img
								class="rounded-lg"
								max-width="150"
								max-height="225"
								:src="trending.image"
							>
								<v-btn fab icon small class="float-right">
									<v-icon small color="white">mdi-dots-vertical</v-icon>
								</v-btn>
							</v-img>
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
						<v-btn class="button white--text font-weight-bold my-2">Load More</v-btn>
					</v-row>
						</v-col>
			</v-row>
		</v-main>

		<x-footer></x-footer>
	</v-app>
</template>

<script>
	import xHeader from '../components/xHeader.vue'
	import xFooter from '../components/xFooter.vue'
	import xFilter from '../components/xFilter.vue'

	export default {
	  name: 'Movie',
	  components: {
	  	xHeader,
	  	xFooter,
	  	xFilter,
	  },
	  data () {
	    return {
	      trendings: [
		      {
	      		name: "Lucifer",
	      		image: "https://www.themoviedb.org/t/p/w220_and_h330_face/4EYPN5mVIhKLfxGruy7Dy41dTVn.jpg",
	      		value: 82
	      	},
	  			{
	      		name: "Love Alarm",
	      		image: "https://www.themoviedb.org/t/p/w220_and_h330_face/hQ8Hobo1RpYuZVQJQOCycNMHAG.jpg",
	      		value: 49,
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
	      	},
	      	{
	      		name: "Lucifer",
	      		image: "https://www.themoviedb.org/t/p/w220_and_h330_face/4EYPN5mVIhKLfxGruy7Dy41dTVn.jpg",
	      		value: 82
	      	},
	  			{
	      		name: "Love Alarm",
	      		image: "https://www.themoviedb.org/t/p/w220_and_h330_face/hQ8Hobo1RpYuZVQJQOCycNMHAG.jpg",
	      		value: 49,
	      	}
			  ]
	  	}
	  }
	}
</script>

<style>
	.button {
		background:linear-gradient(to right, rgb(30, 213, 169) 0%, rgb(1, 180, 228) 100%);
		width: 100%;
	}
</style>