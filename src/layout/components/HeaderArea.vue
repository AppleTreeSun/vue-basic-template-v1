<script setup>
import { routeList } from '@/router'
import { localCache } from '@/utils/cache'
import { CACHE_USER_INFO } from '@/global/constants'

const userInfo = ref(localCache.getItem(CACHE_USER_INFO))

import avatar from '@/assets/image/common/logo.svg'

const route = useRoute()
const router = useRouter()

const navList = routeList.filter((item) => item.meta?.menuVisible)

const handleRouterPush = (item) => {
  router.push(item.path)
}

const handleExit = () => {
  localCache.clear()
  location.reload()
  location.href = `${window.location.pathname}#/login`
}
</script>

<template>
  <div class="header-area">
    <div class="logo">
      <img class="logo-img" src="@/assets/image/common/logo.svg" alt="" />
      <div class="logo-name">基础开发模板v1</div>
    </div>
    <div class="nav-bar">
      <template v-for="item in navList" :key="item.path">
        <div
          class="nav-item"
          :class="{
            active: route.path === item.path || route.meta.activePath === item.path
          }"
          @click="handleRouterPush(item)"
        >
          {{ item.meta.title }}
        </div>
      </template>
    </div>
    <div class="user-area">
      <el-avatar class="avatar" size="small" :src="avatar"></el-avatar>
      <!-- <div class="user-name">{{ '未知用户' }}</div>
      <div class="line">|</div> -->
      <el-dropdown>
        <div class="status">{{ userInfo.realName }}</div>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item @click="handleExit"> 退出 </el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>

<style scoped lang="less">
.header-area {
  display: flex;
  align-items: center;
  justify-content: space-between;

  .logo {
    width: 460px;
    display: flex;
    align-items: center;

    padding-left: 20px;

    .logo-img {
      width: 40px;
      height: 40px;
    }

    .logo-name {
      flex: 1;

      padding-left: 20px;
      font-size: 20px;
      font-weight: 700;
    }
  }

  .nav-bar {
    flex: 1;
    height: 100%;
    display: flex;
    align-items: center;
    font-size: 16px;

    .nav-item {
      box-sizing: border-box;
      height: 100%;
      line-height: 70px;
      color: #ddd;
      padding: 0 15px;
      cursor: pointer;
      transition: all 0.2s linear;
      margin: 0 10px;

      &.active {
        color: #fff;
        border-bottom: 4px solid rgba(rgba(255, 255, 255, 0.9));
        background: linear-gradient(to bottom, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.2));
      }

      &:hover {
        color: #fff;
        // border-bottom: 3px solid rgba(255, 255, 255, 0.7);
        background: linear-gradient(to bottom, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.2));
      }
    }
  }

  .user-area {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding-right: 10px;
    margin-right: 10px;
    width: 250px;
    color: #fff;
    cursor: pointer;

    .avatar {
      margin-right: 10px;
    }

    .line {
      margin: 0 5px;
    }
    .status {
      padding: 0 5px;
      color: #fff;
    }
  }
}
</style>
