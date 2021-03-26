<template>
	<v-app>

		<x-header></x-header>

		<main class="my-15">

			<v-row class="backgroundAd mb-3" min-height="210">
				<div class="cover">
					<v-container class="pt-10 white--text">
						<div class="pb-6 px-4 px-md-0">
							<p class="text-h5 text-md-h4 font-weight-bold">Explore Top Music Powered By TMDB</p>
							<span class="body-2">We bring together your favourite music services and join up listening, watching and sharing to connect your musical world.<br> Below you can visualise, in real-time, the listening habits, trends of TMDB.fm's global community. Go Explore.</span>
						</div>					
					</v-container>
				</div>
			</v-row>

			<v-row>

				<x-filter></x-filter>

				<v-col 
					cols="12"
					sm="6"
					md="8"
					lg="9"
					class="d-flex flex-wrap justify-space-around"
				>
					<v-card
		      	width="180"
		      	v-for="(track, i) in tracks"
		      	:key="i"
		      	color="grey lighten-3"
		      	class="rounded-0 my-1"
		      	outlined
		      	tile
		      >
		      	<v-img
		      		:src="track.image"
		      		height="236"
		      		width="180"
		      		gradient="to top right, rgba(0,0,0, 0), rgba(0,0,0, .5)"
		      	>
		      		<div class="cover">
			      		<v-btn
			      			style="background-color: #fff;"
			      			icon
			      			large
			      			class="ma-2"
			      			to="/watch/1"
			      		>
			      			<v-icon 
			      				color="black"
			      				large
			      			>mdi-play</v-icon>
			      		</v-btn>
			      		<div class="d-flex flex-column mtB">
				      		<span class="body-1 white--text font-weight-bold">{{ track.name }}</span>
				      		<span class="body-2 white--text">{{ track.artist }}</span>
				      	</div>
				      </div>
		      	</v-img>
		      	<v-card-actions class="d-flex justify-end mt-n2">
			      	<v-btn
			      		icon
			      		style="position: absolute; background-color: rgb(3,37,65, .9);"
			      	>
			      		<v-icon 
			      			color="rgb(30,213,169)"
			      		>mdi-music-note</v-icon>
			      	</v-btn>
		      	</v-card-actions>
			    <v-btn
			    	class="mt-4 font-weight-bold button white--text"
			    >Download</v-btn>
		      </v-card>
					<v-container>
			      <v-row justify="center">
			        <v-col cols="10" sm="8" md="6">
			          <v-container class="max-width">
			            <v-pagination
			              v-model="page"
			              :length="9"
			              color="rgb(30, 213, 169)"
			            ></v-pagination>
			          </v-container>
			        </v-col>
			      </v-row>
			    </v-container>
				</v-col>



			</v-row>
		</main>

		<v-footer
			color="rgb(3,37,65)"
			fixed
			height="60"
		>
			<v-btn 
				elevation="0" 
				color="rgb(3,37,65)" 
				icon
				@click="changeRepeat"
			>
				<v-icon color="white">{{ footerRepeat }}</v-icon>
			</v-btn>
			<v-card class="ma-auto" color="rgb(3,37,65)" elevation="0">
				<v-btn icon outlined small color="white">
					<v-icon color="white" small>mdi-skip-previous</v-icon>
				</v-btn>
				<v-btn 
					icon 
					outlined 
					color="white" 
					class="mx-3"
					@click="changeFooterIcon"
				>
					<v-icon color="white">{{ footerIcon }}</v-icon>
				</v-btn>
				<v-btn icon outlined small color="white">
					<v-icon color="white">mdi-skip-next</v-icon>
				</v-btn>
			</v-card>
		</v-footer>

	</v-app>
</template>

<script>
	import xHeader from '../components/xHeader.vue'
	import xFilter from '../components/xFilter.vue'

	export default {
	  name: 'Tracks',
	  components: {
	  	xHeader,
	  	xFilter,
	  },
	  data () {
	    return {
	    	footerIcon: 'mdi-pause',
	    	footerRepeat: 'mdi-repeat',
	    	page: 1,
	    	tracks: [
	    		{
	    			name: "Life Goes On",
	    			artist: "BTS",
	    			image: "https://lastfm.freetls.fastly.net/i/u/300x300/3e26f9ae4ed722293eb713beb8a740cd.webp"
	    		},
	    		{
	    			name: "test drive",
	    			artist: "Ariana Grande",
	    			image: "https://lastfm.freetls.fastly.net/i/u/300x300/bd579b724c2ba5b498c7abd5ec400915.webp"
	    		},
	    		{
	    			name: "Telepatia",
	    			artist: "Kali Uchis",
	    			image: "https://lastfm.freetls.fastly.net/i/u/300x300/a2933af79f97f61aa749a771d9f80f86.webp"
	    		},
	    		{
	    			name: "drivers license",
	    			artist: "Olivia Rodrigo",
	    			image: "https://lastfm.freetls.fastly.net/i/u/300x300/3e26f9ae4ed722293eb713beb8a740cd.webp"
	    		},
	    		{
	    			name: "Save Your Tears",
	    			artist: "The Weekend",
	    			image: "https://lastfm.freetls.fastly.net/i/u/300x300/73ff07f677eb7638a8a5c47525765c63.webp"
	    		},
	    		{
	    			name: "We're Good",
	    			artist: "Dua Lipa",
	    			image: "https://lastfm.freetls.fastly.net/i/u/300x300/1b44e7846099b141c1e104adf2e6994d.webp"
	    		},
	    		{
	    			name: "Love Story",
	    			artist: "Taylor Swift",
	    			image: "https://lastfm.freetls.fastly.net/i/u/300x300/f78159f3d23daa290240f05be68208a2.webp"
	    		},
	    		{
	    			name: "Sweet Night",
	    			artist: "v",
	    			image: "https://lastfm.freetls.fastly.net/i/u/300x300/3e2d74fc97273225354ae12a6d3664b1.webp"
	    		},
	    		{
	    			name: "Life Goes On",
	    			artist: "BTS",
	    			image: "https://lastfm.freetls.fastly.net/i/u/300x300/3e26f9ae4ed722293eb713beb8a740cd.webp"
	    		},
	    		{
	    			name: "test drive",
	    			artist: "Ariana Grande",
	    			image: "https://lastfm.freetls.fastly.net/i/u/300x300/bd579b724c2ba5b498c7abd5ec400915.webp"
	    		},
	    		{
	    			name: "Telepatia",
	    			artist: "Kali Uchis",
	    			image: "https://lastfm.freetls.fastly.net/i/u/300x300/a2933af79f97f61aa749a771d9f80f86.webp"
	    		},
	    		{
	    			name: "drivers license",
	    			artist: "Olivia Rodrigo",
	    			image: "https://lastfm.freetls.fastly.net/i/u/300x300/3e26f9ae4ed722293eb713beb8a740cd.webp"
	    		},
	    		{
	    			name: "Life Goes On",
	    			artist: "BTS",
	    			image: "https://lastfm.freetls.fastly.net/i/u/300x300/3e26f9ae4ed722293eb713beb8a740cd.webp"
	    		},
	    		{
	    			name: "test drive",
	    			artist: "Ariana Grande",
	    			image: "https://lastfm.freetls.fastly.net/i/u/300x300/bd579b724c2ba5b498c7abd5ec400915.webp"
	    		},
	    		{
	    			name: "Telepatia",
	    			artist: "Kali Uchis",
	    			image: "https://lastfm.freetls.fastly.net/i/u/300x300/a2933af79f97f61aa749a771d9f80f86.webp"
	    		}
	    	]
	    }
	  },
    methods: {
    	changeFooterIcon() {
    		if (this.footerIcon == 'mdi-play'){
    			this.footerIcon = 'mdi-pause';
    		} else {
    			this.footerIcon = 'mdi-play'
    		}
    	},
    	changeRepeat() {
    		if (this.footerRepeat == 'mdi-repeat') {
    			this.footerRepeat = 'mdi-repeat-once';
    		} else if (this.footerRepeat == 'mdi-repeat-once') {
    			this.footerRepeat = 'mdi-repeat-off';
    		} else {
    			this.footerRepeat = 'mdi-repeat';
    		}
    	}
    }
	}
</script>

<style>
	.mtB {
		margin-top: 125px;
		margin-left: 15px;
	}

	.cover {
		height: 100%;
		width: 100%;
		background-image: linear-gradient(transparent 0px, rgba(0,0,0, .9));
	}

	.backgroundAd {
		background-image: url(https://www.last.fm/static/images/dashboard_header.f28f1fbea2f9.jpg);
		background-size: cover;
		background-position: center 100%;
	}

	.button {
		background:linear-gradient(to right, rgb(30, 213, 169) 0%, rgb(1, 180, 228) 100%);
		width: 100%;
	}
</style>