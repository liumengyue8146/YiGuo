<template>
  <div class="app">
    <!-- top -->
    <van-sticky>
      <van-nav-bar title="新品荟萃" left-arrow @click-left="onClickLeft" @click-right="onClickRight">
        <van-icon name="search" slot="right" />
      </van-nav-bar>
    </van-sticky>
    <van-action-sheet v-model="show" title="分享到">
      <hr />
      <br />
      <div class="fenxiang">
        <dl>
          <dt>
            <van-icon name="balance-pay" />
          </dt>
          <dd>QQ</dd>
        </dl>
        <dl>
          <dt>
            <van-icon name="balance-pay" />
          </dt>
          <dd>微信</dd>
        </dl>
        <dl>
          <dt>
            <van-icon name="balance-pay" />
          </dt>
          <dd>微博</dd>
        </dl>
      </div>
    </van-action-sheet>
    <!-- middle -->
    <img class="img01" src="@/assets/TheNewGood/TheNewGood01.png" />
    <div class="nav">每日鲜美上新</div>
    <!-- 商品列表展示 -->
    <div class="goods">
      <div class="perGood">
        <img src="@/assets/TheNewGood/TheNewGood01.png" />
        <p>
          惊喜价
          <i>19.19</i>
        </p>
        <h3>新西兰阳光奇异果哈哈哈哈哈哈</h3>
        <div class="price">
          <em>￥19.19</em>
          <span>
            <van-icon name="cart-o" />
          </span>
        </div>
      </div>
      <div class="perGood">
        <img src="@/assets/TheNewGood/TheNewGood01.png" />
        <p>
          惊喜价
          <i>19.19</i>
        </p>
        <h3>新西兰阳光奇异果哈哈哈哈哈哈</h3>
        <div class="price">
          <em>￥19.19</em>
          <span>
            <van-icon name="cart-o" />
          </span>
        </div>
      </div>
      <div class="perGood">
        <img src="@/assets/TheNewGood/TheNewGood01.png" />
        <p>
          惊喜价
          <i>19.19</i>
        </p>
        <h3>新西兰阳光奇异果哈哈哈哈哈哈</h3>
        <div class="price">
          <em>￥19.19</em>
          <span>
            <van-icon name="cart-o" />
          </span>
        </div>
      </div>
      <div class="perGood">
        <img src="@/assets/TheNewGood/TheNewGood01.png" />
        <p>
          惊喜价
          <i>19.19</i>
        </p>
        <h3>新西兰阳光奇异果哈哈哈哈哈哈</h3>
        <div class="price">
          <em>￥19.19</em>
          <span>
            <van-icon name="cart-o" />
          </span>
        </div>
      </div>
      <div class="perGood">
        <img src="@/assets/TheNewGood/TheNewGood01.png" />
        <p>
          惊喜价
          <i>19.19</i>
        </p>
        <h3>新西兰阳光奇异果哈哈哈哈哈哈</h3>
        <div class="price">
          <em>￥19.19</em>
          <span>
            <van-icon name="cart-o" />
          </span>
        </div>
      </div>
      <div class="perGood">
        <img src="@/assets/TheNewGood/TheNewGood01.png" />
        <p>
          惊喜价
          <i>19.19</i>
        </p>
        <h3>新西兰阳光奇异果哈哈哈哈哈哈</h3>
        <div class="price">
          <em>￥19.19</em>
          <span>
            <van-icon name="cart-o" />
          </span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      show: false,
    };
  },
  methods: {
    onClickRight() {
      this.show = true;
    },
    onClickLeft() {
      this.$router.go(-1);
    },
  },
};
</script>
<style scoped>
.app {
  height: 100%;
  width: 100%;
}
.img01 {
  width: 100%;
}
.nav {
  height: 50px;
  width: 100%;
  background: #fd8900;
  margin: 10px 0;
  color: #fff;
  line-height: 50px;
  text-align: center;
  font-size: 20px;
}
.van-action-shee {
  width: 100%;
  height: 200px;
}
.fenxiang {
  display: flex;
  justify-content: space-around;
  height: 80px;
}
.fenxiang dl i {
  font-size: 26px;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.fenxiang dl {
  height: 80px;
  font-size: 16px;
}
.goods {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  height: 380px;
  width: 100%;
}
.perGood {
  padding: 5px;
  position: relative;
  width: 26%;
  height: 170px;
  background: rgba(255, 255, 255, 1);
  border: 1px solid rgba(238, 238, 238, 1);
  box-shadow: 0px 1px 10px rgba(187, 187, 187, 0.5);
  opacity: 1;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}
.perGood .price {
  height: 30px;
  width: 100%;
}
.perGood img {
  height: 70px;
  width: 100%;
}
.perGood p {
  width: 84px;
  height: 17px;
  border: 1px solid rgba(91, 203, 167, 1);
  opacity: 1;
  border-radius: 10px;
}
.perGood h3 {
  width: 100%;
  height: 32px;
  font-size: 11px;
  font-family: PingFang SC;
  font-weight: 600;
  line-height: 16px;
  color: rgba(51, 51, 51, 1);
  opacity: 1;
  text-align: left;
}
.perGood em {
  position: absolute;
  font-style: normal;
  bottom: 10px;
  left: 0px;
  display: block;
  width: 50px;
  height: 20px;
  font-size: 10px;
  font-family: PingFang SC;
  font-weight: 400;
  line-height: 14px;
  font-size: 16px;
  color: rgba(237, 80, 80, 1);
  opacity: 1;
}
.perGood span {
  position: absolute;
  right: 10px;
  bottom: 10px;
  display: block;
  height: 20px;
  width: 20px;
  background: #56bb82;
  border-radius: 50%;
  text-align: center;
  line-height: 20px;
}
.perGood .van-ico {
  width: 14px;
  height: 10px;
  background: rgba(255, 0, 0, 1);
}
</style>
