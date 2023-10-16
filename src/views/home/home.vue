<script setup>
import { crypto } from '@/utils/crypto';

const str = "VTUpS6TuQiT5CK6fxY9xYxE1kVC6QWX/5CQBJC3KkoF3IqPwWbejpMpvSOQyrfQfsbmSxY9v0fD0yVZN8lCyF3Rf4FmTBEDAABeqT8kce87YnGuWBQTxUAI6AAGi8tpMvx33kBuesDH97PM5nyu3oNfSzmamiXuHpjTjtkercBOuv9dBC6iWzanj3UNdaNMjT49pvpnKrVlmhrSvv4o6y5U4u54Kg9iWo2DGlIOkwwxbRWJhbwscsaBZr9S45ct/D2guChtAnto0ae9Tzg9f1H1rYTNyL7Sq0U5l9Q3ReoCkxtIHbtgnGbbKcyXuPaKXIAvjRkpekz9npQHW0lDd65S2Tz2n8Pn2BMur3JkObn52cOx8gE/ymCmmm8RYdB7hE0S42deorsXU7AOnL8Oef4NXrZtg8YhpoIxienVORS9Fts61PbztrskqS9QgRhmX1e75hFqyx+7RSusDNo0LFIi1W+rs0to0YEGNCQi57Rvy8gOrTHPpAc/Z+6yccNwmM6ON2d+VZpz+MeX0JkOfzAibQQ6QcBXE0Y5+pM6xTm/ZFXUDXHLAIumD8m7Cwpwumd6meEMmr0lEU+MpB6EqjJIJxCAS+mWKPh6bvx6SWX5Pj2m+mcqtWWaGtK+/ijrLqtYZg1j8ZCHK1A/UXERog1tFYmFvCxyxoFmv1Ljly383grGyVCPFIsraUj5sBMFBml5rNQhT9ZAEKhdMkydJU1c7pmQizrsZG6W87bR1AnCHtYhpXdPciJoKZ+piggmRb6JQqvA5THn51JTzlhxrGqAZF5Rd9gf9qhvzdgnByh6TbHtOP+ebspuTxCUMsrfo"


console.log(this);



const arr = Array.from({ length: 100 }, (_, i) => i * 2)

const onBtnClick = () => {
  console.log('dainji');



  console.log('解密：', crypto.decryptByAES(str));
}
</script>

<template>
  <div class="home">
    <el-button type="primary" @click="onBtnClick" v-prevent-click="1000">点击</el-button>
    <ul>
      <li v-for="item in arr" :key="item">{{ item }}</li>
    </ul>
  </div>
</template>

<style scoped lang="less">
// .home {
//   padding: @layoutPadding;
//   background-color: @bgRed;
// }
</style>
