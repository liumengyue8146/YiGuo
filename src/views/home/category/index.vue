<template>
  <div class="category">
    <div class="top" style="height:70px">
      <Top></Top>
    </div>
    <div class="mainContent">
      <div class="left">
        <van-sidebar v-model="activeKey">
          <van-sidebar-item :title="item.name" v-for="(item,index) in categories" :key="index" />
        </van-sidebar>
      </div>
      <div class="right">
        <div
          class="goodsList"
          v-for="(item,index) in products[activeKey] "
          :key="index"
          @click="goDetail(item)"
        >
          <img :src="item.coverImg" alt />
          <p>{{item.name}}</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Top from '../../../components/Header';
import { mapState, mapActions } from 'vuex';
export default {
  components: {
    Top,
  },
  created() {
    this.getproduct();
  },
  data() {
    return {
      activeKey: 0,
    };
  },
  computed: {
    ...mapState('product', {
      categories: 'categories',
      products: 'products',
    }),
  },
  methods: {
    ...mapActions('product', {
      getproduct: 'getproduct',
    }),

    goDetail(item) {
      console.log(item);
      //this.$router.push(`detail`);
      this.$router.push({ name: 'detail', params: { detail: item } });
    },
  },
};
</script>
<style scoped>
@import '../../../css/category.scss';
</style>


