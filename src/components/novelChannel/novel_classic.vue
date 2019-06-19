<template>
	<div class='novel_classic'>
		<div class='novel_classic_left'>
			<div class='novel_classic_left_header'>
				<p>国学经典</p>
				<span>
					<a href="#" :class='{active:i==index}' v-for='(item,i) in lists' @click.prevent='getIndex(i)'>{{item.name}}</a>
				</span>
				<a href="#">更多</a>
			</div>
			<div class='novel_classic_left_main'>
				<ul>
					<li :class='{removeLeft:index1==i||index2==i}' v-for='(item,i) in novelClassicList' :key='item.id'>
						<a href="#"><img :src="item.img"></a>
						<span><a href="#">{{ item.name }}</a></span>
						<p>{{ item.writer }}</p>
					</li>
				</ul>
			</div>
		</div>
		<div class='novel_classic_right'>
			<div class='novel_classic_right_title'>经典排行</div>
			<div class='novel_classic_ranking_list'>
				<ul>
					<li v-for='(item,i) in novelClassicRanking' :key='item.id' :class='{li_height:index3==i}' @mouseenter='getindex3(i)'>
						<div class='novel_classic_ranking_list_index1' v-if='index3==i'>
							<div><a href="#"><img :src="item.img"></a></div>
							<div>
								<p><a href="#">{{ item.name }}</a><b>{{ item.score }}</b></p>
								<p><b>{{ item.hot }}</b><i>{{ item.id }}</i><span>{{item.Label}}</span></p>
							</div>
						</div>
						<div v-show='index3!=i'>
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
				index1:0,
				index2:4,
				index3:0,
				Nub:0,
				lists:[{name:"四书五经"},{name:"二十四史"},{name:"四大名著"}],
				novelClassicList:[],
				novelClassicRanking:[]
			}
		},
		created(){
			this.getnovelClassicData()
			this.novelClassicRankingData()
		},
		methods:{
			getIndex(i){
				this.index=i
			},
			getnovelClassicData(){
				this.axios.get('/src/data/novel_data/novelClassic.json').then(res=>{
					this.novelClassicList=res.data[this.index]
				})
			},
			novelClassicRankingData(){
				this.axios.get('/src/data/novel_data/novelClassic.json').then(res=>{
					this.novelClassicRanking=res.data[0]
				})
			},
			getindex3(i){
				this.index3=i
			}
		},
		watch:{
			index(val){
				this.index=val
				this.getnovelClassicData()
			}
		}
	}
</script>

<style lang='less' scoped>
	.novel_classic{
		width: 1200px;
		margin: 0 auto;
		overflow: hidden;
		margin-bottom: 20px;
		.novel_classic_left{
			float: left;
			width: 800px;
			.novel_classic_left_header{
				width: 800px;
				height: 60px;
				line-height: 60px;
				border-bottom: 1px solid #ccc;
				p{
					display: inline-block;
					font-size: 24px;
				}
				span{
					margin-left: 30px;
					a{
						color: #333;
						font-size: 15px;
						display: inline-block;
						width: 90px;
						height: 25px;
						text-align: center;
						position: relative;
					}
					.active{
						background-color: #e64744;
						line-height: 25px;
						color: #fff;
					}
					.active::after {
					    content: '';
					    display: block;
					    position: absolute;
					    top: 24px;
					    left: 36.2%;
					    border-left: 8px solid transparent;
					    border-right: 8px solid transparent;
					    border-top: 8px solid #e64744;
					}
				}
				>a{
					color: #aaa;
					font-size: 15px;
					float: right;
				}
				>a:hover{
					color: red;
				}
			}
			.novel_classic_left_main{
				width: 800px;
				height: 600px;
				overflow: hidden;
				ul{
					li{
						width: 160px;
						height: 270px;
						float: left;
						margin: 30px 0 0 50px;
						>a{
							display: inline-block;
							width: 160px;
							height: 210px;
							img{
								width: 100%;
								height: 100%;
								border-radius: 5px;
							}
						}
						span{
							>a{
								font-size: 14px;
								color: #333;
							}
						}
						span:hover{
							>a{
								color: #C42545;
							}
						}
						p{
							font-size: 14px;
							margin-top: 5px;
							color: #333;
						}
					}
					.removeLeft{
						margin-left: 0;
					}
				}
			}
		}
		.novel_classic_right{
			float: right;
			width: 360px;
			.novel_classic_right_title{
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
			.novel_classic_ranking_list{
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
						.novel_classic_ranking_list_index1{
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