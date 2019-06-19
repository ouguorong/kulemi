<template>
	<div class='movie_tvPlay'>
		<div class='movie_tvPlay_left'>
			<div class='movie_tvPlay_left_title'>电视剧热榜</div>
			<div class='movie_tvPlay_list'>
				<ul>
					<li :class='{list:flag==i||f==i}' v-for='(item,i) in movieSoonList' :key='item.id'>
						<a href="#">
							<img :src="item.img">
							<p>详情</p>
						</a>
						<div>
							<span>{{ item.name }}</span>
							<i>{{ item.score }}</i>
						</div>
					</li>
				</ul>
			</div>
		</div>
		<div class='movie_tvPlay_right'>
			<div class='movie_tvPlay_right_title'>电视剧排行</div>
			<div class='movie_tvPlay_right_list'>
				<ul>
					<li class='movie_tvPlay_right_list_index1'>
						<a href="#">
							<img src="http://www.kulemi.com/dl/project/logo/30358.png">
							<div>
								<h4>破冰行动</h4>
								<div>黄景瑜 吴刚 王劲松 任达华 唐旭</div>
								<span>2019年0月07日</span>
								<p>热度：520</p>
							</div>
						</a>
						<p><i>1</i></p>
					</li>
					<li class='movie_tvPlay_right_list_index2'>
						<a href="#">
							<p><img src="http://www.kulemi.com/dl/project/logo/29896.jpg"></p>
							<div>
								<p>我们都要好好的</p>
								<span>热度：341</span>
							</div>
						</a>
						<p><i>2</i></p>
					</li>
					<li class='movie_tvPlay_right_list_index3'>
						<a href="#">
							<p><img src="http://www.kulemi.com/dl/project/logo/31052.png"></p>
							<div>
								<p>九州缥缈录</p>
								<span>热度：237</span>
							</div>
						</a>
						<p><i>3</i></p>
					</li>
					<li class='movie_tvPlay_right_list_index4'>
						<a href="#">
							<i>4</i>
							<span>权力的游戏第八季</span>
							<p>热度：233</p>
						</a>
					</li>
					<li class='movie_tvPlay_right_list_index4'>
						<a href="#">
							<i>5</i>
							<span>听雪楼</span>
							<p>热度：177</p>
						</a>
					</li>
					<li class='movie_tvPlay_right_list_index4'>
						<a href="#">
							<i>6</i>
							<span>白发</span>
							<p>热度：173</p>
						</a>
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
				movieSoonList:[]
			}
		},
		created(){
			this.getMovieSoon()
		},
		methods:{
			getMovieSoon(){
				this.axios.get('/src/data/movie_data/tvPlay.json').then(res=>{
					this.movieSoonList=res.data
				})
			}
		}
	}
</script>

<style lang='less' scoped>
	.movie_tvPlay{
		width: 1200px;
		margin: 0 auto;
		overflow: hidden;
		.movie_tvPlay_left{
			width: 840px;
			float: left;
			overflow: hidden;
			.movie_tvPlay_left_title{
				height: 80px;
				width: 840px;
				font-size: 24px;
				line-height: 80px;
			}
			.movie_tvPlay_list{
				ul{
					li{
						width: 160px;
						height: 250px;
						position: relative;
						margin: 0 0 50px 48px;
						float: left;
						a{
							img{
								width: 158px;
								height: 210px;
								display: block;
								border-radius: 4px;
							}
							p{
								width: 160px;
								height: 40px;
								text-align: center;
								line-height: 40px;
								color: #c42545;
								font-size: 15px;
								border: 1px solid #eee;
							}
							p:hover{
								color: #fff;
								background-color: #c42545;
							}
						}
						div{
							width: 160px;
							height: 30px;
							position: absolute;
							bottom: 40px;
							background-color: rgba(0,0,0,.7);
							span{
								display: inline-block;
								text-align: center;
								line-height: 30px;
								font-size: 15px;
								width: 120px;
								height: 30px;
								color: #fff;
								text-overflow: ellipsis;
								overflow: hidden;
								white-space: nowrap;
							}
							i{
								display: inline-block;
								width: 35px;
								height: 30px;
								line-height: 30px;
								color:#ffb400;
								float: right;
							}
						}
					}
					.list{
							margin-left: 0;
						}
				}
			}
		}
		.movie_tvPlay_right{
			float: right;
			width: 360px;
			.movie_tvPlay_right_title{
				height: 80px;
				width: 360px;
				font-size: 24px;
				line-height: 80px;
			}
			.movie_tvPlay_right_list{
				width: 360px;
				height: 200px;
				ul{
					overflow: hidden;
					width: 360px;
					.movie_tvPlay_right_list_index1{
						width: 360px;
						height: 200px;
						position: relative;
						a{
							img{
								width: 145px;
								height: 194px;
								float: left;
								display: inline-block;
							}
							div{
								float: right;
								width: 205px;
								margin-left: 10px;
								h4{
									font-size: 18px;
									color: #333;
									height: 25px;
									margin-top:12px;
								}
								div{
									color: black;
									margin: 12px 0;
									font-size: 15px;
								}
								span{
									margin-top: 12px;
									color: #aaa;
									font-size: 14px;
								}
								p{
									margin-top: 12px;
									color: red;
									font-size: 14px;
								}
							}
						}
						>p{
							width: 22px;
							height: 25px;
							background-color: #ff4b00;
							text-align: center;
							position: absolute;
							top: 0;
							left: 0;
							i{
								color: #fff;
								font-size: 18px;
							}
						}
					}
					.movie_tvPlay_right_list_index1:hover{
						background-color: #eee
					}
					.movie_tvPlay_right_list_index2,.movie_tvPlay_right_list_index3{
						width: 168px;
						margin-top: 15px;
						float: left;
						position: relative;
						a{
							>p{
								width: 168px;
								height: 120px;
								overflow: hidden;
								img{
									width: 100%;
								}
							}
							div{
								width: 168px;
								height: 70px;
								background-color: rgba(200, 200, 200, .2);
								p{
									color: black;
									padding-top: 10px;
									margin-left: 10px;
								}
								span{
									color: red;
									font-size: 15px;
									padding-top: 10px;
									display: block;
									margin-left: 10px;
								}
							}
						}
						>p{
							width: 22px;
							height: 25px;
							background-color: #ff4b00;
							text-align: center;
							position: absolute;
							top: 0;
							left: 0;
							i{
								color: #fff;
								font-size: 18px;
							}
						}
					}
					.movie_tvPlay_right_list_index3{
						float: right;
					}
					.movie_tvPlay_right_list_index4{
						width: 360px;
						height: 35px;
						float: left;
						margin-top: 10px;
						a{
							i{
								color: #aaa;
								font-size: 20px;
								line-height: 35px;
							}
							span{
								color: black;
								margin-left: 10px;
								line-height: 35px;
							}
							p{
								float: right;
								display: inline-block;
								font-size: 14px;
								color: red;
								line-height: 35px;
							}
						}
					}
					.movie_tvPlay_right_list_index4:hover{
						background-color: #eee;
					}
				}
			}
		}
	}
</style>