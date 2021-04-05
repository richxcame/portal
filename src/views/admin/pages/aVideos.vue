<template>
	<div>
		<create-new
			fileUploadName="Wideony saýlaň"
			imageUploadName="Widonyň suraty"
			isVisibleFileUpload="false"
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
				kitapmy: false,
			}
		}
	}
</script>