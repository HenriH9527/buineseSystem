<template>
  <div class="container">
      <el-row class="search">
        <el-col :span="2" style="width: 5.9%;line-height: 30px">
          <span class="time_style">操作时间</span>
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
        <el-col :span="1" style="width: 4.8%">
          <el-button size="small" type="primary">查询</el-button>
        </el-col>
        <el-col :span="1" style="width: 4.8%">
          <el-button size="small" type="primary">今天</el-button>
        </el-col><el-col :span="1" style="width: 4.8%">
          <el-button size="small">昨天</el-button>
        </el-col><el-col :span="1" style="width: 4.8%">
          <el-button size="small">近七天</el-button>
        </el-col>
      </el-row>
      <el-row class="office_performance">
        <el-col :span="2" style="width: 5.9%;line-height: 30px">
          <span>用户名</span>
        </el-col>
        <el-col :span="3">
          <el-input size="small" v-model="clientPhone" placeholder="请输入联系电话"></el-input>  
        </el-col>
        <el-col :span="2" style="width: 5.5%;line-height: 30px">
          <span>操作类型</span>
        </el-col>
        <el-col :span="2">
          <el-select size="small" v-model="clientState">
            <el-option value="[1, 2, 3]">

            </el-option>
          </el-select>
        </el-col>
        <el-col :span="2" style="width: 5.5%;line-height: 30px">
          <span>订单编号</span>
        </el-col>
        <el-col :span="3">
          <el-input size="small" v-model="clientPhone" placeholder="请输入联系电话"></el-input>  
        </el-col>
        <el-col :span="2">
          <el-button type="danger" size="small">导出excel</el-button>
        </el-col>
      </el-row>
      <el-row class="client_table">
        <el-col :span="24">
          <el-table :show-summary="true" :border="true" :data="clientData" style="width: 100%">
            <el-table-column width="60" align="center" type="index" label="序号">

            </el-table-column>
            <el-table-column align="center" prop="name" label="登录账户" min-width="80"></el-table-column>
            <el-table-column align="center" prop="sex" label="用户姓名" min-width="50"></el-table-column>
            <el-table-column align="center" prop="visitState" label="用户角色" min-width="80"></el-table-column>
            <el-table-column align="center" prop="phone" label="操作类型" min-width="120"></el-table-column>
            <el-table-column align="center" prop="isOrder" label="订单编号" min-width="80"></el-table-column>
            <el-table-column align="center" prop="isOrder" label="操作时间" min-width="80"></el-table-column>
            <el-table-column align="center" prop="createTime" label="操作" min-width="180">
              <template>
                <el-button type="primary" size="small">操作详情</el-button>
                <el-button size="small" type="success">查看订单</el-button>
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
      clientChoseDate: '',
      clientState:'',
      clientData: [],
    }
  }
};
</script>

<style scoped lang="scss">
.container{
  width: 100%;
  height: 900px;
  .search{
    width: 100%;
    text-align: center;
    border-bottom: 1px solid #E4E7ED;
    padding-bottom: 10px;
    .time_style{
      letter-spacing: 1px;
      font-size: 14px;
      color: #606266;
    }
  }
  .office_performance{
    width: 100%;
    text-align: center;
    font-size: 14px;
    margin-top: 10px;
    letter-spacing: 1px;
    color: #606266;
  }
  .client_table{
    margin-top: 10px;
  }
}
</style>
