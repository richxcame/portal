<template>
	<v-app>
		<v-navigation-drawer 
      app 
      v-model="drawer" 
      :mini-variant.sync="mini"
      >
      <v-list-item class="px-2">
        <v-list-item-avatar>
          <v-avatar
      		  color="deep-purple"
      		  size="40"
      		  class="mt-1"
      		>
      			<span class="white--text">RW</span>
      		</v-avatar>
        </v-list-item-avatar>
        <v-list-item-title>Railways</v-list-item-title>
        <v-btn
          icon
          @click.stop="mini = !mini"
        >
          <v-icon>mdi-chevron-left</v-icon>
        </v-btn>
      </v-list-item>

      <v-divider></v-divider>

      <v-list
        nav
        dense
      >
        <v-list-item-group
          color="primary"
        >
          <v-list-item
            v-for="(item, i) in navItems"
            :key="i"
            :to="item.router"
            exact
          >
            <v-list-item-icon>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title>{{ item.text }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar
      dark
      app
      color="rgb(3,37,65)"
      elevate-on-scroll
      src="https://picsum.photos/1920/1080?random"
      shrink-on-scroll
      fixed
      min-height="50"
    >
      <template v-slot:img="{ props }">
        <v-img
          v-bind="props"
          gradient="to top right, rgba(19,84,122,.5), rgba(128,208,199,.8)"
        ></v-img>
      </template>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-app-bar-title>Railways</v-app-bar-title>
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon color="white">mdi-cog</v-icon>
      </v-btn>  
    </v-app-bar>

		<v-main>
      <v-container fluid>
        <router-view></router-view>
      </v-container>
		</v-main>

	</v-app>
</template>

<script>

	export default {
		components: {
		},
	  name: 'Admin',
	  data() {
	    return {
				drawer: true,
        mini: true,
        navItems: [
          { text: 'Baş sahypa', icon: 'mdi-home', router: '/admin' },
          { text: 'Filmler', icon: 'mdi-movie', router: '/admin/movies' },
          { text: 'Aýdymlar', icon: 'mdi-music-note', router: '/admin/tracks' },
          { text: 'Wideolar', icon: 'mdi-video', router: '/admin/videos' },
          { text: 'Kitaplar', icon: 'mdi-book', router: '/admin/books' }
        ]
	    }
	  }
	}
</script>

<style>

</style>