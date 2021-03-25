<template>
	<section class="d-flex">
		<h3 class="font-weight-black d-inline-flex mr-2">What's Popular</h3>
		<div class="bsmHide">
			<div
				style="border: 1px solid rgba(3,37,65,1); height: 30px;"
				class="d-inline-flex mx-4 border-30"
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
					class="d-inline-flex white--text justify-center align-center px-4 pl-n1 border-30" 
				>
					<router-link 
						to="/" 
						class="d-flex align-center justify-center selector  font-weight-bold"
					>
						On TV
					</router-link>
				</div>
				<div 
					style="height: 28px;"
					class="d-inline-flex white--text justify-center align-center px-4 pl-n1 border-30" 
				>
					<router-link 
						to="/"
						class="d-flex align-center justify-center selector  font-weight-bold"
					>
						For Rent
					</router-link>
				</div>
				<div 
					style="height: 28px;"
					class="d-inline-flex white--text justify-center align-center px-4 pl-n1 border-30" 
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

		<div class="bmdHide">
			<div
				style="border: 1px solid rgba(3,37,65,1); height: 30px;"
				class="d-inline-flex ml-4 border-30"
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
	</section>
</template>

<script>
export default {
  data () {
    return {

    }
  }
}
</script>

<style>
	.border-30 {
		border-radius: 30px;
	}
</style>