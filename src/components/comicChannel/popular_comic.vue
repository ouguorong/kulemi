<template>
	<div class='comic_popular'>
		<div class='comic_popular_left'>
			<div class='comic_popular_left_title'>热门动漫
				<a href="#">更多</a>
			</div>
			<div class='comic_popular_list'>
				<ul>
					<li :class='{list:flag==i||f==i}' v-for='(item,i) in comicSoonList' :key='item.id'>
						<a href="#">
							<img :src="item.img">
							<p>
								<span v-for='(item,i) in tags[i]' :key='i'>{{item}}</span>
							</p>
						</a>
						<div>
							<p><a href="#">{{ item.name }}</a></p>
							<p>盛世卡漫<span><i class="fa fa-thumbs-o-up"></i>196</span></p>
						</div>
					</li>
				</ul>
			</div>
		</div>
		<div class='comic_popular_right'>
			<div class='comic_popular_right_title'>点击热榜
				<a href="#">全部</a>
			</div>
			<div class='comic_popular_ranking_list'>
				<ul>
					<li v-for='(item,i) in comicPopularList' :key='item.id' :class='{li_height:index==i}' @mouseenter='getindex(i)'>
						<div class='comic_popular_ranking_list_index1' v-if='index==i'>
							<div><a href="#"><img :src="item.img"></a></div>
							<div>
								<p><a href="#">{{ item.name }}</a></p>
								<p><a href="#">{{ item.tag }}</a></p>
								<p class='p_content'>年仅七岁却超速生长的短命神童时江，为恢复正常生活，带着寄宿体内的某位大神仙闯入仙界，从此走上成从此走上成</p>
								<p>用户评分：<b>{{ item.score }}</b>分<span>{{ item.id }}</span></p>
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
				flag:0,
				f:4,
				index:0,
				tags:[],
				comicSoonList:[],
				comicPopularList:[]
			}
		},
		created(){
			this.getComicSoon();
			this.getComicPopular()
		},
		methods:{
			getComicSoon(){
				this.axios.get('/src/data/comic_data/popularComic.json').then(res=>{
					this.comicSoonList=res.data
					res.data.forEach(item=>{
						this.tags.push(item.tag.split(" "))
					})
				})
			},
			getComicPopular(){
				this.axios.get('/src/data/comic_data/popularComic.json').then(res=>{
					this.comicPopularList=res.data
				})
			},
			getindex(i){
				this.index=i
			}
		}
	}
</script>

<style lang='less' scoped>
	.comic_popular{
		width: 1200px;
		margin: 0 auto;
		overflow: hidden;
		.comic_popular_left{
			width: 800px;
			float: left;
			overflow: hidden;
			.comic_popular_left_title{
				height: 80px;
				width: 780px;
				font-size: 24px;
				line-height: 80px;
				>a{
					color: #aaa;
					font-size: 14px;
					float: right;
				}
			}
			.comic_popular_list{
				ul{
					li{
						width: 160px;
						height: 270px;
						margin: 0 0 10px 48px;
						float: left;
						>a{
							position: relative;
							img{
								width: 158px;
								height: 210px;
								display: block;
								border-radius: 4px;
							}
							>p{
								width: 160px;
								position: absolute;
								bottom: 5px;
								span{
									display: inline-block;
									width: 34px;
									height: 21px;
									color: #fff;
									font-size: 12px;
									text-align: center;
									line-height: 21px;
									margin-left: 5px;
									background-color: rgba(0,0,0,.5);
								}
							}
						}
						>div{
							>p:first-child{
								font-size: 14px;
								margin: 5px 0;
								a{
									color: #333;
								}
								a:hover{
									color: red;
								}
							}
							>p:last-child{
								font-size: 14px;
								color: #aaa;
								text-overflow: ellipsis;
								overflow: hidden;
								white-space: nowrap;
								>span{
									display: inline-block;
									float: right;
									font-size: 12px;
									i{
										margin-right: 3px;
									}
								}
							}
						}
					}
					.list{
							margin-left: 0;
						}
				}
			}
		}
		.comic_popular_right{
			float: right;
			width: 360px;
			.comic_popular_right_title{
				height: 80px;
				width: 360px;
				font-size: 24px;
				line-height: 80px;
				>a{
					color: #aaa;
					font-size: 14px;
					float: right;
				}
			}
			.comic_popular_ranking_list{
				ul{
					.li_height{
						height: 160px;
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
						.comic_popular_ranking_list_index1{
							width: 360px;
							height: 160px;
							position: relative;
							div:first-child{
								width:120px;
								height: 160px;
								float: left;
								img{
									width: 100%;
									height: 100%;
								}
							}
							div:last-child{
								width: 230px;
								height: 160px;
								float: right;
								p{
									font-size: 14px;
									line-height: 25px;
									margin-bottom: 5px;
									display: -webkit-box;
									-webkit-box-orient: vertical;
									-webkit-line-clamp: 1;
									overflow: hidden;
									a{
										color: #333;
									}
								}
								p:first-child{
									font-size: 16px;
								}
								p:last-child{
									font-size: 12px;
									color: #888;
									b{
										color: red;
									}
									span{
										display: inline-block;
										width: 25px;
										height: 30px;
										text-align: center;
										line-height: 30px;
										position: absolute;
										top: 0;
										left: 0;
										background-color: #ff4b00;
										color: #fff;
									}
								}
								.p_content{
									color: #888;
									height: 70px;
									font-size: 14px;
									display: -webkit-box;
									-webkit-box-orient: vertical;
									-webkit-line-clamp: 3;
									overflow: hidden;
								}
							}
							
						}
					}
				}
			}
		}
	}
</style>