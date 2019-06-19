<template>
	<div class='novel_comment'>
		<div class='novel_comment_title'>
			<p>影视评论</p>
			<div>
				<span><i class="fa fa-angle-left" aria-hidden="true"></i></span>
				<span>1/1</span>
				<span><i class="fa fa-angle-right" aria-hidden="true"></i></span>
			</div>
		</div>
		<div class='novel_comment_list'>
			<ul>
				<li :class='{removeLeft:index==i||nub==i||tag==i}' v-for='(item,i) in novelComments' :key='item.id'>
					<div class='list_left'>
						<p>
							<a href="#">
								<i class="fa fa-quote-left" aria-hidden="true"></i>
								{{ item.content }}
							</a>
						</p>
						<p>
							<a href="#">{{ item.user }}</a>评
							<a href="#">{{ item.name }}</a>
							<span>{{ item.score }}</span>
						</p>
					</div>
					<div class='list_right'>
						<a href="#"><img :src="item.img"></a>
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
				nub:3,
				tag:6,
				novelComments:[]
			}
		},
		created(){
			this.getnovelComment()
		},
		methods:{
			getnovelComment(){
				this.axios.get('/src/data/novel_data/novelComment.json').then(res=>{
					this.novelComments=res.data
				})
			}
		}
	}
</script>

<style lang='less' scoped>
	.novel_comment{
		width: 1200px;
		margin: 0 auto;
		overflow: hidden;
		.novel_comment_title{
			width: 1200px;
			height: 80px;
			>p{
				font-size: 24px;
				float: left;
				height: 80px;
				line-height: 80px;
			}
			>div{
				float: right;
				line-height: 80px;
				span{
					width: 30px;
					height: 30px;
					display: inline-block;
					text-align: center;
					line-height: 30px;
					cursor: pointer;
				}
			}
		}
		.novel_comment_list{
			width: 1200px;
			ul{
				li{
					width: 380px;
					height: 120px;
					float: left;
					margin: 0 0 50px 30px;
					position: relative;
					.list_left{
						width: 280px;
						height: 120px;
						float: left;
						overflow:hidden;
						p:first-child{
							a{
								display: inline-block;
								width: 280px;
								color: #333;
								font-size: 15px;
								line-height: 30px;
								overflow : hidden;
    							text-overflow: ellipsis;
    							display: -webkit-box;
    							-webkit-line-clamp: 3;
    							-webkit-box-orient: vertical;
								i{
									color: #aaa;
								}
							}
						}
						p:last-child{
							color: #aaa;
							font-size: 15px;
							height: 20px;
							position: absolute;
							bottom: 0;
							a{
								color: #aaa;
								display: inline-block;
								font-size: 15px;
								margin-right: 10px;
							}
							a:hover{
								color: #fff;
								background-color: #C42545;
							}
							span{
								display: inline-block;
								width: 22px;
								height: 20px;
								background-color: #74ab34;
								color: #fff;
								text-align: center;
								line-height: 20px;
							}
						}
					}
					.list_right{
						width: 90px;
						height: 120px;
						float: right;
						img{
							width: 100%;
							height: 100%;
							border-radius: 5px;
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