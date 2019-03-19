<template>
  <div class="container">
    <el-row class="statistic">
        <el-col :span="4" class="box">
            <p>今日预计到访总人数</p>
            <h2>200</h2>
        </el-col>
        <el-col :span="4" class="box">
            <p>儿院下单客户数</p>
            <h2>200</h2>
        </el-col>
        <el-col :span="4" class="box">
            <p>儿院到访客户数</p>
            <h2>200</h2>
        </el-col>
        <el-col :span="4" class="box">
            <p>口碑到访客户数</p>
            <h2>200</h2>
        </el-col>
        <el-col :span="4" class="box">
            <p>到访总人数</p>
            <h2>200</h2>
        </el-col>
    </el-row>
    <el-row class="graph_pool">
        <el-col :span="22" class="graph_area">
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
          msg: '主页',
          orgOptions: {},
      }
  },
  mounted() {
    this.initChart();
    this.init();   
  },
  methods: {
    init()  {
        const self = this;
        setTimeout(() => {
           window.onresize = function() {
              self.$refs.chart1.resize();
            }
        }, 10);
    },
    initChart() {
        this.orgOptions = {
            tooltip: {
                trigger: 'axis'
            },
            color: [
                '#3C8CEE', '#8BC34A', '#F56C6C'
            ],  
            legend: {
                data:['试穿到访','复查到访','维修到访'],
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            toolbox: {
                feature: {
                    saveAsImage: {}
                }
            },
            xAxis: {
                type: 'category',
                boundaryGap: false,
                data: ['9点','10点','11点','12点','13点','14点','15点']
            },
            yAxis: {
                type: 'value'
            },
            series: [
                {
                    name:'试穿到访',
                    type:'line',
                    stack: '总量',
                    data:[120, 132, 101, 134, 90, 230, 210]
                },
                {
                    name:'复查到访',
                    type:'line',
                    stack: '总量',
                    data:[220, 182, 191, 234, 290, 330, 310]
                },
                {
                    name:'维修到访',
                    type:'line',
                    stack: '总量',
                    data:[150, 232, 201, 154, 190, 330, 410]
                },
            ]
        }
    }
  }
};
</script>

<style scoped lang="scss">
.container{
    width: 100%;
    .statistic{
        margin: 15px 0;
        text-align: center;
        .box{
            margin-left: 3%;
            border: 1px solid rgba(187, 187, 187, .5);
        }
    }
    .graph_pool{
        height: 900px;
        .graph_area{
            width: 95.3%;
            height: 100%;
            background: rgba(244, 244, 244, 1);
            margin-left: 3%;
            padding-top: 30px;
            .echarts{
                width: 100%;
                height: 600px;
                position: relative;
                left: 0px;
            }
        }
    }
}
</style>
