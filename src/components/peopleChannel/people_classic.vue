<template>
	<div class='peopleClassic'>
		<div class='peopleClassic_title'>经典人物</div>
		<div class='peopleClassic_main'>
			<ul>
				<li :class='{removeLeft:i==index1||i==index2}' v-for='(item,i) in peopleClassicList' :key='item.id'>
					<a href="#">
						<img :src="item.img">
					</a>
					<p>{{ item.name }}</p>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				index1:0,
				index2:5,
				peopleClassicList:[]
			}
		},
		created(){
			this.getPeopleClassic()
		},
		methods:{
			getPeopleClassic(){
				this.axios.get('/src/data/people_data/peopleClassic.json').then(res=>{
					this.peopleClassicList=res.data
				})
			}
		}
	}
</script>

<style lang='less' scoped>
	.peopleClassic{
		width: 1200px;
		overflow: hidden;
		margin: 0 auto;
		.peopleClassic_title{
			width: 1200px;
			height: 80px;
			line-height: 80px;
			font-size: 24px;
		}
		.peopleClassic_main{
			ul{
				li{
					width: 210px;
					height: 250px;
					float: left;
					margin: 0 0 20px 35px;
					a>{
						display: inline-block;
						width: 210px;
						height: 210px;
						overflow: hidden;
						border-radius: 5px;
						transition: transform 0.3s;
						img{
							width: 100%;
						}
					}
					a:hover{
						transform: scale(0.95,0.95);
					}
					>p{
						width: 210px;
						height: 40px;
						text-align: center;
						line-height: 40px;
						font-size: 14px;
					}
				}
				li:hover{
					box-shadow: 0 3px 30px rgba(0,0,0,.8);
				}
				.removeLeft{
					margin-left: 0;
				}
			}
		}
	}
</style>