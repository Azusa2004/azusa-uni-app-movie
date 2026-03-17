<template>
	<navigate>
		<view class="welcome">
			<image src="/static/icon.png" mode="" style="width: 44rpx; height: 34rpx;"></image>
			<text class="welcomeName">试试我们最好的影院</text>
		</view>
	</navigate>
	<view class="bottomColor">
		<position></position>
		
		<view v-if="addmoviedata.length!=0" class="moviemain" v-for="item in addmoviedata" :key="item._id" @click="cinemaDetails(item._id)">
			<image :src="item.image" mode="" style="width: 194rpx; height: 122rpx; border-radius: 10rpx;"></image>
			<view class="MoveiName">
				<text style="font-weight: 600;">{{item.name}}</text>
				<view style=" margin-top: 15rpx; display: flex; align-items:center;">
					<image src="/static/position-blue.png" mode="" style="width: 20rpx; height: 26rpx; margin-right: 10rpx;"></image>
					<text style="font-size: 25rpx; font-weight: 500;">{{item.distance? item.distance+'km':'...'}}</text>
				</view>
			</view>
		</view>
		
		<up-loadmore
				loadmoreText="没有更多了"
				dashed
				line/>
	</view>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { addMovieApi } from '../../apis/movieApi';
const addmoviedata=ref([]);
onMounted(()=>{
	addmovie()
})
const addmovie=()=>{
	addMovieApi().then(res=>{
		if(res.code==200){
			addmoviedata.value=res.data.rows
		}
	})
}

const cinemaDetails=(cinemaID)=>{
	uni.navigateTo({
		url:`/MoviePackage/cinemaDetails/cinemaDetails?id=${cinemaID}`
	})
}
	
</script>

<style>
	
	.moviemain{
		width: 691rpx;
		height: 135rpx;
		background-color: white;
		margin-top: 30rpx;
		display: flex;
		align-items: center;
		padding: 0 30rpx;
	}
	.MoveiName{
		margin: 0 0 0 25rpx;
	}
	.bottomColor{
			 padding-bottom: calc(20rpx + env(safe-area-inset-bottom));
	}

</style>
