<template>
	<div class='homeNovel'>
		<div class='homeNovel_left'>
			<div class='homeNovel_left_title'>酷书时刻
				<a href="#">更多<i class="fa fa-chevron-right" aria-hidden="true"></i></a>
			</div>
			<div class='homeNovel_list'>
				<ul>
					<li :class='{list:flag==i||f==i}' v-for='(item,i) in homeNovelList' :key='item.id'>
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
		<div class='homeNovel_right'>
			<div class='homeNovel_right_title'>酷书分类</div>
			<ul>
				<li v-for='(item,i) in homeNovelTagList' :key='i'>
					<a href="#">{{item}}</a>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return {
				flag:0,
				f:5,
				homeNovelList:[],
				homeNovelTagList:["玄幻","奇幻","武侠","仙侠","都市","现实","军事","历史","游戏","科幻","女生","二次元","外国名著","古典文学","科学技术","生活艺术"]
			}
		},
		created(){
			this.getHomeNovel()
		},
		methods:{
			getHomeNovel(){
				this.axios.get('/src/data/home_data/homeNovel.json').then(res=>{
					this.homeNovelList=res.data
				})
			}
		}
	}
</script>

<style lang='less' scoped>
	.homeNovel{
		width: 1200px;
		margin: 0 auto;
		overflow: hidden;
		.homeNovel_left{
			width: 800px;
			float: left;
			overflow: hidden;
			.homeNovel_left_title{
				height: 60px;
				width: 780px;
				font-size: 24px;
				line-height: 60px;
				>a{
					color: #ff4b00;
					font-size: 14px;
					float: right;
				}
			}
			.homeNovel_list{
				ul{
					li{
						width: 120px;
						height: 210px;
						margin: 20px 0 0 43px;
						float: left;
						>a{
							display: inline-block;
							width: 120px;
							height: 160px;
							position: relative;
							img{
								width: 100%;
								height: 100%;
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
		.homeNovel_right{
			float: right;
			width: 360px;
			.homeNovel_right_title{
				height: 60px;
				width: 360px;
				font-size: 24px;
				line-height: 60px;
				color: #c42545;
			}
			ul{
				li{
					width: 180px;
					height: 60px;
					float: left;
					line-height: 60px;
					a{
						display: inline-block;
					    margin-left: 40px;
					    font-size: 15px;
					    color: #333;
					    letter-spacing: 1px;
					    text-decoration: none;
					    padding-left: 40px;
					    background-image: url('http://www.kulemi.com/content/home/pc/cateico.png');
					    background-repeat: no-repeat;
					}
					a:hover{
						color: red;
					}
				}
				li:nth-of-type(1){
					a{
						background-position: 0 0;
					}
				}
				li:nth-of-type(2){
					a{
						background-position: 0 -55px;
					}
				}
				li:nth-of-type(3){
					a{
						background-position: 0 -55*2px;
					}
				}
				li:nth-of-type(4){
					a{
						background-position: 0 -55*3px;
					}
				}
				li:nth-of-type(5){
					a{
						background-position: 0 -55*4px;
					}
				}
				li:nth-of-type(6){
					a{
						background-position: 0 -55*5px;
					}
				}
				li:nth-of-type(7){
					a{
						background-position: 0 -55*6px;
					}
				}
					li:nth-of-type(8){
					a{
						background-position: 0 -55*7px;
					}
				}
					li:nth-of-type(9){
					a{
						background-position: 0 -55*8px;
					}
				}
					li:nth-of-type(10){
					a{
						background-position: 0 -55*9px;
					}
				}
					li:nth-of-type(11){
					a{
						background-position: 0 -55*10px;
					}
				}
					li:nth-of-type(12){
					a{
						background-position: 0 -55*11px;
					}
				}
					li:nth-of-type(13){
					a{
						background-position: 0 -55*12px;
					}
				}
					li:nth-of-type(14){
					a{
						background-position: 0 -55*13px;
					}
				}
					li:nth-of-type(15){
					a{
						background-position: 0 -55*14px;
					}
				}
					li:nth-of-type(16){
					a{
						background-position: 0 -55*15px;
					}
				}
			}
		}
	}
</style>