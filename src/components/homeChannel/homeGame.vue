<template>
	<div class='homeGame'>
		<div class='homeGame_left'>
			<div class='homeGame_left_header'>
				<p>游戏推荐</p>
				<a href="#">更多</a>
			</div>
			<div class='homeGame_left_main'>
				<ul>
					<li :class='{removeLeft:index1==i||index2==i||index3==i}' v-for='(item,i) in homeGameList' :key='item.id'>
						<a href="#"><img :src="item.img"></a>
						<b>{{ item.name }}</b>
						<p>立即下载</p>
					</li>
				</ul>
			</div>
		</div>
		<div class='homeGame_right'>
			<p>游戏攻略</p>
			<ul>
				<li :class='{li_idnex1:i==0||i==1}' v-for="(item,i) in homeGameStrategyList" :key='item.id'>
					<div>
						<a href="#" v-show='i==0'>
							<img :src="item.img">
							<span>{{ item.title }}</span>
						</a>
						<a href="#" v-show='i==1'>
							<img :src="item.img">
							<span>{{ item.title }}</span>
						</a>
					</div>
					<b>.</b>
					<a href="#">{{ item.title }}</a>
				</li>
			</ul>
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
				index4:0,
				lists:[{name:"最新"},{name:"推荐"},{name:"精选"}],
				homeGameList:[],
				homeGameStrategyList:[]
			}
		},
		created(){
			this.getPhoneGameData()
			this.getGameRankingData()
			this.getHomeGameRight()
		},
		methods:{
			getIndex(i){
				this.index=i
			},
			getPhoneGameData(){
				this.axios.get('/src/data/game_data/phoneGame.json').then(res=>{
					this.homeGameList=res.data[this.index]
				})
			},
			getGameRankingData(){
				this.axios.get('/src/data/game_data/phoneGame_ranking.json').then(res=>{
					this.gameRankings=res.data[this.Nub]
				})
			},
			addNub(){
				this.index4++
				this.axios.get('/src/data/home_data/homeGameStrategy.json').then(res=>{
					if(this.index4<res.data.length){
						this.homeGameStrategyList=res.data[this.index4]
					}else{
						this.index4=0
						this.homeGameStrategyList=res.data[this.index4]
					}
				})
			},
			reduceNub(){
				this.axios.get('/src/data/home_data/homeGameStrategy.json').then(res=>{
					if(this.index4>0){
						this.index4--
						this.homeGameStrategyList=res.data[this.index4]
					}else{
						this.index4=res.data.length-1
						this.homeGameStrategyList=res.data[this.index4]
					}
				})
			},
			getHomeGameRight(){
				this.axios.get('/src/data/home_data/homeGameStrategy.json').then(res=>{
					this.homeGameStrategyList=res.data[this.index4]
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
	.homeGame{
		width: 1200px;
		margin: 0 auto;
		overflow: hidden;
		margin-bottom: 20px;
		.homeGame_left{
			float: left;
			width: 800px;
			.homeGame_left_header{
				width: 800px;
				height: 60px;
				line-height: 60px;
				border-bottom: 1px solid #ccc;
				p{
					display: inline-block;
					font-size: 24px;
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
			.homeGame_left_main{
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
		.homeGame_right{
			width: 360px;
			float: right;
			>p{
				width: 360px;
				height: 60px;
				line-height: 60px;
				color: #c42545;
				font-size: 22px;
				border-bottom: 1px solid #ccc;
				margin-bottom: 30px;
			}
			ul{
				li{
					width: 360px;
					height: 36px;
					line-height: 36px;
					text-overflow:ellipsis;
					white-space:nowrap;
					overflow:hidden;
					>b{
						display: inline-block;
						width: 10px;
						height: 36px;
						line-height: 25px;
						padding: 0 5px;
						color: red;
						float: left;
					}
					>a{
						font-size: 14px;
						color: #333;
					}
				}
				.li_idnex1{
					width: 175px;
					height: 140px;
					margin: 0 0 10px 10px;
					float: left;
					>div{
						height: 140px;
						position: relative;
						>a{
							display: inline-block;
							width: 175px;
							height: 140px;
							img{
								width: 100%;
								height: 100%;
								border-radius: 5px;
							}
							>span{
								display: inline-block;
								width: 175px;
								height: 30px;
								font-size: 12px;
								background-color: rgba(0,0,0,.5);
								color: #fff;
								line-height: 30px;
								text-align: center;
								text-overflow:ellipsis;
								white-space:nowrap;
								overflow:hidden;
							}
						}
						>a:first-child{
							float: left;
							>span{
								position: absolute;
								left: 0;
								bottom: 0;
							}
						}
						>a:last-child{
							float: right;
							>span{
								position: absolute;
								right: 0;
								bottom: 0;
							}
						}
					}
				}
				.li_idnex1:first-child{
					margin-left: 0;
				}
				li:hover{
					background-color: #ddd;
					border-radius: 4px;
					>a{
						color: #ff4b00;
					}
				}
				.li_idnex1:hover{
					background-color: #fff;
					border-radius: 0px;
				}
			}
			>span{
				display: block;
				width: 175px;
				height: 25px;
				float: left;
				background-color: #ddd;
				border-radius: 5px;
				line-height: 22px;
				font-size: 20px;
				text-align: center;
				color: rgba(0,0,0,.5);
				cursor: pointer;
				margin-top: 15px;
			}
			>span:last-child{
				float: right;
			}
		}
	}
</style>