<template>
  <div class="moduleH" style="width:100%; height: calc(100% - 35px);
  display: flex;
  flex-direction: column;">
    <div id="echartsFirst" style="width:100%; height: 210px; margin-top: 10px"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  mounted() {
    this.echartsFirst();
  },
  methods: {
    echartsFirst() {
      var charts = window.echarts.init(document.getElementById("echartsFirst"));
      var option = {
        title: {
          text: "",
          x:'center',
          textStyle: {
            color: "#FFF",
            fontSize: "12px"
          },
        },
        tooltip: {
          trigger: "axis",
          backgroundColor: "rgba(10, 67, 82, 0.8)",
          borderWidth: 1,
          borderColor: "#00FFFC",
          textStyle: {
            color: '#fff'
          },
          axisPointer: {
            type: "line",
            lineStyle: {
              color: "#84C1FF",
              width: 2,
              shadowColor: "#84C1FF",
              opacity: 0.1,
            },
            label: { show: false },
          },
        },
        dataZoom: [
          {
            type: "slider",
            show: true, //显示滚动条
            zoomLock: true, //锁定滚动条缩放，（固定滚动条长度）
            // xAxisIndex: [0],
            // left: '5%', //离左边的百分比距离
            bottom: 0,
            borderColor: "#f3f3f3", //边框和背景颜色一致，（因为无法做到无边框，只能跟随页面背景）
            height: 6, //滚动条高度
            showDetail: false, //关闭：拖拽时候显示详细数值信息。
            fillerColor: "#d4d4d4", //滚动条颜色
            backgroundColor: "rgba(0,0,0,0.3)",
            handleSize: "32%", //矢量尺寸占比
            handleStyle: {
              borderWidth: 0,
              color: "#d4d4d4"
            }, //SVG图形填充颜色
            handleIcon:
              "path://M512,512m-448,0a448,448,0,1,0,896,0a448,448,0,1,0,-896,0Z", //直接画一个圆形SVG矢量路径
            // start: 30, //初始化滚动条开始位置
            // end: 80, //初始化滚动条结束位置
            endValue: 9,
            start: 0, // 0
            showDataShadow: false //屏蔽折线图，true为显示折
          }
        ],
        legend: {
          x: 'right',
          padding: [10, 20, 0, 0],
          textStyle: {
            color: "#FFF",
            fontSize: "12px"
          },
          itemWidth: 10,
          itemHeight: 10,
          itemGap: 20,
          icon: "circle"
        },
        grid: {
          top: "25%",
          left: "3%",
          right: "4%",
          bottom: "4%",
          containLabel: true,
        },
        itemStyle: {
          borderRadius: [5,5,0,0]
        },
        barWidth: 7,
        // color: ['#00FFFC', '#3EA0FF'],
        color: [{
            type: 'linear',
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [{
                offset: 0, color: '#00FFFC' // 0% 处的颜色
            }, {
                offset: 1, color: 'rgba(0,255,252,0)' // 100% 处的颜色
            }],
            global: false // 缺省为 false
          },
          {
            type: 'linear',
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [{
                offset: 0, color: '#3EA0FF' // 0% 处的颜色
            }, {
                offset: 1, color: 'rgba(62,160,255,0)' // 100% 处的颜色
            }],
            global: false // 缺省为 false
          }
        ],
        xAxis: {
          type: "category",
          data: [
            "东城",
            "西城",
            "朝阳",
            "海淀",
            "丰台",
            "石景山",
            "顺义",
            "通州",
            "大兴",
            "房山",
            "门头沟",
            "昌平",
            "平谷",
            "密云",
            "怀柔",
          ],
          axisTick: {
            show: false,
          },
          axisLine: {
            show: true,
            lineStyle: {
              color: "#3D4146",
            },
          },
          axisLabel: {
            color: "#6F91AF",
            fontSize: 12,
            interval: 0
          }
        },
        yAxis: {
          show: true,
          type: "value",
          axisLabel: {
            color: "#6F91AF",
            fontSize: 12,
          },
          splitLine: {
              // y轴分割线配置
              show: true,
              lineStyle: {
                color: "rgba(61, 65, 70,.3)",
                type: "dashed",
              },
            },
        },
        series: [
          {
            name: "综窗",
            type: "bar",
            data: [182, 234, 290, 1049, 1317, 630, 182, 234, 290, 1049, 1317, 630, 700, 560, 684],
          },
          {
            name: "全程网办",
            type: "bar",
            data: [193, 234, 310, 1215, 1341, 681, 193, 234, 310, 1215, 1341, 681, 193, 234, 543],
          },
        ],
      };
      charts.setOption(option);
    }
  },
};
</script>

  