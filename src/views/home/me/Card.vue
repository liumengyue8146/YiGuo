<template>
  <div class="main">
    <van-nav-bar title="我的卡包" :left-arrow="true" @click-left="onClickLeft" />
    <van-sticky :offset-top="31">
      <div class="count">
        <div class="sum">
          <span>总计：</span>
          <span class="price">￥0</span>
        </div>

        <i>历史记录</i>
        <van-icon name="info-o" />
      </div>
    </van-sticky>
    <div class="navBottom">
      <button @click="buyCard">去买卡</button>
      <button @click="bindCard">去绑卡</button>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      active: 0
    };
  },
  methods: {
    onClickLeft() {
      Toast("返回");
    },
    buyCard() {
      console.log("去买卡");
    },
    bindCard() {
      console.log("去绑卡");
    }
  }
};
</script>
<style scoped>
.main {
  display: flex;
  flex-direction: column;

  background: #f4f4f4 url("./../../../../public/images/mycard.png") no-repeat
    center center;
}
.main .van-nav-bar {
  background: #fff;
  height: 40px;
  border-bottom: 1px solid #ddd;
}
.main .van-nav-bar__title {
  height: 40px;
  line-height: 40px;
  font-size: 20px;
  color: #363636;
}
.main .van-icon-arrow-left {
  background: #fff;
}
.main .van-icon-arrow-left {
  color: #000;
  width: 40px;
  height: 40px;
  font-size: 20px;
  line-height: 40px;
}
.main .count {
  width: 100%;
  height: 30px;
  font-size: 12px;
  display: flex;
  align-items: center;
  background: #fff;
}
.main .count .sum {
  width: 64px;
  height: 20px;
  margin-left: 26px;
  margin-right: 190px;
}
.main .count .sum .price {
  color: #fa897f;
}
.main .count i {
  width: 55px;
  height: 17px;
  color: #9cdfc8;
}
.main .count .van-icon {
  width: 14px;
  height: 14px;
  color: #999999;
}
.main .navBottom {
  width: 100%;
  height: 50px;
  position: fixed;
  left: 0;
  bottom: 50px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: #fff;
}
.main .navBottom button {
  width: 174px;
  height: 40px;
  border: 1px solid #68cfab;
  border-radius: 10px;
  color: #68cfab;
  font-size: 18px;
  background: #fff;
}
</style>
