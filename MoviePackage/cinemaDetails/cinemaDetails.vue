<template>
	<view>
		<view v-if="cinemadata.image" class="cinemaimg"  :style="{backgroundImage: `url(${cinemadata.image})`}">
			<view :style="{ height: uni.getWindowInfo().statusBarHeight + 'px' }"></view>
			<image src="/static/arrow.png" mode="" style="width: 45rpx; height: 45rpx; margin-top: 20rpx; position: absolute; z-index: 10;" @click="rollback()"></image>
		</view>
		
		<view style="position: absolute; z-index: 20;">
			<view class="cinemaName">
				<view style="font-size: 37rpx; font-weight: 900;  margin-bottom: 20rpx;">{{cinemadata.name}}</view>
				<text style="font-size: 25rpx; font-weight: 530;">{{cinemadata.address}}</text>
			</view>
			
			<view class="cinemaMark">
				<view>
					<view class="flex-at">
						<image src="/static/position-blue.png" mode="" style="width: 26rpx; height: 34rpx;"></image>
						<text style="font-size: 28rpx; font-weight: 900; margin-left: 20rpx;">{{cinemadata.distance? `${cinemadata.distance}`:'？'}} km</text>
					</view>
					<view class="Mintext">{{cinemadata.distance? `${cinemadata.distance*5}`:'0'}}分钟</view>
				</view>
				<view>
					<image src="/static/finance.png" mode="" class="finance"></image>
					<image src="/static/finance.png" mode="" class="finance"></image>
					<image src="/static/finance.png" mode="" class="finance"></image>
					<image src="/static/finance.png" mode="" class="finance"></image>
					<view class="Mintext" style="position: relative; top: -9rpx;">￥30起</view>
				</view>
				<view >
					<view class="flex-at">
						<image src="/static/star.png" mode="" class="finance"></image>
						<text style="font-size: 28rpx; font-weight: 900; margin-left: 16rpx;">4.8</text>
					</view>
					<view class="Mintext">1000+评分</view>
				</view>
			</view>
			
			<view class="cinemaName">
				<text style="font-size: 35rpx; font-weight: 900;  margin-bottom: 20rpx;">特色电影</text>
				
				<template v-if="Moviedata.length!=0">
				<view class="flex-at" style="margin: 40rpx 0 40rpx 0;" v-for="item in Moviedata" :key="item._id" @click="skipMovie(item._id)">
					<image :src="item.cover_image" mode="" style="width: 208rpx; height: 310rpx; border-radius: 10rpx; flex-shrink: 0;"></image>
					<view style="margin-left: 35rpx; height: 310rpx;">
						<text style="font-size: 35rpx; font-weight: 900;  margin-bottom: 20rpx;">{{item.name}}</text>
						<view style="font-size: 26rpx; color: #396dff; margin-top: 20rpx;">￥30起</view>
						<view style="font-size: 26rpx; color: #8890a3; margin-top: 50rpx;">放映时间</view>
						<view style="display: flex; flex-wrap: wrap;">
							<view class="Age" v-for="item in MovieTime" :key="item.key">{{item.Time}}</view>
						</view>
					</view>
				</view>
				
				<up-loadmore
						loadmoreText="没有更多了"
						dashed
						line
				/>
				</template>
				
				<template v-if="Moviedata.length==0">
					<view style="height: 55vh; display: flex; align-items: center;">
						<image src="/static/nodata.67f7a1c9.png" mode="" style="width: 700rpx;"></image>
					</view>
				</template>
				
			</view>
		</view>
	</view>
</template>

<script setup>
import { onLoad } from '@dcloudio/uni-app';
import { onMounted, ref } from 'vue';
import { addsoonApi } from '../../apis/headrApi';
import { getcinemaApi } from '../../apis/movieApi';
const cinemadata=ref([])
const Moviedata=ref([])
onMounted(()=>{
	addcinemaMovie()
})
const addcinemaMovie=()=>{
	addsoonApi({theatreId:cinemaid.value}).then(res=>{
		if(res.code==200){
			Moviedata.value=res.data.rows
		}
	})
	getcinemaApi({_id:cinemaid.value}).then(res=>{
		if(res.code==200){
			cinemadata.value=res.data
		}
	})
}

const skipMovie=(id)=>{
	console.log(id);
	uni.navigateTo({
		url:`/headerPackage/headerMovei/headerMovei?id=${id}`
	})
}

const cinemaid=ref()
	onLoad((options)=>{
		cinemaid.value=options.id
	})
	
const rollback=()=>{
	uni.navigateBack({
		delta:1,
	})
}	
	
const MovieTime=[
	{
		key:'1',
		Time:'11:00'
	},
	{
		key:'2',
		Time:'12:00'
	},
	{
		key:'3',
		Time:'13:00'
	},
	{
		key:'4',
		Time:'14:00'
	},
	{
		key:'5',
		Time:'15:00'
	}
]


</script>

<style scoped>
	.cinemaimg{
		width: 691rpx !important;
		background-size: cover;
		background-position: 0 -60rpx;
		padding: 0 30rpx;
		height: 300rpx;
		background-color: black;
		position: sticky;
		z-index: 1;
		top: 0;
		display: block;
	}
	 .cinemaName{
		 width: 691rpx;
		 padding: 0 30rpx;
		 margin: 30rpx 0 60rpx 0;
	 }
	.cinemaMark{
		width: 651rpx;
		padding: 0 50rpx;
		margin: 30rpx 0;
		display: flex;
		justify-content: space-between;
	}
	.padd{
		margin: 0 30rpx;
		background-color: aquamarine;
	}
	.finance{
	width: 37rpx; 
	height: 37rpx;	
	margin-right: 5rpx;
	}
	.Mintext{
		font-size: 24rpx;
		color: #8890a3;
		margin-top: 15rpx;
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
</style>
