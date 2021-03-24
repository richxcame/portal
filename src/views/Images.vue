<template>
	<v-app>
		<x-header></x-header>

		<v-main class="mt-15">
			<v-row>
				<v-col
					v-for="(image, i) in images"
					:key="i"
					cols="12" 
					md="6" 
					lg="3"
					class="ma-0 pa-0"
				>
					<v-img
						aspect-ratio="1"
						:src="image"
						gradient="to top right, rgba(0,0,0, 0), rgba(0,0,0, .5)"
					></v-img>
				</v-col>
			</v-row>
		</v-main>

		<x-footer></x-footer>
	</v-app>
</template>

<script>
	import xHeader from '../components/xHeader.vue'
	import xFooter from '../components/xFooter.vue'

export default {
  name: 'Images',
  components: {
  	xHeader,
  	xFooter,
  },
  data () {
    return {
    	images: [
    		"https://static.gettyimages.com/display-sets/creative-landing/images/GettyImages-1218968473.jpg",
    		"https://static.gettyimages.com/display-sets/creative-landing/images/GettyImages-1094092326.jpg",
    		"https://static.gettyimages.com/display-sets/creative-landing/images/GettyImages-1297335596.jpg",
    		"https://static.gettyimages.com/display-sets/creative-landing/images/GettyImages-1172692772.jpg",
    		"https://static.gettyimages.com/display-sets/creative-landing/images/GettyImages-964611070.jpg",
    		"https://static.gettyimages.com/display-sets/creative-landing/images/GettyImages-1171161026.jpg",
    		"https://static.gettyimages.com/display-sets/creative-landing/images/GettyImages-521341208.jpg",
    		"https://static.gettyimages.com/display-sets/creative-landing/images/GettyImages-1290838863.jpg",
    		"https://static.gettyimages.com/display-sets/creative-landing/images/GettyImages-1286170650.jpg"
    	]
    }
  }
}
</script>

<style>

</style>