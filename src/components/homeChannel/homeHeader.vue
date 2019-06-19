<template>
	<div class='home_header'>
			<div class='home_header_left'>
				<div class='home_banner_left'>
					<transition-group tag='ul'>
						<li v-for="(item,i) in bannerLeftList" :key='item.id' v-show='i==index'>
							<a href="#"><img :src="item.img"></a>
							<p>{{ item.title }}</p>
						</li>
					</transition-group>
				</div>
				<div class='home_banner_right'>
					<transition-group tag='div'>
						<ul v-for="(items,index2) in bannerRightList" :key='items.id' v-show='index2==cur'>
							<li v-for="(item,i) in bannerRightList[index2].imgs2" :key='i'>
								<a href="#"><img :src="item.img"></a>
								<p>{{ item.title }}</p>
							</li>
						</ul>
					</transition-group>
				</div>
			</div>
			<div class='home_header_right'>
				<ul>
					<li v-for="item in honeHeaderRightList" :key='item.id'>
						<a href="#"><img :src="item.img"></a>
						<span>
							<a href="#">{{ item.title }}</a>
							<p>{{ item.time }}</p>
						</span>
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
				cur:0,
				bannerLeftList:[],
				bannerRightList:[],
				honeHeaderRightList:[]
			}
		},
		created(){
			this.play()
			this.getbannerLef()
			this.getbannerRight()
			this.getHomeHeaderRight()
		},
		methods:{
			automatic(){
				this.index++;
				this.cur++;
				if(this.index==this.bannerLeftList.length){
					this.index=0
				}
				if(this.cur==this.bannerRightList.length){
					this.cur=0
				}
			},
			play(){
				setInterval(this.automatic,5000)
			},
			getbannerLef(){
				this.axios.get('/src/data/comic_data/banner.json').then(res=>{
					this.bannerLeftList=res.data[0]
				})
			},
			getbannerRight(){
				this.axios.get('/src/data/comic_data/banner.json').then(res=>{
					this.bannerRightList=res.data[1]
				})
			},
			getHomeHeaderRight(){
				this.axios.get('/src/data/home_data/container_vertical.json').then(res=>{
					this.honeHeaderRightList=res.data[this.index1]
				})
			},
			addNub(){
				this.index1++
				this.axios.get('/src/data/home_data/container_vertical.json').then(res=>{
					if(this.index1<res.data.length){
						this.honeHeaderRightList=res.data[this.index1]
					}else{
						this.index1=0
						this.honeHeaderRightList=res.data[this.index1]
					}
				})
			},
			reduceNub(){
				this.axios.get('/src/data/home_data/container_vertical.json').then(res=>{
					if(this.index1>0){
						this.index1--
						this.honeHeaderRightList=res.data[this.index1]
					}else{
						this.index1=res.data.length-1
						this.honeHeaderRightList=res.data[this.index1]
					}
				})
			}
		}
	}
</script>

<style lang='less' scoped>
	.home_header{
		width: 1200px;
		margin: 0 auto;
		overflow: hidden;
		.home_header_left{
				width: 797px;
				height: 340px;
				float: left;
				.home_banner_left{
					width: 485px;
					height: 340px;
					float: right;
					overflow: hidden;
					.v-enter-active{
						transform: translateX(0);
						transition: all 1s ease;
					}
					.v-leave-active {
					    transform: translateX(-100%);
					    transition: all 1s ease;
					  }
					  .v-enter, {
					    transform: translateX(100%);
					  }
					  .v-leave {
					    transform: translateX(0);
					  }
					ul{
						width: 500%;
						height: 340px;
						position: relative;
						li{
							float: left;
							position: absolute;
							p{
								width: 485px;
								height: 45px;
								background-color: rgba(0,0,0,.5);
								line-height: 45px;
								color: #fff;
								position: absolute;
								bottom: 0px;
							}
							img{
								width: 485px;
								height: 340px;
								display: block;
							}
						}
					}
				}
				.home_banner_right{
					width: 310px;
					height: 340px;
					float: left;
					overflow: hidden;
					.v-enter-active{
						transform: translateY(0);
						transition: all 1s ease;
					}
					.v-leave-active {
					    transform: translateY(-100%);
					    transition: all 1s ease;
					  }
					  .v-enter, {
					    transform: translateY(100%);
					  }
					  .v-leave {
					    transform: translateY(0);
					  }
					div{
						position: relative;
						ul{
							position: absolute;
							li{
								position: relative;
								margin-top: 2px;
								img{
									width: 312px;
									height: 169px;
									display: block;
								}
								p{
									width: 310px;
									height: 45px;
									text-align: center;
									background-color: rgba(0,0,0,.5);
									line-height: 45px;
									color: #fff;
									position: absolute;
									bottom: 0px;
								}
							}
						}
					}
				}
		}
		.home_header_right{
			width: 360px;
			float: right;
			ul{
				li{
					width: 360px;
					height: 70px;
					margin-bottom: 10px;
					>a{
						display: inline-block;
						width: 120px;
						height: 70px;
						float: left;
						margin-right: 10px;
						>img{
							width: 100%;
							height: 100%;
							border-radius: 5px;
						}
					}
					>span{
						>a{
							color: #333;
							display: -webkit-box;
							-webkit-box-orient: vertical;
							-webkit-line-clamp: 2;
							overflow: hidden;
							font-size: 14px;
						}
						>p{
							margin-top: 5px;
							color: #aaa;
							font-size: 14px;
						}
					}
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
			}
			>span:last-child{
				float: right;
			}
		}
	}
</style>