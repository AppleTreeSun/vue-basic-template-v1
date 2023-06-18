<script setup>
import Search from './components/search.vue'
import Table from './components/table.vue'

import _ from 'lodash';

const skeletonLoading = ref(false)
const skeletonLoading2 = ref(false)

const tableHeight = ref(0)

// 搜索区区间高度
const searchHeight = ref(60)

const onFold = (value) => {
  searchHeight.value = value

  calcTableHeight(false)
}

// 计算配置信息
const calcTableHeight = (isLoading = true) => {
  isLoading && (skeletonLoading.value = true)

  const wrapElHeight = document.querySelector('.example-1').clientHeight
  tableHeight.value = wrapElHeight - searchHeight.value - 15 - 100

  isLoading && setTimeout(() => {
    skeletonLoading.value = false
  }, 200)
}

const addListener = _.throttle(calcTableHeight, 100)

onMounted(() => {
  calcTableHeight()

  window.addEventListener('resize', addListener)
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', addListener)
})
</script>

<template>
  <div class="example-1">
    <el-skeleton
      :rows="15"
      animated
      :loading="skeletonLoading"
      style="padding: 20px; background-color: #fff"
    >
      <Search @onFold="onFold" />
      <el-skeleton :rows="12" animated :loading="skeletonLoading2">
        <Table :tableHeight="tableHeight" />
      </el-skeleton>
    </el-skeleton>
  </div>
</template>

<style scoped lang="less">
.example-1 {
  position: relative;
  height: 100%;
  overflow: hidden;

  // display: flex;
  // flex-direction: column;
  .table-wrap {
    margin-top: 15px;
  }
}
</style>
