<template>
	<div class='novelChannel'>
		<novelBanner :bannerLeft='novelBannerLeft' :bannerRight='novelBannerRight'></novelBanner>
		<div class='novel_ranking'>
			<h1>最新排行榜</h1>
			<ul>
				<li v-for="(item,i) in novelRankings" :key='item.id'>
					<a href="#">
						<span :class='[{index1:i==0},{index2:i==1},{index3:i==2}]'>{{ item.id }}</span>
						<span class='novelName'><a href="#">{{ item.name }}</a></span>
						<b>{{ item.Nub }}</b>
					</a>
				</li>
			</ul>
			<div>
				<a href="#">更多<i class="fa fa-chevron-right" aria-hidden="true"></i></a>
			</div>
		</div>
		<novelFire></novelFire>
		<novelWriter></novelWriter>
		<literatureRead></literatureRead>
		<novelComment></novelComment>
		<novelClassic></novelClassic>
		<novelHotText :judge='judge' :AppraiseList='novelNewAppraise'></novelHotText>
	</div>
</template>

<script>
	
	import novelBanner from './share/banner.vue'
	import novelFire from './novelChannel/novel_fire.vue'
	import novelWriter from './novelChannel/novel_writer.vue'
	import literatureRead from './novelChannel/literature_read.vue'
	import novelComment from './novelChannel/novel_comment.vue'
	import novelClassic from './novelChannel/novel_classic.vue'
	import novelHotText from './share/hotText.vue'

	export default{
		data(){
			return {
				judge:true,
				novelBannerLeft:[],
				novelBannerRight:[],
				novelRankings:[],
				novelNewAppraise:[]
			}
		},
		created(){
			this.getBannerLeft()
			this.getBannerRight()
			this.getNovelRanking()
			this.getNovelNewAppraise()
		},
		methods:{
			getBannerLeft(){
				this.axios.get('/src/data/novel_data/banner.json').then(res=>{
					this.novelBannerLeft=res.data[0]
					console.log(this.novelBannerLeft)
				})
			},
			getBannerRight(){
				this.axios.get('/src/data/novel_data/banner.json').then(res=>{
					this.novelBannerRight=res.data[1]
				})
			},
			getNovelRanking(){
				this.axios.get('/src/data/novel_data/novelRanking.json').then(res=>{
					this.novelRankings=res.data
				})
			},
			getNovelNewAppraise(){
				this.axios.get('/src/data/novel_data/novelNewAppraise.json').then(res=>{
					this.novelNewAppraise=res.data
				})
			}
		},
		components:{
			novelBanner,
			novelFire,
			novelWriter,
			literatureRead,
			novelComment,
			novelClassic,
			novelHotText
		}
	}
</script>

<style lang='less' scoped>
	.novelChannel{
		width: 1200px;
		margin: 0 auto;
		overflow: hidden;
		.novel_ranking{
			width: 350px;
			height: 340px;
			float: right;
			h1{
				width: 350px;
				height: 70px;
				font-size: 18px;
				text-align: center;
				line-height: 70px;
				opacity: .7;
				color: #fff;
				letter-spacing: 0.5em;
				border-radius: 5px 5px 0 0;
				background-image: linear-gradient(-90deg,#97461a 0%,#b87957 54%,#6c2e16 100%);
			}
			ul{
				li{
					width: 350px;
					height: 45px;
					line-height: 20px;
					border-bottom: 1px solid #eee;
					>a{
						>span{
							a{
								color: #3c3c3c;
								font-size: 15px;
							}
						}
						>span:first-child{	
							display: inline-block;
							width: 20px;
							height: 20px;
							background-color: #aaa;
							color: #fff;
							text-align: center;
							margin: 13px 10px 0 8px;
						}
						.novelName{
							a:hover{
								color: red;
							}
						}
						>.index1{
							background-color: #ef4238!important;
						}
						>.index2{
							background-color: #ff9654!important;
						}
						>.index3{
							background-color: #ffbd54!important;
						}
						>b{
							float: right;
							line-height: 45px;
							font-size: 14px;
							color: #aaa;
						}
					}
				}
				li:hover{
					background-color: #eee;
				}
			}
			div{
				width: 50px;
				height: 40px;
				float: right;
				text-align: center;
				line-height: 40px;
				a{
					color: #333;
					font-size: 14px;
				}
				a:hover{
					color: red;
				}
			}
		}
	}
</style>