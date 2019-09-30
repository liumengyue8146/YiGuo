<template>
  <div id="login">
    <div class="head">
      <van-nav-bar title="会员登陆" left-arrow @click-left="onClickLeft" />
    </div>
    <section>
      <div class="user">
        <van-tabs :border="false" title-active-color="green" line-height="4px">
          <van-tab id="sjdl" title="手机快捷登陆">
            <phone></phone>
          </van-tab>
          <van-tab title="账号密码登陆">
            <account />
          </van-tab>
        </van-tabs>
      </div>
    </section>
  </div>
</template>
<script>
import Phone from '../components/Phone.vue';
import Account from '../components/Account.vue';
export default {
  components: {
    Phone,
    Account,
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
  },
};
</script>
<style scoped>
html,
body {
  height: 100%;
  width: 100%;
}
#login {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}
.head {
  height: 48px;
}
.van-nav-bar {
  height: 48px;
  background: #32d683;
}
.van-icon-arrow-left {
  height: 48px;
  line-height: 48px;
  color: #323232;
}
.van-nav-bar .van-nav-bar__title {
  height: 48px;
  line-height: 48px;
  font-size: 24px;
}
section {
  flex: 1;
  overflow: auto;
}
.van-icon-arrow-left {
  background-color: #32d683;
}
.van-tabs__line {
  background-color: #32d683;
}
.van-tab {
  font-size: 16px;
}
#sjdl .van-ellipsis {
  font-size: 16px;
}
</style>
<style>
.user .van-field__control {
  height: 40px;
}
</style>
