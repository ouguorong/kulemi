<template>
	<div class='people_hotStar'>
		<div class='people_hotStar_left_header'>
				<p>热点明星</p>
				<span>
					<a href="#" :class='{active:i==index}' v-for='(item,i) in lists' @click.prevent='getIndex(i)'>{{item.name}}</a>
				</span>
				<a href="#">更多</a>
		</div>
		<div class='people_hotStar_left_main'>
				<ul>
					<li :class='{removeLeft:index1==i||index2==i}' v-for='(item,i) in NovelFireList' :key='item.id'>
						<a href="#"><img :src="item.img"></a>
						<p>{{ item.name }}</p>
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
				index2:7,
				Nub:0,
				lists:[{name:"内地"},{name:"港台"},{name:"日韩"},{name:"欧美"}],
				NovelFireList:[],
				gameRankings:[]
			}
		},
		created(){
			this.getHotStarData()
		},
		methods:{
			getIndex(i){
				this.index=i
			},
			getHotStarData(){
				this.axios.get('/src/data/people_data/peopleHotStar.json').then(res=>{
					this.NovelFireList=res.data[this.index]
				})
			}
		},
		watch:{
			index(val){
				this.index=val
				this.getHotStarData()
			}
		}
	}
</script>

<style lang='less' scoped>
	.people_hotStar{
		width: 1200px;
		padding-top: 30px;
		overflow: hidden;
			.people_hotStar_left_header{
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
			.people_hotStar_left_main{
				overflow: hidden;
				width: 1200px;
				ul{
					li{
						width: 150px;
						height: 150px;
						float: left;
						margin: 25px 0 0 25px;
						position: relative;
						>a{
							display: inline-block;
							width: 150px;
							height: 150px;
							overflow: hidden;
							border-radius: 50%;
							img{
								width: 100%;
								height: auto;
							}
						}
						>p{
							background-color: rgba(0,0,0,.5);
							width: 100px;
							height: 32px;
							line-height: 32px;
							position: absolute;
							left: 25px;
							bottom: 22px;
							color: #fff;
							text-align: center;
							font-size: 14px;
							border: 1px solid #aaa;
						}
						>p:hover{
							border: 1px solid #fff;
						}
					}
					.removeLeft{
							margin-left: 0;
						}
				}
			}
	}
</style>