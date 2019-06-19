<template>
	<div class='star_public'>
		<div class='star_public_left'>
			<div class='star_public_left_title'>明星公益
				<p>
					<i class="fa fa-angle-left" aria-hidden="true" @click='clickLeft'></i>
					<span>{{index1+1}}/{{WriterColumnLength}}</span>
					<i class="fa fa-angle-right" aria-hidden="true" @click='clickRight'></i>
				</p>
			</div>
			<div class='star_public_left_main'>
				<ul>
					<li v-for='item in starPubliclist' :key='item.id'>
						<a href="#"><img :src="item.img"></a>
						<p><a href="#">{{ item.title }}</a></p>
					</li>
				</ul>
			</div>
		</div>
		<div class='star_public_right'>
			<p>明星益行</p>
			<div>
				<p>
					<a href="#"><img src="http://dl.kulemi.com/article/photo/2019061410470805941513615701/"></a>
					<span><a href="#">咸鱼游戏年度旗舰力作 《决胜足球》手游今日首曝</a></span>
				</p>
				<ul>
					<li>
						<a href="#"><img src="http://dl.kulemi.com/article/photo/2019061310200733191252602067/"></a>
						<p><a href="#">兄弟同心其利断金 《问道》帮派系统那些事</a></p>
					</li>
					<li>
						<a href="#"><img src="http://dl.kulemi.com/article/photo/201906141043285732586481959/"></a>
						<p><a href="#">《问道》新服今日开启 精彩福利送不停</a></p>
					</li>
					<li>
						<a href="#"><img src="http://dl.kulemi.com/article/photo/201906130959335048705962825/"></a>
						<p><a href="#">每一帧都是回忆杀，《仙剑奇侠传移动版》实录视频首曝</a></p>
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
				index1:0,
				WriterColumnLength:0,
				starPubliclist:[]
			}
		},
		created(){
			this.getNovelWriterColumn()
		},
		methods:{
			getNovelWriterColumn(){
				this.axios.get('/src/data/people_data/starPublic.json').then(res=>{
					this.starPubliclist=res.data[this.index1]
					this.WriterColumnLength=res.data.length
				})
			},
			clickLeft(){
				if(this.index1>0){
					this.index1--
					this.getNovelWriterColumn()
				}else{
					this.index1=3
					this.getNovelWriterColumn()
				}
			},
			clickRight(){
				if(this.index1<this.WriterColumnLength-1){
					this.index1++
					this.getNovelWriterColumn()
				}else{
					this.index1=0
					this.getNovelWriterColumn()
				}
			}
		}
	}
</script>

<style lang='less' scoped>
	.star_public{
		width: 1200px;
		margin: 0 auto;
		overflow: hidden;
		margin-top: 20px;
		.star_public_left{
			width: 800px;
			float: left;
			overflow: hidden;
			.star_public_left_title{
				height: 80px;
				width: 800px;
				font-size: 24px;
				line-height: 80px;
				>p{
					float: right;
					font-size: 15px;
					margin-right:15px;
					span{
						letter-spacing: 0.3em;
					}
					i{
						cursor: pointer;
						display: inline-block;
						width: 30px;
						height: 30px;
						text-align: center;
						line-height: 30px;
					}
				}
			}
			.star_public_left_main{
				ul{
					li{
						width: 386px;
						height: 225px;
						margin: 0 0 10px 10px;
						float: left;
						position: relative;
						overflow: hidden;
						>a{
							width: 386px;
							height: 225px;
							>img{
								width: 100%;
								height: 100%;
								border-radius: 5px;
								transition: transform 0.5s ease;
							}
							>img:hover{
								transform: scale(1.15,1.15)
							}
						}
						>p{
							position: absolute;
							bottom: 0px;
							a{
								display: inline-block;
								width: 346px;
								height: 40px;
								color: #fff;
								background-color: rgba(0,0,0,.5);
								padding: 0 20px;
								line-height: 40px;
								overflow: hidden;
								text-overflow:ellipsis;
								white-space: nowrap;
							}
						}
					}
				}
			}
		}
		.star_public_right{
			width: 360px;
			float: right;
			overflow: hidden;
			>p{
				width: 360px;
				height: 80px;
				line-height: 80px;
				font-size: 24px;
			}
			>div{
				>p{
					width: 360px;
					height: 180px;
					position: relative;
					overflow: hidden;
					a{
						display: inline-block;
						width: 360px;
						height: 180px;
						>img{
							width: 100%;
							height: 100%;
							border-radius: 5px;
							transition: transform 0.5s ease;
						}
						>img:hover{
								transform: scale(1.15,1.15)
							}
					}
					>span{
							position: absolute;
							bottom: 0px;
							a{
								display: inline-block;
								width: 320px;
								height: 40px;
								color: #fff;
								background-color: rgba(0,0,0,.5);
								padding: 0 20px;
								line-height: 40px;
								overflow: hidden;
								text-overflow:ellipsis;
								white-space: nowrap;
							}
						}
				}
				>ul{
					li{
						width: 360px;
						height: 80px;
						overflow: hidden;
						margin-bottom: 10px;
						>a{
							display: inline-block;
							width: 105px;
							height: 60px;
							float: left;
							margin-right: 20px;
							margin-top: 10px;
							>img{
								width: 100%;
								height: 100%;
								border-radius: 5px;
							}
						}
						>p{
							margin-top: 20px;
							>a{
								color: #333;
							}
						}
					}
					li:hover{
						background-color: #eee;
						>p{
							>a{
								color: red;
							}
						}
					}
				}
			}
		}
	}
</style>