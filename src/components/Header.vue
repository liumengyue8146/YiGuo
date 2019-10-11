<template>
  <div class="topSearch category">
    <van-search v-model="value" placeholder="请输入搜索关键词" shape="round"></van-search>
  </div>
</template>
<script>
export default {
  name: 'Header',
  data() {
    return {
      value: '',
    };
  },
};
</script>
<style>
.category .van-field__left-icon .van-icon {
  line-height: 40px;
}
</style>>
