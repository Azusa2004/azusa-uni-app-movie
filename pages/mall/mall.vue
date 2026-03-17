<template>
	<navigate>
		<view class="welcome">
			<image src="/static/icon.png" mode="" style="width: 44rpx; height: 34rpx;"></image>
			<text class="welcomeName">我的电影票</text>
		</view>
	</navigate>
	
	<view class="mallmain">
		
		<view v-if="MovieData" class="movieTicket" v-for="(item,index) in MovieData" :key="index">
			<view class="movieTicket-top">
				<view class="">
					<view class="movieName">{{item._rawValue?.name}}</view>
					<view class="cinemaName">{{item._rawValue?.cinema}} · {{item._rawValue?.moviedate}} {{item._rawValue?.weekday}}</view>
				</view>
				<image src="/static/a08414f0c2b66a5e079e7b71ccdad4d3.png" mode="" style="width: 83rpx; height: 83rpx;"></image>
			</view>
			<view class="movieTicket-bottu" >
				<view style="display: flex; justify-content: space-between;">
					<text class="movieTicket-bottu-number">518759</text>
					<view style="display: flex;align-items: center;">
						<text class="movieTicket-bottu-text">查看详情</text>
						<image src="/pages/mall/右_right (1).png" mode="" class="movieTicket-bottu-img"></image>
					</view>
					
				</view>
			</view>
		</view>
		
		<view v-if="MovieData?.length==0">
			<image src="/static/nodata.67f7a1c9.png" mode="" style="width: 700rpx; margin-top: 400rpx;"></image>
		</view>
	</view>
</template>

<script setup>
import { onLoad } from '@dcloudio/uni-app';
import { useUserStore } from '../../store/user';
import { onMounted, ref } from 'vue';
const MovieData=ref()
const useStore=useUserStore()
onMounted(()=>{
	  MovieData.value = useStore.orderData
	  console.log('订单也',MovieData.value);
})
</script>

<style scoped>
	.header2{
		height: 200rpx;
		display: flex;
		align-items: center;
	} 
	.mallmain{
		width: 691rpx;
		padding: 30rpx 30rpx;
	}
	.movieTicket{
		width: 691rpx;
		height: 268rpx;
		background-image: url(/static/ticket-bg.png);
		background-size: 691rpx 268rpx;
		margin-bottom: 30rpx;
	}
	.movieTicket-top{
		width: 631rpx;
		height: 114rpx;
		padding-top: 30rpx;
		margin: 0 30rpx 0 30rpx;
		border-bottom: 1.5px dashed rgba(255, 255, 255,0.2);
		display: flex;
		justify-content: space-between;
	}
	.movieName{
		font-size: 30rpx;
		color: white;
	}
	.cinemaName{
		width: 540rpx;
		font-size: 24rpx;
		color: #ffffff;
		opacity: 0.47;
		margin-top: 15rpx;
		overflow: hidden;
		 white-space: nowrap; 
		 text-overflow: ellipsis; 
	}
	.movieTicket-bottu{
		height: 65rpx;
		padding: 30rpx 30rpx;
	}
	.movieTicket-bottu-img{
		width: 30rpx;
		height: 30rpx;
	}
	.movieTicket-bottu-text{
		font-size: 24rpx;
		color: white;
		margin-right: 10rpx;
	}
	.movieTicket-bottu-number{
		font-size: 30rpx;
		color: #f3b438;
		font-weight: 550;
		letter-spacing: 8px;
	}
</style>
