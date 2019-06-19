<template>
	<div class='large_game'>
		<div class='large_game_left_header'>
				<p>最火网文</p>
				<span>
					<a href="#" :class='{active:i==index}' v-for='(item,i) in lists' @click.prevent='getIndex(i)'>{{item.name}}</a>
				</span>
				<a href="#">更多</a>
		</div>
		<div class='large_game_left_main'>
				<ul>
					<li :class='{removeLeft:index1==i||index2==i}' v-for='(item,i) in NovelFireList' :key='item.id'>
						<a href="#"><img :src="item.img"></a>
						<p><a href="#">{{ item.name }}</a></p>
						<div>
							作者：<span>{{ item.tag }}</span>
						</div>
					</li>
				</ul>
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
				lists:[{name:"玄幻"},{name:"武侠"},{name:"仙侠"},{name:"奇幻"},{name:"都市"},{name:"科幻"},{name:"历史"},{name:"游戏"}],
				NovelFireList:[],
				gameRankings:[]
			}
		},
		created(){
			this.getNovelFireData()
		},
		methods:{
			getIndex(i){
				this.index=i
			},
			getNovelFireData(){
				this.axios.get('/src/data/novel_data/novelFire.json').then(res=>{
					this.NovelFireList=res.data[this.index]
				})
			}
		},
		watch:{
			index(val){
				this.index=val
				this.getNovelFireData()
			}
		}
	}
</script>

<style lang='less' scoped>
	.large_game{
		width: 1200px;
		padding-top: 30px;
		overflow: hidden;
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
						cursor: pointer;
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
				overflow: hidden;
				width: 1200px;
				height: 584px;
				ul{
					li{
						width: 160px;
						height: 270px;
						float: left;
						margin: 20px 0 0 45px;
						border: 1px solid #f3f3f3;
						border-radius: 5px;
						>a{
							display: inline-block;
							width: 160px;
							height: 210px;
							img{
								width: 100%;
								height: 100%;
								display: block;
								border-radius: 4px;
							}
						}
						>p{
							margin: 5px 0;
							overflow: hidden;
							text-overflow:ellipsis;
							white-space: nowrap;
							a{
								font-size: 15px;
								color: #333;
							}
							a:hover{
								color: #C42545;
							}
						}
						>div{
							font-size: 14px;
							>span{
								color: #333;
								font-size: 13px;
								overflow: hidden;
								text-overflow:ellipsis;
								white-space: nowrap;
							}					
						}
					}
					.removeLeft{
						margin-left: 0;
					}
				}
			}
	}
</style>