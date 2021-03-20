<template>
	<div>
		<v-app>
			<!-- app bar -->
			<v-app-bar
				height="60"
				color="amber"
				dark
				elevate-on-scroll
				fixed
			>
				<v-app-bar-nav-icon class="bmdHide" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
				<v-app-bar-title class="mr-5">xPortal</v-app-bar-title>
				<v-spacer></v-spacer>

				<v-text-field
					style="margin-bottom:-25px;"
					prepend-inner-icon="mdi-magnify"
					clearable
          label="Search"
          dense
          color="deep-purple"
          outlined
         ></v-text-field>

				<v-menu
		      transition="slide-x-transition"
		      bottom
		      right
		      auto
		      offset-y
		    >
		      <template v-slot:activator="{ on, attrs }">
		        <v-btn
		        	class="bsmHide"
		          color="amber"
		          elevation="0"
		          dark
		          v-bind="attrs"
		          v-on="on"
		        >
		          Kinolar
		        </v-btn>
		      </template>

		      <v-list>
		        <v-list-item>
		          <v-list-item-title>Item title</v-list-item-title>
		        </v-list-item>
		      </v-list>
    		</v-menu>

    		<v-menu
		      transition="slide-x-transition"
		      bottom
		      right
		      auto
		      offset-y
		    >
		      <template v-slot:activator="{ on, attrs }">
		        <v-btn
		        	class="bsmHide"
		          color="amber"
		          elevation="0"
		          dark
		          v-bind="attrs"
		          v-on="on"
		        >
		          Aydymlar
		          <v-icon right>mdi-chevron-down</v-icon>
		        </v-btn>
		      </template>

		      <v-list>
		        <v-list-item>
		          <v-list-item-title>Item title</v-list-item-title>
		        </v-list-item>
		      </v-list>
    		</v-menu>

    		<v-menu
    			class="bsmHide"
		      transition="slide-y-transition"
		      bottom
		      right
		      auto
		      offset-y
		    >
		      <template v-slot:activator="{ on, attrs }">
		        <v-btn
		        	class="bsmHide"
		          color="amber"
		          elevation="0"
		          dark
		          v-bind="attrs"
		          v-on="on"
		        >
		          Bolumler
		          <v-icon right>mdi-chevron-down</v-icon>
		        </v-btn>
		      </template>

		      <v-list>
		        <v-list-item>
		          <v-list-item-title>Item 1</v-list-item-title>
		        </v-list-item>
		        <v-list-item>
		          <v-list-item-title>Item 2</v-list-item-title>
		        </v-list-item>
		        <v-list-item>
		          <v-list-item-title>Item 3</v-list-item-title>
		        </v-list-item>
		      </v-list>
    		</v-menu>

    		<v-menu
		      transition="slide-x-transition"
		      bottom
		      right
		      auto
		      offset-y
		    >
		      <template v-slot:activator="{ on, attrs }">
		        <v-btn
		        	class="bsmHide"
		          color="amber"
		          elevation="0"
		          dark
		          v-bind="attrs"
		          v-on="on"
		        >
		          Wideolar
		        </v-btn>
		      </template>

		      <v-list>
		        <v-list-item>
		          <v-list-item-title>Item 1</v-list-item-title>
		        </v-list-item>
		      </v-list>
    		</v-menu>
			</v-app-bar>

			<!-- nav drawer -->
			<v-navigation-drawer
	      v-model="drawer"
	      absolute
	      temporary
	    >
	      <v-list
	        nav
	        dense
	      >
	        <v-list-item-group
	          active-class="deep-purple--text text--accent-4"
	        >
	          <v-list-item>
	            <v-list-item-title>Foo</v-list-item-title>
	          </v-list-item>

	          <v-list-item>
	            <v-list-item-title>Bar</v-list-item-title>
	          </v-list-item>

	          <v-list-item>
	            <v-list-item-title>Fizz</v-list-item-title>
	          </v-list-item>

	          <v-list-item>
	            <v-list-item-title>Buzz</v-list-item-title>
	          </v-list-item>
	        </v-list-item-group>
	      </v-list>
	    </v-navigation-drawer>

			<v-main style="margin-top: 60px !important;">
				<slide-group></slide-group>



        <h3 class="hover d-inline-flex">Meshur tegler</h3><br>        
				<v-row justify="space-around">
		    <v-col
		      cols="12"
		      md="10"
		    >
	        <v-chip-group
	          active-class="deep-purple--text"
	          show-arrows
	        >
	          <v-chip
	          	outlined
	          	color="amber"
	            v-for="tag in tags"
	            :key="tag"
	          >
	            {{ tag }}
	          </v-chip>
		        </v-chip-group>
		    </v-col>
		  </v-row>

		  <h3 class="hover d-inline-flex">Meshur aydymcylar</h3>
		  <v-container>
				<div class="ma-1 d-flex">
					<v-hover v-slot="{ hover }">
						<v-card 
							width="220" 
							height="330" 
							class="ma-1" 
							:elevation=" hover ? 2 : 0 "
						>
		          <v-img
		            src="https://www.themoviedb.org/t/p/w220_and_h330_face/d0OdD1I8qAfETvE9Rp9Voq7R8LR.jpg"
		            :class="hover ? 'deep-purple--text align-end' : 'white--text align-end'"
		            height="330"
		            width="220"
		            gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.2)"
		          >
		            <v-card-title class="justify-center">Aydymcy</v-card-title>
		          </v-img>
		        </v-card>
	        </v-hover>
	        <v-hover v-slot="{ hover }">
						<v-card 
							width="220" 
							height="330" 
							class="ma-1" 
							:elevation=" hover ? 2 : 0 "
						>
		          <v-img
		            src="https://www.themoviedb.org/t/p/w220_and_h330_face/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg"
		            :class="hover ? 'deep-purple--text align-end' : 'white--text align-end'"
		            height="330"
		            width="220"
		            gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.2)"
		          >
		            <v-card-title class="justify-center">Aydymcy</v-card-title>
		          </v-img>
		        </v-card>
	        </v-hover>
	        <v-hover v-slot="{ hover }">
						<v-card 
							width="220" 
							height="330" 
							class="ma-1" 
							:elevation=" hover ? 2 : 0 "
						>
		          <v-img
		            src="https://www.themoviedb.org/t/p/w220_and_h330_face/dbsS4oBDwLTVTuIiqwTls9wD1I1.jpg"
		            :class="hover ? 'deep-purple--text align-end' : 'white--text align-end'"
		            height="330"
		            width="220"
		            gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.2)"
		          >
		            <v-card-title class="justify-center">Aydymcy</v-card-title>
		          </v-img>
		        </v-card>
	        </v-hover>
	        <v-hover v-slot="{ hover }">
						<v-card 
							width="220" 
							height="330" 
							class="ma-1" 
							:elevation=" hover ? 2 : 0 "
						>
		          <v-img
		            src="https://www.themoviedb.org/t/p/w220_and_h330_face/bOth4QmNyEkalwahfPCfiXjNh1r.jpg"
		            :class="hover ? 'deep-purple--text align-end' : 'white--text align-end'"
		            height="330"
		            width="220"
		            gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.2)"
		          >
		            <v-card-title class="justify-center">Aydymcy</v-card-title>
		          </v-img>
		        </v-card>
	        </v-hover>
	        <v-hover v-slot="{ hover }">
						<v-card 
							width="220" 
							height="330" 
							class="ma-1" 
							:elevation=" hover ? 2 : 0 "
						>
		          <v-img
		            src="https://www.themoviedb.org/t/p/w220_and_h330_face/d0OdD1I8qAfETvE9Rp9Voq7R8LR.jpg"
		            :class="hover ? 'deep-purple--text align-end' : 'white--text align-end'"
		            height="330"
		            width="220"
		            gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.2)"
		          >
		            <v-card-title class="justify-center">Aydymcy</v-card-title>
		          </v-img>
		        </v-card>
	        </v-hover>
        </div>
        </v-container>


        <h3 class="hover d-inline-flex">Taze aydymlar</h3>
       <download-music></download-music>

		  <h3 class="hover d-inline-flex">Pleylistler</h3>
				<div class="ma-1 d-flex">
					<v-hover v-slot="{ hover }">
						<v-card 
							width="220" 
							height="330" 
							class="ma-1"
							elevation="0"
						>
		          <v-img
		            src="https://www.themoviedb.org/t/p/w220_and_h330_face/pwDvkDyaHEU9V7cApQhbcSJMG1w.jpg"
		            :class="hover ? 'deep-purple--text align-end' : 'white--text align-end'"
		            height="220"
		            width="330"
		            gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.2)"
		          ></v-img>
		        </v-card>
	        </v-hover>
        </div>       

       <!-- <video height="400px" width="400px" controls>
       		<source src="../assets/video.mp4" type="video/mp4">
       			Your browser doesn't support video tag.
       </video> -->

			</v-main>
		</v-app>
	</div>
</template>

<script>
	import downloadMusic from "../components/downloadMusic.vue";
	import slideGroup from '../components/slideGroup.vue'

	export default{
		components: {
			downloadMusic,
			slideGroup,
		},
		data() {
			return{
				drawer: false,
				tags: [
        'Alan Walker',
        'Martin Garrix',
        'GitLab',
        'Facebook',
        'Instagram',
        'Twitter',
        'Twitch',
        'Vimeo',
        'Youtube',
        'Github',
        'Portal',
        'Shageldi',
        'Hangeldi',
        'Baygeldi',
        'Cholukov'
      ],
			}
		}
	}
</script>


<style>
	*{
		font-family: Lato;
	}
	.v-app-bar-title__content{
		width: 100px !important;
	}

	.hover:hover{
		animation: marginLeft .5s forwards; 
	}

	@keyframes marginLeft {
		0% {
			margin-left: 0px;
		}
		100% {
			margin-left: 4px;
		}
	}


	@media all and (max-width: 960px){
		.bsmHide{
			display:none !important;
		}
	}



  @media all and (min-width: 960px){
		.bmdHide{
			display:none !important;
		}
  }
</style>