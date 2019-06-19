<template>
	<div class='comic_new'>
		<div class='comic_new_title'>{{ title }}
			<p>
				<i class="fa fa-angle-left" aria-hidden="true" @click='clickLeft'></i>
				<span>{{index+1}}/{{comicLength}}</span>
				<i class="fa fa-angle-right" aria-hidden="true" @click='clickRight'></i>
			</p>
		</div>
		<div class='comic_new_list'>
			<ul>
				<li :class='{list:flag==i||f==i}' v-for='(item,i) in comicNewList||comicHotList' :key='item.id'>
					<a href="#">
						<img :src="item.img">
					</a>
					<div>
						<a href="#">{{ item.name }}</a>
						<p>用户评分：<b>{{ item.score }}</b>分</p>
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
				flag:0,
				f:6
			}
		},
		methods:{
			clickRight(){
				this.addRight()
			},
			clickLeft(){
				this.backLeft()
			}
		},
		props:["index","comicLength","title","comicNewList","addRight","backLeft","comicHotList"]
	}
</script>

<style lang='less' scoped>
	.comic_new{
		width: 1200px;
		margin: 0 auto;
		margin-top: 20px;
		overflow: hidden;
		.comic_new_title{
			height: 80px;
			width: 1200px;
			font-size: 24px;
			line-height: 80px;
			p{
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
		.comic_new_list{
			ul{
				li{
					width: 160px;
					height: 250px;
					position: relative;
					margin: 0 0 50px 48px;
					float: left;
					a{
						img{
							width: 158px;
							height: 210px;
							display: block;
							border-radius: 4px;
						}
					}
					>div{
						width: 160px;
						>a{
							display: inline-block;
							width: 160px;
							font-size: 14px;
							color: #3c3c3c;
							margin-top: 3px;
							overflow: hidden;
							white-space: nowrap;
							text-overflow: ellipsis;
						}
						>a:hover{
							color: #C42545;
						}
						>p{
							color: #aaa;
							font-size: 12px;
							>b{
								color: red;
								font-size: 13px;
								margin-right: 3px;
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