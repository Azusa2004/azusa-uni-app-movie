<template>
	<view>
		<view class="header">
			<view :style="{ height: uni.getWindowInfo().statusBarHeight + 'px' }"></view>
			<view class="header2">
				<image src="/static/arrow.png" mode="" style="width: 45rpx; height: 45rpx; margin: 20rpx 0 0 30rpx; position: absolute; z-index: 10;" @click="rollback"></image>
				<view style="position: relative; top: 200rpx;">
					<image src="/myPackage/register/gatdata.png" mode=""  style="width: 750rpx; height: 600rpx;"></image>
					
					<button class="registerButton" open-type="getPhoneNumber" @getphonenumber="getPhone">一键登录</button>
					<button class="registerButton" style="margin-top: 50rpx; background-color: #787ef0" @click="gologin">账号登录</button>
				</view>
			</view>
		</view>
	</view>
</template>

<script setup>
import { addMyPhoneApi } from '../../apis/my'
import { useUserStore } from "../../store/user";
const uiserData=useUserStore()

	const rollback=()=>{
		uni.switchTab({
			url:`/pages/header/header`
		})
	}
	const gologin=()=>{
		uni.navigateTo({
			url:'/myPackage/Login/Login'
		})
	}
const getPhone = ({ detail }) => {
  if (detail.iv) {
    uni.login({
      success(res) {
        addMyPhoneApi({
          appId: 'wx68207d56593a85a6',
          appSecret: 'ccd214eb392dce4c69e3606fefd1ace4',
          code: res.code,
          encryptedData: detail.encryptedData,
          iv: detail.iv
        }).then(res => {
          if (res.code == 200) {
            console.log(res);
			uni.showToast({
				title:'登陆成功'
			})
            uni.setStorage({
				key:'user_token',
				data: res.data.token,
				success() {
					uiserData.getUserInfo()
				}
			});
			setTimeout(()=>{
				uni.navigateBack({
					delta:1
				})
			},500)
          }
        });
      } 
    });
  }
};
	
</script>

<style scoped>
	.header{
	background-color: #0B193F;	
	position: fixed;
	z-index: 1;
	background-image: url(/static/header-bg.png);
	background-repeat: no-repeat;
	background-position: top right;
	background-size: 209rpx 235rpx;
	}
	
	.header2{
		height: 100vh;
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
