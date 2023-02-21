<template>
  <div
    class="lineCharts"
    ref="myCharts"
    :style="{width:width, height:height}"
  >
  </div>
</template>

<script>
import * as echarts from 'echarts'
require('echarts/theme/macarons')

const option = {
  title: {
    text: '三年来记录表',
    left: 'center',
    top: 0
  },
  legend: {
    top: 40
  },
  tooltip: {},
  dataset: {
    // 用 dimensions 指定了维度的顺序。直角坐标系中，如果 X 轴 type 为 category，
    // 默认把第一个维度映射到 X 轴上，后面维度映射到 Y 轴上。
    // 如果不指定 dimensions，也可以通过指定 series.encode
    // 完成映射，参见后文。
    dimensions: ['product', '2015', '2016', '2017'],
    source: [
      { product: 'Matcha Latte', '2015': 43.3, '2016': 85.8, '2017': 93.7 },
      { product: 'Milk Tea', '2015': 83.1, '2016': 73.4, '2017': 55.1 },
      { product: 'Cheese Cocoa', '2015': 86.4, '2016': 165.2, '2017': 82.5 },
      { product: 'Walnut Brownie', '2015': 72.4, '2016': 53.9, '2017': 39.1 }
    ]
  },
  xAxis: { type: 'category' },
  yAxis: {},
  series: [{ type: 'bar' }, { type: 'bar' }, { type: 'bar' }]
}
export default {
  props: {
    width: {
      type: String,
      default: '100%'
    },
    height: {
      type: String,
      default: '350px'
    },
    lineChartData: {
      type: Object,
      required: true
    }
  },
  watch: {
    lineChartData: {}
  },
  data () {
    return {
      mycharts: null
    }
  },
  mounted () {
    this.initEcharts()
  },
  methods: {
    initEcharts () {
      this.mycharts = echarts.init(this.$refs.myCharts, 'macarons')
      this.mycharts.setOption(option)
    }
  }
}
</script>