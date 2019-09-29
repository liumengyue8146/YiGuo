<template>
  <div class="app">
    <!-- top -->
    <van-sticky>
      <van-nav-bar title="积分换生鲜" left-arrow @click-left="onClickLeft"></van-nav-bar>
    </van-sticky>
    <!-- middle -->
    <img src="@/assets/jfForsx01.png" />
    <div class="content">
      <div class="t1">联合福利免费兑换</div>
      <p>中国移动/中国联通积分换储值卡</p>
      <p>用积分免费换卡</p>
      <img src="@/assets/jfforsx02.png" />
    </div>
  </div>
</template>

<style scoped>
.app {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
}
img {
  width: 100%;
}
.content {
  background: #f6edde;
  width: 100%;
  height: 178px;
  text-align: center;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}
.t1 {
  height: 50px;
  width: 80%;
  margin: 15px auto;
  background: #d1af7f;
  border-radius: 40px;
  color: #fff;
  font-size: 26px;
  text-align: center;
  line-height: 50px;
  font-weight: 500;
}
p {
  color: #adaaa2;
  font-size: 16px;
  margin: 2px 0;
}
.content img {
  height: 40px;
  width: 200px;
  margin: 0 auto;
  margin-bottom: 0;
}
</style>
