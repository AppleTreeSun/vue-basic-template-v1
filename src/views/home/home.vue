<script setup>


const arr = Array.from({ length: 100 }, (_, i) => i * 2)
</script>

<template>
  <div class="home">
    <ul>
      <li v-for="item in arr" :key="item">{{ item }}</li>
    </ul>
  </div>
</template>

<style scoped lang="less">

</style>
