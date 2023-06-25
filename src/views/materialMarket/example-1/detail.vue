<script setup>

</script>

<template>
  <div class="example-detail">
    <h2>example-detail</h2>
    <h2>{{ $route.query.name }}</h2>
    <h2>{{ $route.query.age }}</h2>
  </div>
</template>

<style scoped lang="less">
.example-detail {
  height: 100%;
  background-color: #fff;
}
</style>
