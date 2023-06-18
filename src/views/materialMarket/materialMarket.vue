<script setup></script>

<template>
  <div class="material-market">
    <RouterView v-slot="{ Component }">
      <transition name="fade">
        <component :is="Component"></component>
      </transition>
    </RouterView>
  </div>
</template>

<style scoped lang="less">
.material-market {
  box-sizing: border-box;
  padding: 15px;
  height: 100%;
  background: #f5f7fa;
}
</style>
