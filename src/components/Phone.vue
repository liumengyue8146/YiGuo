<template>
  <div class="phone">
    <div class="nub">
      <input class="phoneNumber" type="text" placeholder="请输入手机号" />
      <div class="yzm">
        <input class="yzm-left" type="text" placeholder="请输入验证码" />
        <span>获取验证码</span>
      </div>
    </div>
  </div>
</template>
<style  scoped>
.nub {
  margin: 80px 46px 0 46px;
}
.phoneNumber {
  border-left: 0;
  border-right: 0;
  height: 80px;
  line-height: 80px;
  font-size: 30px;
}
.yzm {
  display: flex;
}
.yzm-left {
  border-top: 0;
  border-left: 0;
  border-right: 0;
  height: 80px;
  line-height: 80px;
  font-size: 30px;
}
.yzm span {
  font-size: 12px;
  display: block;
  width: 100px;
}
</style>
