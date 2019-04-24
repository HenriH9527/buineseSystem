<template>
  <div class="container">
    <el-row class="query_hurdle">
      <el-col :span="2" style="width: 5.33%;text-align: center;margin-left: 2.1%">
        选择日期
      </el-col>
      <el-col :span="5">
        <el-date-picker
        style="width: 100%;"
        size="large"
        v-model="date"
        type="daterange"
        range-separator="至"
        start-placeholder="开始日期"
        end-placeholder="结束日期">
        </el-date-picker>
      </el-col>
      <el-col :span="2" style="width: 5.33%;text-align: center">
        <el-button type="primary" style="margin-left: 10px">查询</el-button>
      </el-col>
    </el-row>
    <el-row class="statistics">
      <el-col class="module" :span="4">
        <p>复查自动提醒客户数</p>
        <h2>300</h2>
      </el-col>
      <el-col class="module" :span="4">
        <p>复查人工提醒客户数</p>
        <h2>90</h2>
      </el-col>
      <el-col class="module" :span="4">
        <p>自动回访客户数</p>
        <h2>3000</h2>
      </el-col>
      <el-col class="module" :span="4">
        <p>人工回访客户数</p>
        <h2>90</h2>
      </el-col>
      <el-col class="module" :span="4">
        <p>问题反馈数量</p>
        <h2>90</h2>
      </el-col>
    </el-row>
    <el-row class="graph">
      <el-col class="graph_box">
        <chart ref="chart1" :options="orgOptions" :auto-resize="true"></chart>
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
            [60, 20, '自动回访成功率'],
            [21, 40, '复查自动提醒按时到访率'],
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
}
</style>
