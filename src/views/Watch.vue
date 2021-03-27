<template>
	<v-app>
		<x-header></x-header>
		<v-main class="mt-15">
		<v-row class="xHeight">
			<v-col 
				cols="12"
				md="8"
			>
				<video
					class="mx-auto mb-4 mt-1"
					controls
					style="height:60%; width: 101%;"
					poster=""
				>
					<source src="">
				</video>
				<v-row cols="12">
					<v-col cols="9" class="text-h6 text-md-h5 font-weight-bold d-inline-flex">
						Lorem ipsum dolor sit amet
					</v-col>
					<v-col 
						cols="3" 
						class="d-flex justify-end"
					>
						<v-btn icon><v-icon>mdi-thumb-up</v-icon></v-btn>
						<v-btn icon><v-icon>mdi-thumb-down</v-icon></v-btn>
					</v-col>
				</v-row>
				<div class="body-2">
					Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
					tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
					quis nostrud exercitation ul deserunt mollit anim id est laborum.
				</div>
			</v-col>

			<v-col
				md="4"
				class="bsmHide rightList scrollY"
			>
				<v-row v-for="(item, i) in 7" :key="i">
					<v-col cols="6">
						<router-link to="/watch/1">
							<v-img src="../assets/login.jpg" class="mt-1">
								<div 
									class="d-flex align-center justify-center" 
									style="height: 100%;"
								>
									<v-btn
										icon
										style="background-color: rgba(0,0,0, .8);"
									>
										<v-icon color="white">mdi-play</v-icon>
									</v-btn>
								</div>
							</v-img>
						</router-link>
					</v-col>
					<v-col cols="6">
						<div class="body-1 font-weight-bold">Lorem ipsum dolor</div>
						<div class="body-2">lorem ipsum dolor sit amet simply dummy</div>
					</v-col>
				</v-row>
			</v-col>
		</v-row>

		<v-row class="bScroll d-flex flex-nowrap bmdHide">
			<v-col v-for="(item, i) in 9" :key="i" class="bmdHide">
				<v-img 
					src="../assets/login.jpg" 
					width="150" 
					height="150"
				>
					<div 
						class="d-flex align-center justify-center" 
						style="height: 100%; width: 100%;"
					>
						<v-btn 
							icon
							style="background-color:rgba(0,0,0, .8)"
						>
							<v-icon color="white">mdi-play</v-icon>
						</v-btn>
					</div>
				</v-img>	
				<div class="body-2 font-weight-bold">Lorem ipsum</div>
				<div class="caption">Lorem ipsum dolor sit amet</div>
			</v-col>		
		</v-row>

		</v-main>
	</v-app>	
</template>

<script>
	import xHeader from '../components/xHeader.vue'

	export default {
	  name: 'Watch',
	  components: {
	  	xHeader,
	  },
	  data () {
	    return {

	    }
	  }
	}
</script>

<style>

	.rightList {
		max-height: 90vh;
		overflow-y: scroll;
	}

	.bScroll {
		overflow-x: scroll;
	}

	.bScroll::-webkit-scrollbar {
	  height: 10px;
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

	.scrollY::-webkit-scrollbar {
	  width: 20px;
	}

	.scrollY::-webkit-scrollbar-track {
	  background: #f1f1f1;
	}

	.scrollY::-webkit-scrollbar-thumb {
	  background: #999;
	}

	.scrollY::-webkit-scrollbar-thumb:hover {
	  background: #1ed5a9 !important;
	}

	@media all and (max-width: 960px) {
		.bsmHide {
			display: none;
		}
	}

	@media all and (min-width: 960px) {
		.bmdHide {
			display: none;
		}

		.xHeight {
			height: 90vh;
		}
	}
</style>