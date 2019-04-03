<template>
  <div class="container">
    <el-row class="search">
        <el-col :span="2" style="width: 5.5%;line-height: 30px">
          <span>产品名</span>
        </el-col>
        <el-col :span="3">
          <el-input v-model="clientName" size="small" placeholder="请输入姓名"></el-input>
        </el-col>
        <el-col :span="2" style="width: 5.33%;text-align: center;line-height: 30px">
          下单日期
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
        <el-col :span="2" style="width: 5.5%;line-height: 30px">
          <span>质检结果</span>
        </el-col>
        <el-col :span="2">
          <el-select size="small" v-model="isMember">
            <el-option value="[1, 2, 3]">

            </el-option>
          </el-select>
        </el-col>
        <el-col :span="2" style="width: 5.5%;line-height: 30px">
          <span>是否逾期</span>
        </el-col>
        <el-col :span="2">
          <el-select size="small" v-model="isMember">
            <el-option value="[1, 2, 3]">

            </el-option>
          </el-select>
        </el-col>
        <el-col :span="1" style="width: 4.8%">
          <el-button size="small" type="primary" class="btns">查询</el-button>
        </el-col>
      </el-row>
    <el-row class="client_table">
        <el-col :span="24">
          <el-table :border="true" :data="clientData" style="width: 100%">
            <el-table-column width="60" align="center" type="index" label="序号">

            </el-table-column>
            <el-table-column align="center" prop="name" label="产品名称" min-width="60"></el-table-column>
            <el-table-column align="center" prop="age" label="加工数量" min-width="50"></el-table-column>
            <el-table-column align="center" prop="servePeople" label="驳回数量" min-width="60"></el-table-column>
            <el-table-column align="center" prop="time" label="产品规格" min-width="100"></el-table-column>
            <el-table-column align="center" prop="time" label="质检结果" min-width="100"></el-table-column>
            <el-table-column align="center" prop="isMember" label="下单日期" min-width="80"></el-table-column>
            <el-table-column align="center" prop="isMember" label="交货日期" min-width="80"></el-table-column>
            <el-table-column align="center" prop="isMember" label="下单人" min-width="60"></el-table-column>
            <el-table-column align="center" prop="isMember" label="入库状态" min-width="60"></el-table-column>
            <el-table-column align="center" prop="isMember" label="是否逾期" min-width="60"></el-table-column>
            <el-table-column align="center" prop="operation" label="操作" min-width="110">
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
        date: '',
        clientData: [{
          name: '张三',
          age: '男',
          servePeople: '李四 王麻子',
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
  .client_table{
    margin-top: 20px;
  }
}
</style>
