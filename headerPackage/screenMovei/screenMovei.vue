<template>
	<view class="header">
		<view :style="{ height: uni.getWindowInfo().statusBarHeight + 'px' }"></view>
		<view class="header2">
			<image src="/static/arrow.png" mode="" style="width: 45rpx; height: 45rpx; margin-top: 20rpx" @click="rollback"></image>
			<up-subsection
			 :list="list"
			 mode="button"
			:current="curNow"
			@change="sectionChange"
			bgColor="#233052"
			inactiveColor="#ffffff"
			style="height: 90rpx;"
			fontSize="27rpx">
			</up-subsection>
		</view>
	</view>
	
	<view class="screenMoveiMain">
		<hotMovie v-model="curNow"></hotMovie>
	</view>
</template>

<script setup>
import hotMovie from "../hotMovie/hotMovie.vue"
import { ref } from 'vue';
import {onLoad} from "@dcloudio/uni-app"
const list = ref(['正在热映', '即将上映']); 
const curNow = ref(0);
onLoad((options)=>{
	if(options.id=='即将上映'){
		curNow.value=1
	}
})
const sectionChange=(index)=>{
	curNow.value = index;
}
const rollback=()=>{
	uni.navigateBack({
		delta:1
	})
}
</script>

<style scoped>
	 .header2{
		 height: 270rpx;
		 padding:  0 30rpx 30rpx 30rpx;
		 display: flex;
		 flex-direction: column;
		justify-content: space-between;
	 }
	 .Age{
	 	width: 100rpx;
	 	height: 44rpx;
	 	border: solid 1.5px #d1dfff;
	 	border-radius: 8rpx;
	 	font-size: 23rpx;
	 	font-weight: 550;
	 	text-align: center;
	 	line-height: 44rpx;
	 	margin: 15rpx 15rpx 0 0;
	 }
	 .screenMoveiMain{
		 width: 691rpx;
		 padding: 40rpx 30rpx;

	 }
</style>
