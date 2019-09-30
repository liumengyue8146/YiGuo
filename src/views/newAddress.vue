<template>
  <div class="app">
    <!-- top -->
    <van-sticky>
      <van-nav-bar
        title="新增收货地址"
        right-text="保存"
        @click-left="onClickLeft"
        @click-right="onClickRight"
        left-arrow
      />
      <!--  @click-left="onClickLeft"
      @click-right="onClickRight"-->
    </van-sticky>
    <!-- middle -->
    <div class="main">
      <van-cell-group>
        <br />
        <van-field v-model="name" class="filed" value=" " label="收货人姓名：" />
        <van-field v-model="tel" label="手机号码：" />
        <van-field v-model="bigAddress" label="所在地区：" is-link @click="showPopup" />
        <van-field v-model="smallAddress" label="详细地址：" />
        <div class="address">
          <span>地址类型：</span>
          <van-radio-group v-model="radio" class="radio">
            <van-radio name="1" checked-color="#07c160">公司</van-radio>
            <van-radio name="2" checked-color="#07c160">家庭</van-radio>
          </van-radio-group>
        </div>
      </van-cell-group>

      <van-popup position="bottom" :style="{ height: '70%' }" round v-model="show">
        <van-area :area-list="areaList" value="110102" @confirm="confirm" />
      </van-popup>
    </div>
    <!-- footer -->
    <div class="autoAddress">
      <span>设为默认地址：</span>
      <van-switch v-model="checked" size="18px" active-color="#07c160" inactive-color="#ee0a24" />
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      name: '',
      tel: 0,
      bigAddress: '',
      smallAddress: '',
      radio: 1,
      activeNames: ['1'],
      checked: true,
      show: false,
      areaList: {
        province_list: {
          110000: '北京市',
          120000: '天津市',
        },
        city_list: {
          110100: '北京市',
          110200: '县',
          120100: '天津市',
          120200: '县',
        },
        county_list: {
          110101: '东城区',
          110102: '西城区',
          110105: '朝阳区',
          110106: '丰台区',
          120101: '和平区',
          120102: '河东区',
          120103: '河西区',
          120104: '南开区',
          120105: '河北区',
          // ....
        },
      },
    };
  },
  methods: {
    showPopup() {
      this.show = true;
    },
    confirm(val) {
      var address = val[0].name + val[1].name + val[2].name; //省市区的地址拼接
      var allInputs = document.getElementsByTagName('input'); //所有input
      this.bigAddress = address;
      this.show = false;
    },
    onClickLeft() {
      this.$router.push({
        name: 'addressList',
      });
    },
    // 右上角点击保存跳地址列表页
    onClickRight(val) {
      var allInputs = document.getElementsByTagName('input'); //所有input
      // 输出输入框的值
      console.log(this.name);
      console.log(this.tel);
      console.log(this.bigAddress);
      console.log(this.smallAddress);
      console.log(this.radio);
      console.log(this.checked);
    },
  },
};
</script>
<style scoped>
.app {
  height: 100%;
  width: 100%;
  background: #f4f4f4;
}
.autoAddress {
  height: 40px;
  line-height: 40px;
  background: #fff;
  display: flex;
}
.van-field {
  margin: 2px 0;
}
.van-cell-group {
  background: #f4f4f4;
}
.autoAddress span {
  margin-left: 25px;
  font-size: 15px;
  font-family: PingFang SC;
  font-weight: 800;
}
.autoAddress .van-switch {
  margin-left: 200px;
  margin-top: 8px;
}
.address {
  display: flex;
  font-size: 14px;
  line-height: 24px;
  height: 30px;
  padding: 5px 0;
  background: #fff;
}
.address span {
  display: block;
  margin: 5px 25px;
}
.address .van-radio {
  margin: 0 20px;
}
.radio {
  display: flex;
}
.main {
  width: 100%;
  background: #f4f4f4;
  /* padding: 10px 0; */
  padding-top: 0;
}
</style>
