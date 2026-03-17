<template>
	
</template>

<script setup>
import { useUserStore } from './store/user';
import { onLaunch } from '@dcloudio/uni-app';
import { onShow } from '@dcloudio/uni-app';
import { onHide } from '@dcloudio/uni-app';
	 const usertoken=useUserStore()
	 
	 onLaunch(()=>{
		 if(uni.getStorageSync('user_token')){
		 	usertoken.getUserInfo()
		 }
	 })
	onShow(()=>{
		// console.log('App Show')
	})
	onHide(()=>{
		// console.log('App Hide')
	})
	
</script>

<style  lang="scss">
@import "@/uni_modules/uview-plus/index.scss";
</style>
