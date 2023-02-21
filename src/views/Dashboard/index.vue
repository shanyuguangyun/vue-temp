<template>
  <div class="dashboard">
    <el-row class="infoCards" :gutter="50">
      <el-col :span="8">
        <div class="cardItem">
          <div class="cardItem_txt">
            <count-to
              class="cardItem_p0 color-green"
              :startVal="startVal"
              :endVal="vistors"
              :duration="2000"
            >
            </count-to>
            <p class="cardItem_p1">总在线人数</p>
          </div>
          <div class="cardItemIcon">
            <i class="el-icon-user color-green"></i>
          </div>
        </div>
      </el-col>
      <el-col :span="8">
        <div class="cardItem">
          <div class="cardItem_txt">
            <count-to
              class="cardItem_p0 color-blue"
              :startVal="startVal"
              :endVal="vistors"
              :duration="2000"
            >
            </count-to>
            <p class="cardItem_p1">总在线人数</p>
          </div>
          <div class="cardItemIcon">
            <i class="el-icon-chat-dot-square color-blue"></i>
          </div>
        </div>
      </el-col>
      <el-col :span="8">
        <div class="cardItem">
          <div class="cardItem_txt">
            <count-to
              class="cardItem_p0 color-red"
              :startVal="startVal"
              :endVal="vistors"
              :duration="2000"
            >
            </count-to>
            <p class="cardItem_p1">总在线人数</p>
          </div>
          <div class="cardItemIcon">
            <i class="el-icon-shopping-cart-2 color-red"></i>
          </div>
        </div>
      </el-col>
    </el-row>
    <bar-charts :lineChartData="lineChartData"></bar-charts>
    <line-charts :lineChartData="lineChartData"></line-charts>

    <div class="cardBottomCharts">
      <pie-charts
        class="bottomCharts_p0"
        :lineChartData="lineChartData"
      ></pie-charts>
      <top-ten-table class="bottomCharts_p1"></top-ten-table>
    </div>
  </div>
</template>
<script>
import CountTo from "vue-count-to";
import BarCharts from "./components/BarCharts";
import LineCharts from "./components/LineCharts";
import PieCharts from "./components/PieCharts";
import TopTenTable from "./components/Table";
export default {
  name: "Home",
  data() {
    return {
      startVal: 0,
      vistors: 200,
      lineChartData: {},
    };
  },
  components: {
    CountTo,
    BarCharts,
    LineCharts,
    PieCharts,
    TopTenTable,
  },
};
</script>
    LineCharts

<style lang="scss" scoped>
@mixin shadow {
  box-shadow: 0 0 10px #e2e2e2;
}
.color-green {
  color: #40c9c6;
}
.color-blue {
  color: #36a3f7 !important;
}
.color-red {
  color: #f4516c !important;
}
.infoCards {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}
.cardItem {
  display: flex;
  flex-direction: row;
  @include shadow();
  height: 100px;
  border-radius: 4px;
  background: #fff;
  .cardItem_txt {
    flex-basis: 100px;
    width: 100px;
    flex-shrink: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-left: 10px;
    .cardItem_p0 {
      font-size: 20px;
    }
  }
  .cardItemIcon {
    flex-grow: 1;
    font-size: 50px;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
}
.lineCharts {
  background: #fff;
  margin-top: 30px;
  padding: 30px 0;
  @include shadow();
}
.cardBottomCharts {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 30px;
  .bottomCharts_p0 {
  }
  .bottomCharts_p1 {
    background: #fff;
    @include shadow();
    margin-left: 50px;
    margin-top: 30px;
    height: 350px;
    padding: 30px 30px;
  }
}
</style>
