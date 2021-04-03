<template>
	<div>
		<create-new
			fileUploadName="Aýdymy saýlaň"
			imageUploadName="Aýdymyň suraty"
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