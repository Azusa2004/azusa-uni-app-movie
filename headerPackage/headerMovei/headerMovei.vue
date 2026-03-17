<template>
	<view>
		<image src="/static/arrow.png" mode="" style="width: 45rpx; height: 45rpx; margin: 0 0 0 30rpx; position: absolute; top: 100rpx; z-index: 200;" @click="rollback"></image>
			<view v-if="MovieData" class="headerMovie" :style="{backgroundImage: `url(${MovieData?.movieId?.cover_image})`}">
				
			</view>
			
			<navigate v-if="!MovieData" >
				<view class="welcome"></view>
			</navigate>
	        
		
				<view class="page-content bottomColor" v-show="MovieData">
					<view class="MovieHead">
						<view class="MovieHeadD2">
							<image :src="MovieData?.movieId?.cover_image" mode="" style="width: 208rpx; height: 310rpx; border-radius: 15rpx;"></image>
							<view class="MovieText">
								<text style="font-size: 32rpx; font-weight: 600;">{{MovieData?.movieId?.name}}</text>
								<view class="MovieHeadD3 hide">
									<text class="MovieTextMin">类型</text>
									<text class="MovieTextMinD2 " v-for="item in MovieData?.movieId?.typeIds" :key="MovieData?._id">{{item.name}}</text>
								</view>
								<view class="MovieHeadD3">
									<text class="MovieTextMin">片长</text>
									<text class="MovieTextMinD2">{{MovieData?.price}}分钟</text>
								</view>
								<view class="MovieHeadD3">
									<text class="MovieTextMin">评分</text>
									<text class="MovieTextMinD2">{{MovieData?.movieId?.score}}</text>
								</view>
							</view>
						</view>
					</view>
					
					<view class="zjButto">
						<view class="Butto " :class="{'Buttobefore':isActive==='one'}" @click="Primary('one','queueMovie')">排片</view>
						<view class="Butto" :class="{'Buttobefore':isActive==='two'}" @click="Primary('two','introduction')">简介</view>
					</view>
					
					<queueMovie v-show="current === 'queueMovie'" :MovieId="MovieId" :SelectId="SelectId"/>
					<introduction v-show="current === 'introduction'" />
				</view>
				
				<view class="errorBackimg" v-if="!MovieData">
					<image src="/static/nodata.67f7a1c9.png" mode="" style="width: 700rpx;"></image>
				</view>

	    </view>
</template>

<script setup>
import {onLoad} from "@dcloudio/uni-app"
import { onMounted, ref } from "vue";
import { addarrangementApi } from "../../apis/headrApi";
import queueMovie from "./queueMovie.vue"
import introduction from "./introduction.vue"

const MovieId=ref()
const MovieData=ref()
const SelectId=ref()
onLoad((options)=>{
	MovieId.value=options.id
})
const isActive = ref('one')
const Primary=(number,que)=>{
	isActive.value=number
	current.value=que
}

onMounted(()=>{
addarrangement()	
})
const addarrangement=()=>{
	addarrangementApi({movieId:MovieId.value}).then(res=>{
		if(res.code==200){
			MovieData.value=res?.data?.rows[0]
			SelectId.value=MovieData?.value?._id
		}
	})
}

const all = {
    'queueMovie': queueMovie,
    introduction,
}
const current=ref('queueMovie')
const rollback=()=>{
	uni.navigateBack({
		delta:1
	})
}

</script>

<style lang='scss' scoped>
	
	.headerMovie{
		width: 100%;
		height: 300rpx;
		background-color: black;
		position: sticky;
		z-index: -1;
		top: 0;
		display: block;
		background-repeat: no-repeat;
		background-size: cover;
		background-position: 0 -200rpx;
	}
	.page-content {
		min-height: 100vh;
		 position: relative;
		z-index: 100;
	}
	.MovieHead{
		width: 691rpx;
		height: 274rpx;
		padding: 0 30rpx;
		background-color: white;
		position: relative;
		z-index: 100;
		margin-bottom: 15rpx;
	}
	.MovieHeadD2{
		width: 691rpx;
		height: 315rpx;
		position: absolute;
		top: -85rpx;
		display: flex;
		z-index: 10;
	}
	.MovieText{
		margin: 100rpx 0 0 30rpx;
		
	}

	.zjButto{
		width: 750rpx;
		height: 88rpx;
		background-color: white;
		border-bottom: 3rpx solid #ccc;
		display: flex;
	}
	.Butto{
		width: 315rpx;
		font-size: 32rpx; 
		font-weight: 600;
		text-align: center;
		line-height: 88rpx;
		margin: 0 30rpx 0 30rpx;
	}
	.Buttobefore{
		border-bottom: 10rpx solid #4073ff; 
	}

	.errorBackimg{
		width: 750rpx;
		height: 70vh;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	
</style>
