<script setup>
const route = useRoute()

const subList = ref([])

watch(
  () => route.path,
  () => {
    console.log(route);
    subList.value = route.matched[1].children
  },
  {
    immediate: true
  }
)
</script>

<template>
  <div class="aside-area" v-if="subList.length">
    <h2>aside-area</h2>
  </div>
</template>

<style scoped lang="less"></style>
