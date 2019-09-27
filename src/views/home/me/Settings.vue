<template>
  <div class="settings">
    <van-nav-bar title="设置" @click-left="onClickLeft" left-arrow />
    <div class="customer">
      <p>客服热线</p>
      <span>400-000-7788</span>
      <van-icon name="arrow" />
    </div>
    <!-- kefurexian -->
    <ul class="settingsList">
      <li>
        <div>
          <p>账号与安全</p>
          <span></span>
          <van-icon name="arrow" />
        </div>
      </li>
      <li>
        <div>
          <p>清除缓存</p>
          <span>1.9M</span>
          <van-icon name="arrow" />
        </div>
      </li>
      <li>
        <div>
          <p>关于易果</p>
          <span></span>
          <van-icon name="arrow" />
        </div>
      </li>
      <li>
        <div>
          <p>配送说明</p>
          <span></span>
          <van-icon name="arrow" />
        </div>
      </li>
      <li>
        <div>
          <p>退换货说明</p>
          <span></span>
          <van-icon name="arrow" />
        </div>
      </li>
      <li>
        <div>
          <p>不良信息投诉与举报</p>
          <span></span>
          <van-icon name="arrow" />
        </div>
      </li>
    </ul>
    <div class="loginOut">退出登录</div>
  </div>
</template>
<script>
export default {
  name: "settings",
  methods: {
    onClickLeft() {}
  }
};
</script>
<style scoped>
ul,
li {
  margin: 0;
  padding: 0;
}
.settings {
  width: 100%;
  height: 100%;
  background: rgba(237, 237, 237, 1);
  overflow: hidden;
}
.settings .van-nav-bar {
  border-bottom: 1px solid rgba(238, 238, 238, 1);
  height: 80px;
  line-height: 80px;
}
.settings .van-icon-arrow-left {
  color: black;
  font-size: 24px;
  line-height: 30px;
  background: none;
}
.settings .van-nav-bar__title {
  font-size: 24px;
  font-weight: 550;
  color: #333333;
}
.customer {
  width: 100%;
  height: 70px;
  background: white;
  margin: 8px 0px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
}
.customer p {
  margin-left: 5%;
  font-size: 16px;
  font-weight: 600;
  line-height: 20px;
  color: rgba(51, 51, 51, 1);
}
.customer .van-icon-arrow {
  margin-right: 5%;
  color: rgba(153, 153, 153, 1);
  font-size: 16px;
}
.customer span {
  position: absolute;
  right: 15%;
  top: 50%;
  font-size: 14px;
  line-height: 20px;
  color: #63cca7;
  margin-top: -10px;
}
.settingsList li {
  width: 100%;
  height: 60px;
  background: white;
}
.settingsList li div {
  width: 100%;
  height: 59px;
  border-bottom: 1px solid rgba(238, 238, 238, 1);
  margin-left: 5%;
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.settingsList li div .van-icon-arrow {
  margin-right: 10%;
  color: rgba(153, 153, 153, 1);
  font-size: 16px;
}
.settingsList li div span {
  position: absolute;
  top: 50%;
  margin-top: -10px;
  right: 20%;
}
.loginOut {
  width: 100%;
  height: 80px;
  line-height: 80px;
  text-align: center;
  font-size: 16px;
  color: #eb5a59;
  background: white;
  margin-top: 30px;
}
</style>