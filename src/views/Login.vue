<template>
	<v-app>
		<div class="backgroundImg">
			<div class="cover d-flex align-center justify-center">
				<div>
					<div class="d-flex align-center justify-center">
						<div class="text-h3 text-md-h2 font-weight-black white--text my-3">Welcome!</div>
					</div>
					<div class="d-flex align-center justify-center">
						<div class="text-h4 text-md-h3 font-weight-bold white--text mt-3 mb-4">Login to continue</div>
					</div>
					<div class="d-flex align-center justify-center my-2">
						<v-text-field
							outlined
							height="45"
							color="white"
							class="rounded-0 input blue--text"
							background-color="white"
							placeholder="GET STARTED bas"
						>
							<template v-slot:append>
		            <v-btn
		            	style="background:linear-gradient(to right, rgba(30,213,169,1) 0%, rgba(1,180,228,1) 100%); margin-top:-17px; margin-right:-12px; color: white;"
		            	class="font-weight-black rounded-0"
		            	height="55"
		            	@click="goToHomePage"
		            >Get started</v-btn>
		          </template>
						</v-text-field>
					</div>
				</div>
			</div>
		</div>
	</v-app>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {

    }
  },
  methods: {
  	goToHomePage() {
  		this.$router.push('/');
  	}
  }
}
</script>

<style>
	.backgroundImg {
		background-image: url(../assets/login.jpg);
		background-size: cover;
		background-repeat: no-repeat;
		background-position: center;
		width: 100vw;
		height: 100vh;
	}

	.cover {
		background: linear-gradient(to bottom, rgba(0,0,0, 0), rgba(0,0,0, .7))
	}

	@media all and (max-width: 960px) {
		.input { 
			width: 94vw;
		}
	}

	@media all and (min-width: 960px) {
		.input {
			width: 800px;
		}
	}
</style>