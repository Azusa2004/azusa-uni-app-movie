<template>
	<view class="hader" @click="skipMap">
		<view class="flex">
			<image src="/static/position.png" mode=""></image>
			<text style="margin-left: 15px;">成都</text>
		</view>
		<view class="flex">
			<image src="/static/down.png" mode="" style="width: 25rpx; height: 20rpx;"></image>
		</view>
	</view>
</template>

<script setup>
const skipMap=()=>{
	uni.navigateTo({
		url:'/headerPackage/mapMovie/mapMovie'
	})
}
</script>

<style>
	.flex{
		display: flex;
		align-items: center;
	}
	.hader{
		width: 691rpx;
		height: 90rpx;
		background-color: #233052;
		padding: 0 30rpx;
		display: flex;
		justify-content: space-between;
	}
	.hader>view>image{
		width: 30rpx;
		height: 40rpx;
	}
	.hader>view>text{
		color: white;
	}
</style>