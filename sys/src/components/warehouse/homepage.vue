<template>
  <div class="container">
    <el-row class="query_hurdle">
      <el-col :span="2" style="width: 5.33%;text-align: center">
        产品名
      </el-col>
      <el-col :span="3">
        <el-input size="small" placeholder="输入产品名"></el-input>
      </el-col>
      <el-col :span="2" style="width: 4.5%;text-align: center;">
          <span>医院</span>
        </el-col>
        <el-col :span="3">
          <el-select size="small" v-model="isMember">
            <el-option value="[1, 2, 3]">

            </el-option>
          </el-select>
      </el-col>
      <el-col :span="2" style="width: 5.33%;text-align: center;margin-left: 1%">
        <el-button size="small" type="primary">查询</el-button>
      </el-col>
    </el-row>
    <el-row class="statistics">
      <el-col class="module" :span="4">
        <p>产品待入库</p>
        <h2>1000</h2>
      </el-col>
      <el-col class="module" :span="4">
        <p>产品待出库</p>
        <h2>900</h2>
      </el-col>
      <el-col class="module" :span="4">
        <p>待入库已逾期</p>
        <h2>90</h2>
      </el-col>
      <el-col class="module" :span="4">
        <p>待出库已逾期</p>
        <h2>90</h2>
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
            [60, 20, '半成品质检数量'],
            [50, 30, '成型质检数量'],
            [21, 20, '修型质检数量'],
            [40, 10, '自制成品质检数量'],
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
