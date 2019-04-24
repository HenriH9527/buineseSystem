<template>
  <div class="container">
    <el-row class="search">
        <el-col :span="2" style="width: 5.5%;line-height: 30px">
          <span>试穿时间</span>
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
        <el-col :span="1" style="width: 4.8%">
          <el-button size="small" type="primary" class="btns">查询</el-button>
        </el-col>
        <el-col :span="1" :offset="14" style="width: 4.8%">
          <el-button size="small" type="danger" class="btns">导出excel</el-button>
        </el-col>
    </el-row>
    <el-row class="client_table">
        <el-col :span="24">
          <el-table :border="true" :data="clientData" style="width: 100%">
            <el-table-column width="60" align="center" type="index" label="序号">

            </el-table-column>
            <el-table-column align="center" prop="name" label="客户姓名" min-width="60"></el-table-column>
            <el-table-column align="center" prop="sex" label="性别" min-width="60"></el-table-column>
            <el-table-column align="center" prop="sex" label="年龄" min-width="60"></el-table-column>
            <el-table-column align="center" prop="phone" label="电话" min-width="100"></el-table-column>
            <el-table-column align="center" prop="takePeople" label="地址" min-width="60"></el-table-column>
            <el-table-column align="center" prop="productName" label="试穿时间" min-width="80"></el-table-column>
            <el-table-column align="center" prop="time" label="最近回访时间" min-width="60"></el-table-column>
            <el-table-column align="center" prop="moduleState" label="最近回访方式" min-width="80"></el-table-column>
            <el-table-column align="center" prop="operation" label="操作" min-width="90">
              <template slot-scope="scope">
                <el-button type="warning" @click="handleOrder(scope.row)" size="small">详情</el-button>
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
