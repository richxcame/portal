<template>
	<div>
		<create-new
			fileUploadName="Aýdymy saýlaň"
			imageUploadName="Aýdymyň suraty"
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
			return {
				kitapmy: false,
			}
		}
	}
</script>