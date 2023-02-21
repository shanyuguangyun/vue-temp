<template>
  <div
    class="lineCharts"
    ref="myCharts"
    :style="{ width: width, height: height }"
  ></div>
</template>

<script>
import * as echarts from "echarts";
require("echarts/theme/macarons");

const option = {
  title: {
    text: "今年市场份额表",
    left: "center",
    top: 0,
  },
  tooltip: {},
  series: [
    {
      type: "pie",
      data: [
        {
          value: 700,
          name: "HuaWei",
        },
        {
          value: 500,
          name: "XiaoMi",
        },
        {
          value: 200,
          name: "Apple",
        },
      ],
    },
  ],
};
export default {
  props: {
    width: {
      type: String,
      default: "40%",
    },
    height: {
      type: String,
      default: "350px",
    },
    lineChartData: {
      type: Object,
      required: true,
    },
  },
  watch: {
    lineChartData: {},
  },
  data() {
    return {
      mycharts: null,
    };
  },
  mounted() {
    this.initEcharts();
  },
  methods: {
    initEcharts() {
      this.mycharts = echarts.init(this.$refs.myCharts, "macarons");
      this.mycharts.setOption(option);
    },
  },
};
</script>