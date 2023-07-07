<script setup>
import * as echarts from 'echarts'
import { nextTick } from 'vue'

const divRef = ref()

let echartInstance = {}

const props = defineProps({
  option: {
    type: Object,
    default: () => ({})
  }
})

watch(
  () => props.option,
  async () => {
    await nextTick()
    echartInstance.dispose && echartInstance.dispose()
    echartInstance = echarts.init(divRef.value, null, { renderer: 'svg' })

    echartInstance.setOption(props.option)
  },
  {
    immediate: true
  }
)
</script>

<template>
  <div class="echarts-container" ref="divRef"></div>
</template>

<style scoped lang="less">
.echarts-container {
  min-width: 50px;
  min-height: 50px;
}
</style>
