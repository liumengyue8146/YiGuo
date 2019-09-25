<template>
  <!-- 账户管理 -->
  <div class="accMan">
    <van-nav-bar title="账户管理" @click-left="onClickLeft" left-arrow />
    <div class="headPortrait">
      <p>头像</p>
      <span class="uploader">
        <van-uploader v-model="fileList" :max-count="1" />
      </span>
      <van-icon name="arrow" />
    </div>
    <div class="perMessage">
      <p>昵称</p>
      <span>欧了咳咳</span>
      <van-icon name="arrow" />
    </div>
    <div class="perMessage">
      <p>出生日期</p>
      <span>只能修改一次</span>
      <van-icon name="arrow" />
    </div>
    <div class="perMessage">
      <p>性别</p>
      <span>男</span>
      <van-icon name="arrow" />
    </div>
    <div class="perMessage">
      <p>实名认证</p>
      <span>未认证</span>
      <van-icon name="arrow" />
    </div>
  </div>
</template>
<script>
export default {
  name: "manage",
  data() {
    return {
      fileList: []
    };
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
.accMan {
  width: 100%;
  height: 100%;
}
.accMan .van-nav-bar {
  border-bottom: 1px solid rgba(238, 238, 238, 1);
  height: 60px;
  line-height: 60px;
}
.accMan .van-icon-arrow-left {
  color: black;
  line-height: 30px;
  background: none;
}
.accMan .van-nav-bar__title {
  font-size: 24px;
  font-weight: 550;
  color: #333333;
}
.headPortrait {
  width: 100%;
  height: 80px;
  border-bottom: 1px solid rgba(238, 238, 238, 1);
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
}
.headPortrait p {
  margin-left: 5%;
  font-size: 15px;
  color: #333333;
  font-weight: 550;
}
.headPortrait .van-icon-arrow {
  margin-right: 5%;
  font-size: 15px;
  color: #333333;
}
.uploader {
  width: 80px;
  height: 80px;
  position: absolute;
  top: 0;
  right: 15%;
}
.perMessage {
  width: 100%;
  height: 60px;
  border-bottom: 1px solid rgba(238, 238, 238, 1);
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.perMessage p {
  margin-left: 5%;
  font-size: 15px;
  font-weight: 580;
  color: #333333;
}
.perMessage .van-icon-arrow {
  margin-right: 5%;
  font-size: 15px;
  color: #333333;
}
.perMessage span {
  font-size: 15px;
  line-height: 15px;
  position: absolute;
  right: 12%;
  top: 50%;
  margin-top: -10px;
  font-weight: 600;
  color: #333333;
  font-weight: 550;
}
</style>