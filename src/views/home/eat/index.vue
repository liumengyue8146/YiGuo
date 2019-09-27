<template>
  <div class="main">
    <van-nav-bar title="吃饭吧-易果内容频道" :left-arrow="false" :fixed="true" @click-right="onClickRight">
      <img src="./../../../../public/images/eat/share.png" name="search" slot="right" />
    </van-nav-bar>
    <van-popup v-model="show" position="top">
      <van-grid>
        <van-grid-item icon="friends" text="联系人" />
        <van-grid-item icon="alipay" text="支付宝" />
        <van-grid-item icon="wechat" text="微信" />
        <van-grid-item icon="music" text="我的音乐" />
      </van-grid>
    </van-popup>
    <section>
      <van-tabbar route :fixed="false">
        <van-tabbar-item :to="{name:'zuomeishi'}">
          <span>做美食</span>
          <img slot="icon" src="./../../../../public/images/eat/meishi.png" />
        </van-tabbar-item>
        <van-tabbar-item icon="search" :to="{name:'zhangzhishi'}">
          <span>涨知识</span>
          <img slot="icon" src="./../../../../public/images/eat/zhangzhishi.png" />
        </van-tabbar-item>
        <van-tabbar-item icon="setting-o" :to="{name:'shenghuojia'}">
          <span>生活家</span>
          <img slot="icon" src="./../../../../public/images/eat/shenghuojia.png" />
        </van-tabbar-item>
        <van-tabbar-item></van-tabbar-item>
        <van-tabbar-item></van-tabbar-item>
        <van-tabbar-item></van-tabbar-item>
      </van-tabbar>
      <div class="line"></div>
      <router-view />
    </section>
  </div>
</template>
<script>
import eat from "./../../../css/eat.css";
export default {
  created() {
    this.$route.push({ name: "zuomeishi" });
  },
  methods: {
    onClickRight() {
      this.show = true;
    }
  },
  data() {
    return {
      active: 0,
      show: false,
      icon: {
        normal: "//img.yzcdn.cn/icon-normal.png",
        active: "./../../../../public/images/eat/share.png"
      }
    };
  }
};
</script>
<style scoped>
@import "./../../../css/eat.css";
</style>

