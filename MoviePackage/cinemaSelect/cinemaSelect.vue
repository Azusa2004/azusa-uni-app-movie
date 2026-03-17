<template>
	<view class="header">
		<view :style="{ height: uni.getWindowInfo().statusBarHeight + 'px' }"></view>
		<view class="header2">
			<image src="/static/arrow.png" mode="" style="width: 45rpx; height: 45rpx; margin: 0 0 0 30rpx; position: absolute; top: 100rpx; z-index: 200;" @click="goqueueMovie"></image>
			<text style="margin:-25rpx 0 0 35rpx; color: white;">选座</text>
		</view>
	</view>
	
	<view class="cinemaMain">
		<image src="/static/seat-bg.png" mode="" style="width: 691rpx; height: 193rpx;"></image>
		<view class="cinemaMainSelect">
			<view v-for="(item,index) in cinemaSelect.seats"  :key="index" class="seats-container">
					<view v-for="item2 in item" :key="item2._id" :class="['cinemaseat',{'sellCinema':item2.is_sold,'element':item2.is_empty,'buyCinema':selectSeat.map(item=>item._id).includes(item2._id)}]" @click="clickitem2(item2)">
						{{item2.row+'-'+item2.col}}
					</view>
			</view>
		</view>
		
		<view class="cinemaMainbottom">
			<view class="cinemaMainimg">
				<view class="cinemaSelectmin" style="border: 1.5px solid white;"></view>
				<view class="cinemaSelectText">可选座位</view>
			</view>
			
			<view class="cinemaMainimg">
				<view class="cinemaSelectmin" style="background-color:#4073ff;"></view>
				<view class="cinemaSelectText">已选座位</view>
			</view>
			
			<view class="cinemaMainimg">
				<view class="cinemaSelectmin" style="background-color: crimson;"></view>
				<view class="cinemaSelectText">已售座位</view>
			</view>
			
		</view>
	</view>
	
	<view class="cinemaBottom" v-if="movieTime">
		<view class="MovieName"  >
			{{cinemaSelect?.movieId?.name}}
		</view>
		<view  class="cinemaName">{{cinemaSelect?.theatreId?.name}} · {{movieTime?.date}} {{movieTime?.weekday}} {{movieTime?.time}}</view>
	</view>
	
	<view class="Movietotal">
		<view style="display: flex;flex-direction: column; justify-content: space-between;">
			<view class="cinemaName">
				已选座位
			</view>
			<view style="display: flex;">
				<view class="cinemaNametag" v-for="item in selectSeat" :key="item._id">{{item.row}}-{{item.col}}</view>				
			</view>

		</view>
		<view class="total">
			<view class="cinemaName">
			总价	
			</view>
			<view style="font-size: 30rpx; color: #4073ff;">
				￥{{selectSeat.length*cinemaSelect?.price}}
			</view>
		</view>
	</view>
	
	<view class="select" @click="buyticket">立即购票</view>
	<Error ref="toastRef"></Error>
</template>

<script setup>
import { onLoad } from '@dcloudio/uni-app';
import { getcinemaSelectApi } from '../../apis/headrApi';
import { ref } from 'vue';
import Error from "/components/Error/Error"
const cinemaSelect=ref([])
const movieTime=ref()

const goqueueMovie=()=>{
	uni.navigateBack({
		delta:1
	})
}
	onLoad((options)=>{
		const decodedString = decodeURIComponent(options.dateInfo);
		const dateInfo = JSON.parse(decodedString);
		  movieTime.value = { ...dateInfo };
		getcinemaSelectApi({_id:options.id}).then((res=>{
			if(res.code==200){
				cinemaSelect.value=res.data
			}
		}))
	})
	
	const selectSeat=ref([])
	
	const clickitem2=(item)=>{
		if(item.is_sold){
			showError()
		}else if(selectSeat.value.find(item3=>item3._id==item._id)){
			selectSeat.value=selectSeat.value.filter(item4=>item4._id!=item._id)
		}else{
			if(selectSeat.value.length<6){
				selectSeat.value.push(item)
			}else{
				showError2()
			}
		}		
	}
	
	const buyticket=()=>{
		if(selectSeat.value.length!=0){
			const setmovieData={
				image:cinemaSelect.value?.movieId?.cover_image,
				name:cinemaSelect.value?.movieId?.name,
				cinema:cinemaSelect.value?.theatreId?.name,
				moviedate:movieTime.value?.date,
				weekday:movieTime.value?.weekday,
				seat:selectSeat.value,
				price:selectSeat.value.length*cinemaSelect.value?.price,
				Time:movieTime.value?.time,
			}
			const encodedData = encodeURIComponent(JSON.stringify(setmovieData));
			uni.navigateTo({
				url:`/MoviePackage/cinemaPay/cinemaPay?encoded=${encodedData}`
			})
		}else{
			showError3()
		}
	}


	
	
	const toastRef = ref();
	const showError = () => {
	  toastRef.value?.showError('该位置已经被占了 T^T');
	};
	const showError2 = () => {
	  toastRef.value?.showError('一次最多只能买6个座位');
	};
	const showError3 = () => {
	  toastRef.value?.showError('你还没有选座位喵~');
	};
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
	.cinemaMain{
		padding: 0 30rpx 30rpx 30rpx;
		background-color: #0B193F;
	}
	.seats-container{
		display: flex;
		flex-wrap: nowrap;
	}
	.cinemaMainSelect{
		width: 691rpx;
		height: 500rpx;
		overflow: auto;
		margin-bottom: 30rpx;
	}
	.cinemaseat{
		flex: 0 0 94rpx;
		height: 54rpx;
		border: 1.5px solid white;
		border-radius: 10rpx;
		margin: 20rpx 20rpx 0 0;
		color: white;
		text-align: center;
		line-height: 54rpx;
	}
	.cinemaMainbottom{
		width: 691rpx;
		height: 100rpx;
		display: flex;
		align-items: center;
	}
	.cinemaSelectmin{
		width: 35rpx;
		height: 35rpx;
		border-radius: 5px;
	}
	.cinemaSelectText{
		font-size: 24rpx;
		color: white;
		margin-left: 10rpx;
	}
	.cinemaMainimg{
		display: flex;
		margin-right: 25rpx;
	}
	.cinemaBottom{
		width: 691rpx;
		padding: 30rpx 30rpx 0 30rpx;
	}
	.MovieName{
		font-size: 40rpx; 
		font-weight: 600;
	}
	.cinemaName{
		margin-top: 20rpx;
		font-size: 24rpx;
		color: #141337;
		font-weight: 550;
	}
	.Movietotal{
		width: 601rpx;
		height: 120rpx;
		padding: 0 30rpx 30rpx 30rpx;
		margin: 30rpx 30rpx 0 30rpx;
		border: 1.5rpx solid #cccccc;
		border-radius: 8rpx;
		display: flex;
		justify-content: space-between;
	}
	.total{
		width: 170rpx;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}
	.cinemaNametag{
		width: 60rpx;
		height: 40rpx;
		background-color: #4073ff;
		font-size: 23rpx;
		color: white;
		text-align: center;
		line-height: 40rpx;
		border-radius: 8rpx;
		margin-right: 10rpx;
	}
	
	.sellCinema{
		background-color: crimson;
	}
	.buyCinema{
		background-color: #4073ff;
		color: rgba(255, 255,255, 0);
		background-image: url(/MoviePackage/cinemaSelect/校验_check-one.png);
		background-size: 50rpx 50rpx;
		background-repeat: no-repeat;
		background-position: 50%;
	}
	.element {
	    visibility: hidden;  /* 元素隐藏，但占据空间 */
	}
</style>
