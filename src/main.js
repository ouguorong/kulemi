import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

// import VueResource from 'vue-resource'
// Vue.use(VueResource)

import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios,axios)

import page from './page.vue'

import router from './router.js'

import './lib/font-awesome-4.7.0/css/font-awesome.min.css'

var vm=new Vue({
	el:"#page",
	data:{},
	render:createElements=>createElements(page),
	router
})