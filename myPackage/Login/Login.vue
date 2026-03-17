<template>
	<view class="header">
		<view :style="{ height: uni.getWindowInfo().statusBarHeight + 'px' }"></view>
		<view class="header2" style="height: 200rpx;">
			<image src="/static/arrow.png" mode="" style="width: 45rpx; height: 45rpx; margin: 0 0 0 30rpx; position: absolute; top: 100rpx; z-index: 200;" @click="goqueueMovie"></image>
			<text style="color: white; font-size: 30rpx; position: relative; top: 65rpx; left: 30rpx;">登录</text>
		</view>
	</view>
	
	<view style="margin: 30rpx; 0 0 30rpx">
		<text>手机号</text>
		<input type="text" class="inputphone" placeholder="请输入手机号" style="margin-top: 15rpx; padding-left: 15rpx;" v-model="phone"/>
		<view style="margin-top: 30rpx;">
			<text >密码</text>
			<input type="password" class="inputphone" placeholder="请输入密码" style="margin-top: 15rpx; padding-left: 15rpx;" v-model="password"/>
		</view>
		
		
		<button class="registerButton" style="margin-top: 50rpx; background-color: #787ef0" @click="gologin">登录</button>
		<view style="font-size: 25rpx; margin: 20rpx 90rpx 0 0; text-align: right; color: red;" @click="register">没有账号？点我注册</view>
		<Error ref="toastRef"></Error>
	</view>
	
</template>

<script setup>
import { ref } from 'vue';
import { addPhonePasswApi } from '../../apis/my';
import { useUserStore } from "../../store/user";
const uiserData=useUserStore()
	const goqueueMovie=()=>{
		uni.navigateBack({
			delta:1
		})
	}
	const phone=ref()
	const password=ref()
	const reg = /^1[3-9]\d{9}$/
	const reg2 = /^[a-zA-Z0-9]+$/
	
	const gologin=()=>{
		if(phone.value&&password.value){
			if(reg.test(phone.value)){
				if(reg2.test(password.value)){
					addPhonePasswApi({phone:phone.value,password:password.value}).then(res=>{
						if(res.code==200){
							showError4()
							setTimeout(() => {
							  uni.switchTab({
							    url: '/pages/my/my'
							  })
							}, 2000)
							
							uni.setStorage({
								key:'user_token',
								data: res.data.token,
								success() {
									uiserData.getUserInfo()
								}
							});
						}else{
							showError5()
						}
					})
				}else{
					showError2()
				}
			}else{
				showError()
			}
		}else{
			showError3()
		}
		
	}
	
	const register=()=>{
		uni.navigateTo({
			url:'/myPackage/registerD2/registerD2'
		})
	}
	
	const toastRef = ref();
	const showError = () => {
	  toastRef.value?.showError('请输入正确手机号');
	};
	const showError2 = () => {
	  toastRef.value?.showError('密码格式错误');
	};
	const showError3 = () => {
	  toastRef.value?.showError('手机或密码不能为空');
	};
	const showError4 = () => {
	  toastRef.value?.showError('登陆成功');
	};
	const showError5 = () => {
	  toastRef.value?.showError('账号或密码错误');
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
