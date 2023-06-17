<script setup>
import HeaderArea from './components/HeaderArea.vue'
import AsideArea from './components/AsideArea.vue'
import MainArea from './components/MainArea.vue'

const route = useRouter()

// 每次刷新页面回到顶部
watch(
  () => route,
  () => {
    const scrollWrap = document.querySelector('#global-scroll-wrap')
    scrollWrap && scrollWrap.scroll({ top: 0 })
  }
)
</script>

<template>
  <div class="layout">
    <HeaderArea />
    <div class="container-wrap">
      <AsideArea />
      <MainArea id="global-scroll-wrap" />
    </div>
    <el-backtop
      :right="30"
      :bottom="30"
      target="#global-scroll-wrap"
      style="color: #0052d9"
    ></el-backtop>
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
      overflow-y: auto;
    }
  }
}
</style>
