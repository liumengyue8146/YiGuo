<template>
  <div class="app">
    <!-- GiftVoucher提货券 -->
    <!-- top -->
    <van-sticky>
      <van-nav-bar style="padding:10px 0;" title="易果生鲜礼品兑换" left-arrow @click-left="onClickLeft"></van-nav-bar>
    </van-sticky>
    <!-- middle -->
    <van-cell-group>
      <van-field value="请输入提货券" left-icon="coupon-o" disabled />
      <van-field value="请输入提货券密码" left-icon="notes-o" disabled />
    </van-cell-group>
    <div class="content">
      <p>尊敬的易果用户们：</p>
      <p>受春节快递停送影响，部分提货券节前配送日期截止至1月30 日，节后2月11日起恢复配送，烦请您提前做好年货准备。值 此新春佳节之际，易果生鲜全体员工，祝您新春愉快、阖家 欢乐，诸事顺利。如需了解提货券详情烦请致电：021- 22303535</p>
      <a href="javascript::void(0)">下一步</a>
      <h4>
        <van-icon name="search" />
        <span>查看历史订单</span>
      </h4>
      <h5>
        <img src="@/assets/giftVouter01.png" />
        <span>客服电话：021-22303535</span>
      </h5>
    </div>
  </div>
</template>
<script>
export default {
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
  position: relative;
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
.van-cell__value .van-cell__value--alone {
  padding-left: 15px;
}
.van-icon .van-icon-coupon-o {
  font-size: 32px;
  margin-right: 5px;
}
.van-cell-group .van-field {
  border-top: 1px solid #cecece;
  height: 60px;
  padding-top: 10px;
  line-height: 34px;
}

.van-field__left-icon .van-icon {
  display: block;
  min-width: 1em;
  font-size: 24px;
  color: red;
}
.van-nav-bar__left i,
.van-nav-bar__title {
  color: #000;
  font-weight: 1000;
  font-size: 18px;
}
.content {
  padding: 0 15px;
  padding-top: 25px;
}
.content p {
  color: #b7b2b2;
  margin: 6px;
  font-size: 14px;
}
.content a {
  display: block;
  width: 272px;
  height: 46px;
  background: rgba(17, 180, 123, 1);
  color: #fff;
  font-size: 20px;
  text-align: center;
  line-height: 46px;
  margin: 40px auto;
}
h4 {
  margin: 30px auto;
  font-size: 20px;
  color: #55b798;
  height: 30px;
  width: 155px;
  position: relative;
}
h4 .van-icon {
  position: absolute;
  top: 0px;
  left: 0;
  display: block;
  font-size: 28px;
}
h4 span {
  position: absolute;
  right: 0;
}
h5 {
  margin-top: 80px;
  width: 100%;
  text-align: center;
}
h5 img {
  margin: 0 auto;
}
h5 span {
  width: 192px;
  height: 22px;
  font-size: 16px;
  color: rgba(51, 188, 140, 1);
}
.van-sticky {
  padding: 10px 0;
}
</style>
