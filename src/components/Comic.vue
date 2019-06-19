<template>
	<div class='comicChannel'>
		<banner :bannerLeft='bannerLeft' :bannerRight='bannerRight'></banner>
		<comicList :index='index' :comicLength='comicLength' :title='title1' :comicNewList='comicNewList' :addRight='addRight' :backLeft='backLeft'></comicList>
		<comicList :index='index' :comicLength='comicLength' :title='title2' :comicHotList='comicHotList' :addRight='addRight' :backLeft='backLeft'></comicList>
		<popularComic></popularComic>
		<newestComic></newestComic>
		<hotText :hotTextList='comicHotTextList' :AppraiseList='comicAppraiseList' :judge='judge'></hotText>
	</div>
</template>

<script>

	import banner from './share/banner.vue'
	import comicList from './share/listLunbo.vue'
	import popularComic from './comicChannel/popular_comic.vue'
	import newestComic from './comicChannel/newestComic.vue'
	import hotText from './share/hotText.vue'

	export default{
		data(){
			return {
				index:0,
				comicLength:0,
				judge:true,
				title1:'新番推荐',
				title2:'最热动漫',
				bannerLeft:[],
				bannerRight:[],
				comicNewList:[],
				comicHotList:[],
				comicHotTextList:[],
				comicAppraiseList:[]
			}
		},
		created(){
			this.getBannerLeft()
			this.getBannerRight()
			this.getNewComic()
			this.getHotComic()
			this.getHotText()
			this.getAppraise()
		},
		methods:{
			getBannerLeft(){
				this.axios.get('/src/data/comic_data/banner.json').then(res=>{
					this.bannerLeft=res.data[0]
				})
			},
			getBannerRight(){
				this.axios.get('/src/data/comic_data/banner.json').then(res=>{
					this.bannerRight=res.data[1]
				})
			},
			getNewComic(){
				this.axios.get('/src/data/comic_data/comicNewList.json').then(res=>{
					this.comicNewList=res.data[this.index]
					this.comicLength=res.data.length
				})
			},
			getHotComic(){
				this.axios.get('/src/data/comic_data/comicHotList.json').then(res=>{
					this.comicHotList=res.data[this.index]
					this.comicLength=res.data.length
				})
			},
			addRight(){
				if(this.index<this.comicLength-1){
					this.index++
					this.axios.get('/src/data/comic_data/comicNewList.json').then(res=>{
						this.comicNewList=res.data[this.index]
					})
					this.axios.get('/src/data/comic_data/comicHotList.json').then(res=>{
						this.comicHotList=res.data[this.index]
					})
				}else{
					alert('没有数据了')
				}
			},
			backLeft(){
				if(this.index>0){
					this.index--
					this.axios.get('/src/data/comic_data/comicNewList.json').then(res=>{
						this.comicNewList=res.data[this.index]
					})
					this.axios.get('/src/data/comic_data/comicHotList.json').then(res=>{
						this.comicHotList=res.data[this.index]
					})
				}else{
					alert('不能后退了')
				}
			},
			getHotText(){
				this.axios.get('/src/data/comic_data/comic_hotText.json').then(res=>{
					this.comicHotTextList=res.data
				})
			},
			getAppraise(){
				this.axios.get('/src/data/comic_data/comic_appraise.json').then(res=>{
					this.comicAppraiseList=res.data
				})
			}
		},
		components:{
			banner,
			comicList,
			popularComic,
			newestComic,
			hotText
		}
	}
</script>

<style lang='less' scoped>
	.comicChannel{
		width: 1200px;
		margin: 0 auto;
		overflow: hidden;
	}
</style>