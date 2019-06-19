<template>
	<div class='movieChannel'>
		<div class='movieChannel_header'>
			<div class='movie-retation'>
				<div class='movie-retation_left'>
					<transition-group tag='ul'>
						<li v-for="(item,i) in imgs" :key='i' v-show='i==index'>
							<a href="#"><img :src="item.img"></a>
							<p>{{ item.title }}</p>
						</li>
					</transition-group>
				</div>
				<div class='movie-retation_right'>
					<transition-group tag='div'>
						<ul v-for="(items,index2) in ulImgs" :key='index2' v-show='index2==cur'>
							<li v-for="(item,i) in ulImgs[index2].imgs2" :key='i'>
								<a href="#"><img :src="item.img"></a>
								<p>{{ item.title }}</p>
							</li>
						</ul>
					</transition-group>
				</div>
			</div>
			<div class='movie_ranking'>
				<h1>最新排行榜</h1>
				<ul>
					<li v-for="item in rankings" :key='item.id'>
						<a href="#">
							<span>{{ item.name }}</span>
							<span>{{ item.Nub }}</span>
							<b>{{ item.buy }}</b>
						</a>
					</li>
				</ul>
				<div>
					<a href="#">更多<i class="fa fa-chevron-right" aria-hidden="true"></i></a>
				</div>
			</div>
		</div>
		<newHot></newHot>
		<soonRelease></soonRelease>
		<tvPlay></tvPlay>
		<moviesComment></moviesComment>
		<classicMovies></classicMovies>
		<hotText></hotText>
	</div>
</template>

<script>

import newHot from './movieChannel/new_hot.vue'
import soonRelease from './movieChannel/soon_release.vue'
import tvPlay from './movieChannel/tvPlay.vue'
import moviesComment from './movieChannel/movies_comment.vue'
import classicMovies from './movieChannel/classic_movies.vue'
import hotText from './movieChannel/hotText.vue'

	export default{
		data(){
			return {
				index:0,
				cur:0,
				timer:null,
				imgs:[
					{img:"http://dl.kulemi.com/article/photo/2019060317185514251903360415/",title:"《九州缥缈录》刘昊然宋祖儿携手将在今晚22:00 大闹南淮城..."},
					{img:"http://www.kulemi.com/dl/project/photo/20190527/2019052713553602639555.jpg",title:"《影之诗》网易冠军争夺赛（SNC）夏季赛海选报名开启..."},
					{img:"http://www.kulemi.com/dl/project/photo/20190527/2019052713553606630035.jpg",title:"《代号U1》日本小规模测试引爆关注..."},
					{img:"http://www.kulemi.com/dl/article/photo/20190516/201905160949342441852830349.jpg",title:"《星月-命运之轮》萌趣冒险伴你前行..."},
					{img:"http://www.kulemi.com/dl/article/photo/20190529/201905291936323068198997278.jpg",title:"《九州缥缈录》刘昊然宋祖儿携手将在今晚22:00 大闹南淮城..."}
				],
				ulImgs:[
					{imgs2:[
						{img:"http://dl.kulemi.com/article/photo/201904221400225029591993960/",title:"《复联4》预售票房破5亿"},
						{img:"http://dl.kulemi.com/article/photo/201904221400225029591993960/",title:"《复联4》预售票房破5亿"}
					]},
					{imgs2:[
						{img:"http://dl.kulemi.com/article/photo/201906051143328309160132282s/",title:"《复联4》预售票房破5亿"},
						{img:"http://dl.kulemi.com/article/photo/201906051113368338619971008s/",title:"《复联4》预售票房破5亿"}
					]},
					{imgs2:[
						{img:"http://dl.kulemi.com/article/photo/2019060510560205651717160791s/",title:"《复联4》预售票房破5亿"},
						{img:"http://dl.kulemi.com/article/photo/201906051054301492798088977s/",title:"《复联4》预售票房破5亿"}
					]},
					{imgs2:[
						{img:"http://dl.kulemi.com/article/photo/201904221400225029591993960/",title:"《复联4》预售票房破5亿"},
						{img:"http://dl.kulemi.com/article/photo/201904221400225029591993960/",title:"《复联4》预售票房破5亿"}
					]}
				],
				rankings:[]
			}
		},
		created(){
			this.play()
			this.getRanking()
		},
		methods:{
			automatic(){
				this.index++;
				this.cur++;
				if(this.index==this.imgs.length){
					this.index=0
				}
				if(this.cur==this.ulImgs.length){
					this.cur=0
				}
			},
			play(){
				this.timer=setInterval(this.automatic,5000)
			},
			getRanking(){
				this.axios.get("/src/data/movie_data/ranking.json").then(res=>{
					this.rankings=res.data
					console.log(this.ranking)
				})
			}
		},
		components:{
			newHot,
			soonRelease,
			tvPlay,
			moviesComment,
			classicMovies,
			hotText
		}
	}
</script>

<style lang='less' scoped>
	.movieChannel{
		width: 100%;
		margin: 0 auto;
		margin-top: 50px;
		.movieChannel_header{
			width: 1200px;
			height: 340px;
			margin: 0 auto;
			overflow: hidden;
			.movie-retation{
				width: 797px;
				height: 340px;
				float: left;
				.movie-retation_left{
					width: 485px;
					height: 340px;
					float: left;
					overflow: hidden;
					.v-enter-active{
						transform: translateX(0);
						transition: all 1s ease;
					}
					.v-leave-active {
					    transform: translateX(-100%);
					    transition: all 1s ease;
					  }
					  .v-enter, {
					    transform: translateX(100%);
					  }
					  .v-leave {
					    transform: translateX(0);
					  }
					ul{
						width: 500%;
						height: 340px;
						position: relative;
						li{
							float: left;
							position: absolute;
							p{
								width: 485px;
								height: 45px;
								background-color: rgba(0,0,0,.5);
								line-height: 45px;
								color: #fff;
								position: absolute;
								bottom: 0px;
							}
							img{
								width: 485px;
								height: 340px;
								display: block;
							}
						}
					}
				}
				.movie-retation_right{
					width: 310px;
					height: 340px;
					float: right;
					overflow: hidden;
					.v-enter-active{
						transform: translateY(0);
						transition: all 1s ease;
					}
					.v-leave-active {
					    transform: translateY(-100%);
					    transition: all 1s ease;
					  }
					  .v-enter, {
					    transform: translateY(100%);
					  }
					  .v-leave {
					    transform: translateY(0);
					  }
					div{
						position: relative;
						ul{
							position: absolute;
							li{
								position: relative;
								margin-top: 2px;
								img{
									width: 312px;
									height: 169px;
									display: block;
								}
								p{
									width: 310px;
									height: 45px;
									text-align: center;
									background-color: rgba(0,0,0,.5);
									line-height: 45px;
									color: #fff;
									position: absolute;
									bottom: 0px;
								}
							}
						}
					}
				}
			}
			.movie_ranking{
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
					background-image: linear-gradient(-90deg, #e10019 0%, #1f597a 100%);
				}
				ul{
					li{
						width: 350px;
						height: 45px;
						span{
							display: inline-block;
							width: 60px;
							height: 45px;
							text-align: center;
							font-size: 15px;
							line-height: 45px;
							color: #61ac36;
						}
						span:first-child{	
							width: 160px;
							color: black;
						}
						b{
							display: inline-block;
							width: 80px;
							height: 22px;
							text-align: center;
							border-radius: 10px;
							font-size: 14px;
							background-color: #61ac36;
							color: #fff;
							margin-left: 20px;
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
					margin-right: 25px;
					text-align: center;
					line-height: 40px;
					a{
						color: black;
						font-size: 15px;
					}
					a:hover{
						color: red;
					}
				}
			}
		}
	}
</style>