<template>
	<div class='people_history'>
		<div class='people_history_left'>
			<div class='people_history_left_header'>
				<p>历史人物</p>
				<span>
					<a href="#" :class='{active:i==index}' v-for='(item,i) in lists' @click.prevent='getIndex(i)'>{{item.name}}
					</a>
				</span>
				<a href="#">更多</a>
			</div>
			<div class='people_history_left_main'>
				<ul>
					<li :class='{removeLeft:index1==i||index2==i}' v-for='(item,i) in peopleHistoryList' :key='item.id'>
						<a href="#"><img :src="item.img"></a>
						<span><a href="#">{{ item.name }}</a></span>
					</li>
				</ul>
			</div>
		</div>
		<div class='celebrity_list'>
			<p>{{month}}月{{date}}日出生的名人</p>
			<ul>
				<li>
					<span>1984年{{month}}月{{date}}日</span>
					<a href="#">亓航</a>
					<em>演员</em>
				</li>
				<li>
					<span>1953年{{month}}月{{date}}日</span>
					<a href="#"> 山寺宏一</a>
					<em>演员 声优 主持人</em>
				</li>
				<li>
					<span>1884年{{month}}月{{date}}日</span>
					<a href="#">谢园</a>
					<em>演员</em>
				</li>
				<li>
					<span>2008年{{month}}月{{date}}日</span>
					<a href="#">赵子琪</a>
					<em>演员</em>
				</li>
				<li>
					<span>2014年{{month}}月{{date}}日</span>
					<a href="#">韩冬</a>
					<em>演员</em>
				</li>
				<li>
					<span>2004年{{month}}月{{date}}日</span>
					<a href="#">亓航</a>
					<em>演员</em>
				</li>
				<li>
					<span>2006年{{month}}月{{date}}日</span>
					<a href="#">凯瑞·莎勒</a>
					<em>演员</em>
				</li>
				<li>
					<span>2018年{{month}}月{{date}}日</span>
					<a href="#">亓航</a>
					<em>演员</em>
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
				index2:5,
				month:new Date().getMonth()+1,
				date:new Date().getDate(),
				lists:[{name:"夏商周"},{name:"春秋战国"},{name:"秦汉晋"},{name:"隋唐"},{name:"宋金元辽"},{name:"明朝"},{name:"清朝"}],
				peopleHistoryList:[]
			}
		},
		created(){
			this.getPeopleHistoryData()
		},
		methods:{
			getIndex(i){
				this.index=i
			},
			getPeopleHistoryData(){
				this.axios.get('/src/data/people_data/peopleHistory.json').then(res=>{
					this.peopleHistoryList=res.data[this.index]
					console.log(this.date)
				})
			},
			getindex3(i){
				this.index3=i
			}
		},
		watch:{
			index(val){
				this.index=val
				this.getPeopleHistoryData()
			}
		}
	}
</script>

<style lang='less' scoped>
	.people_history{
		width: 1200px;
		margin: 0 auto;
		overflow: hidden;
		margin-bottom: 20px;
		.people_history_left{
			float: left;
			width: 800px;
			.people_history_left_header{
				width: 800px;
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
						font-size: 14px;
						padding: 3px 12px 3px 18px;
						position: relative;
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
			.people_history_left_main{
				width: 800px;
				height: 420px;
				overflow: hidden;
				ul{
					li{
						width: 120px;
						height: 190px;
						float: left;
						margin: 20px 0 0 50px;
						>a{
							display: inline-block;
							width: 120px;
							height: 160px;
							img{
								width: 100%;
								height: 100%;
								border-radius: 5px;
							}
						}
						span{

							>a{
								display: inline-block;
								width: 120px;
								height: 50px;
								font-size: 14px;
								color: #333;
								text-align: center;
							}
						}
						span:hover{
							>a{
								color: #C42545;
							}
						}
						p{
							font-size: 14px;
							margin-top: 5px;
							color: #333;
						}
					}
					.removeLeft{
						margin-left: 0;
					}
				}
			}
		}
		.celebrity_list{
			width: 350px;
			float: right;
			>p{
				width: 350px;
				height: 60px;
				line-height: 60px;
				font-size: 24px;
				border-bottom: 1px solid #ccc;
			}
			ul{
				li{
					width: 350px;
					height: 45px;
					line-height: 45px;
					>span{
						color: #4c4c4c;
						margin-right: 20px;
					}
					>a{
						color: #333;
					}
					>em{
						font-style: normal;
						float: right;
						color: #4c4c4c;
					}
				}
				li:hover{
					background-color: #ddd;
					border-radius: 5px;
				}
			}
		}
	}
</style>