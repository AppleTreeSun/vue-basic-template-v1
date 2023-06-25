<script setup>


const arr = Array.from({ length: 100 }, (_, i) => i * 2)

const onBtnClick = () => {
  console.log('dainji');
}
</script>

<template>
  <div class="home">
    <el-button type="primary" @click="onBtnClick" v-prevent-click="1000">点击</el-button>
    <ul>
      <li v-for="item in arr" :key="item">{{ item }}</li>
    </ul>
  </div>
</template>

<style scoped lang="less">
// .home {
//   padding: @layoutPadding;
//   background-color: @bgRed;
// }
</style>
