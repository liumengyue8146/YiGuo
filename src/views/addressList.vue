<template>
  <!-- 收获地址列表 -->
  <div class="app">
    <!-- top -->
    <van-sticky>
      <van-nav-bar title="地址列表" left-arrow @click-left="onClickLeft" @click-right="onClickRight" />
    </van-sticky>
    <!-- middle -->
    <van-address-list v-model="chosenAddressId" :list="this.list" @add="onAdd" @edit="onEdit" />
  </div>
</template>
<script>
import { mapState, mapActions, mapMutations } from 'vuex';
import { getToken } from './../utils/auth';
export default {
  created() {
    const userid = getToken();
    this.getaddress({ userid }).then(() => {
      this.addresslist.map((item, index) => {
        let obj = {};
        obj.id = index;
        obj.name = item.receiver;
        obj.tel = item.mobile;
        obj.address = item.address;
        this.list.push(obj);
      });
    });
    console.log(111, this.$router.params);
  },
  computed: {
    ...mapState('address', {
      addresslist: 'addresslist',
      defaultaddress: 'defaultaddress', //默认收货地址
      order: 'order', //订单列表
    }),
  },
  data() {
    return {
      chosenAddressId: '1',
      list: [],
    };
  },
  methods: {
    ...mapMutations('address', {
      updateDefault: 'updateDefault',
    }),
    ...mapActions('address', {
      getaddress: 'getaddress',
      addaddress: 'addaddress',
    }),
    onAdd() {
      //Toast("新增地址");
      console.log('add');
      console.log(this.$router);

      this.$router.push({
        name: 'newAddress',
      });
    },
    onEdit(item, index) {
      Toast('编辑地址:' + index);
    },
    onClickLeft() {
      this.updateDefault(this.addresslist[this.chosenAddressId * 1]);
      this.$router.go(-1);
      //ole.log(this.defaultaddress);
      // this.$router.push({
      //   name: 'payforOrder',
      //   params: {
      //     defaultaddress: this.addresslist[this.chosenAddressId * 1],
      //   },
      // });
    },
    onClickRight() {},
  },
};
</script>
<style scoped>
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
