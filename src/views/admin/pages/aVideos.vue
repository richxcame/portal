<template>
	<div back>
		<data-table></data-table>

		<create-new
			fileUploadName="Wideony saýlaň"
			imageUploadName="Widonyň suraty"
			isVisibleFileUpload="false"
		></create-new>

	</div>
</template>

<script>
	import createNew from '../components/createNew.vue'
	import dataTable from '../components/dataTable.vue'

	export default{
		components: {
			createNew,
			dataTable,
		},
		data() {
			return{

			}
		}
	}
</script>