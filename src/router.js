import VueRouter from 'vue-router'

import home from './components/home.vue'
import movie from './components/movie.vue'
import Game from './components/Game.vue'
import Comic from './components/Comic.vue'
import people from './components/people.vue'
import Novel from './components/Novel.vue'
// 3. 创建路由对象
var router = new VueRouter({
  routes: [
 	{path:'/',redirect:'/home'},
  	{path:'/home',component:home},
  	{path:'/movie',component:movie},
  	{path:'/Game',component:Game},
  	{path:'/Comic',component:Comic},
  	{path:'/people',component:people},
  	{path:'/Novel',component:Novel}
  ],
  //每次点击激活router-link的时候都会加上li-active这么一个类
  linkActiveClass:'li-active'
})

// 把路由对象暴露出去
export default router