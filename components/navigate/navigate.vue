<template>
	<view class="header">
		<view :style="{ height: uni.getWindowInfo().statusBarHeight + 'px' }"></view>
		<view class="header2">
			<slot></slot>
		</view>
	</view>
</template>

<script>

</script>

<style scoped>
	.header{
	background-color: #0B193F;	
	position: sticky;
	top: 0;
	z-index: -1;
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
</style>