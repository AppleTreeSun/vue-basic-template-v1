<script setup>
import statuIcon from '@/assets/image/materialMarket/sq.svg'
import { nextTick } from 'vue';

const emit = defineEmits(['onFold', 'onSearch'])

const formInline = ref({
  mlmc: '',
  gjjgx: '',
  sjgx: '',
  bmgx: '',
  zylx: '',
  gxjh: '',
  zt: ''
})

// 单个表单项目宽度
const itemWidth = 314

// 页面实际表单项个数
const itemCount = 7

// 按钮操作区宽度
const opWidth = ref('0')

// 表单区域宽度
const formWidth = ref('0')

// 是否折叠
const isFold = ref(true)

// 渲染区一行可渲染表单项的数量
const rowMax = ref(0)

const onFoldChange = async () => {
  isFold.value = !isFold.value
  await nextTick()
  const wrapHeight = document.getElementById('search-wrap').clientHeight
  emit('onFold', wrapHeight)
}

const onReset = () => {
  Object.keys(formInline.value).forEach((key) => {
    formInline.value[key] = ''
  })
  emit('onSearch', formInline.value)
}

const onSearch = () => {
  emit('onSearch', formInline.value)
}

const calcOpWidth = () => {
  const searchWrapEl = document.getElementById('search-wrap').clientWidth
  // 一行最多几个
  const count = Math.floor((searchWrapEl - 160) / itemWidth)

  rowMax.value = count > itemCount ? itemCount : count

  formWidth.value = itemWidth * rowMax.value + 24

  opWidth.value = searchWrapEl - formWidth.value
}

onMounted(() => {
  calcOpWidth()
})
</script>

<template>
  <div :class="['search-wrap', isFold ? 'fold' : '']" id="search-wrap">
    <div class="search">
      <div class="search-left" :style="{ width: formWidth + 'px' }">
        <el-form label-width="90" :inline="true" :model="formInline" size="small">
          <el-form-item label="目录名称">
            <el-input class="item-operate" v-model="formInline.mlmc" placeholder="" />
          </el-form-item>
          <el-form-item label="国家级共享">
            <el-select class="item-operate" v-model="formInline.gjjgx" placeholder="">
              <el-option label="选项A" value="shanghai" />
              <el-option label="选项B" value="beijing" />
            </el-select>
          </el-form-item>
          <el-form-item label="省级共享">
            <el-select class="item-operate" v-model="formInline.sjgx" placeholder="">
              <el-option label="选项A" value="shanghai" />
              <el-option label="选项B" value="beijing" />
            </el-select>
          </el-form-item>
          <el-form-item label="部门共享">
            <el-select class="item-operate" v-model="formInline.bmgx" placeholder="">
              <el-option label="选项A" value="shanghai" />
              <el-option label="选项B" value="beijing" />
            </el-select>
          </el-form-item>
          <el-form-item label="资源类型">
            <el-select class="item-operate" v-model="formInline.zylx" placeholder="">
              <el-option label="选项A" value="shanghai" />
              <el-option label="选项B" value="beijing" />
            </el-select>
          </el-form-item>
          <el-form-item label="共享交换系统">
            <el-select class="item-operate" v-model="formInline.gxjhxtdbml" placeholder="">
              <el-option label="选项A" value="shanghai" />
              <el-option label="选项B" value="beijing" />
            </el-select>
          </el-form-item>
          <el-form-item label="状态">
            <el-select class="item-operate" v-model="formInline.zt" placeholder="">
              <el-option label="选项A" value="shanghai" />
              <el-option label="选项B" value="beijing" />
            </el-select>
          </el-form-item>
        </el-form>
      </div>
      <div class="search-right" :style="{ width: opWidth + 'px' }">
        <el-button size="small" @click="onSearch" type="primary">查询</el-button>
        <el-button size="small" @click="onReset">重置</el-button>
        <el-button size="small" @click="onFoldChange" v-if="rowMax <= itemCount">
          <template #icon>
            <el-image :src="statuIcon" :class="isFold ? 'zd' : 'zk'"></el-image>
          </template
        ></el-button>
      </div>
    </div>
  </div>
</template>

<style scoped lang="less">
.search-wrap {
  background: #fff;
  min-height: 60px;

  &.fold {
    height: 60px;
    overflow: hidden;
  }

  .search {
    display: flex;
    padding-top: 18px;

    .search-left {
      .el-form {
        .el-form-item {
          margin-right: 24px;
        }
        .item-operate {
          width: 200px;
        }
      }
    }

    .search-right {
      min-width: 160px;

      .zd {
        transform: rotate(0);
        transition: transform 0.3s;
      }

      .zk {
        transform: rotate(180deg);
        transition: transform 0.3s;
      }
    }
  }
}
</style>
