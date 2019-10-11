<template>
  <!-- 会员尊享 -->
  <div class="app">
    <!-- top -->
    <van-sticky>
      <van-nav-bar title="会员尊享" left-arrow @click-left="onClickLeft"></van-nav-bar>
    </van-sticky>
    <!-- middle -->
    <img src="@/assets/member01.png" />
    <div class="m1">
      <div class="m1-t">
        <span>规则说明</span>
        <van-icon name="info-o" />
      </div>
      <div class="m1-center">
        <div class="ball1">
          <span>普通会员</span>
        </div>
        <div class="ball2">
          <span>银卡会员</span>
        </div>
        <div class="ball3">
          <span>金卡会员</span>
        </div>
      </div>
    </div>
    <div class="m2">每个礼包仅能放购物车一次，且收获地址和当前地址一致</div>
    <!-- bottom -->
    <div class="bottom">
      <h3>
        <van-icon name="point-gift-o" />
        <span>尊享礼</span>
      </h3>
      <van-card
        num="2"
        price="2.00"
        desc="描述信息"
        title="商品标题"
        thumb="https://img.yzcdn.cn/vant/t-thirt.jpg"
        origin-price="10.00"
      />
      <van-card
        num="2"
        price="2.00"
        desc="描述信息"
        title="商品标题"
        thumb="https://img.yzcdn.cn/vant/t-thirt.jpg"
        origin-price="10.00"
      />
      <van-card
        num="2"
        price="2.00"
        desc="描述信息"
        title="商品标题"
        thumb="https://img.yzcdn.cn/vant/t-thirt.jpg"
        origin-price="10.00"
      />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
  },
};
</script>

<style scoped>
.app {
  height: 100%;
  width: 100%;
  background: #f4f4f4;
  overflow: auto;
}
.bottom {
  height: 380px;
  width: 95%;
  display: flex;
  margin: 10px;
  background: #fff;
}
.bottom h3 {
  color: #e84036;
  height: 30px;
  width: 100%;
  padding: 5px;
  position: relative;
}
.bottom h3 .van-icon {
  position: absolute;
  top: 10px;
  left: 10px;
  font-size: 20px;
}
.bottom h3 span {
  position: absolute;
  top: 10px;
  left: 35px;
  display: inline-block;
}
.bottom .van-card {
  height: 100px;
  width: 90%;
}
.van-nav-bar__title {
  font-weight: 900;
  font-size: 18px;
}
img {
  width: 100%;
  height: 200px;
}
.m1 {
  margin-top: 10px;
  height: 160px;
  width: 100%;
  background: #fee2ca;
  position: relative;
}
.m1-t {
  height: 20px;
  width: 65px;
  position: absolute;
  top: 15px;
  right: 10px;
  display: flex;
  color: #8e8e8b;
}
.m1-t span {
  margin-top: -4px;
  margin-right: 2px;
}
.m1-center {
  position: absolute;
  top: 30px;
  left: 0;
  height: 120px;
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding-bottom: 20px;
}
.m1-center .ball1 {
  height: 60px;
  width: 60px;
  background: #fb6924;
  color: #fff;
  border-radius: 50%;
  border: 2px solid #e84036;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
}
.m1-center .ball1 span {
  font-size: 16px;
  height: 40px;
  width: 40px;
  text-align: center;
}
.m1-center .ball2 {
  height: 80px;
  width: 80px;
  background: #fb6924;
  color: #fff;
  border-radius: 50%;
  border: 2px solid #e84036;
  display: flex;
  justify-content: center;
  align-items: center;
}
.m1-center .ball2 span {
  font-size: 16px;
  height: 45px;
  width: 45px;
  text-align: center;
}
.m1-center .ball3 {
  height: 50px;
  width: 50px;
  background: #fb6924;
  color: #fff;
  border-radius: 50%;
  border: 2px solid #e84036;
  display: flex;
  justify-content: center;
  align-items: center;
}
.m1-center .ball3 span {
  font-size: 12px;
  height: 35px;
  width: 30px;
  text-align: center;
}
.m2 {
  height: 40px;
  text-align: center;
  width: 100%;
  background: #fff9eb;
  color: #8b8b89;
  line-height: 40px;
  font-size: 12px;
}
.m1-t {
  font-size: 12px;
}
.van-nav-bar {
  padding: 10px 0;
}

/* 解决顶部 */
.van-sticky .van-nav-bar {
  padding: 10px 0;
}
.van-sticky .van-icon {
  margin: 0;
  background: #fff;
  margin-top: -4px;
  color: #000;
}
</style>
