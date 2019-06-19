<template>
	<div class='novel_writer'>
		<div class='novel_writer_column'>
			<div class='novel_writer_column_title'>作者栏目
				<p>
					<i class="fa fa-angle-left" aria-hidden="true" @click='clickLeft'></i>
					<span>{{index1+1}}/{{WriterColumnLength}}</span>
					<i class="fa fa-angle-right" aria-hidden="true" @click='clickRight'></i>
				</p>
			</div>
			<div class='novel_writer_column_main'>
				<div class='novel_writer_column_main_left' v-for='item in WriterColumnLeftList' :key='item.id'>
					<a href="#"><img :src="item.img"></a>
					<p>{{ item.writer }}</p>
					<span>{{ item.introduce }}</span>
				</div>
				<div class='novel_writer_column_main_right'>
					<div v-for='item in WriterColumnRightTopList' :key='item.id'>
						<a href="#"><img :src="item.img"></a>
						<div>
							<a href="#">{{ item.name }}</a>
							<p>
								<i class="fa fa-star"></i>
								<i class="fa fa-star"></i>
								<i class="fa fa-star"></i>
								<i class="fa fa-star"></i>
								<i class="fa fa-star"></i>
							</p>
							<span>字数：{{ item.number }}</span>
							<span>状态：{{ item.state }}</span>
							<span>{{ item.introduce }}</span>
						</div>
					</div>
					<div>
						<p>相关推荐</p>
						<ul>
							<li v-for='item in WriterColumnRightBottomList' :key='item.id'>
								<a href="#"><img :src="item.img"></a>
								<p><a href="#">{{ item.name }}</a></p>
								<span>{{ item.writer }}</span>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
		<div class='novel_writer_hot'>
			<div class='novel_writer_hot_title'>热榜作者</div>
			<div class='novel_writer_hot_main'>
				<ul>
					<li><a href="#">古龙</a></li>
					<li><a href="#">金庸</a></li>
					<li><a href="#">梁羽生</a></li>
					<li><a href="#">刘慈欣</a></li>
					<li><a href="#">愤怒的香蕉</a></li>
					<li><a href="#">唐家三少</a></li>
					<li><a href="#">辰东</a></li>
					<li><a href="#">烽火戏诸侯</a></li>
					<li><a href="#">天蚕土豆</a></li>
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
				index2:0,
				index3:0,
				WriterColumnLength:0,
				WriterColumnLeftList:[],
				WriterColumnRightTopList:[],
				WriterColumnRightBottomList:[]
			}
		},
		created(){
			this.getNovelWriterColumn()
		},
		methods:{
			getNovelWriterColumn(){
				this.axios.get('/src/data/novel_data/novelWriter.json').then(res=>{
					this.WriterColumnLeftList=res.data[this.index1][this.index2][this.index3]
					this.WriterColumnRightTopList=res.data[this.index1][this.index2][this.index3+1]
					this.WriterColumnRightBottomList=res.data[this.index1][this.index2][this.index3+2]
					this.WriterColumnLength=res.data.length
				})
			},
			clickLeft(){
				if(this.index1>0){
					this.index1--
					this.getNovelWriterColumn()
				}else{
					alert('没有数据，不能后退')
				}
			},
			clickRight(){
				if(this.index1<this.WriterColumnLength-1){
					this.index1++
					this.getNovelWriterColumn()
				}else{
					alert('没有数据了')
				}
			}
		}
	}
</script>

<style lang='less' scoped>
	.novel_writer{
		width: 1200px;
		margin: 0 auto;
		overflow: hidden;
		.novel_writer_column{
			width: 800px;
			float: left;
			overflow: hidden;
			.novel_writer_column_title{
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
			.novel_writer_column_main{
				.novel_writer_column_main_left{
					width: 185px;
					float: left;
					>a{
						display: inline-block;
						width: 185px;
						height: 170px;
						overflow: hidden;
						>img{
							display: block;
							width: 100%;
							height: 245px;
							border-radius: 5px;
						}
					}
					>p{
						width: 185px;
						height: 76px;
						font-size: 22px;
						text-align: center;
						line-height: 76px;
					}
					>span{
						font-size: 14px;
						color: #646061;
						letter-spacing:0.1em;
						line-height: 21px;
						display: -webkit-box;
						-webkit-box-orient: vertical;
						-webkit-line-clamp: 10;
						overflow: hidden;
					}
				}
				.novel_writer_column_main_right{
					width: 590px;
					float: right;
					>div:first-child{
						overflow: hidden;
						>a{
							display:inline-block;
							width: 140px;
							height: 185px;
							float: left;
							>img{
								width: 100%;
								height: 100%;
								border-radius: 5px;
							}
						}
						>div{
							width: 430px;
							float: right;
							>a{
								font-size: 22px;
								color: #424242;
							}
							>p{
								margin-top: 8px;
								>i{
									color: #ffaa03;
									font-size: 14px;
								}
							}
							>span{
								display: block;
								font-size: 14px;
								color: #9e9d9d;
								letter-spacing:0.05em;
								line-height: 20px;
								display: -webkit-box;
								-webkit-box-orient: vertical;
								-webkit-line-clamp: 3;
								overflow: hidden;
								margin-top: 8px;
							}
						}
					}
					>div:last-child{
						>p{
							width: 590px;
							height: 60px;
							line-height: 60px;
							font-size: 18px;
							color: #424242;
						}
						>ul{
							width: 590px;
							overflow: hidden;
							>li{
								width: 124px;
								float: left;
								margin-right: 23px;
								>a{
									display: inline-block;
									width: 124px;
									height: 165px;
									>img{
										width: 100%;
										height: 100%;
										border-radius: 5px;
									}
								}
								>p{
									>a{
										font-size: 14px;
										color: #333;
									}
								}
								>span{
									color: #888;
									font-size: 14px;
								}
							}
						}
					}
				}
			}
		}
		.novel_writer_hot{
			float: right;
			width: 360px;
			.novel_writer_hot_title{
				height: 80px;
				width: 360px;
				font-size: 24px;
				line-height: 80px;
			}
			.novel_writer_hot_main{
				ul{
					li{
						width: 80px;
						height: 40px;
						float: left;
						line-height: 40px;
						text-align: center;
						margin-bottom: 15px;
						margin-right: 8px;
						border: 1px solid #eee;
						a{
							color: #333;
							font-size: 14px;
						}
					}
					li:hover{
						border: 1px solid red;
						a{
							color: red;
						}
					}
				}
			}
		}
	}
</style>