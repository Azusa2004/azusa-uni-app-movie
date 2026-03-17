<template>
	<navigate>
		<view class="welcome">
			<image src="/static/icon.png" mode="" style="width: 44rpx; height: 34rpx;"></image>
			<text class="welcomeName">你好，主人</text>
		</view>
	</navigate>
	
	<view  class="bottomColor">
		
	<position></position>
	<home-banner></home-banner>
	
	<headerview title="正在热映" :data="getpopularMovie" @movie-click="MovieClick"></headerview>
	
	<headerview title="即将上映" :data="getsoonMovie" @movie-click="MovieClick"></headerview>
	
	<headerview title="最高评分" :data="gatgradeMovie" @movie-click="MovieClick"></headerview>
	
	<up-loadmore
			loadmoreText="没有更多了"
			dashed
			line
	/>
	</view>
	
	
	
</template>

<script setup>
import {onLoad ,onShow, onReady,onHide,onUnload} from "@dcloudio/uni-app"
import { onMounted, ref } from "vue";
import { addgradeApi, addpopularApi, addsoonApi } from "../../apis/headrApi";
const getpopularMovie=ref([])
const getsoonMovie=ref([])
const gatgradeMovie=ref([])

onMounted(()=>{
	gatgradeMovieapi()
})

//评分
const gatgradeMovieapi=()=>{
	addgradeApi({type:'score',pageSize:6}).then(res=>{
		if(res.code==200){
			gatgradeMovie.value=res.data.rows
		}
	})
	addsoonApi({type:'coming',pageSize:6}).then(res=>{
		if(res.code==200){
			getsoonMovie.value=res.data.rows
		}
	})
	addpopularApi({type:'hot',pageSize:6}).then(res=>{
		if(res.code==200){
			getpopularMovie.value=res.data.rows
		}
	})
}

const MovieClick=(movie)=>{
	uni.navigateTo({
		url:`/headerPackage/headerMovei/headerMovei?id=${movie._id}`
	})
}
</script>

<style scoped>
	

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
