<template>
  <div class="app">
    <!-- top -->
    <van-sticky>
      <van-nav-bar title="悠币明细" left-arrow @click-left="onClickLeft" @click-right="onClickRight"></van-nav-bar>
    </van-sticky>
    <!-- middle -->
    <div class="top1">
      <p>
        当前剩余悠币
        <span>规则</span>
        <van-icon name="warning-o" />
      </p>
      <span>150</span>
    </div>
    <ul class="ul1">
      <li>全部</li>
      <li>收入</li>
      <li>支出</li>
    </ul>
    <!-- bottom -->
    <div class="bottom">
      <div class="item">
        <div class="left">
          <h3>签到送悠币</h3>
          <span>2019-09-26 19:16:00</span>
        </div>
        <div class="right">+50</div>
      </div>
      <div class="item">
        <div class="left">
          <h3>注册送悠币</h3>
          <span>2019-09-26 19:16:00</span>
        </div>
        <div class="right">+100</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
    onClickRight() {},
  },
};
</script>
<style scoped>
.app {
  height: 100%;
  width: 100%;
  background: #f4f4f4;
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
.van-nav-bar__title {
  font-weight: 900;
  font-size: 18px;
}
.top1 {
  height: 150px;
  width: 100%;
  background: #f36105;
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
}
.top1 p {
  color: #fff;
  margin: 10px 0;
  font-size: 18px;
  position: relative;
}
.top1 p span {
  position: absolute;
  top: -5px;
  right: -105px;
  font-size: 14px;
  color: #793105;
}
.top1 p .van-icon {
  position: absolute;
  top: 2px;
  right: -140px;
  font-size: 16px;
  color: #793105;
}
.top1 span {
  color: #fff;
  font-size: 42px;
  margin-top: 10px;
}
.ul1 {
  background: #ce5518;
  display: flex;
  justify-content: space-around;
  height: 40px;
  font-size: 18px;
  line-height: 40px;
}
.ul1 li {
  color: #fff;
  width: 33%;
  text-align: center;
  border-right: 1px solid #000;
}
.bottom {
  width: 100%;
}
.bottom .item {
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: space-between;
  padding: 0 10px;
  align-items: center;
  border-bottom: 5px solid #f4f4f4;
}
.bottom .item .left {
  width: 85%;
  height: 80px;
  display: flex;
  flex-direction: column;
  line-height: 80px;
  justify-content: center;
}
.bottom .item .left h3 {
  line-height: 25px;
}
.bottom .item .left span {
  color: #d5d5d5;
  line-height: 25px;
}
.bottom .item .right {
  width: 15%;
  height: 80px;
  line-height: 80px;
  font-size: 16px;
}
.left {
  font-size: 16px;
}
</style>
