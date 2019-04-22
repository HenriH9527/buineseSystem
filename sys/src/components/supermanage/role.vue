<template>
  <div class="container">
    <el-row class="query_hurdle">
      <el-col :span="2" style="margin-left: 2%;">
        <el-button type="success">新增角色</el-button>
      </el-col>
      <el-col :span="2" style="width:5.33%;text-align: center">
        角色名称
      </el-col>
      <el-col :span="4">
        <el-input placeholder="输入角色名称"></el-input>
      </el-col>
      <el-col :span="2" style="width: 5.33%;text-align: center">
        <el-button type="primary" style="margin-left: 10px">查询</el-button>
      </el-col>
    </el-row>
    <el-row class="client_table">
        <el-col :span="24">
          <el-table :border="true" :data="clientData" style="width: 100%">
            <el-table-column width="60" align="center" type="index" label="序号">

            </el-table-column>
            <el-table-column align="center" prop="name" label="角色名称" min-width="60"></el-table-column>
            <el-table-column align="center" prop="phone" label="功能" min-width="220"></el-table-column>
            <el-table-column align="center" prop="operation" label="操作" min-width="90">
              <template slot-scope="scope">
                <el-button type="warning" @click="handleOrder(scope.row)" size="small">修改角色</el-button>
                <el-button type="danger" @click="handleOrder(scope.row)" size="small">删除角色</el-button>
              </template>
            </el-table-column>
          </el-table>
        </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
      return {
        date: '',
        takeName: '',
        options: [{
          value: '一',
          label: '张三',
        },{
          value: '二',
          label: '李四'
        }],
        orgOptions: {},
        clientData: [{
          name: '张三',
          sex: '男',
          phone: '1829416233',
          takePeople: '王麻子',
          productName: '拉升期',
          moduleState: '完成',
          time: String(new Date().toLocaleDateString()),
          isMember: '是',
        }],
      }
  },
  mounted() {
    this.initChart();
    this.init();
  },
  methods: {
    init ()  {
        const self = this;
        setTimeout(() => {
           window.onresize = function() {
              self.$refs.chart1.resize();
            }
        }, 10);
    },
    initChart() {
      this.orgOptions = {
        dataset: {
        source: [
            ['score', 'amount', 'product'],
            [60, 20, '自检数量'],
            [21, 40, '成型验收数量'],
          ]
        },
        grid: {containLabel: true},
        xAxis: {name: 'amount'},
        yAxis: {type: 'category'},
        visualMap: {
          orient: 'horizontal',
          left: 'center',
          min: 10,
          max: 100,
          text: ['High Score', 'Low Score'],
          // Map the score column to color
          dimension: 0,        
          inRange: {
            color: ['#D7DA8B', '#E15457']
          }
        },
        series: [
            {
                type: 'bar',
                encode: {
                    // Map the "amount" column to X axis.
                    x: 'amount',
                    // Map the "product" column to Y axis
                    y: 'product'
                }
            }
        ]
      }
    }
  }
};
</script>

<style scoped lang="scss">
.container{
  width: 100%;
  .query_hurdle{
    font-size: 14px;
    letter-spacing: 1px;
    color: #606266;
    line-height: 40px;
    text-align: left;
    cursor: pointer;
    padding: 10px 0;
    border-bottom: 1px solid #eeeeee;
  }
  .statistics{
    width: 100%;
    border-top: 1px solid rgba(255, 255, 255, 0);
    padding-top: 20px;
    .module{
      text-align: center;
      border: 1px solid rgba(187, 187, 187, .5);
      margin-left: 3%;
    }
  }
  .graph{
    height: 900px;
    .graph_box{
      width: 90%;
      height: 100%;
      background: rgba(244, 244, 244, 1);
      margin-left: 3%;
      margin-top: 20px;
      .echarts{
        width: 100%;
        height: 600px;
        position: relative;
        left: -90px;
      }
    }
  }
  .client_table{
    margin-top: 20px;
  }
}
</style>
