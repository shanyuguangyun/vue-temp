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
    text: "产品年度表",
    left: "center",
    top: 0,
  },
  legend: {
    top: 40,
  },
  tooltip: {},
  dataset: {
    // 用 dimensions 指定了维度的顺序。直角坐标系中，如果 X 轴 type 为 category，
    // 默认把第一个维度映射到 X 轴上，后面维度映射到 Y 轴上。
    // 如果不指定 dimensions，也可以通过指定 series.encode
    // 完成映射，参见后文。
    dimensions: ["product", "Apple", "HuaWei", "XiaoMi"],
    source: [
      { product: "2018", Apple: 10, HuaWei: 30, XiaoMi: 60 },
      { product: "2019", Apple: 20, HuaWei: 40, XiaoMi: 70 },
      { product: "2020", Apple: 50, HuaWei: 90, XiaoMi: 90 },
      { product: "2021", Apple: 20, HuaWei: 88, XiaoMi: 55 },
      { product: "2022", Apple: 50, HuaWei: 120, XiaoMi: 50 },
      { product: "2023", Apple: 72, HuaWei: 150, XiaoMi: 90 },
    ],
  },
  xAxis: { type: "category" },
  yAxis: {},
  series: [
    {
      type: "line",
    },
    {
      type: "line",
    },
    {
      type: "line",
    },
  ],
};
export default {
  props: {
    width: {
      type: String,
      default: "100%",
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