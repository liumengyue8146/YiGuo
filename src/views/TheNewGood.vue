<template>
  <div class="app">
    <!-- top -->
    <van-sticky>
      <van-nav-bar
        title="新品荟萃"
        right-text="分享"
        @click-left="onClickLeft"
        @click-right="onClickRight"
        left-arrow
      />
    </van-sticky>
    <!-- middle -->
    <img class="img01" src="@/assets/TheNewGood/TheNewGood01.png" />
    <div class="nav"></div>
  </div>
</template>

<style scoped>
.app {
  height: 100%;
  width: 100%;
}
.img01 {
  width: 100%;
}
</style>
