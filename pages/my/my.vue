<template>
	<view class="header">
		<view :style="{ height: uni.getWindowInfo().statusBarHeight + 'px' }"></view>
		<view class="header3">
			<view class="userNameimg">
				<view style="position: relative;">
					<image :src="uiserData.userInfo?.avatar" mode=""  style="width: 190rpx; height: 190rpx;border-radius: 190rpx;"/>
				</view>
				<text class="userName">{{uiserData.userInfo?.nickname}}</text>
			</view>
		</view>
	</view>
	
	<view class="catalogue">
		<view style="display: flex;align-items: center;">
			<image src="/pages/my/编辑_editor.png" mode="" class="catalogueImg"></image>
			<text style="margin-left: 20rpx;">修改个人信息</text>
		</view>
			<image src="/pages/my/右_right.png" mode="" class="catalogueImg"></image>
	</view>
	
	<view class="catalogue">
		<view style="display: flex;align-items: center;">
			<image src="/pages/my/货币流通_currency.png" mode="" class="catalogueImg"></image>
			<text style="margin-left: 20rpx;">编辑付款方式</text>
		</view>
			<image src="/pages/my/右_right.png" mode="" class="catalogueImg"></image>
	</view>
	
	<view class="catalogue" @click="logout">
		<view style="display: flex;align-items: center;">
			<image src="/pages/my/退出_logout (1).png" mode="" class="catalogueImg"></image>
			<text style="margin-left: 20rpx; color: #fd1c1c;">退出登录</text>
		</view>
			<image src="/pages/my/右_right.png" mode="" class="catalogueImg"></image>
	</view>
</template>

<script setup>

import {onShow} from "@dcloudio/uni-app"
import { useUserStore } from "../../store/user";
import { onMounted } from "vue";
const uiserData=useUserStore()

onShow(()=>{
	const token=uni.getStorageSync('user_token');
	if(!token){
		uni.navigateTo({
			url:'/myPackage/register/register'
		})
	}
})

//修改个人信息
const modifyUser=()=>{
	uni.navigateTo({
		url:'/myPackage/modifyUser/modifyUser'
	})
}

const logout = () => {
uni.removeStorage({
  key: 'user_token',
  })
  const token=uni.getStorageSync('user_token');
  if(!token){
  	uni.navigateTo({
  		url:'/myPackage/register/register'
  	})
  }
}
</script>

<style>
	.header3{
		height: 430rpx;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.userNameimg{
		display: flex;
		flex-direction: column;
	} 
	.userName{
		font-size: 34rpx;
		color: white;
		text-align: center;
		margin-top: 30rpx;
	}
	.catalogue{
		height: 120rpx;
		margin: 0 35rpx;
		display: flex;
		align-items: center;
		justify-content: space-between;
		border-bottom: 2rpx solid #ccc; 
	}
	.catalogueImg{
		width: 46rpx;
		height: 46rpx;
	}
</style>
