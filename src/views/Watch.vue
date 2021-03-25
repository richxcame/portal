<template>
	<section>
		<v-row>
			<v-col 
				cols="12"
				md="8"
			>
				<div
					style="height: 98vh !important; background-color: red;"
				>
					<div 
					class="d-flex align-center justify-center" style="width: 100%; height:100%;">a</div>
				</div>
			</v-col>
			<v-col
				md="4"
				class="bsmHide"
			>a</v-col>
			<!-- <v-col 
				cols="12" 
				md="8"
			>
				<video
					poster="../assets/login.jpg" 
					controls
					style="max-width:100%;"
				>
					<source src="../assets/Uzaktan calisilacak is bulmak.mp4">
				</video>
			</v-col> -->
			<!-- <v-col 
				cols="12" 
				md="4"
				class="bsmHide"
			>
				<div style="height: 5vh; background-color: red;" class="d-flex align-center justify-center">
					<h3 class="font-weight-bold">Similar videos</h3>
				</div>
				<div class="bScroll" style="max-height: 93vh;">
					<v-img
						v-for="(item, i) in 7"
						style="xImage"
						aspect-ratio="2"
						class="rounded-0"
						to="/watch/1"
						src="../assets/login.jpg"
					></v-img>
				</div>
			</v-col> -->
		</v-row>
	</section>
</template>

<script>
export default {
  name: 'Watch',
  data () {
    return {

    }
  }
}
</script>

<style>

	.bScroll {
		overflow-x: scroll;
	}

	.bScroll::-webkit-scrollbar {
	  width: 10px;
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

	.xImage {
		width: 100%;
	}

	@media all and (max-width: 960px) {
		.bsmHide {
			display: none;
		}
	}

	@media all and (min-width: 960px) {
	}
</style>