<template>
	<div>
		<gameBanner></gameBanner>
		<phoneGame></phoneGame>
		<largeGame></largeGame>
		<shareGame :titleLeft='titleLeft' :titleRight='titleRight' :lists='lists' :gameListLeft='gameListLeft' :gameListRigh='gameListRigh'></shareGame>
		<hotText :flag='flag' :hotTextList='hotTextList' :AppraiseList='AppraiseList'></hotText>
	</div>
</template>

<script>

	import gameBanner from './gameChannel/game_banner.vue'
	import phoneGame from './gameChannel/phone_game.vue'
	import largeGame from './gameChannel/largeGame.vue'
	import shareGame from './share/list.vue'
	import hotText from './share/hotText.vue'

	export default{
		data(){
			return {
				titleLeft:'最新小游戏',
				titleRight:'最热排行',
				Nub:0,
				flag:null,
				lists:[],
				gameListLeft:[],
				gameListRigh:[],
				hotTextList:[],
				AppraiseList:[]
			}
		},
		created(){
			this.getMiniGameData()
			this.getMiniGameRanking()
			this.getHotText()
			this.getAppraise()
		},
		methods:{
			getMiniGameData(){
				this.axios.get('/src/data/game_data/miniGame.json').then(res=>{
					this.gameListLeft=res.data
				})
			},
			getMiniGameRanking(){
				this.axios.get('/src/data/game_data/miniGame_ranking.json').then(res=>{
					this.gameListRigh=res.data[this.Nub]
				})
			},
			getHotText(){
				this.axios.get('/src/data/game_data/hotText.json').then(res=>{
					this.hotTextList=res.data
					this.hotTextList.forEach((item,i)=>{
						if(item.img==""){
							this.index=i
							this.flag=i
						}
					})
				})
			},
			getAppraise(){
				this.axios.get('/src/data/game_data/gameComment.json').then(res=>{
					this.AppraiseList=res.data
					console.log(res)
				})
			}
		},
		components:{
			gameBanner,
			phoneGame,
			largeGame,
			shareGame,
			hotText
		}
	}
</script>

<style lang='less' scoped>
</style>