<template>
  <div class="app">
    <!-- 顶部 -->
    <van-sticky>
      <van-nav-bar
        title="购物车"
        left-text="返回"
        right-text="编辑"
        left-arrow
        @click-right="onClickRight"
      />
    </van-sticky>

    <div class="card">
      <div class="card1">
        <van-checkbox class="left" v-model="checked" checked-color="#07c160"></van-checkbox>
        <van-card
          class="right"
          align="left"
          price="2.00"
          desc="123456"
          title="商品标题描述信息描述信息描述信息描述信息描述信息"
          thumb="https://img.yzcdn.cn/vant/t-thirt.jpg"
        >
          <div slot="bottom" class="card1Bottom">
            <span>￥2.00</span>
            <van-stepper v-model="value" class="step" />
          </div>
        </van-card>
      </div>
      <!-- card2 -->
      <div class="card1">
        <van-checkbox class="left" v-model="checked" checked-color="#07c160"></van-checkbox>
        <van-card
          class="right"
          align="left"
          price="2.00"
          title="商品标题描述信息描述信息描述信息描述信息描述信息"
          thumb="https://img.yzcdn.cn/vant/t-thirt.jpg"
        >
          <div slot="bottom" class="card1Bottom">
            <span>￥2.00</span>
            <van-stepper v-model="value" class="step" />
          </div>
        </van-card>
      </div>

      <!-- end -->
    </div>
    <!-- 结算部分1 -->
    <div class="allPrice" v-if="this.state">
      <van-checkbox class="van-checkbox" v-model="checked" checked-color="#07c160">全选</van-checkbox>
      <div class="price">
        <i>
          合计(不含优惠):
          <b>￥238</b>
        </i>
        <br />
        <span>已优惠:0.00</span>
      </div>
      <a>去结算</a>
    </div>
    <!-- 结算部分2  -->
    <div class="allPrice2" v-if="!this.state">
      <van-checkbox class="van-checkbox" v-model="checked" checked-color="#07c160">全选</van-checkbox>
      <span>移入收藏夹</span>
      <a>删除</a>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      value: 1,
      checked: true,
      state: true
    };
  },
  methods: {
    toggle(index) {
      this.$refs.checkboxes[index].toggle();
    },
    // 右侧编辑
    onClickRight() {
      this.state = !this.state;
    }
  },
  mounted() {
    // card();
  }
};
</script>

<style scoped>
.app {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
}
.card1 {
  display: flex;
  justify-content: space-around;
}
.allPrice {
  position: fixed;
  left: 0;
  bottom: 50px;
  height: 50px;
  width: 100%;
  background: #fff;
  border-bottom: 2px solid #eee;
}

.allPrice a {
  position: absolute;
  right: 10px;
  top: 0;
  display: block;
  width: 89px;
  height: 48px;
  background: rgba(254, 100, 84, 1);
  opacity: 1;
  float: right;
  line-height: 44px;
  text-align: center;
  color: #fff;
  font-size: 14px;
}
.allPrice .price {
  margin-top: 5px;
  text-align: right;
  position: absolute;
  right: 110px;
  top: 0;
  height: 50px;
  width: 150px;
  float: right;
}
.allPrice .price i {
  font-style: normal;
  width: 92px;
  height: 17px;
  font-size: 12px;
  font-family: PingFang SC;
  font-weight: 500;
  line-height: 17px;
  color: rgba(102, 102, 102, 1);
  opacity: 1;
}
.allPrice .price i b {
  font-size: 14px;
  font-family: PingFang SC;
  font-weight: 600;
  line-height: 20px;
  color: rgba(252, 96, 80, 1);
}
.allPrice .price span {
  width: 71px;
  height: 14px;
  font-size: 10px;
  font-family: PingFang SC;
  font-weight: 500;
  line-height: 14px;
  color: rgba(153, 153, 153, 1);
  opacity: 1;
}
.allPrice .van-checkbox {
  margin-left: 15px;
  margin-top: 15px;
  float: left;
  width: 70px;
}
.allPrice2 {
  position: fixed;
  left: 0;
  bottom: 50px;
  height: 50px;
  width: 100%;
  background: #fff;
  border-bottom: 2px solid #eee;
}
.allPrice2 span {
  font-size: 14px;
  height: 30px;
  width: 100px;
  border: 1px solid red;
  border-radius: 20px;
  position: absolute;
  top: 10px;
  right: 100px;
  text-align: center;
  line-height: 30px;
}
.allPrice2 a {
  font-size: 14px;
  height: 30px;
  width: 50px;
  border: 1px solid red;
  border-radius: 20px;
  position: absolute;
  top: 10px;
  right: 20px;
  text-align: center;
  line-height: 30px;
}
.allPrice2 .van-checkbox {
  margin-left: 15px;
  margin-top: 15px;
  float: left;
}

.card1 .left {
  width: 20px;
  float: left;
  margin-top: 50px;
  margin-left: 5px;
}
.card1 .right {
  float: left;
  width: 320px;
  background: #fff;
}
.card1Bottom span {
  float: left;
  color: red;
}
.card1Bottom .step {
  float: right;
}
.app {
  background: #f4f4f4;
}
.van-checkbox__label {
  font-size: 14px;
  color: red;
}
.van-checkbox {
  font-size: 14px;
  color: red;
}
</style>
