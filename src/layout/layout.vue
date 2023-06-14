<script setup>
import HeaderArea from './components/HeaderArea.vue'
import AsideArea from './components/AsideArea.vue'
import MainArea from './components/MainArea.vue'
</script>

<template>
  <div class="layout">
    <HeaderArea />
    <div class="container-wrap">
      <AsideArea />
      <MainArea />
    </div>
  </div>
</template>

<style scoped lang="less">
.layout {
  height: 100vh;

  .header-area {
    height: 70px;
    background-color: #1782fa;
  }

  .container-wrap {
    height: calc(100vh - 70px);

    display: flex;

    .aside-area {
      width: 200px;
    }

    .main-area {
      flex: 1;
    }
  }
}
</style>
