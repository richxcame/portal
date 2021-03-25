<template>
	<v-app>
		<x-header></x-header>

		<v-main class="mt-15 pa-4">
			<h3 class="mb-3">Videos</h3>
			<v-row>

				<x-filter></x-filter>

				<v-col 
					cols="12"
					sm="6"
					md="8"
					lg="9"
					class="d-flex flex-wrap"
				>
					<v-col 
						cols="12"
						md="6"
						lg="4" 
						v-for="(item, i) in 12"
						:key="i"
					>
					<router-link to="/watch/1">
						<v-img 
							src="../assets/login.jpg"
							gradient="to bottom right, rgba(0,0,0,0), rgba(0,0,0, .2)"
						>
							<div class="white--text xCenter d-flex align-end justify-end">
								<div class="xInline mx-1 mb-1">3:08</div>
							</div>
						</v-img>
					</router-link>
						<div>
							<p class="body-1 font-weight-bold">Alan Walker - Faded</p>
							<p class="body-2">5 days ago</p>
						</div>
					</v-col>
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
  name: 'Images',
  components: {
  	xHeader,
  	xFooter,
  	xFilter,
  },
  data () {
    return {
    	videos: [
    		
    	]
    }
  }
}
</script>

<style>
	.xCenter {
		height: 100%;
		width: 100%;
	}

	.xInline {
		background-color: rgba(0,0,0, .8);
	}
</style>