<template>
	<div class='gameChannel'>
		<div class='gameChannel_header'>
			<div class='gameChannel_header_left'>
				<div class='game-banner_left'>
					<transition-group tag='ul'>
						<li v-for="(item,i) in imgs" :key='i' v-show='i==index'>
							<a href="#"><img :src="item.img"></a>
							<p>{{ item.title }}</p>
						</li>
					</transition-group>
				</div>
				<div class='game-banner_right'>
					<transition-group tag='div'>
						<ul v-for="(items,index2) in ulImgs" :key='index2' v-show='index2==cur'>
							<li v-for="(item,i) in ulImgs[index2].imgs2" :key='i'>
								<a href="#"><img :src="item.img"></a>
								<p>{{ item.title }}</p>
							</li>
						</ul>
					</transition-group>
				</div>
			</div>
			<div class='gameChannel_header_right'>
				<ul>
					<li><b></b><a href="#">第二银河新欧罗巴联邦主力舰提丰怎么样</a></li>
					<li><b></b><a href="#">第二银河战争机制介绍</a></li>
					<li><b></b><a href="#">第二银河蛟级巡洋舰装备配置方案分享</a></li>
					<li><b></b><a href="#">第二银河如何训练出高评分指挥官</a></li>
					<li><b></b><a href="#">黑色幸存者穿刺生存套路分享</a></li>
					<li><b></b><a href="#">第二银河黑熊级护卫舰战斗心得攻略</a></li>
					<li><b></b><a href="#">黑色幸存者钝器流怎么玩？钝器流开局攻略</a></li>
					<li><b></b><a href="#">第二银河冷雨级驱逐舰战斗心得攻略</a></li>
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
				cur:0,
				timer:null,
				imgs:[
					{img:"http://dl.kulemi.com/article/photo/201906121002402821450231742/",title:"《问道》中的这些最美景点 你都去过吗"},
					{img:"http://dl.kulemi.com/article/photo/201906110956346493377295935/",title:"饮尽此盅祭前尘 《问道》封神榜系统回顾"},
					{img:"http://dl.kulemi.com/article/photo/201905291936323068198997278/",title:"夏夜繁星如你生辉《影之诗》网易冠军争夺赛（SNC）夏季赛海选报名开启"},
					{img:"http://dl.kulemi.com/article/photo/2019052216503793451644517193/",title:"72变玩法将上线！《镇魔曲》2019年度新版 《双生化梦》首曝"},
					{img:"http://dl.kulemi.com/article/photo/201905171457513154145863230/",title:"《代号U1》日本小规模测试引爆关注"}
				],
				ulImgs:[
					{imgs2:[
						{img:"http://dl.kulemi.com/article/photo/2019061210281630451369416785/",title:"大世界3D战斗冒险手游《塞尔之光》今日iOS不删档首发"},
						{img:"http://dl.kulemi.com/article/photo/201906121050465731751630363/",title:"战术卡牌RPG新作 《三国将无双》首测今日开启"}
					]},
					{imgs2:[
						{img:"http://dl.kulemi.com/article/photo/201906061107292167710403692/",title:"甜咸粽子引发惨案《火王》帮众竟因此决裂?"},
						{img:"http://dl.kulemi.com/article/photo/2019061009591854091304645495/",title:"《问道》名人服开启专属活动 炎炎夏日送福利"}
					]},
					{imgs2:[
						{img:"http://dl.kulemi.com/article/photo/201906101107590399440043623/",title:"倒计时2天！《塞尔之光》ios不删档首发"},
						{img:"http://dl.kulemi.com/article/photo/2019061110262860241136960312/",title:"史上最萌禁闭室登场！《星月-命运之轮》挑战全面升级"}
					]},
					{imgs2:[
						{img:"http://dl.kulemi.com/article/photo/201906111045531777102190221/",title:"倒计时1天！《塞尔之光》iOS不删档首发明日开启"},
						{img:"http://dl.kulemi.com/article/photo/2019061209285143451636591805/",title:"时逆：今天也在被迫拯救世界，你听到未来的召唤了吗"}
					]}
				]
			}
		},
		created(){
			this.play()
		},
		methods:{
			automatic(){
				this.index++;
				this.cur++;
				if(this.index==this.imgs.length){
					this.index=0
				}
				if(this.cur==this.ulImgs.length){
					this.cur=0
				}
			},
			play(){
				this.timer=setInterval(this.automatic,5000)
			}
		}
	}
</script>

<style lang='less' scoped>
	.gameChannel{
		width: 100%;
		margin: 0 auto;
		margin-top: 50px;
		overflow: hidden;
		.gameChannel_header{
			width: 1200px;
			margin: 0 auto;
			overflow: hidden;
			.gameChannel_header_left{
				width: 797px;
				height: 340px;
				float: left;
				.game-banner_left{
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
				.game-banner_right{
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
			.gameChannel_header_right{
				width: 350px;
				float: right;
				ul{
					li{
						width: 350px;
						height: 42px;
						line-height: 42px;
						a{
							color: #333;
						}
						b{
							background-image: url(http://www.kulemi.com/content/type/game/pc/list.png);
							background-repeat: no-repeat;
							width: 15px;
							height: 13px;
							display: inline-block;
						}
					}
					li:hover{
						background-color: #eee;
						border-radius: 5px;
						a{
							color: #C42545;
						}
					}
					li:first-child{
						line-height: normal;
						font-size: 18px;
						padding-left: -15px;
						background-color: #fff;
						a{
							color: #6997d4;
						}
						b{
							width: 0;
							height: 0;
							display: inline-block;
						}
					}
				}
			}
		}
	}
</style>