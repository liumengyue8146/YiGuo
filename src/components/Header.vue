<template>
  <div class="topSearch">
    <van-search v-model="value" placeholder="请输入搜索关键词" shape="round"></van-search>
  </div>
</template>
<script>
export default {
  name: "Header",
  data() {
    return {
      value: ""
    };
  }
};
</script>
<style scoped>
</style>>