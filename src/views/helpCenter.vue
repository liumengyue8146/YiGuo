<template>
  <!-- 帮助中心 -->
  <div class="app">
    <!-- top -->
    <van-sticky>
      <van-nav-bar title="帮助中心" left-arrow @click-left="onClickLeft" />
    </van-sticky>

    <!-- 内容 -->
    <van-cell title="配送运费如何收取，多少钱包邮？" size="large" is-link />
    <van-cell title="下单后何时可以送达？" size="large" is-link />
    <van-cell title="如何申请退换货？" size="large" is-link />
    <van-cell title="退款何时可以到账？" size="large" is-link />
    <van-cell title="如何申请注销易果账号？" size="large" is-link />
    <van-cell title="更多" size="large" is-link />
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {
    onClickLeft() {
      this.$router.push({
        name: "me"
      });
    }
  }
};
</script>
<style scoped>
.app {
  height: 100%;
  width: 100%;
}
.van-cell {
  border-bottom: 1px solid #eee;
}
.van-cell__title {
  display: block;
  width: 400px;
}
.van-cell__title {
  display: block;
  width: 400px;
  text-align: left;
}
.van-cell__title span {
  display: inline-block;
  width: 300px;
}
.van-sticky {
  display: block;
  border-bottom: 2px solid #eee;
}
.van-nav-bar__left i,
.van-nav-bar__title {
  color: #000;
  font-weight: 1000;
  font-size: 18px;
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
