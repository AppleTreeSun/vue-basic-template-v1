<script setup>

const arr = Array.from({ length: 100 }).fill(20)
</script>

<template>
  <div class="personalCenter">
    <h2>personalCenter</h2>
    <ul>
      <li v-for="item in arr" :key="item">{{ item }}</li>
    </ul>
  </div>
</template>

<style scoped lang="less"></style>
