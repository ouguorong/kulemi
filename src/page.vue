<template>
  	<div class='KLM'>
  		<div :class='{klmPage:position}' id='klmPage'>
	  		<div class='page-img'><a href="#"></a></div>
			<div class='page-list'>
			    <ul>
				   	<router-link v-for='(item,i) in lists' :key='i' :to="item.src" tag='li' :class="{'li-active':i==current}" click='addLiClass(i)'>
				   		<a href="#">{{ item.name }}</a>
				   	</router-link>
				</ul>
			</div>
			<div class='page-input'>
			    <input type="text" placeholder='输入想要搜索的内容'>
			    <button>搜索</button>
			</div>
			<div class='page-login'>
				<a href="#">登录</a>
				<a href="#">注册</a>
			</div>
	  	</div>
    	<router-view></router-view>
    	<div class='movieChannel_footer'>
			<p>
				<a href="#">首页</a>
				<a href="#">关于我们</a>
				<a href="#">联系我们</a>
				<a href="#">资源收录</a>
				<a href="#">登录</a>
				<a href="#">注册</a>
			</p>
		</div>
  	</div>
</template>

<script>
	export default{
		data(){
			return {
				lists:[
					{name:"首页",src:"/home"},
					{name:"电影",src:"/movie"},
					{name:"游戏",src:"/Game"},
					{name:"小说",src:"/Novel"},
					{name:"动漫",src:"/Comic"},
					{name:"人物",src:"/people"}
				],
				current:null,
				position:false
			}
		},
		mounted(){
			window.addEventListener('scroll',this.scrollTop)
		},
		methods:{
			addLiClass(index){
				this.current=index
			},
			scrollTop(){
				var scrollTop =document.documentElement.scrollTop
				if(scrollTop>50){
					this.position=true
				}else{
					this.position=false
				}
			}
		}
	}
</script>

<style lang="less" scoped>
	.KLM{
		width:100%;
		height: 50px;
		border-bottom: 1px solid #aaa;
		.klmPage{
				width:1200px;
				height: 50px;
				border-bottom: 1px solid #aaa;
				position: fixed;
				top: 0;
				left: 0;
				bottom: 0;
				right: 0;
		}
		#klmPage{
				width:1200px;
				height:50px;
				background: #fff;
				margin:0 auto;
				z-index: 999;
				.page-img{
					width:150px;
					height:50px;
					float:left;
					cursor: pointer;
					background: url('http://www.kulemi.com/content/img/logo.png') center/90px 27px no-repeat;
				}
				.page-list{
					width:340px;
					height:50px;
					float:left;
					li{
						float:left;
						width:55px;
						height:50px;
						text-align: center;
						line-height: 50px;
						font-size: 15px;
						a{
							color: black
						}
					}
					.li-active{
						background-color: #C42545;
						a{
							color: #fff;
						}
					}
				}
				.page-input{
					width: 320px;
					height: 35px;
					float: left;
					border: 1px solid #aaa;
					border-radius: 30px;
					margin: 7px 0 0 80px;
					input{
						width: 230px;
						height: 35px;
						float: left;
						border: none;
						border-radius: 30px;
						padding-left: 20px;
					}
					button{
						width: 70px;
						height: 35px;
						border: none;
						background-color: #C42545;
						color: #fff;
						float: left;
						border-radius: 0 30px 30px 0;
						font-size: 15px;
						cursor: pointer;
					}
				}
				.page-login{
					width: 110px;
					height: 50px;
					float: right;
					text-align: center;
					line-height: 50px;
					a{
						width: 50px;
						display: inline-block;
						color: black;
						font-size: 15px;
					}
					a:hover{
						color: #C42545;
					}
				}
		}
		.movieChannel_footer{
			width: 100%;
			height: 60px;
			background-color: #1d1d1d;
			margin-top: 20px;
   			border-top: 4px solid #c42545;
   			p{
   				width: 1200px;
   				height: 30px;
   				text-align: center;
   				line-height: 60px;
   				margin: 0 auto;
   				a{
   					text-align: center;
   					font-size: 14px;
	   				color: rgba(255,255,255,.5);
	   				padding-right: 5px;
	   				border-right: 2px solid rgba(255,255,255,.5);
	   			}
	   			a:last-child{
	   				border-right:none;
	   			}
   			}
		}
	}
</style>
