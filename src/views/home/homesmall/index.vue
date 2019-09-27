<template>
  <div class="shouye">
    <div class="header">
      <van-dropdown-menu active-color="#ee0a24">
        <van-dropdown-item v-model="value" :options="option" />
      </van-dropdown-menu>

      <van-search placeholder="请输入商品样式" v-model="value1" shape="round" background="#32d683" />
      <van-icon name="scan" color="white" size="18px" style="margin-left:15px" />
    </div>
    <section style="overflow:auto;padding-bottom:80px">
      <div class="swipe">
        <van-swipe :autoplay="3000" indicator-color="red" indicator-background-color="black">
          <van-swipe-item v-for="(image, index) in images" :key="index">
            <img v-lazy="image" style="width:375px;height:150px" />
          </van-swipe-item>
        </van-swipe>
      </div>

      <nav>
        <figure>
          <img src="./../../../../public/images/1.jpg" alt="图片加载失败" />
          <figcaption>买二付一</figcaption>
        </figure>
        <figure>
          <img src="./../../../../public/images/1.jpg" alt="图片加载失败" />
          <figcaption>买二付一</figcaption>
        </figure>
        <figure>
          <img src="./../../../../public/images/1.jpg" alt="图片加载失败" />
          <figcaption>买二付一</figcaption>
        </figure>
        <figure>
          <img src="./../../../../public/images/1.jpg" alt="图片加载失败" />
          <figcaption>买二付一</figcaption>
        </figure>
      </nav>
      <div class="logo">
        <h3>
          <span class="logol">易果</span>
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
        <img src="./../../../../public/images/logo.png" style="width:355px;height:100px" />
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
        <div class="productLine" v-for="item in 3" :key="item.id">
          <figure>
            <img src="./../../../../public/images/homesmall/2.jpg" style="width:100%" />
            <figcaption>美国樱桃</figcaption>
          </figure>
          <figure>
            <img src="./../../../../public/images/homesmall/3.jpg" style="width:100%" />
            <figcaption>鹰嘴芒果</figcaption>
          </figure>
          <figure>
            <img src="./../../../../public/images/homesmall/4.jpg" style="width:100%" />
            <figcaption>国产蓝莓4盒</figcaption>
          </figure>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
export default {
  data() {
    return {
      value: 0,
      value1: "",
      time: 30 * 60 * 60 * 1000,
      option: [
        { text: "上海", value: 0 },
        { text: "北京", value: 1 },
        { text: "杭州", value: 2 }
      ],
      src: "",
      images: [
        "https://img.yzcdn.cn/vant/apple-2.jpg",
        "https://img.yzcdn.cn/vant/apple-2.jpg",
        "https://img.yzcdn.cn/vant/apple-1.jpg",
        "https://img.yzcdn.cn/vant/apple-1.jpg",
        "https://img.yzcdn.cn/vant/apple-2.jpg"
      ],
      products: [
        { id: "1", name: "苹果", url: "./../../../../public/images/3.jpg" }
      ]
    };
  },

  methods: {
    onConfirm() {
      this.$refs.item.toggle();
    }
  }
};
</script>

<style  scoped>
.shouye {
  width: 100%;
  height: 100%;
  font-size: 12px;
  line-height: 12px;
  display: flex;
  flex-direction: column;
  position: relative;
}
.header {
  height: 42px;
  width: 100%;
  display: flex;
  background: #32d683;
  align-items: center;

  top: 0;
  left: 0;
}
section {
  overflow: auto;
  width: 100%;
  height: 550px;
  position: fixed;
  top: 42px;
  left: 0;
}
.van-dropdown-menu {
  background: #32d683;
  padding-right: 15px;
  padding-left: 5px;
  /* height: 19px; */
}
.header .van-dropdown-menu__title .van-ellipsis {
  color: #fff;
}
.header .van-dropdown-menu__title {
  color: #fff;
}
.header .van-ellipsis {
  color: #fff;
}
.van-dropdown-menu__title::after {
  border: 10px;
  border-color: transparent transparent #fff #ffff;
}
.shouye .van-search {
  width: 250px;
}

.van-search__content {
  height: 19px;
}
.van-cell--borderless {
  padding: 0;
}
.van-search__content .van-cell {
  height: 19px;
}

i.van-icon.van-icon-search {
  height: 19px;
  line-height: 19px;
}

input.van-field__control {
  height: 19px;
  line-height: 19px;
}

/* .van-dropdown-menu__title--down {
  color: #fff !important;
} */
.van-search {
  margin: 0;
  padding: 0;
}
section {
  font-size: 12px;
}
.swipe,
.van-swipe {
  height: 150px;
}

nav {
  display: flex;
}
figure,
figcaption {
  padding: 0;
  margin: 0;
  font-size: 12px;
  color: #666;
}
figure img {
  width: 100%;
}
.logo {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 13px;
  border-top: 1px solid #ddd;
  padding: 15px;
  color: #333;
  font-size: 12px;
}
.logo h3 {
  width: 57px;
  height: 13px;
  font-size: 12px;
  text-align: left;
  padding-right: 15px;
  background: url("./../../../../public/images/homesmall/line.png") no-repeat
    top right;
  line-height: 13px;
}
.logo span {
  height: 13px;
}
.logo .logor {
  color: #26b97e;
}
.logo p {
  height: 13px;
  padding-left: 20px;
  line-height: 13px;
  text-align: left;
}
.logo p a {
  padding-left: 20px;
  color: #acacac;
}
.logo p a span {
  padding-left: 10px;
}
.countdown {
  height: 39px;
}
.countdown h3 {
  color: #333333;
  height: 22px;
  line-height: 22px;
  margin: 0;
}
.countdown .count {
  display: flex;
  height: 17px;
  justify-content: center;
}
.countdown .count h4 {
  margin: 0;
  height: 17px;
}
.countdown .count h4 span {
  color: #5bc6a0;
}
.countdown .count h4 i {
  color: #999999;
  font-style: normal;
}
.van-count-down {
  margin: 0 14px;
}
.countdown .count span {
  color: #9f9f9f;
}
.product {
  padding-top: 10px;
}
.productLine {
  display: flex;
}
.productLine figure {
  box-sizing: border-box;
}
.productLine figure:nth-of-type(2) {
  margin: 0 15px;
}
.item {
  display: inline-block;
  width: 22px;
  margin-right: 5px;
  color: #fff;
  font-size: 12px;
  text-align: center;
  background-color: #000;
}
</style>
