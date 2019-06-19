<template>
	<div class='movie_soon_release'>
		<div class='movie__soon_release_left'>
			<div class='movie__soon_release_left_title'>即将上映</div>
			<div class='movie__soon_release_list'>
				<ul>
					<li :class='{list:flag==i||f==i}' v-for='(item,i) in movieSoonList' :key='item.id'>
						<a href="#">
							<img :src="item.img">
							<p>预售</p>
						</a>
						<div>
							<span>{{ item.name }}</span>
							<i>{{ item.score }}</i>
						</div>
					</li>
				</ul>
			</div>
		</div>
		<div class='movie__soon_release_right'>
			<div class='movie__soon_release_right_title'>最受期待</div>
			<div class='movie__soon_release_right_list'>
				<ul>
					<li class='movie__soon_release_right_list_index1'>
						<a href="#">
							<img src="http://www.kulemi.com/dl/project/logo/30554.jpg">
							<div>
								<h4>黑衣人:全球追缉</h4>
								<div>克里斯·海姆斯沃斯 泰莎·汤普森 丽贝卡·弗格森 库梅尔·南贾尼 拉菲·斯波</div>
								<span>2019年06月14日</span>
								<p>热度：173</p>
							</div>
						</a>
						<p><i>1</i></p>
					</li>
					<li class='movie__soon_release_right_list_index2'>
						<a href="#">
							<p><img src="http://www.kulemi.com/dl/project/logo/30831.jpg"></p>
							<div>
								<p>蜘蛛侠:英雄远征</p>
								<span>热度：163</span>
							</div>
						</a>
						<p><i>2</i></p>
					</li>
					<li class='movie__soon_release_right_list_index3'>
						<a href="#">
							<p><img src="http://www.kulemi.com/dl/project/logo/30990.jpg"></p>
							<div>
								<p>八佰</p>
								<span>热度：158</span>
							</div>
						</a>
						<p><i>3</i></p>
					</li>
					<li class='movie__soon_release_right_list_index4'>
						<a href="#">
							<i>4</i>
							<span>鼠胆英雄</span>
							<p>热度：153</p>
						</a>
					</li>
					<li class='movie__soon_release_right_list_index4'>
						<a href="#">
							<i>5</i>
							<span>少年的你</span>
							<p>热度：152</p>
						</a>
					</li>
					<li class='movie__soon_release_right_list_index4'>
						<a href="#">
							<i>6</i>
							<span>绝杀慕尼黑</span>
							<p>热度：150</p>
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
				this.axios.get('/src/data/movie_data/soon_release.json').then(res=>{
					this.movieSoonList=res.data
				})
			}
		}
	}
</script>

<style lang='less' scoped>
	.movie_soon_release{
		width: 1200px;
		margin: 0 auto;
		overflow: hidden;
		.movie__soon_release_left{
			width: 840px;
			float: left;
			overflow: hidden;
			.movie__soon_release_left_title{
				height: 80px;
				width: 840px;
				font-size: 24px;
				line-height: 80px;
			}
			.movie__soon_release_list{
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
		.movie__soon_release_right{
			float: right;
			width: 360px;
			.movie__soon_release_right_title{
				height: 80px;
				width: 360px;
				font-size: 24px;
				line-height: 80px;
			}
			.movie__soon_release_right_list{
				width: 360px;
				height: 200px;
				ul{
					overflow: hidden;
					width: 360px;
					.movie__soon_release_right_list_index1{
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
								margin-left:10px;
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
					.movie__soon_release_right_list_index1:hover{
						background-color: #eee
					}
					.movie__soon_release_right_list_index2,.movie__soon_release_right_list_index3{
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
					.movie__soon_release_right_list_index3{
						float: right;
					}
					.movie__soon_release_right_list_index4{
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
					.movie__soon_release_right_list_index4:hover{
						background-color: #eee;
					}
				}
			}
		}
	}
</style>