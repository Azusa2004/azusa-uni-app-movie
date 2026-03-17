<template>
	<view class="flex-at popularText ">
		<text style="font-size: 38rpx; font-weight: 600;">{{title}}</text>
		<text style="font-size: 24rpx; font-weight: 500;" @click="Lookscreen(title)">查看更多</text>
	</view>
	<view class="popularImg">
		<scroll-view style=" width: 100%; height: 385rpx; white-space: nowrap;"  scroll-x="true">
			<view class="movieIMGView" v-for="item in data" :key="item._id" @click="clickMovie(item)">
				<image :src="item.cover_image" mode="" class="movieIMG"></image>
				<text class="movieIMGViewText ellipsis">{{item.name}}</text>
			</view>
		</scroll-view>
	</view>
</template>

<script setup>
const emit = defineEmits(['movie-click'])
defineProps(['title','data'])
const clickMovie=(item)=>{
	emit('movie-click',item)
}
const Lookscreen=(title)=>{
	uni.navigateTo({
		url:`/headerPackage/screenMovei/screenMovei?id=${title}`
	})
}


</script>

<style>
	.movieIMG{
		width: 232rpx;
		height: 344rpx;
		margin:0 0 0 25rpx;
		border-radius: 20rpx;
	}
	.movieIMGView{
		height: 600rpx;
		display: inline-block;
		
	}
	.movieIMGViewText{
		display: block;
		text-align: center;
		margin:0 0 0 25rpx;
		font-weight: 600;
		line-height: 1.2;
		font-size: 28rpx;
		height: 45rpx;
	}
</style>