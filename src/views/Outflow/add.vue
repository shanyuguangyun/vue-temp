<template>
  <div>
    <el-card>
      <div class="outflowAdd">
        <el-form inline class="outflowForm" size="mini" label-width="80px">
          <el-form-item label="人员：">
            <el-input placeholder="请输入名称" style="width: 150px"></el-input>
          </el-form-item>
          <el-form-item label="地址：">
            <el-input placeholder="请输入地址" style="width: 150px"></el-input>
          </el-form-item>
          <el-form-item label="类型：">
            <el-select v-model="type" style="width: 150px">
              <el-option
                v-for="item in spendType"
                :key="item.label"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="时间段：">
            <el-select v-model="time" style="width: 150px">
              <el-option
                v-for="item in spendTimes"
                :key="item.label"
                :label="item.label"
                :value="item.value"
              >
              </el-option>
            </el-select>
          </el-form-item>
          <el-button size="mini" @click="toggleMoreCondition"
            >更多条件<i
              style="margin-left: 5px"
              :class="moreCondition ? 'el-icon-arrow-down' : 'el-icon-arrow-up'"
            ></i
          ></el-button>
          <br />
          <el-form-item label="金额：" v-if="moreCondition">
            <el-select v-model="money" style="width: 150px">
              <el-option
                v-for="item in spendMoney"
                :key="item.label"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="日期：" v-if="moreCondition">
            <el-date-picker
              v-model="dateRange"
              type="daterange"
              range-separator="至"
              start-placeholder="开始日期"
              end-placeholder="结束日期"
            >
            </el-date-picker>
          </el-form-item>
        </el-form>
        <div class="btnGroup">
          <el-button size="mini" type="primary" style="width: 100px"
            >查询</el-button
          >
          <el-button size="mini" type="primary" style="width: 100px"
            >新增</el-button
          >
          <el-button size="mini" type="primary" style="width: 100px"
            >导入</el-button
          >
          <el-button size="mini" type="primary" style="width: 100px"
            >导出</el-button
          >
        </div>
      </div>

      <el-table
        stripe
        size="mini"
        :data="tableData"
        style="width: 100%; margin-top: 20px"
        :header-cell-style="{ background: '#eee' }"
      >
        <el-table-column type="expand">
          <template slot-scope="props">
            <el-form
              label-position="right"
              inline
              class="tableItemRow"
              label-width="100px"
            >
              <el-form-item label="ID:">
                <span>{{ props.row.id }}</span>
              </el-form-item>
              <el-form-item label="商品:">
                <span>{{ props.row.goods }}</span>
              </el-form-item>
              <el-form-item label="店铺:">
                <span>{{ props.row.shop }}</span>
              </el-form-item>
              <el-form-item label="店铺地址:">
                <span>{{ props.row.shopAddress }}</span>
              </el-form-item>
              <el-form-item label="详细说明:">
                <span>{{ props.row.mark }}</span>
              </el-form-item>
            </el-form>
          </template>
        </el-table-column>
        <el-table-column label="ID" prop="id" width="100"> </el-table-column>
        <el-table-column label="类型">
          <template slot-scope="{ row }">
            <el-tag>{{ row.type | typeFilter(spendType) }}</el-tag>
          </template>
        </el-table-column>
        <el-table-column label="地址" prop="address"> </el-table-column>
        <el-table-column label="金额">
          <template slot-scope="{ row }">
            <p>{{ row.money + "元" }}</p>
          </template>
        </el-table-column>
        <el-table-column label="时间段" prop="time"> </el-table-column>
        <el-table-column label="操作" width="200" prop="desc">
          <el-button type="text">编辑</el-button>
          <el-button type="text">删除</el-button>
        </el-table-column>
      </el-table>
    </el-card>
  </div>
</template>

<script>
import { spendType, spendTimes, spendMoney } from "@/utils/const.js";
export default {
  data() {
    return {
      type: null,
      money: null,
      time: null,
      dateRange: "",
      moreCondition: false,
      spendType,
      spendTimes,
      spendMoney,
      tableData: [
        {
          id: 1,
          type: 0,
          address: "广东省",
          money: 5,
          mark: "买了根肠",
          goods: "香肠",
          shop: "美宜佳",
          shopAddress: "怀德",
          time: 0,
        },
        {
          id: 2,
          type: 0,
          address: "广东省",
          money: 5,
          mark: "买了根肠",
          goods: "香肠",
          shop: "美宜佳",
          shopAddress: "怀德",
          time: 0,
        },
        {
          id: 3,
          type: 0,
          address: "广东省",
          money: 5,
          mark: "买了根肠",
          goods: "香肠",
          shop: "美宜佳",
          shopAddress: "怀德",
          time: 0,
        },
        {
          id: 4,
          type: 0,
          address: "广东省",
          money: 5,
          mark: "买了根肠",
          goods: "香肠",
          shop: "美宜佳",
          shopAddress: "怀德",
          time: 0,
        },
        {
          id: 5,
          type: 0,
          address: "广东省",
          money: 5,
          mark: "买了根肠",
          goods: "香肠",
          shop: "美宜佳",
          shopAddress: "怀德",
          time: 0,
        },
      ],
    };
  },
  methods: {
    toggleMoreCondition() {
      this.moreCondition = !this.moreCondition;
    },
  },
  filters: {
    typeFilter(type, options) {
      const typeArr = options.map((item) => {
        return item.label;
      });
      return typeArr[type + 1];
    },
  },
};
</script>

<style lang="scss" scoped>
.outflowAdd {
  display: flex;
  justify-content: space-between;
}
.tableItemRow {
  padding-left: 20px;
  background: #303133;
  .el-form-item {
    width: 30%;
    height: 20px;
    color: #ffffff;
    /deep/ .el-form-item__lab {
      color: #606266;
    }
  }
}
</style>