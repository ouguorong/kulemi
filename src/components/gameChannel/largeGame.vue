<template>
	<div class='large_game'>
		<div class='large_game_left'>
			<div class='large_game_left_header'>
				<p>大型游戏</p>
				<span>
					<a href="#" :class='{active:i==index}' v-for='(item,i) in lists' @click.prevent='getIndex(i)'>{{item.name}}</a>
				</span>
				<a href="#">更多</a>
			</div>
			<div class='large_game_left_main'>
				<ul>
					<li :class='{removeLeft:index1==i||index2==i}' v-for='(item,i) in largeGames' :key='item.id'>
						<a href="#"><img :src="item.img"></a>
						<p>{{ item.name }}</p>
						<div>
							<span>{{ item.tag }}</span>
							<span>
								<em>9.8</em>
								<i class="fa fa-star"></i>
							</span>
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
				index2:6,
				Nub:0,
				lists:[{name:"网游"},{name:"单机"},{name:"主机"}],
				largeGames:[],
				gameRankings:[]
			}
		},
		created(){
			this.getlargeGameData()
		},
		methods:{
			getIndex(i){
				this.index=i
			},
			getlargeGameData(){
				this.axios.get('/src/data/game_data/largeGame.json').then(res=>{
					this.largeGames=res.data[this.index]
				})
			}
		},
		watch:{
			index(val){
				this.index=val
				this.getlargeGameData()
			}
		}
	}
</script>

<style lang='less' scoped>
	.large_game{
		width: 1200px;
		margin: 0 auto;
		overflow: hidden;
		.large_game_left{
			width: 1200px;
			.large_game_left_header{
				width: 1200px;
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
			.large_game_left_main{
				ul{
					li{
						width: 140px;
						height: 230px;
						float: left;
						margin: 30px 0 0 30px;
						padding:16px 16.5px 0 16px;
						border: 1px solid #f3f3f3;
						border-radius: 5px;
						>a{
							display: inline-block;
							width: 140px;
							height: 140px;
							img{
								width: 100%;
								height: 100%;
								display: block;
								border-radius: 14px;
							}
						}
						>p{
							display: block;
							width: 140px;
							padding:15px 0;
							text-align: center;
							font-size: 18px;
						}
						>p:hover{
							color: #C42545;
						}
						>div{
							width: 140px;
							height: 20px;
							margin: 0 auto;
							span:first-child{
								color: #333;
								font-size: 15px;
								display: inline-block;
								width: 100px;
								overflow: hidden;
								text-overflow:ellipsis;
								white-space: nowrap;
							}
							span:last-child{
								float: right;
								color: #333;
								font-size: 14px;
								em{
									font-style: normal;
								}
							}						
						}
					}
					li:hover{
						background-color: rgba(0,0,0,0.045);
					}
					.removeLeft{
						margin-left: 0;
					}
				}
			}
		}
	}
</style>