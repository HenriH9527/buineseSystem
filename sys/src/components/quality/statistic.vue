<template>
  <div class="container">
    <el-row class="search">
        <el-col :span="2" style="width: 5.5%;line-height: 30px">
          <span>客户姓名</span>
        </el-col>
        <el-col :span="3">
          <el-input v-model="clientName" size="small" placeholder="请输入姓名"></el-input>
        </el-col>
        <el-col :span="2" style="width: 5.5%;line-height: 30px">
          <span>主取型人</span>
        </el-col>
        <el-col :span="2">
          <el-select size="small" v-model="isMember">
            <el-option value="[1, 2, 3]">

            </el-option>
          </el-select>
        </el-col>
        <el-col :span="2" style="width: 5.5%;line-height: 30px">
          <span>产品名</span>
        </el-col>
        <el-col :span="3" style="text-align: left">
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
            <el-table-column align="center" prop="name" label="客户姓名" min-width="60"></el-table-column>
            <el-table-column align="center" prop="phone" label="联系电话" min-width="100"></el-table-column>
            <el-table-column align="center" prop="takePeople" label="主取型人" min-width="60"></el-table-column>
            <el-table-column align="center" prop="productName" label="产品名称" min-width="80"></el-table-column>
            <el-table-column align="center" prop="time" label="取型时间" min-width="60"></el-table-column>
            <el-table-column align="center" prop="moduleState" label="自检驳回" min-width="80"></el-table-column>
            <el-table-column align="center" prop="moduleState" label="成型验收驳回" min-width="80"></el-table-column>
            <el-table-column align="center" prop="moduleState" label="自检驳回次数" min-width="80"></el-table-column>
            <el-table-column align="center" prop="moduleState" label="成型验收驳回次数" min-width="80"></el-table-column>
            <el-table-column align="center" prop="operation" label="操作" min-width="90">
              <template slot-scope="scope">
                <el-button type="primary" @click="handleOrder(scope.row)" size="small">详情</el-button>
              </template>
            </el-table-column>
          </el-table>
        </el-col>
    </el-row>
    <el-row class="statistic_row">
      <el-col :span="3" :offset="1">
        <span>合计：20</span>
      </el-col>
      <el-col :span="3">
        <span>支具数量：20</span>
      </el-col>
      <el-col :span="3" :offset="2">
        <span>自检驳回：20</span>
      </el-col>
      <el-col :span="3">
        <span>验收驳回：20</span>
      </el-col>
      <el-col :span="3">
        <span>自检驳回次数：20</span>
      </el-col>
      <el-col :span="4">
        <span>成型验收驳回次数：20</span>
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
  .statistic_row{
    background-color: rgba(251, 152, 0, 1);
    padding: 15px 0;
    color: #fff;
  }
}
</style>
