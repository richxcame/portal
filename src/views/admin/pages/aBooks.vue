<template>
	<div>
		<create-new
			fileUploadName="Kitaby saýlaň"
			imageUploadName="Kitabyň suraty"
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

			}
		}
	}
</script>