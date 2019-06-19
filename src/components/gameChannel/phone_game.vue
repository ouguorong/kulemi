<template>
	<div class='phone_game'>
		<div class='phone_game_left'>
			<div class='phone_game_left_header'>
				<p>手机游戏</p>
				<span>
					<a href="#" :class='{active:i==index}' v-for='(item,i) in lists' @click.prevent='getIndex(i)'>{{item.name}}</a>
				</span>
				<a href="#">更多</a>
			</div>
			<div class='phone_game_left_main'>
				<ul>
					<li :class='{removeLeft:index1==i||index2==i||index3==i}' v-for='(item,i) in phoneGames' :key='item.id'>
						<a href="#"><img :src="item.img"></a>
						<b>{{ item.name }}</b>
						<p>立即下载</p>
					</li>
				</ul>
			</div>
		</div>
		<div class='phone_game_right'>
			<p>
				<span>最新排行</span>
				<a href="#">全部</a>
			</p>

			<div>
				<ul>
					<li v-for='(item,i) in gameRankings' :key='item.id'>
						<p>
							<span :class='{color:item.id==1||item.id==2||item.id==3}'>{{ item.id }}</span>
							<a href="#"><img :src="item.img"></a>
						</p>
						<div>
							<p class='title'><a href="#">{{ item.name }}</a></p>
							<p class='score'>{{ item.score }}<i class="fa fa-star"></i></p>
							<p class='tag'>{{ item.tag }}</p>
						</div>
					</li>
				</ul>
			</div>
			<span class='direction_top' @click='reduceNub'><i class="fa fa-chevron-up" aria-hidden="true"></i></span>
			<span class='direction_bottom' @click='addNub'><i class="fa fa-chevron-down" aria-hidden="true"></i></span>
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return {
				index:0,
				index1:0,
				index2:5,
				index3:10,
				Nub:0,
				lists:[{name:"最新"},{name:"推荐"},{name:"精选"}],
				phoneGames:[],
				gameRankings:[]
			}
		},
		created(){
			this.getPhoneGameData()
			this.getGameRankingData()
		},
		methods:{
			getIndex(i){
				this.index=i
			},
			getPhoneGameData(){
				this.axios.get('/src/data/game_data/phoneGame.json').then(res=>{
					this.phoneGames=res.data[this.index]
				})
			},
			getGameRankingData(){
				this.axios.get('/src/data/game_data/phoneGame_ranking.json').then(res=>{
					this.gameRankings=res.data[this.Nub]
				})
			},
			addNub(){
				this.Nub++
				this.axios.get('/src/data/game_data/phoneGame_ranking.json').then(res=>{
					if(this.Nub<res.data.length){
						this.gameRankings=res.data[this.Nub]
					}else{
						this.Nub=0
						this.gameRankings=res.data[this.Nub]
					}
				})
			},
			reduceNub(){
				this.axios.get('/src/data/game_data/phoneGame_ranking.json').then(res=>{
					if(this.Nub>0){
						this.Nub--
						this.gameRankings=res.data[this.Nub]
					}else{
						this.Nub=res.data.length-1
						this.gameRankings=res.data[this.Nub]
					}
				})
			}
		},
		watch:{
			index(val){
				this.index=val
				this.getPhoneGameData()
			}
		}
	}
</script>

<style lang='less' scoped>
	.phone_game{
		width: 1200px;
		margin: 0 auto;
		overflow: hidden;
		margin-bottom: 20px;
		.phone_game_left{
			float: left;
			width: 800px;
			.phone_game_left_header{
				width: 800px;
				height: 80px;
				line-height: 80px;
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
						width: 58px;
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
			.phone_game_left_main{
				ul{
					li{
						width: 110px;
						height: 164px;
						float: left;
						margin: 30px 0 0 62px;
						a{
							display: inline-block;
							width: 105px;
							height: 105px;
							img{
								width: 100%;
								height: 100%;
								display: block;
								border-radius: 14px;
							}
						}
						b{
							display: block;
							font-size: 14px;
							width: 110px;
							text-align: center;
						}
						b:hover{
							color: #C42545;
							font-weight: bold;
						}
						p{
							width: 80px;
							height: 30px;
							margin: 0 auto;
							text-align: center;
							line-height: 30px;
							border: 1px solid #ccc;
							border-radius: 5px;
							font-size: 14px;
							margin-top: 5px;
						}
						p:hover{
							background-color: #C42545;
							color: #fff;
						}
					}
					.removeLeft{
						margin-left: 0;
					}
				}
			}
		}
		.phone_game_right{
			float: right;
			>p{
				width: 350px;
				height: 80px;
				line-height: 80px;
				span{
					font-size: 24px;
				}
				a{
					color: #aaa;
					float: right;
					font-size: 15px;
				}
				a:hover{
					color: red;
				}
			}
			>div{
				ul{
					li{
						width: 350px;
						height: 85px;
						overflow: hidden;
						margin-bottom: 5px;
						>p{
							width:100px;
							height: 85px;
							float: left;
							margin-top: 7px;
							span{
								float: left;
								margin: 0 15px 0 5px;
								line-height: 75px;
								color: #333;
							}
							.color{
								color: #fe931b;
							}
							a{
								display: inline-block;
								width: 60px;
								height: 60px;
								margin-top: 7px;
								img{
									width: 100%;
									height: 100%;

								}
							}
						}
						>div{
							width: 240px;
							height: 85px;
							float: right;
							line-height: 85px;
							p{
								width: 240px;
								height: 20px;
								color: #aaa;
								line-height: 40px;
								font-size: 14px;
								margin-top: 3px;
							}
							.title{
								a{
									color: #333333;
									font-size: 14px;
								}
								a:hover{
									color: red;
								}
							}
							.score{
								i{
									margin-left: 5px;
								}
							}
						}	
					}
					li:hover{
						background-color: #eee;
						border-radius: 8px;
					}
				}
			}
			>span{
				display: block;
				width: 170px;
				height: 30px;
				float: left;
				background-color: #ddd;
				border-radius: 5px;
				line-height: 25px;
				font-size: 20px;
				text-align: center;
				color: rgba(0,0,0,.5);
				cursor: pointer;
			}
			.direction_bottom{
				float: right;
			}
		}
	}
</style>