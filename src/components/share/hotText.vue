<template>
	<div class='comic_hotText'>
		<div class='comic_hotText_left'>
			<div class='comic_hotText_left_title'>热文推荐</div>
			<div class='comic_hotText_left_text'>
				<ul>
					<li v-for='(item,i) in hotTextList' :key='item.id'>
						<div class='comic_hotText_left_text_img' v-show='i!=flag'><a href="#"><img :src="item.img"></a>
						</div>
						<div class='comic_hotText_left_text_content'>
							<p>{{ item.title }}</p>
							<span>{{ item.content }}</span>
							<p>
								<a href="#"><img :src="item.src"></a>
								<span class='user'>
									<em><a href="#">{{ item.user }}</a></em>
									<em>{{ item.time }}</em>
								</span>
								<span class='comment'>
									<em><i class="fa fa-hand-pointer-o"></i>26</em>
									<em><i class="fa fa-thumbs-o-up"></i>0</em>
								</span>
							</p>
						</div>	
					</li>
				</ul>
			</div>
		</div>
		<div class='comic_hotText_right'>
			<div class='comic_hotText_right_title'>最新评价</div>
			<div class='comic_hotText_appraise'>
				<ul>
					<li v-for='item in AppraiseList' :key='item.id'>
						<div class='comic_hotText_appraise_top'>
							<p :class='{imgSize:judge||false}'><a href="#"><img :src="item.img"></a></p>
							<div>
								<p>{{ item.name }}</p>
								<p>
									<i class="fa fa-star"></i>
									<i class="fa fa-star"></i>
									<i class="fa fa-star"></i>
									<i class="fa fa-star"></i>
									<i class="fa fa-star"></i>
								</p>
							</div>
						</div>
						<div class='comic_hotText_appraise_bottom'>
							<div><i class="fa fa-quote-left" aria-hidden="true"></i>{{ item.content }}<i class="fa fa-quote-right" aria-hidden="true"></i></div>
							<p><i class="fa fa-thumbs-o-up"></i><a href="#">{{ item.user }}</a></p>
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
			}
		},
		props:["flag","hotTextList","AppraiseList","judge"]
	}
</script>

<style lang='less' scoped>
	.comic_hotText{
		width: 1200px;
		margin: 0 auto;
		overflow: hidden;
		.comic_hotText_left{
			width: 785px;
			float: left;
			overflow: hidden;
			.comic_hotText_left_title{
				height: 80px;
				width: 840px;
				font-size: 24px;
				line-height: 80px;
			}
			.comic_hotText_left_text{
				ul{
					li{
						width: 785px;
						margin-bottom: 20px;
						overflow: hidden;
						border-bottom: 1px solid #ddd;
						.comic_hotText_left_text_img{
							width: 191px;
							height: 127px;
							float: left;
							margin-right: 10px;
							img{
								width: 100%;
								height: 100%;
							}
						}
						.comic_hotText_left_text_content{
							p:first-child{
								font-size: 20px;
								margin-bottom: 15px;
							}
							span{
								display: block;
								font-size: 14px;
								line-height: 25px;
								color: #3d3d3d;
								display: -webkit-box;
								-webkit-box-orient: vertical;
								-webkit-line-clamp: 3;
								overflow: hidden;
							}
							p:last-child{
								width: 785px;
								height: 46px;
								float: left;
								margin-top: 10px;
								a{
									display: inline-block;
									width: 30px;
									height: 30px;
									float: left;
									margin-right: 10px;
									img{
										width: 100%;
										height: 100%;
										border-radius: 50%;
										margin-top: 8px;
									}
								}
								.user{
									line-height: 46px;
									display: inline-block;
									em{
										font-style: normal;
										font-size: 14px;
										color: #aaa;
									}
									em:first-child{
										a{
											color: #333;
											margin-right: 10px;
										}
									}
								}
								.comment{
									float: right;
									line-height: 46px;
									display: inline-block;
									em{
										font-style: normal;
										margin-right: 10px;
										color: #aaa;
										font-size: 14px;
										i{
											color: #aaa;
										}
									}
									em:last-child{
										margin-right: 0;
									}
								}
							}
						}
						
					}
				}
			}
		}
		.comic_hotText_right{
			float: right;
			width: 360px;
			.comic_hotText_right_title{
				height: 80px;
				width: 360px;
				font-size: 24px;
				line-height: 80px;
			}
			.comic_hotText_appraise{
				ul{
					li{
						margin-top: 25px;
						.comic_hotText_appraise_top{
							width: 360px;
							height: 70px;
							padding-bottom: 15px;
							border-bottom: 1px solid #ddd;
							>p{
								width: 55px;
								height: 55px;
								float: left;
								img{
									width: 100%;
									height: 100%;
								}
							}
							.imgSize{
								width: 50px;
								height: 66px;
							}
							>div{
								width: 300px;
								height: 66px;
								float: right;
								p{
									font-size: 20px;
								}
								p:last-child{
									i{
										color:#14b9c8;
										font-size: 14px;
										margin-top: 15px;
									}
								}
							}
						}
						.comic_hotText_appraise_bottom{
							>div{
								font-size: 14px;
								margin: 10px 0 15px 0;
								display: -webkit-box;
								-webkit-box-orient: vertical;
								-webkit-line-clamp: 3;
								overflow: hidden;
								i{
									color: #ccc;
									margin: 0 5px;
								}
								i:first-child{
									margin-left: 0;
								}
							}
							>p{
								padding-bottom: 10px;
								border-bottom: 1px solid #aaa;
								i{
									color: #ccc;
									font-size: 14px;
								}
								a{
									font-size: 14px;
									color: #14b9c8;
									float: right;
								}
							}
						}
					}
					li:first-child{
						margin-top: 0;
					}
				}
			}
		}
	}
</style>