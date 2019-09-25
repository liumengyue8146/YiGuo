<template>
  <div class="category">
    <div class="top">
      <Top></Top>
    </div>
    <div class="mainContent">
      <div class="left">
        <van-sidebar v-model="activeKey">
          <van-sidebar-item title="热门推荐" />
          <van-sidebar-item title="进口水果" />
          <van-sidebar-item title="国产水果" />
          <van-sidebar-item title="精选肉类" />
          <van-sidebar-item title="海鲜水产" />
          <van-sidebar-item title="禽类蛋品" />
          <van-sidebar-item title="乳品糕点" />
          <van-sidebar-item title="新鲜蔬菜" />
          <van-sidebar-item title="油粮杂货" />
        </van-sidebar>
      </div>
      <div class="right">
        <div class="goodsList" v-for="i in 42 " :key="i" @click="goDetail(i)">
          <img src="../../../assets/straw.png" alt />
          <p>草莓</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Top from "../../../components/Header";
export default {
  components: {
    Top
  },
  data() {
    return {
      activeKey: 0
    };
  },
  methods: {
    goDetail(i) {
      this.$router.push(`detail/${i}`);
    }
  }
};
</script>
<style scoped>
@import "../../../css/category.scss";
</style>


