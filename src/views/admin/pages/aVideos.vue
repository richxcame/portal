<template>
	<div>
		<create-new
			fileUploadName="Wideony saýlaň"
			imageUploadName="Widonyň suraty"
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