<template>
	<swiper :indicator-dots="true" :autoplay="true" :interval="3000" :duration="600" class="ImageSwiper" :circular="true">
		<swiper-item v-for="item in imgdata" :key="item._id">
			<image :src="item.image" mode="" class="imageData"></image>
		</swiper-item>
	</swiper>
</template>

<script setup>
	import { onMounted, ref } from 'vue';
	const imgdata=ref()
	
	onMounted(()=>{
		getdata()
	})
	
	const getdata=()=>{
		uni.request({
			url:'http://nocat.life:3014/banner/search',
			method:'POST',
			success(res) {
				imgdata.value=res.data.data.rows
			}
		})
	}
	
</script>

<style>
	.imageData{
		width: 100%;
		height: 100%;
	}
	.ImageSwiper{
		height: 300rpx;
	}
</style>