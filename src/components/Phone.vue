<template>
  <div class="phone">
    <div class="nub">
      <van-cell-group>
        <van-field v-model="value" placeholder="请输入手机号" />
      </van-cell-group>
      <van-cell-group>
        <van-field v-model="sms" center clearable placeholder="请输入短信验证码">
          <van-button slot="button" size="small" type="primary">获取验证码</van-button>
        </van-field>
      </van-cell-group>
      <span>未注册过的手机将自动注册易果生鲜账户</span>
      <br />
      <br />
      <div class="loginButton">
        <van-button type="primary" size="large">登陆</van-button>
      </div>
    </div>
    <div class="elseLogin">
      <em></em>
      <span>其他登陆方式</span>
      <em></em>
    </div>
    <div class="qqweibo">
      <div class="qq">
        <span>QQ登陆</span>
      </div>
      <div class="weibo">
        <span>微博登陆</span>
      </div>
    </div>
    <div class="xieyi">
      <input type="checkbox" checked="checked" />
      <span>我已阅读并同意</span>
      <a>《易果服务协议》</a>
      <span>和</span>
      <a>《隐私协议》</a>
    </div>
  </div>
</template>
<style  scoped>
.nub {
  margin: 60px 46px 0 46px;
}
.van-field__body {
  height: 40px;
  font-size: 16px;
}
.yzm {
  display: flex;
}
.nub span {
  font-size: 12px;
  color: #cecece;
}
.loginButton .van-button__text {
  font-size: 20px;
  color: white;
}
.elseLogin {
  margin: 40px 46px 0 46px;
  font-size: 12px;
  color: #cecece;
}
.elseLogin em {
  display: inline-block;
  width: 35%;
  height: 1px;
  background-color: #cecece;
}
.qqweibo {
  margin: 20px 46px 20px 46px;
  display: flex;
  justify-content: space-between;
  font-size: 18px;
}
.qq {
  width: 126px;
  height: 36px;
  line-height: 36px;
  color: #cecece;
  background: url('../assets/QQ.png') no-repeat 2px;
  position: relative;
  border-radius: 5px;
  background-color: #fbfbfb;
}
.qq span {
  position: absolute;
  right: 10px;
}
.weibo {
  width: 126px;
  height: 36px;
  line-height: 36px;
  color: #cecece;
  background: url('../assets/weibo.png') no-repeat 2px;
  position: relative;
  background-color: #fbfbfb;
  border-radius: 5px;
}
.weibo span {
  position: absolute;
  right: 8px;
}
.xieyi {
  margin: 10px 25px;
  font-size: 10px;
}
.xieyi a {
  color: #32d683;
}
</style>
