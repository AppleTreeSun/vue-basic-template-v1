<script setup>
import { onMounted } from 'vue'
import { open } from 'shapefile'
// FileReader 对象允许 Web 应用程序异步读取存储在用户计算机上的文件（或原始数据缓冲区）的内容，
// 使用 File 或 Blob 对象指定要读取的文件或数据。

function shapeToJson(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()

    reader.onload = () => {
      open(reader.result)
        .then((source) => {
          source.read().then((res) => {
            resolve(res)
          })
        })
        .catch(() => {
          reject('请检查文件内容格式是否正确！')
        })
    }

    reader.readAsArrayBuffer(file)
  })
}

function txtToJson(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.onload = () => {
      try {
        const json = JSON.parse(reader.result)
        resolve(json)
      } catch (error) {
        reject(error)
      }
    }

    reader.readAsText(file)
  })
}

onMounted(() => {
  const inputEl = document.querySelector('input')

  inputEl.addEventListener('input', (e) => {
    const files = Array.from(e.target.files)

    files.forEach(async (x) => {
      if (x.name.endsWith('.txt')) {
        const res = await txtToJson(x)
        console.log('txtToJson: ', res)
      } else if (x.name.endsWith('.shp')) {
        const res = await shapeToJson(x)
        console.log('shapeToJson: ', res)
      }
    })
  })
})
</script>

<template>
  <div class="first" style="text-align: center;padding: 50px;">
    <input type="file" />
  </div>
</template>

<style scoped lang="less">
.first {
  padding: 20px;

}
</style>
