<template>
	<map class="map" :latitude="mapData.latitude" :longitude="mapData.longitude" :markers="mapImg"></map>
</template>

<script setup>
import { onShow } from '@dcloudio/uni-app';
import { computed, ref } from 'vue';
import AMapWX from "/utils/amap-wx.130.js"
import { onLoad } from '@dcloudio/uni-app';
let amapWX;
  onLoad(() => {
        // 实例化API核心类
        amapWX = new AMapWX({
            key: '1db92a17014c44196522ad83448dc53f'
        });
    })
	
	const mapData=ref({
		latitude:30.6667,
		longitude:104.0667
	})
	
	const mapImg=computed(()=>{
		return[
		{	
			id:1,
			...mapData.value,
			iconPath:'/static/avatar.png',
			width: 28,
			height: 28
		}
	]
	})
	
	onShow(()=>{
		gatusergetLocation()
	})
	
	const gatusergetLocation=()=>{
		amapWX.getRegeo({
			success(res) {
				if(res && Array.isArray(res) && res.length > 0){
					const location = res[0];
					mapData.value.latitude=location.latitude,
					mapData.value.longitude=location.longitude
				}
			},
			fail(err) {
				console.log(err);
			}
		})
	}
</script>

<style scoped>
	.map{
		width: 750rpx;
		height: 100vh;
	}
	       
</style>
