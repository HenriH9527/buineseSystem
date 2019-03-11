<template>
  <div class="container">
    <el-row class="query_hurdle">
      <el-col :span="2" style="width: 6.33%;text-align: center;">
        快速查看
      </el-col>
      <el-col :span="2" style="width: 6.33%">
        <el-button>今天</el-button>
      </el-col>
      <el-col :span="2" style="width: 6.33%">
        <el-button>昨天</el-button>
      </el-col>
      <el-col :span="2" style="width: 6.33%">
        <el-button>近7天</el-button>
      </el-col>
      <el-col :span="2" style="width: 6.33%;text-align: center">
        选择日期
      </el-col>
      <el-col :span="13">
        <el-date-picker
        size="large"
        v-model="date"
        type="daterange"
        range-separator="至"
        start-placeholder="开始日期"
        end-placeholder="结束日期">
      </el-date-picker>
      <el-button type="primary" style="margin-left: 10px">查询</el-button>
      </el-col>
    </el-row>
    <el-row class="data_view">
      <el-col :span="5" class="data_unit">
        <p>下单数量</p>
        <h2>99</h2>
      </el-col>
      <el-col :span="5" class="data_unit">
        <p>销售金额</p>
        <h2>6666666.66</h2>
      </el-col>
      <el-col :span="5" class="data_unit">
        <p>新增客户数量</p>
        <h2>3000</h2>
      </el-col>
      <el-col :span="5" class="data_unit">
        <p>新增客户下单数</p>
        <h2>1000</h2>
      </el-col>
    </el-row>
    <el-row class="data_chart">
      <el-col :span="24" class="chart_box">
        <chart ref="chart1" :options="orgOptions" :auto-resize="true"></chart>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      date: '',
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
        xAxis: {
            type: 'category',
            data: ['8点', '9点', '10点', '11点', '12点', '13点', '14点', '15点', '16点', '17点', '18点']
        },
        yAxis: {
            type: 'value'
        },
        series: [{
            data: [1820, 932, 901, 5934, 1290, 1330, 1320, 2345, 234, 1234, 23, 4234],
            type: 'line',
        }]
      };
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.container{
  width: 100%;
  height: 900px;
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
  .data_view{
    padding: 10px 0;
    text-align: center;
    border-bottom: 1px solid #eeeeee;
    .data_unit{
      border: 1px solid #e4e7ed;
      border-radius: 6px;
      margin-left: 1.3%;
      p{
        font-family: MicrosoftYaHei;
        font-size: 14px;
        letter-spacing: 1px;
        color: #606266;
      }
      h2{
        font-size: 36px;
        letter-spacing: 4px;
        color: #606266;
      }
    }
  }
  .data_chart{
    width: 100%;
    height: 400px;
    .chart_box{
      width: 100%;
      height: 100%;
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
