<template>
  <div class="home">
    <router-view />
    <van-tabbar route>
      <van-tabbar-item :to="{name:'homesmall'}" icon="home-o">首页</van-tabbar-item>
      <van-tabbar-item :to="{name:'category'}" icon="search" dot>分类</van-tabbar-item>
      <van-tabbar-item :to="{name:'eat'}" icon="search">吃饭吧</van-tabbar-item>
      <van-tabbar-item :to="{name:'cart'}" icon="friends-o">购物车</van-tabbar-item>
      <van-tabbar-item :to="{name:'me'}" icon="manager">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>
<style scoped>
.bottom {
  height: 50px;
}
</style>




