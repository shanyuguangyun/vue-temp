<template>
  <div class="tableWrapper">
    <p class="tableTitle">年度前十员工</p>
    <el-table
      class="table"
      :data="tableData"
      :row-class-name="tableRowClassName"
    >
      <el-table-column
        prop="date"
        header-align="center"
        align="center"
        label="日期"
        width="180"
      >
      </el-table-column>
      <el-table-column
        prop="name"
        label="姓名"
        header-align="center"
        align="center"
        width="180"
      >
      </el-table-column>
      <el-table-column
        prop="address"
        header-align="center"
        align="center"
        label="地址"
      >
      </el-table-column>
    </el-table>
  </div>
</template>

<style>
.el-table .warning-row {
  background: oldlace;
}

.el-table .success-row {
  background: #f0f9eb;
}
</style>

<script>
export default {
  methods: {
    tableRowClassName({ row, rowIndex }) {
      if (rowIndex === 1) {
        return "warning-row";
      } else if (rowIndex === 3) {
        return "success-row";
      }
      return "";
    },
  },
  data() {
    return {
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.tableWrapper {
  width: 100%;
  height: 100%;
  .tableTitle {
    color: rgba(23, 200, 224, 0.603);
    text-align: center;
    font-size: 18px;
  }
  .table {
    margin-top: 30px;
  }
}
</style>