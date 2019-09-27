<template>
  <!-- 我的 -->
  <div class="app">
    <!-- top -->
    <!-- 1 -->
    <div class="top">
      <div class="top1">
        <van-icon name="point-gift-o" />
        <van-icon name="comment-o" dot />
      </div>
      <div class="top2">
        <div class="left">
          <img src="@/assets/01.png" />
        </div>
        <div class="right">
          <h2>欧克yoyo</h2>
          <h3>普卡</h3>
          <p>当前累积商品实付金额0.00</p>
        </div>
        <div class="right2">签到送好礼</div>
      </div>
    </div>
    <!-- 滚动字幕 -->
    <van-notice-bar
      text="当前累积商品实付金额0.00"
      background="#2ED183"
      color="#fff"
      left-icon="volume-o"
      :scrollable="false"
    />
    <!-- 积分 -->
    <div class="jifen">
      <dl>
        <dt>0.00</dt>
        <dd>卡包余额</dd>
      </dl>
      <dl>
        <dt>200</dt>
        <dd>悠币</dd>
      </dl>
    </div>
    <!-- 状态 -->
    <div class="status">
      <dl>
        <dt>
          <van-icon name="orders-o" />
        </dt>
        <dd>待支付</dd>
      </dl>
      <dl>
        <dt>
          <van-icon name="balance-o" />
        </dt>
        <dd>待付款</dd>
      </dl>
      <dl>
        <dt>
          <van-icon name="chart-trending-o" />
        </dt>
        <dd>评价送悠币</dd>
      </dl>
      <dl>
        <dt>
          <van-icon name="newspaper-o" />
        </dt>
        <dd>在线收换货</dd>
      </dl>
      <dl>
        <dt>
          <van-icon name="apps-o" />
        </dt>
        <dd>全部订单</dd>
      </dl>
    </div>
    <!-- 下面 -->
    <div class="bottom">
      <dl to="/cart" info="99+">
        <dt>
          <img src="@/assets/01.png" />
        </dt>
        <dd>优惠券</dd>
      </dl>
      <dl to="/cart" info="99+">
        <dt>
          <img src="@/assets/01.png" />
        </dt>
        <dd>储值卡绑定</dd>
      </dl>
      <dl to="/cart" info="99+">
        <dt>
          <img src="@/assets/01.png" />
        </dt>
        <dd>提货券</dd>
      </dl>
      <dl to="/cart" info="99+">
        <router-link :to="{name:'addressList'}">
          <dt>
            <img src="@/assets/01.png" />
          </dt>
          <dd>收获地址</dd>
        </router-link>
      </dl>
      <dl to="/cart" info="99+">
        <router-link :to="{name:'helpCenter'}">
          <dt>
            <img src="@/assets/01.png" />
          </dt>
          <dd>帮助中心</dd>
        </router-link>
      </dl>
      <dl to="/cart" info="99+">
        <dt>
          <img src="@/assets/01.png" />
        </dt>
        <dd>在线客服</dd>
      </dl>
      <dl to="/cart" info="99+">
        <dt>
          <img src="@/assets/01.png" />
        </dt>
        <dd>账户余额</dd>
      </dl>
      <dl to="/cart" info="99+">
        <dt>
          <img src="@/assets/01.png" />
        </dt>
        <dd>我的团购</dd>
      </dl>
      <dl to="/cart" info="99+">
        <dt>
          <img src="@/assets/01.png" />
        </dt>
        <dd>我的关注</dd>
      </dl>
      <dl to="/cart" info="99+">
        <dt>
          <img src="@/assets/01.png" />
        </dt>
        <dd>悠币商城</dd>
      </dl>
      <dl to="/cart" info="99+">
        <router-link :to="{name:'memberEnjoy'}">
          <dt>
            <img src="@/assets/01.png" />
          </dt>
          <dd>会员尊享</dd>
        </router-link>
      </dl>
      <dl to="/cart" info="99+">
        <dt>
          <img src="@/assets/01.png" />
        </dt>
        <dd>企业福利</dd>
      </dl>
    </div>
  </div>
</template>
<script>
import me from "@/css/liu/me.css";
export default {};
</script>
<style scoped>
</style>
