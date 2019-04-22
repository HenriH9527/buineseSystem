<template>
  <div class="container">
    <el-row class="query_hurdle">
      <el-col :span="2" style="width: 6.33%;text-align: center;">
        客户来源
      </el-col>
      <el-col :span="2">
        <el-select v-model="takeName" placeholder="全部" size="small">
          <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">

          </el-option>
        </el-select>
      </el-col>
      <el-col :span="2" style="width: 4.33%;text-align: center;">
        性别
      </el-col>
      <el-col :span="1">
        <el-select v-model="takeName" placeholder="全部" size="small">
          <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">

          </el-option>
        </el-select>
      </el-col>
      <el-col :span="2" style="width: 5.33%;text-align: center">
        体检日期
      </el-col>
      <el-col :span="5">
        <el-date-picker
        style="width: 100%;"
        size="small"
        v-model="date"
        type="daterange"
        range-separator="至"
        start-placeholder="开始日期"
        end-placeholder="结束日期">
        </el-date-picker>
      </el-col>
      <el-col :span="2" style="width: 4.33%;text-align: center;">
        体检设备
      </el-col>
      <el-col :span="2">
        <el-select v-model="takeName" placeholder="全部" size="small">
          <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">

          </el-option>
        </el-select>
      </el-col>
      <el-col :span="2" style="width: 5.33%;text-align: center">
        <el-button size="small " type="primary" style="margin-left: 10px">开始查询</el-button>
      </el-col>
    </el-row>
    <el-row class="query_hurdle">
      <el-col :span="2" style="width: 3.5%;margin-left: 11.2%;text-align: center;">
        区县
      </el-col>
      <el-col :span="2">
        <el-select v-model="takeName" placeholder="全部" size="small">
          <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">

          </el-option>
        </el-select>
      </el-col>
      <el-col :span="2" style="width: 5.33%;text-align: center;">
        学校类型
      </el-col>
      <el-col :span="2">
        <el-select v-model="takeName" placeholder="全部" size="small">
          <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">

          </el-option>
        </el-select>
      </el-col>
      <el-col :span="2" style="width: 4.33%;text-align: center;">
        年级
      </el-col>
      <el-col :span="2">
        <el-select v-model="takeName" placeholder="全部" size="small">
          <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">

          </el-option>
        </el-select>
      </el-col>
      <el-col :span="2" style="width: 4.33%;text-align: center;">
        体检项目
      </el-col>
      <el-col :span="2">
        <el-select v-model="takeName" placeholder="全部" size="small">
          <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">

          </el-option>
        </el-select>
      </el-col>
      <el-col :span="2" style="width: 5.33%;text-align: center">
        <el-button size="small " type="danger" style="margin-left: 10px">全部重置</el-button>
      </el-col>
    </el-row>
    <el-row class="info_search">
      <el-col class="search_part" :span="8">
        <div class="search_container">
          <p>部分数据：</p>
          <el-input placeholder="请输入产品昵称"></el-input>
        </div>
      </el-col>
      <el-col class="search_part" :span="16">
        <div class="search_container">
          <p>测评次数：</p>
          <el-input placeholder="请输入产品昵称"></el-input>
          <p>测评次数：</p>
          <el-select v-model="takeName" placeholder="全部" size="small">
            <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">

            </el-option>
          </el-select>
        </div>
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
  .info_search{
    width: 100%;
    height: 900px;
    border-top: 1px solid rgba(255, 255, 255, 0);
    .search_part{
      height: 100%;
      border-right: 1px solid #eeeeee;
      .search_container{
        display: inline-block;
        width: 50%;
        margin-left: 20.5%;
      }  
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
