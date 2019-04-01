<template>
    <div class="container">
        <el-row>
            <el-col :span="2" style="width: 6.5%;line-height: 30px;text-align: center;">
                <span>负责人</span>
            </el-col>
            <el-col :span="3">
                <el-input v-model="clientName" size="small" placeholder="请输入姓名"></el-input>
            </el-col>
            <el-col :span="2" style="width: 6.5%;line-height: 30px;text-align: center;">
                <span>区县</span>
            </el-col>
            <el-col :span="3">
                <el-select size="small" v-model="isMember">
                    <el-option value="[1, 2, 3]">

                    </el-option>
                </el-select>  
            </el-col>
            <el-col :span="2" style="width: 6.5%;line-height: 30px;text-align: center;">
                <span>机构类型</span>
            </el-col>
            <el-col :span="3">
                <el-select size="small" v-model="isMember">
                    <el-option value="[1, 2, 3]">

                    </el-option>
                </el-select>
            </el-col>
            <el-col :span="2" style="width: 6.5%;line-height: 30px;text-align: center;">
                <span>合作时间</span>
            </el-col>
            <el-col :span="4">
                <el-date-picker
                    style="width: 100%"
                    size="small"
                    v-model="clientChoseDate"
                    type="daterange"
                    range-separator="至"
                    start-placeholder="开始日期"
                    end-placeholder="结束日期">
                </el-date-picker>
            </el-col>
            <el-col :span="2" style="margin-left: 2%">
                <el-button size="small" type="primary">查询</el-button>
            </el-col>
        </el-row>
        <el-row class="statistic">
            <el-col :span="5" class="box">
                <p>机构数量</p>
                <h2>200</h2>
            </el-col>
            <el-col :span="5"  class="box">
                <p>到访人数</p>
                <h2>2000</h2>
            </el-col>
            <el-col :span="5" class="box">
                <p>问题人数</p>
                <h2>3000</h2>
            </el-col>
            <el-col :span="5" class="box">
                <p>会员人数</p>
                <h2>500</h2>
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
    name: 'extendsPage',
    data() {
        return {
          msg: '主页',
          orgOptions: {},
          activeName: 'first',
          options: [{
            value: '一',
            label: '张三',
            },{
            value: '二',
            label: '李四'
          }],
          clientName: '',
          isMember: '',
          clientChoseDate: '',

      }
    },
    mounted() {
        this.initChart();
        this.init();   
    },
    methods: {
        handleClick(tab, event) {
            console.log(tab, event);
        },
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
                    [60, 20, '培训类'],
                    [21, 40, '托管类'],
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
}
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

