<template>
  <div class="main">
    <van-nav-bar title="我的订单" :left-arrow="true" @click-left="onClickLeft" />
    <van-tabs v-model="active" title-active-color="#0BB379" color="#0BB379">
      <van-tab title="全部">内容 1</van-tab>
      <van-tab title="待支付">内容 2</van-tab>
      <van-tab title="待收货">内容 3</van-tab>
      <van-tab title="待评价">内容 4</van-tab>
    </van-tabs>
    <!-- <div class="go" v-if="show">去逛逛</div> -->
    <div class="product">
      <div class="people">--大家都在买--</div>
      <div class="pro-content">
        <van-swipe @change="onChange">
          <van-swipe-item>
            <figure>
              <figcaption>
                <img src="./../../../../public/images/fruit.png" alt />
              </figcaption>
              <div class="info">
                <h4>新西兰阳光绿奇异果6个105-125g/个</h4>
                <div class="desc">
                  <div class="price">￥12</div>
                  <div class="num" @click="addNum">+</div>
                </div>
              </div>
            </figure>
            <figure>
              <figcaption>
                <img src="./../../../../public/images/fruit.png" alt />
              </figcaption>
              <div class="info">
                <h4>新西兰阳光绿奇异果6个105-125g/个</h4>
                <div class="desc">
                  <div class="price">￥12</div>
                  <div class="num" @click="addNum">+</div>
                </div>
              </div>
            </figure>
          </van-swipe-item>
          <van-swipe-item>
            <figure>
              <figcaption>
                <img src="./../../../../public/images/fruit.png" alt />
              </figcaption>
              <div class="info">
                <h4>新西兰阳光绿奇异果6个105-125g/个</h4>
                <div class="desc">
                  <div class="price">￥12</div>
                  <div class="num" @click="addNum">+</div>
                </div>
              </div>
            </figure>
            <figure>
              <figcaption>
                <img src="./../../../../public/images/fruit.png" alt />
              </figcaption>
              <div class="info">
                <h4>新西兰阳光绿奇异果6个105-125g/个</h4>
                <div class="desc">
                  <div class="price">￥12</div>
                  <div class="num" @click="addNum">+</div>
                </div>
              </div>
            </figure>
          </van-swipe-item>
          <van-swipe-item>
            <figure>
              <figcaption>
                <img src="./../../../../public/images/fruit.png" alt />
              </figcaption>
              <div class="info">
                <h4>新西兰阳光绿奇异果6个105-125g/个</h4>
                <div class="desc">
                  <div class="price">￥12</div>
                  <div class="num" @click="addNum">+</div>
                </div>
              </div>
            </figure>
            <figure>
              <figcaption>
                <img src="./../../../../public/images/fruit.png" alt />
              </figcaption>
              <div class="info">
                <h4>新西兰阳光绿奇异果6个105-125g/个</h4>
                <div class="desc">
                  <div class="price">￥12</div>
                  <div class="num" @click="addNum">+</div>
                </div>
              </div>
            </figure>
          </van-swipe-item>
        </van-swipe>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      active: 0,
      show: 0,
      index: 0
    };
  },
  methods: {
    onClickLeft() {
      Toast("返回");
    },
    buyCard() {
      console.log("去买卡");
    },
    bindCard() {
      console.log("去绑卡");
    },
    addNum() {
      console.log(this.$el, this.index);
      console.log(
        document.querySelectorAll(".van-swipe-item")[this.indedx].find(".num")
      );
    },
    onChange(i) {
      this.index = i;
      //var oItem = document.querySelectorAll(".van-swipe-item")[this.indedx];
      //var oPrice = oItem.children(".num");
    }
  }
};
</script>
<style scoped>
.main {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;

  background: #f4f4f4 url("./../../../../public/images/noorder.png") no-repeat
    130px 200px;
}
.main .van-nav-bar {
  background: #fff;
  height: 40px;
  border-bottom: 1px solid #ddd;
}
.main .van-nav-bar__title {
  height: 40px;
  line-height: 40px;
  font-size: 20px;
  color: #363636;
}
.main .van-icon-arrow-left {
  background: #fff;
}
.main .van-icon-arrow-left {
  color: #000;
  width: 40px;
  height: 40px;
  font-size: 20px;
  line-height: 40px;
}
.main .van-tabs.van-tabs__nav--line {
  font-size: 16px;
}
.main .van-tabs.van-tabs--line {
  /* height: 150px; */
  flex-grow: 1;
}
.main .go {
  width: 133px;
  height: 34px;
  border: 1px solid #0bb379;
  color: #0bb379;
  font-size: 20px;
  line-height: 34px;
  text-align: center;
  border-radius: 10px;
  display: fixed;
  margin-top: 60%;
  margin-left: 34%;
}
.main .product {
  width: 100%;
  height: 260px;
  background: #fff;
}
.main .product .people {
  height: 60px;
  line-height: 60px;
  font-size: 20px;
  text-align: center;
  width: 100%;
}
.main .product .pro-content {
  height: 200px;
}
.main .product .pro-content .van-swipe {
  height: 200px;
}
.main .product .pro-content .van-swipe .van-swipe-item {
  width: 100%;
  display: flex;
}
.main .product .pro-content .van-swipe .van-swipe-item figure {
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.main .product .pro-content .van-swipe .van-swipe-item figure img {
  width: 124px;
  height: 89px;
}
.main .product .pro-content .van-swipe .van-swipe-item figure .info {
  margin-top: 5px;
}
.main .product .pro-content .van-swipe .van-swipe-item h4 {
  width: 126px;
  height: 40px;
  line-height: 20px;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
}
.main .product .pro-content .van-swipe .van-swipe__indicator {
  width: 0px;
}
.main .pro-content .van-swipe-item .desc {
  width: 126px;
  height: 24px;
  font-size: 14px;
  line-height: 24px;
  margin-top: 5px;
  display: flex;
  justify-content: space-between;
}
.main .pro-content .van-swipe-item .desc .price {
  color: #ed5050;
}
.main .pro-content .van-swipe-item .desc .num {
  width: 22px;
  height: 22px;
  font-size: 16px;
  text-align: center;
  line-height: 22px;
  color: #fff;
  border-radius: 50%;
  background: #02b27b;
}
</style>
