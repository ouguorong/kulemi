<template>
	<div class='homeStar'>
		<div class='homeStar_left'>
			<div class='homeStar_title'>热门明星
				<a href="#">更多</a>
			</div>
			<div class='homeStar_main'>
				<p>
					<a href="#"><img src="http://www.kulemi.com/dl/project/logo/29241.png"></a>
					<b></b>
					<span>科比·布莱恩特</span>
				</p>
				<ul>
					<li class='removeLeft'>
						<a href="#"><img src="http://www.kulemi.com/dl/project/logo/27552.jpg"></a>
						<b></b>
						<span>佘诗曼</span>
					</li>
					<li>
						<a href="#"><img src="http://www.kulemi.com/dl/project/logo/31494.png"></a>
						<b></b>
						<span>周杰伦</span>
					</li>
					<li>
						<a href="#"><img src="http://www.kulemi.com/dl/project/logo/27535.jpg"></a>
						<b></b>
						<span>黎姿</span>
					</li>
					<li>
						<a href="#"><img src="http://www.kulemi.com/dl/project/logo/27677.jpg"></a>
						<b></b>
						<span>陈慧琳</span>
					</li>
					<li class='removeLeft'>
						<a href="#"><img src="http://www.kulemi.com/dl/project/logo/28095.png"></a>
						<b></b>
						<span>谭卓</span>
					</li>
					<li>
						<a href="#"><img src="http://www.kulemi.com/dl/project/logo/28256.png"></a>
						<b></b>
						<span>秦昊</span>
					</li>
					<li>
						<a href="#"><img src="http://www.kulemi.com/dl/project/logo/28370.png"></a>
						<b></b>
						<span>张硕</span>
					</li>
					<li>
						<a href="#"><img src="http://www.kulemi.com/dl/project/logo/28603.jpg"></a>
						<b></b>
						<span>陈国坤</span>
					</li>
				</ul>
			</div>
		</div>
		<div class='homeStar_right'>
			<div class='homeStar_right_title'>人物热度榜</div>
			<div class='homeStar_ranking_list'>
				<ul>
					<li v-for='(item,i) in homeStarList' :key='item.id' :class='{li_height:index==i}' @mouseenter='getindex(i)'>
						<div class='homeStar_ranking_list_index1' v-if='index==i'>
							<div><a href="#"><img :src="item.img"></a></div>
							<div>
								<a href="#">{{item.name}}<b>{{ item.temperature }}</b></a>
								<span>{{ item.English }}</span>
								<p>生日：{{item.Birthday}}</p>
								<p>职业：{{item.Occupation}}</p>
							</div>
						</div>
						<div v-show='index!=i'>
							<i :class='{color:i<3}'>{{ item.id }}</i>
							<span>{{ item.name }}</span>
							<span>{{ item.hot }}</span>
						</div>
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return {
				index:0,
				homeStarList:[]
			}
		},
		created(){
			this.getComicPopular()
		},
		methods:{
			getComicPopular(){
				this.axios.get('/src/data/home_data/homeStarRanking.json').then(res=>{
					this.homeStarList=res.data
				})
			},
			getindex(i){
				this.index=i
			}
		}
	}
</script>

<style lang='less' scoped>
	.homeStar{
		width: 1200px;
		margin: 0 auto;
		overflow: hidden;
		.homeStar_left{
			float: left;
			.homeStar_title{
				width: 800px;
				height: 60px;
				line-height: 60px;
				font-size: 22px;

				a{
					float: right;
					font-size: 15px;
					color: #aaa;
				}
			}
			.homeStar_main{
				width: 800px;
				overflow: hidden;
				>p{
					width: 225px;
					height: 300px;
					position: relative;
					float: left;
					>a{
						display: inline-block;
						width: 225px;
						height: 300px;
						img{
							width: 100%;
							height: 100%;
							border-radius: 4px;
						}
					}
					>b{
						display: inline-block;
						width: 100%;
						height: 82px;
						position: absolute;
						bottom: 0;
						background: url(http://www.kulemi.com/content/home/pc/mk2.png) 0 bottom repeat-x
					}
					>span{
						display: inline-block;
						width: 100%;
						height: 30px;
						color: #fff;
						padding-left: 15px;
						position: absolute;
						bottom: 0px;
					}
				}
				>p:hover{
					span{
						color: #ff4b00;
					}
				}
				>ul{
					width: 530px;
					height: 300px;
					float: right;
					li{
						width: 110px;
						height: 140px;
						float: left;
						position: relative;
						margin:0 0 20px 30px;
						a{
							width: 100%;
							height: 100%;
							img{
								width: 100%;
								height: 100%;
								border-radius: 4px;
							}
						}
						>b{
							display: inline-block;
							width: 100%;
							height: 82px;
							position: absolute;
							bottom: 0;
							background: url(http://www.kulemi.com/content/home/pc/mk2.png) 0 bottom repeat-x;
						}
						span{
							position: absolute;
							bottom: 0;
							color: #fff;
							font-size: 15px;
							padding:0 0 5px 15px;
						}
					}
					li:hover{
						span{
							color: #ff4b00;
						}
					}
					.removeLeft{
						margin-left: 0;
					}
				}
			}
		}
		.homeStar_right{
			float: right;
			width: 360px;
			.homeStar_right_title{
				font-size: 22px;
				width: 360px;
				height: 60px;
				line-height: 60px;
				color: #c42545;
			}
			.homeStar_ranking_list{
				ul{
					.li_height{
						height: 110px;
					}
					li{
						width: 360px;
						height: 35px;
						margin-bottom: 10px;
						line-height: 35px;
						overflow: hidden;
						position: relative;
						div:last-child{
							i{
								display: inline-block;
								width: 25px;
								height: 35px;
								color: #aaa;
							}
							.color{
								color: #FF4B00;
							}
							>span:first-child{
								color: #333;
								font-size: 15px;
							}
							>span:last-child{
								float: right;
								color: #ff4b00;
							}
						}
						.homeStar_ranking_list_index1{
							width: 360px;
							height: 110px;
							position: relative;
							div:first-child{
								width:83px;
								height: 116px;
								float: left;
								img{
									width: 100%;
									height: 100%;
									border-radius: 4px;
								}
							}
							div:last-child{
								width: 265px;
								height: 110px;
								float: right;
								a{
									display: block;
									color: #333;
									font-size: 18px;
									width: 265px;
									height: 20px;
									line-height: 20px;
									>b{
										float: right;
										color: #ff4b00;
									}
								}
								span{
									display: block;
									font-size: 12px;
									line-height: 20px;
									color: #aaa;
									margin-bottom: 5px;
								}
								p{
									font-size: 12px;
									width: 265px;
									height: 20px;
									color: #aaa;
									display: -webkit-box;
									-webkit-box-orient: vertical;
									-webkit-line-clamp: 1;
									overflow: hidden;
									line-height: 20px;
								}
							}
							
						}
					}
				}
			}
		}
	}
</style>