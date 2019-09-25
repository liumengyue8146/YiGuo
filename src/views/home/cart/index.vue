<template>
  <div class="app">
    <!-- 顶部 -->
    <van-nav-bar title="购物车" left-text="返回" right-text="编辑" left-arrow />
    <!--  @click-left="onClickLeft"
    @click-right="onClickRight"-->
    <hr />
  </div>
</template>
<script>
export default {
  data() {
    return {
      value: 1
    };
  },
  methods: {
    toggle(index) {
      this.$refs.checkboxes[index].toggle();
    }
  }
};
</script>

<style scoped>

</style>
