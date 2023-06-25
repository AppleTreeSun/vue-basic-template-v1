<script setup>
import { ElMessage } from 'element-plus'

const router = useRouter()

defineProps({
  tableHeight: Number
})

const tableData = ref([])

const count = 10

for (let i = 0; i < count; i++) {
  tableData.value.push({
    xh: i + 1,
    mlbm: 'GXML20230511143632456',
    mlmc: '不动产电子证照查询、核验、下载',
    gjjgx: '自然资源部',
    sjgx: '上海',
    bmgx: '民政',
    zylx: '接口',
    gxjhxtml: '不动产电子证照',
    sjtgf: '自然资源部',
    fwzys: '99',
    cjsj: '2023-06-07 17:08:49',
    ms: '描述内容',
    fbzt: Math.floor(1.5 - Math.random())
  })
}

// 新增 按钮事件逻辑
const onAdd = () => {
  ElMessage('新增 功能建设中')
}

// 禁用 按钮事件逻辑
const onDisable = () => {
  ElMessage('批量禁用 功能建设中')
}

// 启用 按钮事件逻辑
const onEnable = () => {
  ElMessage('批量启用 功能建设中')
}

const onDetail = () => {
  const name = 'example-1-detail'

  const query = {
    name: 'Coderzhr',
    age: 18
  }

  const url = router.resolve({
    name,
    query
  }).href

  window.open(url)
}

const onSizeChange = () => {}

const onCurrentChange = () => {}
</script>

<template>
  <div class="table-wrap">
    <div class="table-header">
      <div class="title">目录列表</div>
      <div class="operate">
        <el-button size="small" type="primary" @click="onAdd">新增</el-button>
        <el-button size="small" type="primary" @click="onDisable">批量禁用</el-button>
        <el-button size="small" type="primary" @click="onEnable">批量启用</el-button>
      </div>
    </div>
    <div class="table-content">
      <el-table
        :data="tableData"
        :height="tableHeight"
        :header-cell-style="{ background: '#F5F6F8' }"
      >
        <el-table-column prop="xh" align="left" label="序号" width="60" />
        <el-table-column
          show-overflow-tooltip
          prop="mlbm"
          align="left"
          label="目录编码"
          width="200"
        />
        <el-table-column
          show-overflow-tooltip
          prop="mlmc"
          align="left"
          label="目录名称"
          width="150"
        />
        <el-table-column
          show-overflow-tooltip
          prop="gjjgx"
          align="left"
          label="国家级共享"
          width="100"
        />
        <el-table-column
          show-overflow-tooltip
          prop="sjgx"
          align="left"
          label="部门共享"
          width="100"
        />
        <el-table-column
          show-overflow-tooltip
          prop="bmgx"
          align="left"
          label="资源类型"
          width="120"
        />
        <el-table-column
          show-overflow-tooltip
          prop="gxjhxtml"
          align="left"
          label="共享交换系统目录"
          width="140"
        />
        <el-table-column
          show-overflow-tooltip
          prop="sjtgf"
          align="left"
          label="数据提供方"
          width="100"
        />
        <el-table-column
          show-overflow-tooltip
          prop="fwzys"
          align="left"
          label="服务资源数"
          width="100"
        />
        <el-table-column
          show-overflow-tooltip
          prop="cjsj"
          align="left"
          label="创建时间"
          width="170"
        />
        <el-table-column show-overflow-tooltip prop="ms" align="left" label="描述" width="" />
        <el-table-column prop="fbzt" align="left" label="发布状态" width="80">
          <template v-slot="{ row }">
            <el-tag size="small" v-if="row.fbzt === 1" type="success">启用</el-tag>
            <el-tag size="small" v-else type="danger">禁用</el-tag>
          </template>
        </el-table-column>
        <el-table-column label="操作" align="left" width="160" fixed="right">
          <template #default>
            <div class="control">
              <el-button link style="color: #0052d9" size="small" @click="onDetail">详情</el-button>
              <el-button link style="color: #0052d9" size="small">编辑</el-button>
              <el-button link style="color: #f56c6c" size="small">删除</el-button>
            </div>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <div class="table-footer">
      <el-pagination
        background
        small
        layout="prev, pager, next, sizes, total"
        :page-sizes="[10, 20, 50, 100]"
        :current-page="1"
        :default-page-size="10"
        :total="20"
        @size-change="onSizeChange"
        @current-change="onCurrentChange"
      />
    </div>
  </div>
</template>

<style scoped lang="less">
.table-wrap {
  background-color: #fff;
  padding: 0 15px;

  .table-header {
    display: flex;
    height: 50px;
    justify-content: space-between;
    align-items: center;

    .title {
      color: #303133;
      font-size: 16px;
    }
  }

  .table-footer {
    height: 50px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }
}
</style>
