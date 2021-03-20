<template>
	<div>
		<v-container class="d-flex">
			<v-col cols="12" md="6">
				<v-card 
					height="60"
					elevation="0"
					color="amber lighten-4"
				>
					<div class="d-inline-flex">
					<v-img 
						src="img.jpg" 
						gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.2)"
						class="rounded"
						style="margin: 5px;"
						width="50"
						height="50"
					></v-img>
					<v-card-actions>
						<v-card-title class="align-center"></v-card-title>
					</v-card-actions>
					</div>
				</v-card>
			</v-col>
			<v-col cols="12" md="6">
				<v-card 
					height="60"
					elevation="0"
					color="amber lighten-4"
				>
					<div class="d-inline-flex">
						<v-img 
							src="img.jpg" 
							gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.2)"
							class="rounded"
							style="margin: 5px;"
							width="50"
							height="50"
						></v-img>
						<div class="d-flex justify-end align-center">
							
						</div>
					</div>
				</v-card>
			</v-col>
		</v-container>
	</div>
</template>