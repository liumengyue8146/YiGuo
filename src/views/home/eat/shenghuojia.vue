<template>
  <div class="product">
    <van-grid :column-num="1">
      <van-grid-item v-for="value in 5" :key="value">
        <div class="biaoti">生活家</div>
        <div class="start">
          <van-icon name="browsing-history-o" />234322
        </div>
        <img src="./../../../../public/images/eat/pro1.png" class="proimg" />
        <h4>端午送礼|带上五芳斋粽子，和家人一起分享幸福的滋味！</h4>
        <p class="time">
          <img src="./../../../../public/images/eat/title.png" alt />
          <span>易果君</span>
          <span>2019年05月24日</span>
        </p>
      </van-grid-item>
    </van-grid>
  </div>
</template>
