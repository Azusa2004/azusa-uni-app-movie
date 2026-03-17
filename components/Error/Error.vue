<template>
  <view v-if="show" class="error-toast" @click="hide">
    <view class="error-content">
      <text class="error-text">{{ message }}</text>
    </view>
  </view>
</template>

<script setup>
import { ref } from 'vue';

const show = ref(false);
const message = ref('');

// ✅ 添加了 hide 函数
const hide = () => {
  show.value = false;
};

const showError = (msg) => {
  message.value = msg;
  show.value = true;
  // 3秒后自动消失
  setTimeout(() => {
    hide(); // 调用 hide 函数
  }, 3000);
};

// 暴露方法给父组件
defineExpose({ showError });
</script>

<style scoped>
.error-toast {
  position: fixed;
  top: 40%;
  left: 50%;
  transform: translateX(-50%);
  z-index: 9999;
}

.error-content {
  background-color: rgba(0, 0, 0, 0.8);
  padding: 20rpx 40rpx;
  border-radius: 10rpx;
}

.error-text {
  color: white;
  font-size: 28rpx;
}
</style>