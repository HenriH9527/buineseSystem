<template>
  <div class="container">
    <el-row class="search">
        <el-col :span="2" style="width: 5.5%;line-height: 30px">
          <span>下单日期</span>
      </el-col>
      <el-col :span="5">
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
        <el-col :span="2" style="width: 5.5%;line-height: 30px">
          <span>产品名</span>
        </el-col>
        <el-col :span="3">
          <el-input v-model="clientName" size="small" placeholder="请输入姓名"></el-input>
        </el-col>
        <el-col :span="2" style="width: 5.5%;line-height: 30px">
          <span>下单人员</span>
        </el-col>
        <el-col :span="3">
          <el-input size="small" v-model="clientPhone" placeholder="请输入联系电话"></el-input>  
        </el-col>
        <el-col :span="2" style="width: 4.5%;line-height: 30px">
          <span>医院</span>
        </el-col>
        <el-col :span="2">
          <el-select size="small" v-model="isMember">
            <el-option value="[1, 2, 3]">

            </el-option>
          </el-select>
        </el-col>
        <el-col :span="1" style="width: 4.8%;margin-left: 1%">
          <el-button size="small" type="primary" class="btns">查询</el-button>
        </el-col>
        <el-col :span="1" style="width: 4.8%">
          <el-button size="small" type="primary" class="btns">导出</el-button>
        </el-col>
    </el-row>
    <el-row class="another_row">
      <el-col :span="2" style="width: 5.5%;">
        <span>是否开票</span>
      </el-col>
      <el-col :span="2" style="text-align: left">
          <el-select size="small" v-model="isMember">
            <el-option value="[1, 2, 3]">

            </el-option>
          </el-select>     
      </el-col>
      <el-col :span="2" style="width: 5.5%;">
        <span>客户姓名</span>
      </el-col>
      <el-col :span="3">
          <el-input size="small" v-model="clientPhone" placeholder="请输入客户姓名"></el-input>  
      </el-col>
      <el-col :span="2" style="width: 5.5%;">
        <span>联系电话</span>
      </el-col>
      <el-col :span="3">
          <el-input size="small" v-model="clientPhone" placeholder="请输入联系电话"></el-input>  
      </el-col>
      <el-col :span="2" style="width: 5.5%;">
        <span>订单状态</span>
      </el-col>
      <el-col :span="2" style="text-align: left">
          <el-select size="small" v-model="isMember">
            <el-option value="[1, 2, 3]">

            </el-option>
          </el-select>     
      </el-col>
      <el-col :span="2" style="width: 5.5%;">
        <span>产品类型</span>
      </el-col>
      <el-col :span="2" style="text-align: left">
          <el-select size="small" v-model="isMember">
            <el-option value="[1, 2, 3]">

            </el-option>
          </el-select>     
      </el-col>
      <el-col :span="2" style="width: 5.5%;">
        <span>订单号</span>
      </el-col>
      <el-col :span="3">
          <el-input size="small" v-model="clientPhone" placeholder="请输入联系电话"></el-input>  
      </el-col>

    </el-row>
    
    <el-row class="client_table">
        <el-col :span="24">
          <el-table :border="true" :data="clientData" style="width: 100%">
            <el-table-column width="60" align="center" type="index" label="序号">

            </el-table-column>
            <el-table-column align="center" prop="name" label="客户姓名" min-width="60"></el-table-column>
            <el-table-column align="center" prop="phone" label="联系电话" min-width="80"></el-table-column>
            <el-table-column align="center" prop="sex" label="产品名称" min-width="60"></el-table-column>
            <el-table-column align="center" prop="takePeople" label="产品类型" min-width="60"></el-table-column>
            <el-table-column align="center" prop="productName" label="医院名称" min-width="60"></el-table-column>
            <el-table-column align="center" prop="time" label="欠款" min-width="60"></el-table-column>
            <el-table-column align="center" prop="moduleState" label="实收金额" min-width="60"></el-table-column>
            <el-table-column align="center" prop="moduleState" label="现金" min-width="60"></el-table-column>
            <el-table-column align="center" prop="moduleState" label="拉卡拉" min-width="60"></el-table-column>
            <el-table-column align="center" prop="moduleState" label="转账" min-width="60"></el-table-column>
            <el-table-column align="center" prop="moduleState" label="POSS机" min-width="60"></el-table-column>
            <el-table-column align="center" prop="moduleState" label="退款金额" min-width="60"></el-table-column>
            <el-table-column align="center" prop="moduleState" label="是否开票" min-width="60"></el-table-column>
            <el-table-column align="center" prop="moduleState" label="下单时间" min-width="80"></el-table-column>
            <el-table-column align="center" prop="moduleState" label="退款时间" min-width="80"></el-table-column>
            <el-table-column align="center" prop="moduleState" label="下单员" min-width="60"></el-table-column>
            <el-table-column align="center" prop="moduleState" label="订单号" min-width="80"></el-table-column>
            <el-table-column align="center" prop="operation" label="操作" min-width="90">
              <template slot-scope="scope">
                <el-button type="primary" @click="handleOrder(scope.row)" size="small">详情</el-button>
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
        clientName: '',
        clientPhone: '',
        isMember: '',
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
  }
};
</script>

<style scoped lang="scss">
.container{
  width: 100%;
  .search{
    text-align: center; 
  }
  .another_row{
    text-align: center;
    margin-top: 20px;
    span{
      line-height: 30px;
    }
  }
  .client_table{
    margin-top: 20px;
  }
}
</style>
