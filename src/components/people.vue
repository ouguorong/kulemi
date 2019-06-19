<template>
	<div class='peopleChannel'>
		<peopleBanner :bannerLeft='peopleBannerLeftList' :bannerRight='peopleBannerRightList'></peopleBanner>
		<div class='people_details_right'>
			<div class='people_details_ranking_list'>
				<ul>
					<li v-for='(item,i) in literatureHotList' :key='item.id' :class='{li_height:index==i}' @mouseenter='getindex(i)'>
						<div class='people_details_ranking_list_index1' v-if='index==i'>
							<div><a href="#"><img :src="item.img"></a></div>
							<div>
								<b>热度：{{ item.hot }}</b>
								<a href="#">{{item.name}}</a>
								<span>{{ item.English }}</span>
								<p>生日：{{item.Birthday}}</p>
								<p>职业：{{item.Occupation}}</p>
							</div>
						</div>
						<div v-show='index!=i'>
							<i :class='{color:i<3}'>{{ item.id }}</i>
							<span>{{ item.name }}</span>
							<span>{{ item.hot }}</span>
						</div>
					</li>
				</ul>
			</div>
		</div>
		<hotStar></hotStar>
		<starPublic></starPublic>
		<peopleClassic></peopleClassic>
		<peopleHistory></peopleHistory>
		<peopleHotText :flag='flag' :hotTextList='peopleHotTextLIst' :AppraiseList='peopleCommentList' :judge='judge'></peopleHotText>
	</div>
</template>

<script>
	
	import peopleBanner from './share/banner.vue'
	import hotStar from './peopleChannel/hotStar.vue'
	import starPublic from './peopleChannel/starPublic.vue'
	import peopleClassic from './peopleChannel/people_classic.vue'
	import peopleHistory from './peopleChannel/peopleHistory.vue'
	import peopleHotText from './share/hotText.vue'

	export default{
		data(){
			return {
				index:0,
				flag:null,
				judge:true,
				peopleBannerLeftList:[],
				peopleBannerRightList:[],
				literatureHotList:[],
				peopleHotTextLIst:[],
				peopleCommentList:[]
			}
		},
		created(){
			this.getPeopleBannerLeft()
			this.getPeopleBannerRight()
			this.getComicPopular()
			this.getPeopleHotText()
			this.getPeopleAppraise()
		},
		methods:{
			getPeopleBannerLeft(){
				this.axios.get('/src/data/people_data/peopleBanner.json').then(res=>{
					this.peopleBannerLeftList=res.data[0]
				})
			},
			getPeopleBannerRight(){
				this.axios.get('/src/data/people_data/peopleBanner.json').then(res=>{
					this.peopleBannerRightList=res.data[1]
				})
			},
			getComicPopular(){
				this.axios.get('/src/data/people_data/peopleDetails.json').then(res=>{
					this.literatureHotList=res.data
				})
			},
			getPeopleHotText(){
				this.axios.get('/src/data/people_data/peopleHotText.json').then(res=>{
					this.peopleHotTextLIst=res.data
					this.peopleHotTextLIst.forEach((item,i)=>{
						if(item.img==''){
							this.flag=i
						}
					})
				})
			},
			getPeopleAppraise(){
				this.axios.get('/src/data/people_data/peopleAppraise.json').then(res=>{
					this.peopleCommentList=res.data
				})
			},
			getindex(i){
				this.index=i
			}
		},
		components:{
			peopleBanner,
			hotStar,
			starPublic,
			peopleClassic,
			peopleHistory,
			peopleHotText
		}
	}
</script>

<style lang='less' scoped>
	.peopleChannel{
		width: 1200px;
		margin: 0 auto;
		overflow: hidden;
		.people_details_right{
			float: right;
			width: 360px;
			.people_details_ranking_list{
				ul{
					.li_height{
						height: 110px;
					}
					li{
						width: 360px;
						height: 35px;
						margin-bottom: 10px;
						line-height: 35px;
						overflow: hidden;
						position: relative;
						div:last-child{
							i{
								display: inline-block;
								width: 25px;
								height: 35px;
								color: #aaa;
							}
							.color{
								color: #FF4B00;
							}
							>span:first-child{
								color: #333;
								font-size: 15px;
							}
							>span:last-child{
								float: right;
								color: #ff4b00;
							}
						}
						.people_details_ranking_list_index1{
							width: 360px;
							height: 110px;
							position: relative;
							div:first-child{
								width:83px;
								height: 116px;
								float: left;
								img{
									width: 100%;
									height: 100%;
								}
							}
							div:last-child{
								width: 250px;
								height: 110px;
								float: right;
								b{
									display: block;
									font-size: 18px;
									width: 250px;
									height: 20px;
									line-height: 20px;
									color: #333;
								}
								a{
									display: block;
									color: #333;
									font-size: 18px;
									width: 250px;
									height: 20px;
									line-height: 20px;
									margin-top: 5px;
								}
								span{
									display: block;
									font-size: 14px;
									line-height: 20px;
									color: #aaa;
								}
								p{
									font-size: 14px;
									width: 250px;
									height: 20px;
									color: #aaa;
									display: -webkit-box;
									-webkit-box-orient: vertical;
									-webkit-line-clamp: 1;
									overflow: hidden;
									line-height: 20px;
								}
							}
							
						}
					}
				}
			}
		}
	}
</style>