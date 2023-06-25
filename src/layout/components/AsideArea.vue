<script setup>
import { hasPermission } from '@/utils/system';
const route = useRoute()
const router = useRouter()

const subList = ref([])

watch(
  () => route.path,
  () => {
    subList.value = route.matched[1]?.children.filter((item) => {
      // 1.没有menuVisible不显示
      if (!item.meta.menuVisible) return false
      // 2.没有permission默认显示
      if (!item.meta.permission) return true
      // 3.有permission去判断权限
      return hasPermission(item.meta.permission)
    })
  },
  {
    immediate: true
  }
)

const handleSelect = (path) => {
  router.push(path)
}

const getIcon = computed(
  () => (item) => route.path.includes(item.path) ? item.meta.iconActive : item.meta.icon
)

</script>

<template>
  <div class="aside-area" v-if="subList.length">
    <el-menu
      style="border-right: none"
      :default-active="route.path"
      :default-openeds="route.meta?.open"
      @select="handleSelect"
    >
      <template v-for="item in subList" :key="item.path">
        <template v-if="item?.children?.length">
          <el-sub-menu :index="item.path">
            <template #title>
              <img :src="getIcon(item)" alt="" />
              <span>{{ item.meta.title }}</span>
            </template>
            <el-menu-item v-for="iten in item.children" :index="iten.path" :key="iten.path">
              <span>{{ iten.meta.title }}</span>
            </el-menu-item>
          </el-sub-menu>
        </template>
        <template v-else>
          <el-menu-item :index="item.path" class="first-menu-item">
            <template #title>
              <img :src="getIcon(item)" alt="" />
              <span>{{ item.meta.title }}</span>
            </template>
          </el-menu-item>
        </template>
      </template>
    </el-menu>
  </div>
</template>

<style scoped lang="less">
.aside-area {
  margin-top: 10px;

  .el-menu {
    --el-menu-item-height: 45px;
    --el-menu-sub-item-height: 45px;

    .el-sub-menu {
      :deep(.el-sub-menu__title) {
        border-left: 4px solid transparent;
      }

      &.is-active {
        :deep(.el-sub-menu__title) {
          border-left: 4px solid #0052d9;
          color: #0052d9;
          background-color: rgba(#0052d9, 0.1);
        }
      }
    }

    .first-menu-item {
      border-left: 4px solid transparent;
      &.is-active {
        border-left: 4px solid #0052d9;
        color: #0052d9;
        background-color: rgba(#0052d9, 0.1);
      }
    }

    img {
      width: 18px;
      height: 18px;
    }

    span {
      margin-left: 10px;
    }
  }
}
</style>
