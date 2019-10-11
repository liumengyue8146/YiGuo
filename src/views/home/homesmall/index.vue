<template>
  <div class="shouye">
    <div class="header">
      <van-dropdown-menu active-color="#ee0a24">
        <van-dropdown-item v-model="value" :options="option" />
      </van-dropdown-menu>

      <van-search
        placeholder="请输入商品样式"
        v-model="value1"
        shape="round"
        background="#32d683"
        @search="onSearch"
      />
      <van-icon name="scan" color="white" size="22px" style="margin-left:15px" />
    </div>
    <section style="overflow:auto;padding-bottom:80px" @scroll="onScroll">
      <div class="swipe">
        <van-swipe :autoplay="3000" indicator-color="red" indicator-background-color="black">
          <van-swipe-item v-for="(image, index) in images" :key="index">
            <img v-lazy="image" style="width:375px;height:150px" />
          </van-swipe-item>
        </van-swipe>
      </div>

      <nav>
        <figure>
          <img src="./../../../../public/images/1.jpg" style alt="图片加载失败" />
          <figcaption>买二付一</figcaption>
        </figure>
        <router-link :to="{name:'theNewGood'}">
          <figure>
            <img src="./../../../../public/images/1.jpg" alt="图片加载失败" />
            <figcaption>新品荟萃</figcaption>
          </figure>
        </router-link>
        <router-link :to="{name:'memberEnjoy'}">
          <figure>
            <img src="./../../../../public/images/1.jpg" alt="图片加载失败" />
            <figcaption>会员尊享</figcaption>
          </figure>
        </router-link>
        <router-link :to="{name:'coinDetails'}">
          <figure>
            <img src="./../../../../public/images/1.jpg" alt="图片加载失败" />
            <figcaption>银行活动</figcaption>
          </figure>
        </router-link>
      </nav>
      <div class="logo">
        <h3>
          <em class="logol">易果</em>

          <span class="logor">快报</span>
        </h3>
        <p>
          <span>营业资讯公示，详情请点击查询</span>
          <a>
            详情
            <span>&gt;</span>
          </a>
        </p>
      </div>
      <div class="bigLogo">
        <img src="./../../../../public/images/logo.png" style="width:100%;height:100px" />
      </div>
      <div class="countdown">
        <h3>限时抢购</h3>
        <div class="count">
          <h4>
            <span>00:00</span>
            <i>专场</i>
          </h4>
          <van-count-down :time="time">
            <template v-slot="timeData">
              <span class="item">{{ timeData.hours }}</span>
              <span class="item">{{ timeData.minutes }}</span>
              <span class="item">{{ timeData.seconds }}</span>
            </template>
          </van-count-down>
          <span>进行中</span>
        </div>
      </div>
      <div class="product">
        <!--  v-for="item in 3" :key="item.id" -->
        <div class="productLine">
          <figure v-for="(item,index) in this.showproducts" :key="index">
            <img :src="item.coverImg" />
            <figcaption>{{item.name}}</figcaption>
          </figure>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
import { mapState, mapActions } from 'vuex';
export default {
  created() {
    this.getproduct().then(() => {
      this.showproducts = this.products[8];
    });
  },
  mounted() {
    this.cloneObj = document.querySelector('.productLine');
    this.sectionObj = document.querySelector('section');
    this.parentObj = document.querySelector('.product');
  },
  data() {
    return {
      value: 0,
      value1: '',
      time: 30 * 60 * 60 * 1000,
      option: [
        { text: '上海', value: 0 },
        { text: '北京', value: 1 },
        { text: '杭州', value: 2 },
      ],
      src: '',
      images: [
        'http://img06.yiguoimg.com/d/others/180629/9288725230134493.jpg',
        'http://img06.yiguoimg.com/d/others/180629/9288725230167261.jpg',
        'http://img05.yiguoimg.com/d/others/180629/9288725230200029.jpg',
        'http://img07.yiguoimg.com/d/others/180629/9288725230232797.jpg',
        'http://img06.yiguoimg.com/d/others/180629/9288725230101725.jpg',
      ],
      productss: [
        { id: '1', name: '苹果', url: './../../../../public/images/3.jpg' },
      ],
      showproducts: [],
      sectionObj: {},
      cloneObj: {}, //图片不断加载克隆一个对象出来
      parentObj: {},
    };
  },
  computed: {
    ...mapState('product', {
      products: 'products',
    }),
  },
  methods: {
    ...mapActions('product', {
      getproduct: 'getproduct',
    }),
    onConfirm() {
      this.$refs.item.toggle();
    },
    onSearch() {},

    onScroll() {
      let top = this.sectionObj.scrollTop; // 滚动高度

      //说明滚到底部了
      if (
        this.sectionObj.scrollHeight - top == this.sectionObj.clientHeight &&
        top < 3000
      ) {
        let pro = this.cloneObj.cloneNode(true);
        this.parentObj.appendChild(pro);
      }
    },
  },
};
</script>

<style>
.shouye {
  width: 100%;
  height: 100%;
  font-size: 12px;
  line-height: 30px;
  display: flex;
  flex-direction: column;
  position: relative;
}
.shouye .header {
  height: 42px;
  width: 100%;
  display: flex;
  background: #32d683;
  align-items: center;

  top: 0;
  left: 0;
}
.shouye .header .van-hairline--top-bottom {
  height: 100%;
}
.shouye section {
  overflow: auto;
  width: 100%;
  height: 550px;
  position: fixed;
  top: 42px;
  left: 0;
}
.shouye .van-dropdown-menu {
  background: #32d683;
  padding-right: 15px;
  padding-left: 5px;
  /* height: 19px; */
}
.shouye .header .van-dropdown-menu__title .van-ellipsis {
  color: #fff;
}
.shouye .van-dropdown-menu__title::after {
  border: 5px solid;
  border-color: transparent transparent #fff #fff;
  top: 40%;
  right: -8px;
}
.shouye .van-search {
  width: 250px;
  margin-left: 5px;
  padding: 0;
}

.shouye .van-search__content {
  height: 24px;
}
.shouye .van-cell--borderless {
  padding: 0;
}
.shouye .van-search__content .van-cell {
  height: 24px;
}
.shouye .van-field__body {
  height: 24px;
}
.shouye i.van-icon.van-icon-search {
  height: 24px;
  line-height: 24px;
}

.shouye input.van-field__control {
  height: 24px;
  line-height: 24px;
}

.shouye section {
  margin-top: 0px;
  font-size: 12px;
  position: absolute;
  top: 42px;
  left: 0;
  right: 0;
  bottom: 0;
}
.shouye .swipe,
.shouye .van-swipe {
  height: 150px;
}

.shouye nav {
  display: flex;
}
.shouye figure {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.shouye figure,
.shouye figcaption {
  padding: 0;
  margin: 0;
  font-size: 14px;
  color: #666;
}
.shouye figure img {
  width: 100%;
}
.shouye .logo {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 13px;
  border-top: 1px solid #ddd;
  padding: 15px;
  color: #333;
  font-size: 12px;
}
.shouye .logo h3 {
  width: 57px;
  height: 13px;
  font-size: 14px;
  text-align: left;
  padding-right: 15px;
  background: url('./../../../../public/images/homesmall/line.png') no-repeat
    top right;
  line-height: 13px;
}
.shouye .logo span {
  height: 13px;
}
.shouye .logo .logor {
  color: #26b97e;
}
.shouye .logo p {
  height: 13px;
  padding-left: 20px;
  line-height: 13px;
  text-align: left;
}
.shouye .logo p a {
  padding-left: 20px;
  color: #acacac;
}
.shouye .logo p a span {
  padding-left: 10px;
}
.shouye .countdown {
  height: 53px;
}
.shouye .countdown h3 {
  text-align: center;
  color: #333333;
  height: 30px;
  line-height: 28px;
  font-size: 18px;
  margin: 0;
}
.shouye .countdown .count {
  display: flex;
  height: 20px;
  justify-content: center;
  align-items: center;
}
.shouye .countdown .count h4 {
  margin: 0;
  height: 30px;
  padding: 0;
}
.shouye .countdown .count h4 span {
  color: #5bc6a0;
}
.shouye .countdown .count h4 i {
  color: #999999;
  font-style: normal;
}
.shouye .van-count-down {
  margin: 0 14px;
}
.shouye .countdown .count span {
  color: #9f9f9f;
}
.shouye .product {
  padding-top: 10px;
}
.shouye .productLine {
  width: 100%;
  display: flex;
  align-content: space-between;
  flex-wrap: wrap;
}
.shouye .productLine figure {
  width: 33.3%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.shouye .productLine figure img {
  width: 90%;
}
.shouye .productLine figure figcaption {
  margin: 5px 0;
}

.shouye .item {
  display: inline-block;
  width: 22px;
  margin-right: 5px;
  color: #fff;
  font-size: 12px;
  text-align: center;
  background-color: #000;
}
</style>
