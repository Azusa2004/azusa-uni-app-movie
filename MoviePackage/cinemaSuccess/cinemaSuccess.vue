<template>
	<view class="SuccessMain">
		<view class="header">
			<view :style="{ height: uni.getWindowInfo().statusBarHeight + 'px' }"></view>
			<view class="header2">
			<text style="margin:-25rpx 0 0 25rpx; color: white; font-size: 38rpx;">购买成功</text>	
			</view>
		</view>
		
		<view class="Success-back">
			<view class="Success-top">
				<view style="display: flex;">
					<image :src="movieDataArr?._value?.image" mode="" style="width: 151rpx; height: 211rpx; border-radius: 10rpx;"></image>
					<view style="margin-left: 40rpx; display: flex; flex-direction: column;justify-content: center;">
						<view style="font-size: 25rpx; color: #4073ff; margin-bottom: 22rpx;">订单号：43234242</view>
						<view style="font-size: 33rpx; font-weight: 550; margin-bottom: 22rpx;">{{movieDataArr?._value?.name}}</view>
						<view style="color: #8890a3; font-size: 25rpx; margin-bottom: 22rpx;">{{movieDataArr?._value?.cinema}}</view>
					</view>
				</view>
			</view>
			<view class="Success-botto">
				<view class="Success-botto-top">
					<view class="flex-dfj">
						<view>
							<view class="TextMin">观影日期</view>
							<view class="Text-margin">{{movieDataArr?._value?.moviedate}} {{movieDataArr?._value?.weekday}}</view>
						</view>
						
						<view class="view-margin" >
							<view class="TextMin">座位</view>
							<view style="display: flex; margin-top: 20rpx;">
								<view class="seattag" v-for="item in movieDataArr?._value?.seat" :key="item._id">{{item.row}}-{{item.col}}</view>
							</view>
						</view>	
					</view>

					<view class="flex-dfj" style="margin-left: 200rpx; width: 130rpx;">
						<view>
							<view class="TextMin">时间</view>
							<view class="Text-margin">{{movieDataArr?._value?.Time}}</view>
						</view>
						
						<view class="view-margin">
							<view class="TextMin">座位总数</view>
							<view class="Text-margin">{{movieDataArr?._value?.seat?.length}}</view>
						</view>
					</view>
				</view>
				
				<view class="Success-botto-botto">
					<view>
						<view class="TextMin" style="margin-bottom: 70rpx;">兑换码</view>
						<view class="convert">518759</view>
					</view>
					<view style="margin-left: 200rpx;">
						<view class="TextMin">二维码</view>
						<image src="/static/a08414f0c2b66a5e079e7b71ccdad4d3.png" mode="" style="width: 120rpx; height: 120rpx; margin-top: 20rpx;"></image>
					</view>
				</view>
			</view>
		</view>
		
		<view class="select" style="margin-bottom: 170rpx;"  @click="buyticket">返回首页</view>
	</view>

</template>

<script setup>
import { onLoad } from '@dcloudio/uni-app';
import { ref } from 'vue';
import { useUserStore } from '../../store/user';
const movieDataArr=ref([])
const  useStore=useUserStore()

onLoad((options)=>{
	const decodedString = decodeURIComponent(options.payment);
	const dateInfo = JSON.parse(decodedString);
	movieDataArr.value={...dateInfo}
	console.log('接收4',movieDataArr.value);
})

const buyticket=()=>{
	useStore.saveMovieData(movieDataArr.value)
	 console.log('Pinia中的数据:', useStore.orderData)
	uni.switchTab({
		url:'/pages/header/header'
	})
}
	
</script>

<style scoped>
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
	.SuccessMain{
		height: 100vh;
		background-color: #0B193F;
		padding: 0 30rpx;
	}
	.Success-back{
		width: 631rpx;
		height: 892rpx;
		padding: 30rpx;
		background-image: url(/static/tickets-bg.png);
		background-size: 691rpx 952rpx;
	}
	.Success-top{
		height: 220rpx;
	}
	.Success-botto{
		height: 540rpx;
		margin-top: 120rpx;
	}
	.Success-botto-top{
		height: 300rpx ;
		border-bottom: 1.5px dashed #ccc;
		display: flex;
	}
	.Success-botto-botto{
		display: flex;
		padding: 30rpx 0;
	}
	.convert{
		font-size: 48rpx;
		font-weight: 550;
		letter-spacing: 13rpx;
		color: #000018;
	}
</style>
