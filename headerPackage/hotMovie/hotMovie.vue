<template>
				<view class="flex-at" style="margin: 40rpx 0 40rpx 0;" v-for="item in ishotisoonData">
					<image :src="item.cover_image" mode="" style="width: 208rpx; height: 310rpx; border-radius: 10rpx; flex-shrink: 0;"></image>
					<view style="margin-left: 35rpx; height: 310rpx;">
						<text style="font-size: 35rpx; font-weight: 900;  margin-bottom: 20rpx;">{{item.name}}</text>
						<view>
							<text style="font-size: 32rpx; font-weight: 600;"></text>
							<view class="MovieHeadD3 hide">
								<text class="MovieTextMin">类型</text>
								<text class="MovieTextMinD2 ">{{item.typeIds.map(item2=>item2.name).join('，')}}</text>
							</view>
							<view class="MovieHeadD3">
								<text class="MovieTextMin">片长</text>
								<text class="MovieTextMinD2">{{item.duration}}分钟</text>
							</view>
							<view class="MovieHeadD3">
								<text class="MovieTextMin">评分</text>
								<text class="MovieTextMinD2">{{item.score? item.score:'无'}}</text>
							</view>
						</view>
						<view class="buyButto" @click="buyTicket(item._id)">立即购票</view>
					</view>
				</view>
</template>

<script setup>
import { onMounted, ref, watchEffect,} from 'vue';
import { addsoonApi } from '../../apis/headrApi';
const hotMovie=ref([])
const soonMovie=ref([])

const ishotisoonData=ref([])
const count=defineModel()

onMounted(()=>{
	addsoonApi({type:'hot'}).then(res=>{
		if(res.code==200){
		hotMovie.value=res.data?.rows
		}
	})
	
	addsoonApi({type:'coming'}).then(res=>{
		if(res.code==200){
			soonMovie.value=res.data?.rows
		}
	})
})

watchEffect(()=>{
	if(count.value==0){
		//热映渲染
		ishotisoonData.value=hotMovie.value
	}else{
		//即将渲染
		ishotisoonData.value=soonMovie.value
	}
})

const buyTicket=(id)=>{
	uni.navigateTo({
		url:`/headerPackage/headerMovei/headerMovei?id=${id}`
	})
}
	
</script>

<style scoped>
	.buyButto{
		width: 170rpx;
		height: 56rpx;
		background-color: #4073ff;
		border-radius: 8px;
		text-align: center;
		line-height: 56rpx;
		color: white;
		font-size: 25rpx;
		margin-top: 48rpx;
	}
	       
</style>
