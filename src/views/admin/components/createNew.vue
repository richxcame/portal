<template>
	<div class="mx-2 mx-md-10 my-2 mt-3">
		<v-row class="d-flex justify-space-around">
			<v-col :cols="ulySuratGerekmi ? 4 : 8">
				<v-file-input
			    :label="fileUploadName"
			    outlined
			    dense
			    color="cyan darken-2"
			  ></v-file-input>
		  </v-col>
		  <v-col cols="4" v-if="isVisibleFileUpload">
			  <v-file-input
			    :label="imageUploadName"
			    outlined
			    dense
			    color="cyan darken-2"
			  ></v-file-input>
			</v-col>
			<v-col cols="4" v-if="ulySuratGerekmi">
			  <v-file-input
			    :label="ulySurat"
			    outlined
			    dense
			    color="cyan darken-2"
			  ></v-file-input>
			</v-col>
		</v-row>
		<v-row class="d-flex justify-space-around">
			<v-col cols="4">
				<v-combobox
          :items="items"
          label="Teg goşuň"
          multiple
          outlined
          dense
          item-color="cyan darken-2"
          color="cyan darken-2"
        ></v-combobox>
	    </v-col>
	    <v-col cols="4">
				<v-select
		      :items="languages"
		      label="Dilini saýlaň"
		      dense
		      outlined
		      menu-props="offsetY"
		      color="cyan darken-2"
		    ></v-select>
			</v-col>
			<v-col cols="4">
				<v-text-field
			    :label="kitapmy ? 'Sahypasy' : 'Dowamlylygy'"
			    outlined
			    :placeholder="'kitapmy' ? 'Meselem: 230 sah' : 'Meselem: 3:45'"
			    dense
			    color="cyan darken-2"
			  ></v-text-field>
			</v-col>
		</v-row>
		<v-row>
			<v-col cols="12">
				<v-text-field
			    label="Atlandyryň"
			    outlined
			    clearable
			    dense
			    color="cyan darken-2"
			  ></v-text-field>
			</v-col>
		</v-row>
		<v-row>
			<v-textarea
        outlined
        auto-grow
        shaped
        label="Düşündirilişi"
        placeholder="Meselem: Lorem bilen Ipsum Cukury halas etmegin yolunda..."
        color="cyan darken-2"
      ></v-textarea>
		</v-row>
		<v-row>
			<v-col 
				cols="12" 
				md="8" 
				class="mx-auto"
			>
				<v-btn
		      class="ma-2 font-weight-black"
		      dark
		      style="background:linear-gradient(to right, rgba(30,213,169,1) 0%, rgba(1,180,228,1) 100%);"
		      :loading="loading4"
		      :disabled="loading4"
		      @click="loader = 'loading4'"
		      block
		    >
		      tassykla
		      <template v-slot:loader>
		        <span class="custom-loader">
		          <v-icon light>mdi-cached</v-icon>
		        </span>
		      </template>
		    </v-btn>
			</v-col>
		</v-row>
	</div>
</template>

<script>
	export default{
		props: {
			fileUploadName: {
				type: String,
				required: true
			}, 
			imageUploadName: {
				type: String,
				required: true,
			}, 
			isVisibleFileUpload: {
				type: Boolean,
				required: true,
			},
			ulySurat: {
				type: String,
				required: true,
			},
			ulySuratGerekmi: {
				type: Boolean,
				required: true,
			},
			kitapmy: {
				type: Boolean,
				required: true,
			}
		},
		data() {
			return {
				loader: null,
        loading: false,
				loading4: false,
				items: [
          'Wideo',
          'Film',
          'Aýdym',
          'Kitap',
        ],
        languages: [
        	'Türkmençe',
        	'Русский',
        	'English'
        ]
			}
		},
		watch: {
      loader () {
        const l = this.loader
        this[l] = !this[l]

        setTimeout(() => (this[l] = false), 3000)

        this.loader = null
      }
    }
	}
</script>

<style>
	.custom-loader {
    animation: loader 1s infinite;
    display: flex;
  }
  @-moz-keyframes loader {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }
  @-webkit-keyframes loader {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }
  @-o-keyframes loader {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }
  @keyframes loader {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }
  .color{
  	background-image: linear-gradient(to right, rgba(30,213,169,1), rgba(1,180,228,1));
  }
</style>