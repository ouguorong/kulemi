<template>
	<div class='movie_new_hot'>
		<div class='movie_new_hot_title'>最新热映
			<p>
				<i class="fa fa-angle-left" aria-hidden="true" @click='backRight'></i>
				<span>{{this.index+1}}/{{movieLength}}</span>
				<i class="fa fa-angle-right" aria-hidden="true" @click='addRight'></i>
			</p>
		</div>
		<div class='movie_new_hot_list'>
			<ul>
				<li :class='{list:flag==i||f==i}' v-for='(item,i) in movieHots' :key='item.id'>
					<a href="#">
						<img :src="item.img">
						<p>购票</p>
					</a>
					<div>
						<span>{{ item.name }}</span>
						<i>{{ item.score }}</i>
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
				flag:0,
				movieLength:0,
				f:6,
				movieHots:[]
			}
		},
		created(){
			this.getmovieHotData()
		},
		methods:{
			getmovieHotData(){
				this.axios.get('/src/data/movie_data/new-hot.json').then(res=>{
					this.movieHots=res.data[this.index]
					this.movieLength=res.data.length
				})
			},
			addRight(){
				if(this.index<this.movieLength-1){
					this.index++
					this.axios.get('/src/data/movie_data/new-hot.json').then(res=>{
						this.movieHots=res.data[this.index]
						
					})
				}else{
					alert('没有数据了')
				}
			},
			backRight(){
				if(this.index>0){
					this.index--
					this.axios.get('/src/data/movie_data/new-hot.json').then(res=>{
						this.movieHots=res.data[this.index]
					})
				}else{
					alert('不能后退了')
				}
			}
		}
	}
</script>

<style lang='less' scoped>
	.movie_new_hot{
		width: 1200px;
		margin: 0 auto;
		margin-top: 20px;
		overflow: hidden;
		.movie_new_hot_title{
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
		.movie_new_hot_list{
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
						p{
							width: 160px;
							height: 40px;
							text-align: center;
							line-height: 40px;
							color: #c42545;
							font-size: 15px;
							border: 1px solid #eee;
						}
						p:hover{
							color: #fff;
							background-color: #c42545;
						}
					}
					div{
						width: 160px;
						height: 30px;
						position: absolute;
						bottom: 40px;
						background-color: rgba(0,0,0,.7);
						span{
							display: inline-block;
							text-align: center;
							line-height: 30px;
							font-size: 15px;
							width: 120px;
							height: 30px;
							color: #fff;
							text-overflow: ellipsis;
							overflow: hidden;
							white-space: nowrap;
						}
						i{
							display: inline-block;
							width: 35px;
							height: 30px;
							line-height: 30px;
							color:#ffb400;
							float: right;
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