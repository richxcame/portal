<template>
	<div>
		<create-new
			fileUploadName="Filmi saýlaň"
			imageUploadName="Filme kici surat"
			isVisibleFileUpload="true"
			ulySurat="Filme uly surat"
			:ulySuratGerekmi="hawa"
			:kitapmy="kitapmy"
		></create-new>
	</div>
</template>

<script>
	import createNew from '../components/createNew.vue'

	export default{
		components: {
			createNew,
		},
		data() {
			return{
				hawa: true,
				kitapmy: false,
			}
		}
	}
</script>