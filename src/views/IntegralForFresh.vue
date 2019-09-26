<template>
  <div class="app">
    <!-- top -->
    <van-sticky>
      <van-nav-bar title="会员尊享" left-arrow @click-left="onClickLeft"></van-nav-bar>
    </van-sticky>
    <!-- middle -->
    <img src="@/assets/jfForsx01.png" />
    <div class="content"></div>
  </div>
</template>

<style scoped>
.app {
  height: 100%;
  width: 100%;
}
img {
  width: 100%;
}
.content {
  background: #f6edde;
  width: 100%;
  height: 180px;
}
</style>
