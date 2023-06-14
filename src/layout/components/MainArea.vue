<script setup>
</script>

<template>
  <div class="main-area">
    <RouterView v-slot="{ Component }">
      <transition name="fade">
        <component :is="Component"></component>
      </transition>
    </RouterView>
  </div>
</template>

<style scoped lang="less">
.fade-enter-from {
  opacity: 0;
  transform: translateX(-30px);
}

.fade-leave-to {
  opacity: 0;
  transform: translateX(30px);
}

.fade-enter-active,
.fade-leave-avtive {
  transition: all 0.3s ease;
}
</style>
