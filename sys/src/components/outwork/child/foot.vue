<template>
  <div class="container">
    <el-row>
      <el-col :span="24" style="border-bottom: 1px solid #EBEEF5;padding-bottom: 16px;">
        <el-button type="success" style="margin-left: 1%;">
          录入数据
        </el-button>
        <el-button type="primary">
          模板下载
        </el-button>
      </el-col>
    </el-row>
    <el-row class="search">
        <el-col :span="2" style="width: 4%;line-height: 30px">
          <span>区县:</span>
        </el-col>
        <el-col :span="2">
          <el-select size="small" v-model="isMember">
            <el-option value="[1, 2, 3]">

            </el-option>
          </el-select>
        </el-col>
        <el-col :span="2" style="width: 4%;line-height: 30px">
          <span>社区:</span>
        </el-col>
        <el-col :span="2">
          <el-select size="small" v-model="isMember">
            <el-option value="[1, 2, 3]">

            </el-option>
          </el-select>
        </el-col>
        <el-col :span="2" style="width: 5%;line-height: 30px">
          <span>体检人:</span>
        </el-col>
        <el-col :span="2" style="text-align: left">
          <el-input placeholder="请输入体检人" size="small"></el-input>     
        </el-col>
        <el-col :span="2" style="width: 6.5%;text-align: center;line-height: 30px;">
        体检时间：
      </el-col>
      <el-col :span="3">
        <el-date-picker
        style="width: 100%;"
        size="small"
        v-model="date"
        >
        </el-date-picker>
      </el-col>
        <el-col :span="2" style="width: 6.5%;line-height: 30px">
          <span>体检时长:</span>
        </el-col>
        <el-col :span="2" style="text-align: left">
          <el-select size="small" v-model="isMember">
            <el-option value="[1, 2, 3]">

            </el-option>
          </el-select>     
        </el-col>
        <el-col :span="1" style="width: 4.8%">
          <el-button size="small" type="success" class="btns">查询</el-button>
        </el-col>
      </el-row>
    <el-row class="client_table">
        <el-col :span="24">
          <el-table :border="true" :data="clientData" style="width: 100%">
            <el-table-column width="60" align="center" type="index" label="序号">

            </el-table-column>
            <el-table-column align="center" prop="name" label="区县" min-width="80"></el-table-column>
            <el-table-column align="center" prop="phone" label="社区" min-width="80"></el-table-column>
            <el-table-column align="center" prop="sex" label="体检人" min-width="80"></el-table-column>
            <el-table-column align="center" prop="takePeople" label="问题人数" min-width="60"></el-table-column>
            <el-table-column align="center" prop="productName" label="录入时间" min-width="80"></el-table-column>
            <el-table-column align="center" prop="time" label="体检时间" min-width="80"></el-table-column>
            <el-table-column align="center" prop="moduleState" label="体检时长" min-width="80"></el-table-column>
            <el-table-column align="center" prop="moduleState" label="幼儿园" min-width="80"></el-table-column>
            <el-table-column align="center" prop="moduleState" label="保健医/院长" min-width="80"></el-table-column>
            <el-table-column align="center" prop="moduleState" label="联系电话" min-width="80"></el-table-column>
            <el-table-column align="center" prop="operation" label="操作" min-width="100">
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
        clientChoseDate: '',
      }
  }
};
</script>

<style scoped lang="scss">
.container{
  width: 100%;
  .search{
    text-align: center;
    padding-top: 16px;
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
