<script lang="ts" setup></script>

<template>
  <div class="skeleton flex-center" v-for="i in 20" :key="i">
    <div class="avatar">
      <n-skeleton circle size="medium" />
    </div>

    <div class="content">
      <n-skeleton text :repeat="1" />
      <n-skeleton text style="width: 60%" />
    </div>
  </div>
</template>

<style lang="less" scoped>
.skeleton {
  padding: 5px 10px;
  margin: 8px 0;

  .avatar {
    width: 50px;
  }

  .content {
    flex: auto;
  }
}
</style>
