<template>
	<div>
		<create-new
			fileUploadName="Filmi saýlaň"
			imageUploadName="Filmiň suraty"
			isVisibleFileUpload="true"
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

			}
		}
	}
</script>