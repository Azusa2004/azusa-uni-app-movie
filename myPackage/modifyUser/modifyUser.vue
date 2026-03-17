<template>
	<view class="catalogue">
			<text>头像</text>
			<view class="flex-at">
				<image src="/static/avatar.png" mode="" style="width: 93rpx; height: 90rpx;"> </image>
				<image src="/pages/my/右_right.png" mode="" class="catalogueImg"></image>
			</view>
	</view>
	<view class="catalogue">
	  <text>头像</text>
	  <view class="flex-at">
	    <uni-file-picker 
	      limit="1"
	      file-mediatype="image"
	      mode="grid"
	      @select="onAvatarSelect"
	      :image-styles="imageStyles">
	      <image :src="avatarUrl || '/static/avatar.png'" style="width: 93rpx; height: 90rpx;"></image>
	    </uni-file-picker>
	    <image src="/pages/my/右_right.png" mode="" class="catalogueImg"></image>
	  </view>
	</view>
	
	<input class="catalogue"  type="nickname">
			<text>昵称</text>
			<view class="flex-at">
				<image src="/static/avatar.png" mode="" style="width: 93rpx; height: 90rpx;"> </image>
				<image src="/pages/my/右_right.png" mode="" class="catalogueImg"></image>
			</view>
	</input>
</template>

<script setup>
	
</script>

<style scoped>
	 .catalogue{
	 	height: 120rpx;
	 	margin: 0 35rpx;
	 	display: flex;
	 	align-items: center;
	 	justify-content: space-between;
	 	border-bottom: 2rpx solid #ccc; 
	 }
	 .catalogueImg{
	 	width: 46rpx;
	 	height: 46rpx;
	 }
</style>
