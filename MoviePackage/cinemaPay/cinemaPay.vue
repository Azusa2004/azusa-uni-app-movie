<template>
	<view style="background-color: #edf0f9; height: 100vh;">
	<view class="header">
		<view :style="{ height: uni.getWindowInfo().statusBarHeight + 'px' }"></view>
		<view class="header2">
			<image src="/static/arrow.png" mode="" style="width: 45rpx; height: 45rpx; margin: 0 0 0 30rpx; position: absolute; top: 100rpx; z-index: 200;" @click="goqueueMovie"></image>
			<text style="margin:-25rpx 0 0 45rpx; color: white;">确认订单</text>
		</view>
	</view>
	
	<view class="MovieName">
	
		<image v-if="movieDataArr?.image" :src="movieDataArr?.image" mode="" style="width: 208rpx; height: 310rpx; border-radius: 14px;"></image>
		<view style="margin-left: 40rpx; display: flex; flex-direction: column;justify-content: center;">
			<view style="font-size: 25rpx; color: #4073ff; margin-bottom: 22rpx;">订单号：{{unixTimestamp}}</view>
			<view style="font-size: 33rpx; font-weight: 550; margin-bottom: 22rpx;">{{movieDataArr?.name}}</view>
			<view style="color: #8890a3; font-size: 25rpx; margin-bottom: 22rpx;">{{movieDataArr?.cinema}}</view>
		</view>
	</view>

	<view class="MovieData">
		<view style="width: 100%;">
			<view>
				<view class="TextMin">观影日期</view>
				<view class="Text-margin">{{movieDataArr?.moviedate}} {{movieDataArr?.weekday}}</view>
			</view>
				
			<view class="view-margin" >
				<view class="TextMin">座位</view>
				<view style="display: flex; margin-top: 20rpx;">
					<view class="seattag" v-for="item in movieDataArr?.seat" :key="item._id">{{item.row}}-{{item.col}}</view>
				</view>
			</view>
			
			<view class="view-margin">
				<view class="TextMin">总价</view>
				<view class="Text-margin">￥{{movieDataArr?.price}}</view>
			</view>
			
			<view class="view-margin">
				<view class="TextMin">优惠</view>
				<view class="Text-margin" style="color: red;">-￥0.0</view>
			</view>
			
		</view>
		<view style="width: 100%; ">
			<view>
				<view class="TextMin">时间</view>
				<view class="Text-margin">{{movieDataArr?.Time}}</view>
			</view>
			
			<view class="view-margin">
				<view class="TextMin">座位总数</view>
				<view class="Text-margin">{{movieDataArr?.seat.length}}</view>
			</view>
			
			<view class="view-margin">
				<view class="TextMin">服务费</view>
				<view class="Text-margin">￥4999.00</view>
			</view>
		</view>
	</view>
	
	<view class="MovieFooter">
		<view style="width: 691rpx; display: flex; justify-content: space-between;">
			<text class="Text-margin">总计：</text>
			<text class="Text-margin">￥{{movieDataArr?.price+4999}}</text>
		</view>
	</view>
	
		<up-popup :show="show" @close="close" @open="open">

	    <view class="Payment">
			<view class="bankCard">
				<view style="display: flex; align-items: center; justify-content: space-between;">
					<text style="font-size: 25rpx; color: white;">信用卡</text>
					<image src="/static/card.png" mode="" style="width: 220rpx; height: 67rpx;"></image>
				</view>
				<view style="position: relative; top: -400rpx;">
					<up-loading-icon :show="isLoading" color="#000"></up-loading-icon>
				</view>
				<view>
					<view></view>
				</view>
			</view>
			
			<view style="width: 691rpx; display: flex; justify-content: space-between;">
				<text class="Text-margin">总计：</text>
				<text class="Text-margin">￥{{movieDataArr?.price+4999}}</text>
			</view>
			<view class="select" @click="payment">立即支付</view>
		</view>
		</up-popup>
	<view class="select" @click="show = true">去支付</view>
	</view>
</template>

<script setup>
import { onLoad } from '@dcloudio/uni-app';
import { ref } from 'vue';
const movieDataArr=ref()

onLoad((options)=>{
	const decodedString = decodeURIComponent(options.encoded);
	const dateInfo = JSON.parse(decodedString);
	movieDataArr.value={...dateInfo}
})

const payment=()=>{
	isLoading.value=true
	    setTimeout(() => {
			const encodedData = encodeURIComponent(JSON.stringify(movieDataArr));
	      uni.redirectTo({
	        url: `/MoviePackage/cinemaSuccess/cinemaSuccess?payment=${encodedData}`
	      })
	    }, 2000)
	}

const goqueueMovie=()=>{
	uni.navigateBack({
		delta:1
	})
}
const unixTimestamp = Math.floor(Date.now() / 1000) 
const show2=ref(false)
const show = ref(false); 
const isLoading = ref(false)
function open() {  
  show.value = true;  
}  
function close() {  
  show.value = false;  
}  
</script>

<style scoped lang="scss">
	 .header{
	 background-color: #0B193F;	
	 position: sticky;
	 top: 0;
	 z-index: 1;
	 background-image: url(/static/header-bg.png);
	 background-repeat: no-repeat;
	 background-position: top right;
	 background-size: 209rpx 235rpx;
	 }
	 
	 .header2{
	 	height: 200rpx;
	 	display: flex;
	 	align-items: center;
	 }
	 
	 .MovieFooter{
		 height: 170rpx;
		 margin-top: 20rpx;
		 padding: 0 30rpx 30rpx 30rpx;
		 background-color: white;
		 display: flex;
		 align-items: flex-end;
	 }
	 .Payment{
		height: 507rpx; 
		padding: 30rpx 30rpx 120rpx 30rpx; 
		width: 691rpx; 
		display: flex;
		flex-direction: column;
		 justify-content: space-between; 
	 }
	 .bankCard{
		 width: 631rpx;
		 height: 272rpx;
		 padding: 30rpx;
		background-image: linear-gradient(90deg, 
				#04bdb5 1%, 
				#26b7ba 38%, 
				#47b1bf 100%), 
			linear-gradient(
				#edf0f9, 
				#edf0f9);
				border-radius: 16px;
	 }
	.MovieName{
		width: 691rpx;
		height: 326rpx;
		padding: 30rpx 30rpx;
		background-color: white;
		display: flex;
		
	}
	.MovieData{
		@extend .MovieName;
		margin-top: 20rpx;
		height: 475rpx;
	}
	
</style>
