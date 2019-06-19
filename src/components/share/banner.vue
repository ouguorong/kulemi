<template>
	<div class='banner'>
			<div class='banner_header_left'>
				<div class='novel-banner_left'>
					<transition-group tag='ul'>
						<li v-for="(item,i) in bannerLeft" :key='item.id' v-show='i==index'>
							<a href="#"><img :src="item.img"></a>
							<p>{{ item.title }}</p>
						</li>
					</transition-group>
				</div>
				<div class='novel-banner_right'>
					<transition-group tag='div'>
						<ul v-for="(items,index2) in bannerRight" :key='items.id' v-show='index2==cur'>
							<li v-for="(item,i) in bannerRight[index2].imgs2" :key='i'>
								<a href="#"><img :src="item.img"></a>
								<p>{{ item.title }}</p>
							</li>
						</ul>
					</transition-group>
				</div>
			</div>
	</div>
</template>

<script>

	export default{
		data(){
			return {
				index:0,
				cur:0
			}
		},
		created(){
			this.play()
		},
		methods:{
			automatic(){
				this.index++;
				this.cur++;
				if(this.index==this.bannerLeft.length){
					this.index=0
				}
				if(this.cur==this.bannerRight.length){
					this.cur=0
				}
			},
			play(){
				setInterval(this.automatic,5000)
			}
		},
		props:["bannerLeft","bannerRight"]
	}
</script>

<style lang='less' scoped>
	.banner{
		margin: 50px 0;
		.banner_header_left{
				width: 797px;
				height: 340px;
				float: left;
				.novel-banner_left{
					width: 485px;
					height: 340px;
					float: left;
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
				.novel-banner_right{
					width: 310px;
					height: 340px;
					float: right;
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
	}
</style>