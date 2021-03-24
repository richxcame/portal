<template>
	<v-app>
		<div class="backgroundImg">
			<div class="d-flex align-center justify-center cover">
				<v-text-field
					outlined
					height="45"
					color="white"
					class="rounded-0"
					background-color="white"
					style="max-width: 750px;"
				>
					<template v-slot:append>
            <v-btn
            	style="background:linear-gradient(to right, rgba(30,213,169,1) 0%, rgba(1,180,228,1) 100%); margin-top:-17px; margin-right:-12px; color: white;"
            	class="font-weight-bold rounded-0"
            	height="55"
            >Get started</v-btn>
          </template>
				</v-text-field>
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
</style>