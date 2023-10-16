<template>
  <div
    style="
      height: 100%;
      width: 100%;
      padding: 20px;
      text-align: center;
      font-size: 30px;
      background-color: #fff;
    "
  >
    <h2>Hello Echarts</h2>
    <div style="display: flex; justify-content: center">
      <div id="myChart" style="width: 500px; height: 400px"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'customForm',
  data() {
    return {}
  },
  mounted() {
    this.echartFirst()

    this.demo()
  },
  methods: {
    echartFirst() {
      const myChart = window.echarts.init(document.getElementById('myChart'))
      let option

      option = {
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            data: [820, 932, 901, 934, 1290, 1330, 1320],
            type: 'line',
            areaStyle: {}
          }
        ]
      }

      option && myChart.setOption(option)
    },
    demo() {
      const ddd = '&amp;'

      console.log('111111', decodeURIComponent('&amp;'));
    }
  }
}
</script>
