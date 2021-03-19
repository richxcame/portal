<template>
  <div>
  	<v-app>
    <v-app-bar
      absolute
      color="primary"
      dark
      inverted-scroll
      scroll-target="#scrolling-techniques-8"
      scroll-threshold="200"
    >
      <v-app-bar-nav-icon></v-app-bar-nav-icon>

      <v-toolbar-title>Title</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-heart</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
    </v-app-bar>


    <v-main >

  	<v-carousel 
  		show-arrows-on-hover
  		hide-delimiters
  		hide-delimiter-background
  		height="400"
  		prev-icon="mdi-arrow"
  		next-icon="mdi-arrow-left"
 			cycle
 			interval="4000"
 			progress
  	>
  		<v-carousel-item
      v-for="(color, i) in colors"
      :key="color"
    >
      <v-sheet
        :color="color"
        height="100%"
        tile
      >
        <v-row
          class="fill-height"
          align="center"
          justify="center"
        >
          <div class="display-3">
            Slide {{ i + 1 }}
          </div>
        </v-row>
      </v-sheet>
    </v-carousel-item>  		
  	</v-carousel>
  	<div style="height:7000px;" id="scrolling-techniques-8">
  		
  	</div>
  	</v-main>
  	</v-app>
  </div>
</template>

<script>
  export default {
    data: () => ({
      model: 0,
      colors: [
        'primary',
        'secondary',
        'yellow darken-2',
        'red',
        'orange',
      ],
    }),
  }
</script>
