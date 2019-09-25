<template>
  <div class="app">
    <!-- top -->
    <van-sticky>
      <van-nav-bar title="订单结算" left-arrow @click-left="onClickLeft" @click-right="onClickRight" />
    </van-sticky>
    <!-- middle -->
    <div id="middle">
      <div class="address">
        <van-icon class="icon1" name="location-o" />
        <van-cell class="cell1" title="添加收获地址" is-link />
      </div>

      <van-cell title="共4件商品" is-link value="内容" />
      <div class="goods">
        <img src="@/assets/food01.png" />
        <img src="@/assets/food01.png" />
        <img src="@/assets/food01.png" />
        <img src="@/assets/food01.png" />
      </div>
      <div class="middle">
        <van-cell title="配送日期" is-link value="该收获地不支持配送" />
        <van-cell title="发票日期" is-link value="不支持发票" />
        <van-cell>
          <!-- 使用 title 插槽来自定义标题 -->
          <template slot="title">
            <span class="custom-title">留言</span>
            <van-tag plain>如有特殊要求，请在此处留言</van-tag>
          </template>
        </van-cell>
      </div>
      <!-- 优惠券 -->
      <div class="middle">
        <van-cell value=" " is-link>
          <template slot="title">
            <span class="custom-title">
              优惠券
              <i class="numYouhui">5</i>
              <!-- <van-goods-action-icon icon="chat-o" info="5" /> -->
            </span>
          </template>
        </van-cell>
      </div>
    </div>
  </div>
</template>

<style   scoped>
.app {
  height: 100%;
  width: 100%;
  background: #eee;
}
.middle {
  margin: 5px 0;
}
.middle van-cell {
  margin-bottom: 5px;
}
.van-tag {
  border: none;
}
.van-cell .numYouhui {
  background: red;
  display: inline-block;
  height: 20px;
  width: 20px;
  color: #fff;
  text-align: center;
  line-height: 20px;
  border-radius: 50%;
}
.van-goods-action-icon {
  margin: 0;
}
.address {
  display: flex;
  line-break: 50px;
  height: 60px;
  margin-top: 3px;
  margin-bottom: 10px;
  width: 100%;
  background: rgb(255, 255, 255);
}
.cell1 {
  padding-top: 15px;
  height: 60px;
  float: right;
}
.address .icon1 {
  float: left;
  font-size: 30px;
  color: green;
  margin-left: 5px;
  margin-top: 10px;
  padding-bottom: 10px;
}
#middle {
  text-align: left;
}
.goods {
  height: 100px;
  width: 100%;
  background: pink;
}
.goods img {
  height: 50px;
  width: 50px;
}
</style>
