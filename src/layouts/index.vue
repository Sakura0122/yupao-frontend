<script setup lang="ts"></script>

<template>
  <div class="layout-page">
    <router-view />
    <van-tabbar route>
      <van-tabbar-item icon="home-o" to="/home">首页</van-tabbar-item>
      <van-tabbar-item icon="friends-o" to="/team">队伍</van-tabbar-item>
      <van-tabbar-item icon="user-o" to="/user">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<style scoped>
.layout-page {
  ::v-deep(.van-tabbar-item) {
    &__icon {
      font-size: 21px;
    }

    &__text {
      font-size: 11px;
    }
  }
}
</style>
