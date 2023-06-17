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

<style scoped lang="less"></style>
