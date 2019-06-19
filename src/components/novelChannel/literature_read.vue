<template>
	<div class='novel_literature_read'>
		<div class='novel_literature_read_left'>
			<div class='novel_literature_read_left_title'>文学速递
				<a href="#">全部<i class="fa fa-chevron-right" aria-hidden="true"></i></a>
			</div>
			<div class='novel_literature_read_list'>
				<ul>
					<li :class='{list:flag==i||f==i}' v-for='(item,i) in literatureReadList' :key='item.id'>
						<a href="#">
							<img :src="item.img">
						</a>
						<div>
							<p><a href="#">{{ item.name }}</a></p>
							<p>{{ item.writer }}</p>
						</div>
					</li>
				</ul>
			</div>
		</div>
		<div class='novel_literature_read_right'>
			<div class='novel_literature_read_right_title'>阅读排行</div>
			<div class='novel_literature_read_ranking_list'>
				<ul>
					<li v-for='(item,i) in literatureHotList' :key='item.id' :class='{li_height:index==i}' @mouseenter='getindex(i)'>
						<div class='novel_literature_read_ranking_list_index1' v-if='index==i'>
							<div><a href="#"><img :src="item.img"></a></div>
							<div>
								<p><a href="#">{{ item.name }}</a><b>{{ item.score }}</b></p>
								<p><b>{{ item.hot }}</b><i>{{ item.id }}</i><span>{{item.writer}}</span><span>{{item.Label}}</span></p>
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
				literatureReadList:[],
				literatureHotList:[]
			}
		},
		created(){
			this.getComicSoon();
			this.getComicPopular()
		},
		methods:{
			getComicSoon(){
				this.axios.get('/src/data/novel_data/literatureRead.json').then(res=>{
					this.literatureReadList=res.data
				})
			},
			getComicPopular(){
				this.axios.get('/src/data/novel_data/literatureRead.json').then(res=>{
					this.literatureHotList=res.data
				})
			},
			getindex(i){
				this.index=i
			}
		}
	}
</script>

<style lang='less' scoped>
	.novel_literature_read{
		width: 1200px;
		margin: 0 auto;
		overflow: hidden;
		.novel_literature_read_left{
			width: 800px;
			float: left;
			overflow: hidden;
			.novel_literature_read_left_title{
				height: 80px;
				width: 780px;
				font-size: 24px;
				line-height: 80px;
				>a{
					color: #ff4b00;
					font-size: 14px;
					float: right;
				}
			}
			.novel_literature_read_list{
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
							}
						}
					}
					.list{
							margin-left: 0;
						}
				}
			}
		}
		.novel_literature_read_right{
			float: right;
			width: 360px;
			.novel_literature_read_right_title{
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
			.novel_literature_read_ranking_list{
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
						.novel_literature_read_ranking_list_index1{
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
									margin: 20px 0 5px 0;
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
									b{
										color: #ff4b00;
										float: right;
									}
								}
								p:last-child{
									color: #888;
									b{
										color: #ef4238;
									}
									i{
										display: inline-block;
										width: 25px;
										height: 30px;
										font-size: 16px;
										text-align: center;
										line-height: 30px;
										position: absolute;
										top: 0;
										left: 0;
										background-color: #ff4b00;
										color: #fff;
									}
									span{
										float: right;
										color: #ef4238;
										margin-left: 10px;
									}
								}
							}
							
						}
					}
				}
			}
		}
	}
</style>