<template>
	<div class="mx-2 mx-md-10 my-2">
		<v-row>
			<v-col cols="6">
				<v-file-input
			    :label="fileUploadName"
			    outlined
			    dense
			    color="primary"
			  ></v-file-input>
		  </v-col>
		  <v-col cols="6">
			  <v-file-input
			    :label="imageUploadName"
			    outlined
			    dense
			    color="primary"
			  ></v-file-input>
			 </v-col>
		</v-row>
		<v-row>
			<v-col cols="4">
				<v-combobox
          :items="items"
          label="Teg goşuň"
          multiple
          outlined
          dense
        ></v-combobox>
	    </v-col>
	    <v-col cols="4">
				<v-select
		      :items="languages"
		      label="Dil saýlaň"
		      dense
		      outlined
		      menu-props="offsetY"
		    ></v-select>
			</v-col>
			<v-col cols="4">
				<v-text-field
			    label="Dowamlylygy"
			    outlined
			    placeholder="Meselem: 3:45"
			    dense
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
			  ></v-text-field>
			</v-col>
		</v-row>
		<v-row>
			<v-textarea
        outlined
        auto-grow
        shaped
        label="Düşündirilişi"
        placeholder="Meselem: Ähli zat Lorem bilen Ipsumyň tanyşlygyndan başlanýar..."
      ></v-textarea>
		</v-row>
	</div>
</template>

<script>
	export default{
		props: ['fileUploadName', 'imageUploadName'],
		data() {
			return {
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
		}
	}
</script>