<template>
  <!-- 订单结算页 -->
  <div class="app">
    <!-- top -->
    <van-sticky>
      <van-nav-bar title="订单结算" left-arrow @click-left="onClickLeft" @click-right="onClickRight" />
    </van-sticky>
    <!-- middle -->
    <div id="middle">
      <!--  -->
      <router-link :to="{name:'addressList',params:{current:1}}">
        <div class="address">
          <van-icon class="icon1" name="location-o" />
          <van-cell class="cell1" title="添加收获地址" is-link />
        </div>
      </router-link>

      <van-cell :title="'共'+(this.order.length-1)+'种商品'" is-link value="内容" />
      <div class="goods">
        <img src="@/assets/food01.png" />
        <img src="@/assets/food01.png" />
        <img src="@/assets/food01.png" />
        <img src="@/assets/food01.png" />
      </div>
      <div class="middle">
        <van-cell title="收货地址" is-link :value="this.defaultaddress.address" />
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
        <router-link :to="{name:'helpCenter'}">
          <van-cell value=" " is-link>
            <template slot="title">
              <span class="custom-title">
                优惠券
                <i class="numYouhui">5</i>
                <!-- <van-goods-action-icon icon="chat-o" info="5" /> -->
              </span>
            </template>
          </van-cell>
        </router-link>
      </div>
      <!-- 合计 -->
      <div class="middle">
        <van-cell-group>
          <van-cell title="商品合计" value="￥0" />
          <van-cell title="运费" value="￥0" />
          <van-cell title="优惠活动" value="￥0" />
        </van-cell-group>
      </div>
      <!-- 应付金额 -->
      <div class="middle">
        <van-cell-group>
          <van-cell title="应付金额" :value="'￥' +this.order[this.order.length-1]" />
        </van-cell-group>
      </div>
      <!-- 结算 -->
      <div class="allprice">
        <p>
          应付金额
          <em id="orderprice">￥{{this.order[this.order.length-1]}}</em>
        </p>
        <a @click="submitOrder">去结算</a>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState, mapActions, mapMutations } from 'vuex';
import { getToken } from './../utils/auth';
export default {
  data() {
    return {
      orderDetails: [],
    };
  },
  created() {
    //this.orderDetails = this.$route.params.orderDetails;
    console.log('商品订单详情', this.$route.params.orderDetails);
    if (this.$route.params.orderDetails) {
      this.updateOrder(this.$route.params.orderDetails);
    }

    //console.log(33, this.$route.params.orderDetails);
  },
  computed: {
    ...mapState('address', {
      addresslist: 'addresslist',
      defaultaddress: 'defaultaddress',
      order: 'order',
    }),
  },
  methods: {
    ...mapMutations('address', {
      updateOrder: 'updateOrder',
    }),
    ...mapActions('order', {
      addpay: 'addpay',
    }),
    onClickLeft() {},
    onClickRight() {},
    submitOrder() {
      console.log(44, this.order);
      console.log(this.defaultaddress);
      let obj = this.defaultaddress;
      obj.orderDetails = this.order.splice(0, this.order.length - 1);
      obj.userid = getToken();
      this.addpay(obj).then(() => {
        this.$router.push({
          name: 'myorder',
        });
      });
    },
  },
};
</script>
<style scoped>
.app {
  height: 100%;
  width: 100%;
  background: #eee;
}
.allprice {
  position: relative;
  height: 50px;
  width: 100%;
}
.allprice p {
  position: absolute;
  right: 150px;
  width: 136px;
  height: 21px;
  font-size: 15px;
  font-family: PingFang SC;
  font-weight: 600;
  line-height: 21px;
  opacity: 1;
}
.allprice {
  height: 50px;
  width: 100%;
  background: #fff;
}
.allprice p em {
  color: rgba(252, 113, 99, 1);
  font-style: normal;
}
.allprice a {
  position: absolute;
  right: 0;
  font-size: 18px;
  color: #fff;
  text-align: center;
  line-height: 54px;
  width: 148px;
  height: 54px;
  background: rgba(254, 100, 84, 1);
  opacity: 1;
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
  margin-bottom: 5px;
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
  height: 50px;
  width: 100%;
  background: #fff;
  display: flex;
}
.goods img {
  height: 50px;
  width: 50px;
}
/* 解决顶部 */
.van-sticky .van-nav-bar {
  padding: 10px 0;
}
.van-sticky .van-icon {
  margin: 0;
  background: #fff;
  margin-top: -4px;
  color: #000;
}
</style>
