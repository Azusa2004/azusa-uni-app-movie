<template>
	<view class="header">
		<view :style="{ height: uni.getWindowInfo().statusBarHeight + 'px' }"></view>
		<view class="header2" style="height: 200rpx;">
			<image src="/static/arrow.png" mode="" style="width: 45rpx; height: 45rpx; margin: 0 0 0 30rpx; position: absolute; top: 100rpx; z-index: 200;" @click="goqueueMovie"></image>
			<text style="color: white; font-size: 30rpx; position: relative; top: 65rpx; left: 30rpx;">注册</text>
		</view>
	</view>
	
	<view style="margin: 30rpx; 0 0 30rpx">
		<text>手机号</text>
		<input type="text" class="inputphone" placeholder="请输入新手机号" style="margin-top: 15rpx; padding-left: 15rpx;" v-model="phone"/>
		<view style="margin-top: 30rpx;">
			<text >密码</text>
			<input type="password" class="inputphone" placeholder="请设置密码" style="margin-top: 15rpx; padding-left: 15rpx;" v-model="password"/>
		</view>
		
		
		<button class="registerButton" style="margin-top: 50rpx; background-color: #787ef0" @click="gologin">注册</button>
		<Error ref="toastRef"></Error>
	</view>
</template>

<script setup>
import { ref } from 'vue'
import { addregisterApi } from '../../apis/my'

	const phone=ref()
	const password=ref()
	const reg = /^1[3-9]\d{9}$/
	const reg2 = /^[a-zA-Z0-9]+$/
	const goqueueMovie=()=>{
		uni.navigateBack({
			delta:1
		})
	}
const gologin=()=>{
	console.log(phone.value);
	console.log(password.value);
	if(phone.value&&password.value){
		if(reg.test(phone.value)&&reg2.test(password.value)){
			addregisterApi({phone:phone.value,password:password.value}).then(res=>{
				if(res.code==200){
					yes()
					setTimeout(() => {
					  uni.navigateTo({
					    url: '/myPackage/Login/Login'
					  })
					}, 2000)
					console.log(res);
				}else{
					nophonetype()
				}
			})
		}else{
			phonetype()
		}
	}else{
		isphone()
	}
}

	const toastRef = ref();
	const isphone = () => {
	  toastRef.value?.showError('手机密码不能为空');
	};	
	const phonetype = () => {
	  toastRef.value?.showError('手机密码格式错误，密码只能包含字母或数字');
	};	
	const nophonetype = () => {
	  toastRef.value?.showError('注册失败');
	};	
	const yes = () => {
	  toastRef.value?.showError('注册成功！');
	};	
</script>

<style>
	 .inputphone{
	 	width: 670rpx;
	 	height: 96rpx;
	 	border: 1px solid #ccc;
	 	border-radius: 20rpx;
	 }  
	 	 .registerButton{
	 	 	background-color: #07C160;
	 	 	width: 550rpx;
	 	 	height: 80rpx;
	 	 	border-radius: 90rpx;
	 	 	font-size: 28rpx;
	 	 	letter-spacing:2rpx;
	 	 	color: white;
	 	 	line-height: 80rpx;
	 	 }      
</style>
