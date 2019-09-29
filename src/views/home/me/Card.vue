<template>
<div class="main">
<van-nav-bar
  title="我的卡包"
  right-text="按钮"
  :left-arrow="true"
  @click-left="onClickLeft"
  @click-right="onClickRight"
/>
<van-sticky :offset-top="31">
  <div class="count">
    <span>总计</span><i>111</i>
    <span>历史记录</span>
    <van-icon name="info-o" />
  </div>
</van-sticky>
</div>
</template>
<script>

export default {
  methods: {
    onClickLeft() {
      Toast('返回');
    },
    onClickRight() {
      Toast('按钮');
    }
  }
}
</script>
<style scoped>
.main{
  display:flex;
  flex-direction:column;
}
.main .van-nav-bar .van-icon-arrow-left{
  background:#fff;
}
.main .van-nav-bar{
  border-bottom:1px solid #ddd;
  background:#f00;
}
.main .van-sticky.van-sticky--fixed{
  font-size:16px;
  width:100px;
  height:100px;
   background:#ff0;
}

</style>
