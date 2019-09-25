<template>
  <!-- 收获地址列表 -->
  <div class="app">
    <!-- top -->
    <van-sticky>
      <van-nav-bar title="订单结算" left-arrow @click-left="onClickLeft" @click-right="onClickRight" />
    </van-sticky>
    <!-- middle -->
    <van-address-list v-model="chosenAddressId" :list="list" @add="onAdd" @edit="onEdit" />
  </div>
</template>
<script>
export default {
  data() {
    return {
      chosenAddressId: "1",
      list: [
        {
          id: "1",
          name: "张三",
          tel: "13000000000",
          address: "浙江省杭州市西湖区文三路 138 号东方通信大厦 7 楼 501 室"
        },
        {
          id: "2",
          name: "李四",
          tel: "1310000000",
          address: "浙江省杭州市拱墅区莫干山路 50 号"
        }
      ]
    };
  },
  methods: {
    onAdd() {
      //Toast("新增地址");
      console.log("add");
      console.log(this.$router);

      this.$router.push({
        name: "newAddress"
      });
    },
    onEdit(item, index) {
      Toast("编辑地址:" + index);
    },
    onClickLeft() {},
    onClickRight() {}
  }
};
</script>
