<template>
	<div class='homeChannel'>
		<homeHeader></homeHeader>
		<homeMovieHot></homeMovieHot>
		<homeHotTV></homeHotTV>
		<homeGame></homeGame>
		<homeNovel></homeNovel>
		<homeHotComic></homeHotComic>
		<homePopularComic></homePopularComic>
		<homeStar></homeStar>
	</div>
</template>

<script>

	import homeHeader from './homeChannel/homeHeader.vue'
	import homeMovieHot from './homeChannel/homeMovieHot.vue'
	import homeHotTV from './homeChannel/homeHotTV.vue'
	import homeGame from './homeChannel/homeGame.vue'
	import homeNovel from './homeChannel/homeNovel.vue'
	import homeHotComic from './homeChannel/homeHotComic.vue'
	import homePopularComic from './homeChannel/homePopularComic.vue'
	import homeStar from './homeChannel/homeStar.vue'

	export default{
		data(){
			return{}
		},
		components:{
			homeHeader,
			homeMovieHot,
			homeHotTV,
			homeGame,
			homeNovel,
			homeHotComic,
			homePopularComic,
			homeStar
		}
	}
</script>

<style lang='less' scoped>
	.homeChannel{
		margin-top: 50px;
		overflow: hidden;
	}
</style>