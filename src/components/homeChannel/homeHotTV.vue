<template>
	<div class='home_Tv'>
		<div class='home_Tv_title'>热门电视剧
		</div>
		<div class='home_Tv_list'>
			<ul>
				<li :class='{list:index1==i||index2==i}' v-for='(item,i) in movieHots' :key='item.id'>
					<a href="#">
						<img :src="item.img">
					</a>
					<p>
						<a href="#">{{ item.name }}</a>
						<span>用户评分：<b>{{ item.score }}</b>分</span>
					</p>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return {
				index1:0,
				index2:7,
				movieHots:[]
			}
		},
		created(){
			this.getmovieHotData()
		},
		methods:{
			getmovieHotData(){
				this.axios.get('/src/data/home_data/homeHotTv.json').then(res=>{
					this.movieHots=res.data
				})
			}
		}
	}
</script>

<style lang='less' scoped>
	.home_Tv{
		width: 1200px;
		margin: 0 auto;
		margin-top: -20px;
		overflow: hidden;
		.home_Tv_title{
			height: 80px;
			width: 1200px;
			font-size: 24px;
			line-height: 80px;
		}
		.home_Tv_list{
			ul{
				li{
					width: 150px;
					height: 265px;
					position: relative;
					margin: 0 0 10px 25px;
					float: left;
					>a{
						display: inline-block;
						width: 150px;
						height: 200px;
						img{
							width: 100%;
							height: 100%;
							display: block;
							border-radius: 4px;
						}
					}
					>p{
						a{
							color: black;
							font-weight: bold;
							font-size: 14px;
						}
						>a:hover{
							color: #c42545;
						}
						span{
							display: block;
							font-size: 12px;
							margin-top: 5px;
							b{
								color: red;
								font-size: 14px;
							}
						}
					}
					
				}
				.list{
						margin-left: 0;
					}
			}
		}
	}
</style>