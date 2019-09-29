<template>
  <div id="login">
    <van-nav-bar title="会员登录" left-arrow @click-left="onClickLeft" />
    <div class="main"></div>
  </div>
</template>
<script>
export default {
  methods: {
    onClickLeft() {
      // this.$router.go(-1);
    }
  }
};
</script>
<style scoped>
html,
body {
  height: 100%;
}
html {
  font-size: 26.666667vw;
}
#login {
  height: 100%;
  display: flex;
  flex-direction: column;
}
.main {
  flex: 1;
  overflow: auto;
}
.van-nav-bar {
  height: 3rem;
  line-height: 3rem;
  font-size: 0.24rem;
  color: #323233;
}
.van-icon,
.van-icon::before {
  color: #323233;
}
</style>
