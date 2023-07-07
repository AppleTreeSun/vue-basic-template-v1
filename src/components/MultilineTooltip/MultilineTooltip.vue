<script setup>
import { nextTick, onMounted, ref, watch } from 'vue'

const props = defineProps({
  content: {
    type: String,
    default: ''
  },
  line: {
    type: Number,
    default: 3
  }
})

const multilineTooltipRef = ref(null)

const tooltipDisabled = ref(true)

onMounted(() => {
  tooltipDisabled.value =
    multilineTooltipRef.value.scrollHeight === multilineTooltipRef.value.clientHeight
})
watch(
  () => props.content,
  async () => {
    await nextTick()
    tooltipDisabled.value =
      multilineTooltipRef.value.scrollHeight === multilineTooltipRef.value.clientHeight
  }
)
</script>

<template>
  <div class="multiline-tooltip" ref="multilineTooltipRef">
    <el-tooltip
      :content="content"
      popper-class="multiline-tooltip-popper"
      placement="top"
      :disabled="tooltipDisabled"
    >
      <div>{{ content }}</div>
    </el-tooltip>
  </div>
</template>

<style scoped lang="less">
.multiline-tooltip {
  width: 100%;

  display: -webkit-box;
  -webkit-line-clamp: v-bind('props.line');
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
  overflow: hidden;
}
</style>

<style>
.multiline-tooltip-popper {
  max-width: 500px;
}
</style>
