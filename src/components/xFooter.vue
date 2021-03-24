<template>
	<div>
		<v-footer class="footer pt-3">
			<v-container>
				<v-row>
					<v-col 
						cols="6" 
						md="3"
					>
						<center>
							<v-img
								src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_2-d537fb228cf3ded904ef09b136fe3fec72548ebc1fea3fbbd1ad9e36364db38b.svg"
								height="95"
								width="130"
							></v-img>
							<router-link 
								to="/" 
								class="footer-link my-3 mx-auto"
							>COMMUNITY</router-link>
						</center>
					</v-col>
					<v-col 
						cols="6" 
						md="3" 
						class="justify-center d-inline-flex"
					>
						<center>
							<h3 class="white--text">THE BASICS</h3>
							<p class="ma-0 white--text hoverF">About TMDb</p>
							<p class="ma-0 white--text hoverF">Contact us</p>
							<p class="ma-0 white--text hoverF">System status</p>
							<p class="ma-0 white--text hoverF">Privacy Policy</p>
						</center>
					</v-col>
					<v-col 
						cols="6" 
						md="3" 
						class="justify-center bsmHide d-inline-flex"
					>
						<center>
							<h3 class="white--text">COMMUNITY</h3>
							<p class="ma-0 white--text hoverF">Guidelines</p>
							<p class="ma-0 white--text hoverF">Discussions</p>
							<p class="ma-0 white--text hoverF">Leaderboard</p>
							<p class="ma-0 white--text hoverF">Twitter</p>
						</center>
					</v-col>
					<v-col 
						cols="6" 
						md="3" 
						class="justify-center bsmHide d-inline-flex"
					>
						<center>
							<h3 class="white--text">CATEGORIES</h3>
							<p class="ma-0 white--text hoverF">Movies</p>
							<p class="ma-0 white--text hoverF">Developer API</p>
							<p class="ma-0 white--text hoverF">Tracks</p>
							<p class="ma-0 white--text hoverF">Images</p>
						</center>
					</v-col>
				</v-row>
			</v-container>
		</v-footer>
	</div>
</template>

<script>
	export default{
		data() {
			return {

			}
		}
	}
</script>

<style>

	.footer{
		background-image: radial-gradient(at 30% top, #031d33 0%, rgba(3,37,65, 1) 70%);
	}

	.footer-link{
		text-decoration: none;
		color: rgba(1,180,228, 1);
		background-color: #fff;
		font-weight: bold;
		display: inline-block;
		border: 2px solid #fff;
    border-radius: 5px;
    padding: 8px 16px;
	}

	.community{
		background-image: url(../assets/lMnoYqPIAVL0YaLP5YjRy7iwaYv.jpg);
    background-position: center center;
    background-size: cover;
    background-repeat: no-repeat;
    color: #fff;
	}

	.community-link{
		background-color: rgb(128,91,231, 1);
		border-color: #805be7; 
		text-decoration: none;
		color: #fff !important;
		font-size: 0.9em;
		font-weight: 600;
		border: 2px solid #fff;
    border-radius: 5px;
    padding: 8px 16px;
	}

	.hoverF:hover {
		color: rgb(1,180,228) !important;
	}

</style>