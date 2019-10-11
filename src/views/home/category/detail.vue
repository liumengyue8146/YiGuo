<template>
  <div class="detail">
    <div class="navBar">
      <van-icon name="arrow-left" @click="backTo" />
      <van-icon name="share" />
      <van-icon name="more-o" />
    </div>
    <div class="cartContent">
      <div class="displaySwipe">
        <van-swipe indicator-color="white">
          <van-swipe-item v-for=" i in 3" :key="i">
            <!-- <img src="../../../assets/liulian.jpg" alt /> -->
            <img :src="product.coverImg" alt="图片加载失败" />
          </van-swipe-item>
        </van-swipe>
      </div>
      <h1 class="detailName">{{this.product.name}}</h1>
      <div class="detailDesc">
        <span>第二份19.9元</span>
        <p>{{this.product.name}}</p>
      </div>
      <div class="detailPrice">
        <span>￥{{this.product.price}}</span>
        <i>产地：中国</i>
      </div>
      <div class="detailSales">
        <p>促销</p>
        <span>优惠</span>
      </div>
      <div class="sevenSales">
        <van-icon name="info-o" />
        <p>不支持无理由退货</p>
      </div>
      <div class="grayA"></div>
      <div class="detailStand">
        <p>规格</p>
        <span>300g/每盒</span>
      </div>
      <div class="detailQua">
        <p>数量</p>
        <van-stepper v-model="product.quantity" />
      </div>
    </div>
    <div class="addCart">
      <div class="cartIcon" @click="goCartLeft">
        <van-icon name="shopping-cart-o" icon="购物车" />
        <p>购物车</p>
      </div>
      <div class="addCartBtn" @click="goCartRight">加入购物车</div>
    </div>
  </div>
</template>
<script>
import { Toast } from 'vant';
import { mapState, mapActions } from 'vuex';
import { getToken, setToken, removeToken } from '@/utils/auth';
export default {
  created() {
    this.product = this.$route.params.detail;
    console.log(this.$route.params.detail);
  },
  data() {
    return {
      value: 1,
      product: {
        coverImg: '',
        name: '',
        price: '',
        descriptions: '',
        _id: '',
        quantity: 1,
      },
    };
  },
  methods: {
    ...mapActions('product', {
      addcart: 'addcart',
    }),

    onClickLeft() {
      alert('返回');
    },
    onClickRight() {
      alert('按钮');
    },
    backTo() {
      this.$router.go(-1); //路由后退
    },
    goCartLeft() {
      this.$router.push({
        name: 'cart',
      });
    },
    goCartRight() {
      this.addcart({
        productid: this.product._id,
        token: getToken(),
        quantity: this.product.quantity,
      }).then(res => {
        if (res.code == 'success') {
          Toast('添加成功');
        } else {
          Toast('添加失败');
        }
      });
      // this.$router.push({
      //   name: 'cart',
      // });
    },
  },
};
</script>
<style scoped>
@import '../../../css/detail.scss';
</style>
