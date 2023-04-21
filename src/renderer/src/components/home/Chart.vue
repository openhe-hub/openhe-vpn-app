<template>
  <div id="chart-container">
    Down/Up Speed Chart
    <div id="chart-box" ref="chartRef"></div>
  </div>
</template>

<script setup>
import * as echarts from 'echarts'
import {onMounted, ref} from 'vue'

const chartRef = ref()

onMounted(() => {
  init()
})

const init = () => {
  let chart = echarts.init(chartRef.value)
  const option = {
    backgroundColor: '', //背景颜色透明
    tooltip: {
      trigger: 'axis' //鼠标经过提示
    },
    legend: {
      icon: 'roundRect', //icon为圆角矩形
      x: 'center',
      y: 'bottom',
      data: ['down speed', 'up speed'],
      textStyle: {
        //图例文字的样式
        color: '#fff',
        fontSize: 14
      }
    },
    grid: {
      left: 0,
      top: '5%',
      bottom: '5%',
      containLabel: true
    },
    xAxis: {
      type: 'category',
      data: ['21:44', '21:43', '21:42', '21:41', '21:41', '21:41'],
      show: false //隐藏x轴
    },
    yAxis: {
      type: 'value',
      splitLine: { show: false }, //去除网格线
      show: false //隐藏y轴
    },
    color: ['#1DB0B8', '#37C6C0', '#D0E9FF', '#c7353a', '#f5b91e'],
    series: [
      {
        name: 'down speed',
        type: 'line',
        itemStyle: {
          normal: {
            color: 'red',
            lineStyle: {
              // 系列级个性化折线样式
              width: 2,
              type: 'solid',
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                {
                  offset: 0,
                  color: 'green'
                },
                {
                  offset: 1,
                  color: 'red'
                }
              ]) //线条渐变色
            }
          },
          emphasis: {
            color: 'red',
            lineStyle: {
              // 系列级个性化折线样式
              width: 2,
              type: 'dotted',
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                {
                  offset: 0,
                  color: 'green'
                },
                {
                  offset: 1,
                  color: 'red'
                }
              ])
            }
          }
        }, //线条样式
        data: [320, 332, 301, 434, 490, 530, 510, 555]
      },
      {
        name: 'up speed',
        type: 'line',
        itemStyle: {
          color: '#6A5ACD',
          normal: {
            lineStyle: {
              // 系列级个性化折线样式
              width: 2,
              type: 'solid',
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                {
                  offset: 0,
                  color: '#0000FF'
                },
                {
                  offset: 1,
                  color: '#CD5C5C'
                }
              ]) //线条渐变色
            }
          },
          emphasis: {
            color: '#6A5ACD',
            lineStyle: {
              // 系列级个性化折线样式
              width: 2,
              type: 'dotted',
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                {
                  offset: 0,
                  color: '#1E90FF'
                },
                {
                  offset: 1,
                  color: '#0000FF'
                }
              ])
            }
          }
        }, //线条样式
        areaStyle: {
          normal: {
            //颜色渐变函数 前四个参数分别表示四个位置依次为左、下、右、上
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              {
                offset: 0,
                color: 'rgba(80,141,255,0.39)'
              },
              {
                offset: 0.34,
                color: 'rgba(56,155,255,0.25)'
              },
              {
                offset: 1,
                color: 'rgba(38,197,254,0.00)'
              }
            ])
          }
        }, //区域颜色渐变
        data: [450, 432, 401, 354, 390, 330, 310, 242]
      }
    ]
  }
  chart.setOption(option)
}
</script>

<style scoped>
div#chart-box {
  height: 32vh;
  width: 37vw;
}
</style>
