<template>
  <div class="shouye">
    33333333
    <van-dropdown-menu>
      <van-dropdown-item v-model="value" :options="option" />
      <van-dropdown-item title="筛选" ref="item">
        <van-switch-cell v-model="switch1" title="包邮" />
        <van-switch-cell v-model="switch2" title="团购" />
        <van-button block type="info" @click="onConfirm">确认</van-button>
      </van-dropdown-item>
    </van-dropdown-menu>
    <van-search placeholder="请输入搜索关键词" v-model="value" />
  </div>
</template>
