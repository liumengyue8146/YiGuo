<template>
  <div class="message">
    <van-nav-bar title="消息" left-arrow @click-left="onClickLeft" />
    <div class="messageContent">
      <div class="receiveMessage" v-for="i in 20" :key="i">
        <h2>今个儿&nbsp;&nbsp;08:03</h2>
        <div class="messageFlex">
          <div class="messageLeft">
            <div class="messageBox">
              <van-icon name="balance-pay" />
            </div>
          </div>
          <div class="messageRight">
            <h3>优惠卡入账</h3>
            <p>恭喜您获得一张优惠券，有效期至2019年08月16日</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'message',
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
.message {
  width: 100%;
  height: 100%;
  background: rgba(244, 244, 244, 1);
  display: flex;
  flex-direction: column;
}

.message .van-nav-bar {
  border-bottom: 1px solid rgba(238, 238, 238, 1);
  height: 32px;
  line-height: 32px;
}
.message .van-nav-bar__title[data-v-31aa1314] {
  font-size: 20px;
}
.message .van-icon-arrow-left {
  color: black;
  font-size: 24px;
  line-height: 30px;
  background: none;
}
.message .van-nav-bar__title {
  font-size: 24px;
  font-weight: 550;
  color: #333333;
}
.messageContent {
  flex: 1;
  overflow: auto;
}
.receiveMessage {
  width: 86%;
  height: 130px;
  margin: 30px 7%;
  border-radius: 20px;
  overflow: hidden;
  background: white;
}
.receiveMessage h2 {
  width: 100%;
  height: 30px;
  background: #11b47b;
  color: white;
  text-align: center;
  font-weight: normal;
  font-size: 14px;
  line-height: 30px;
}
.messageFlex {
  width: 100%;
  height: 100px;
}
.messageLeft {
  width: 25%;
  height: 100px;
  float: left;
}
.messageRight {
  width: 75%;
  height: 100px;
  float: left;
}
.messageBox {
  width: 60%;
  height: 60px;
  background: #11b47b;
  font-size: 60px;
  margin-left: 20%;
  margin-top: 20px;
  border-radius: 10px;
  color: white;
}
.messageRight h3 {
  width: 100%;
  font-size: 16px;
  line-height: 24px;
  margin-top: 10px;
  font-weight: 500;
}
.messageRight p {
  color: gray;
}
</style>
