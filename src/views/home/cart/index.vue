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

    <div class="card" v-for="(item, index) in this.mycart" :key="index">
      <div class="card1">
        <van-checkbox class="left" v-model="item.checked" checked-color="#07c160" @change="istotal"></van-checkbox>
        <van-card
          class="right"
          align="left"
          :price="item.price"
          :desc="item.description"
          :title="item.name"
          :thumb="item.coverImg"
        >
          <div slot="bottom" class="card1Bottom">
            <span class="perPrice">￥{{item.price*item.quantity}}</span>
            <van-stepper
              v-model="item.quantity"
              class="step"
              @change="istotal"
              @plus="plus(item)"
              @minus="minus(item)"
            />
          </div>
        </van-card>
      </div>
    </div>
    <!-- 结算部分1 -->
    <div class="allPrice" v-if="this.state">
      <van-checkbox class="van-checkbox" v-model="checked" checked-color="#07c160">全选</van-checkbox>
      <div class="price">
        <i>
          合计(不含运费):
          <b @click="total" id="allPrice">￥0</b>
        </i>
        <br />
        <span>已优惠:0.00</span>
      </div>
      <a @click="submitHandle">提交订单</a>
    </div>
    <!-- 结算部分2  -->
    <div class="allPrice2" v-if="!this.state">
      <van-checkbox class="van-checkbox" v-model="checked" checked-color="#07c160">全选</van-checkbox>
      <span>移入收藏夹</span>
      <a @click="removemycart">删除</a>
    </div>
  </div>
</template>
<script>
import { mapState, mapActions } from 'vuex';
import { getToken } from '@/utils/auth';
import { async, all } from 'q';
import { Dialog } from 'vant';
export default {
  created() {
    //const token = getToken();
    this.getcart(this.token).then(() => {
      this.total();
    });
  },
  data() {
    return {
      token: getToken(),
      value: 1,
      checked: true,
      state: true,
      remove: [], //删除购物车的id
      orderDetails: [],
    };
  },
  computed: {
    ...mapState('product', {
      carts: 'carts',
      mycart: 'mycart',
    }),
  },
  methods: {
    ...mapActions('product', {
      getcart: 'getcart',
      getdetail: 'getdetail',
      addcart: 'addcart',
      removecart: 'removecart',
    }),
    toggle(index) {
      this.$refs.checkboxes[index].toggle();
    },
    // 右侧编辑
    onClickRight() {
      this.state = !this.state;
      //如果是在删除页，则初始化要删除的购物车id，this.remove
      if (!this.state) {
      }
    },

    //商品数量加1存到后台购物车中
    plus(item) {
      this.addcart({
        token: this.token,
        productid: item._id,
        quantity: 1,
      });
    },

    //商品数量减1存到后台购物车中
    minus(item) {
      this.addcart({
        token: this.token,
        productid: item._id,
        quantity: -1,
      });
    },

    //结算页还是编辑页
    istotal(status) {
      this.editcheckbox(status);
      if (this.state) {
        this.total(); //如果在结算页执行结算函数,否则执行删除购物车
      } else {
        //this.removemycart();
      }
    },

    //删除购物车
    removemycart() {
      Dialog.confirm({
        title: '确认删除吗',
      })
        .then(() => {
          this.remove = [];
          for (let item of this.mycart) {
            if (item.checked) {
              this.remove.push(item.cartid);
            }
          }
          console.log('要删除的购物车', this.remove);
          this.removecart(this.remove).then(() => {
            window.location.reload();
          });
        })
        .catch(() => {});
    },

    //复选框的变化
    editcheckbox(status) {
      //是否选中这条商品信息
      if (status == false) {
        this.checked = false;
      } else if (status == true) {
        let num = 0;
        document
          .querySelectorAll('.left.van-checkbox')
          .forEach((item, index) => {
            if (item.getAttribute('aria-checked') == 'true') {
              num++;
            }
          });
        if (num == this.mycart.length - 1) {
          this.checked = true;
        }
      }
    },

    //计算总价
    total() {
      //let perProduct = document.querySelectorAll('.card1');
      let allPrice = 0;
      for (let item of this.mycart) {
        if (item.checked) {
          allPrice += item.quantity * item.price;
        }
      }
      document.getElementById('allPrice').innerText = '￥' + allPrice;
      return allPrice;
    },

    //提交订单,数量，商品id，商品单价[{quantity,product,price}]
    submitHandle() {
      this.orderDetails = [];
      this.mycart.forEach(item => {
        if (item.checked) {
          let obj = {};
          obj.product = item.cartid;
          obj.price = item.price;
          obj.quantity = item.quantity;
          this.orderDetails.push(obj);
        }
      });
      console.log(this.orderDetails);
      this.orderDetails.push(this.total());
      this.$router.push({
        name: 'payforOrder',
        params: { orderDetails: this.orderDetails },
      });
    },
  },
};
</script>

<style scoped>
.app {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
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
.card1 {
  display: flex;
  justify-content: space-around;
}
.card .card1Bottom {
  height: 30px;
  width: 100%;
  position: absolute;
  display: flex;
  justify-content: space-between;
  left: 0;
  bottom: 0;
}

.van-card__bottom {
  flex-grow: 1;
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
