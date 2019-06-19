<template>
	<div class='newest_comic'>
		<div class='newest_comic_title'>
			<span>最新漫画</span>
			<a href="#">更多</a>
		</div>
		<div class='newest_comic_main'>
			<ul>
				<li :class="{removeLeft:i==0}" v-for='(item,i) in newestComicList' :key='item.id'>
					<a href="#">
						<img :src="item.img">
						<p>
							<span>{{ item.writer }}</span>
							<span><i class="fa fa-thumbs-o-up"></i>168</span>
						</p>
					</a>
					<div>
						<p><a href="#">{{ item.name }}</a></p>
						<span>{{ item.introduce }}</span>
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
				newestComicList:[]
			}
		},
		created(){
			this.getNewestComic()
		},
		methods:{
			getNewestComic(){
				this.axios.get('/src/data/comic_data/newestComic.json').then(res=>{
					this.newestComicList=res.data
				})
			}
		}
	}
</script>

<style lang='less' scoped>
	.newest_comic{
		width: 1200px;
		margin: 0 auto;
		overflow: hidden;
		margin-bottom: 20px;
		.newest_comic_title{
				width: 1200px;
				height: 80px;
				line-height: 80px;
				>span{
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
		.newest_comic_main{
			ul{
				li{
					width: 280px;
					height: 485px;
					float: left;
					margin-left: 24px;
					border: 1px solid #e0e0e0;
					border-radius: 5px;
					box-shadow: 0 0 7px 2px #aaa;
					>a{
						display: block;
						width: 280px;
						height: 375px;
						position: relative;
						img{
							width: 100%;
							height: 100%;
							display: block;
							border-radius: 5px;
						}
						>p{
							width: 280px;
							line-height: 30px;
							line-height: 30px;
							background-color: rgba(0,0,0,.5);
							position: absolute;
							bottom: 0;
							>span{
								color: #fff;
								font-size: 14px;
								margin-left: 10px;
							}
							>span:last-child{
								float: right;
								i{
									margin-right: 5px;
								}
							}
						}
					}
					>div{
						>p{
							width: 260px;
							margin:10px auto;
							>a{
								font-size: 18px;
								color: #3c3c3c;
							}
							>a:hover{
								color: red;
							}
						}
						>span{
							display: inline-block;
							width: 260px;
							font-size: 14px;
							color: #3c3c3c;
							margin-left: 10px;
							display: -webkit-box;
							-webkit-box-orient: vertical;
							-webkit-line-clamp: 3;
							overflow: hidden;
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