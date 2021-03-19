<template>
	<vue-core-video-player :src="video"></vue-core-video-player>
</template>

<script>
	import VueCoreVideoPlayer from 'vue-core-video-player';

	export default {
		components: {
			 VueCoreVideoPlayer
			},
			data() {
				return {
					video: "videoUrll.mp4"
				}
			}
	}
</script>