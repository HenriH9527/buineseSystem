<template>
  <div class="container">
      <el-row class="operation">
        <el-col :span="3">
          <el-button type="primary" icon="el-icon-plus">新增</el-button>
        </el-col>
      </el-row>
      <el-row class="search">
        <el-col :span="2" style="width: 5.5%;line-height: 30px">
          <span>客户姓名</span>
        </el-col>
        <el-col :span="3">
          <el-input v-model="clientName" size="small" placeholder="请输入姓名"></el-input>
        </el-col>
        <el-col :span="2" style="width: 5.5%;line-height: 30px">
          <span>联系方式</span>
        </el-col>
        <el-col :span="3">
          <el-input size="small" v-model="clientPhone" placeholder="请输入联系电话"></el-input>  
        </el-col>
        <el-col :span="2" style="width: 5.5%;line-height: 30px">
          <span>订单状态</span>
        </el-col>
        <el-col :span="2">
          <el-select size="small" v-model="clientState">
            <el-option value="[1, 2, 3]">

            </el-option>
          </el-select>
        </el-col>
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
      <el-row class="client_info">
        <el-col :span="2" style="width: 5.5%;line-height: 30px">
          <span>订单类型</span>
        </el-col>
        <el-col :span="2">
          <el-select size="small" v-model="clientState">
            <el-option value="[1, 2, 3]">

            </el-option>
          </el-select>
        </el-col>
        <el-col :span="2" style="width: 5.5%;line-height: 30px">
          <span>付款类型</span>
        </el-col>
        <el-col :span="2">
          <el-select size="small" v-model="clientState">
            <el-option value="[1, 2, 3]">

            </el-option>
          </el-select>
        </el-col>
        <el-col :span="2" style="width: 5.5%;line-height: 30px">
          <span>是否欠款</span>
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
          <el-input size="small" v-model="orderNum" placeholder="请输入订单编号">

          </el-input>
        </el-col>
        <el-col :span="2" style="width: 5.5%;line-height: 30px">
          <span>下单人</span>
        </el-col>
        <el-col :span="2">
          <el-input size="small" v-model="orderName" placeholder="请输入下单人姓名">

          </el-input>
        </el-col>
      </el-row>
      <el-row class="client_table">
        <el-col :span="24">
          <el-table :border="true" :data="clientData" style="width: 100%">
            <el-table-column width="80" align="center" type="index" label="序号">

            </el-table-column>
            <el-table-column align="center" prop="name" label="订单编号" width="220"></el-table-column>
            <el-table-column align="center" prop="sex" label="客户姓名" width="120"></el-table-column>
            <el-table-column align="center" prop="operation" label="联系电话" width="200">
            </el-table-column>
            <el-table-column align="center" prop="visitState" label="订单状态" width="100"></el-table-column>
            <el-table-column align="center" prop="phone" label="下单时间" width="200"></el-table-column>
            <el-table-column align="center" prop="isOrder" label="下单人" width="150"></el-table-column>
            <el-table-column align="center" prop="clientState" label="订单类型" width="120"></el-table-column>
            <el-table-column align="center" prop="age" label="付款类型" width="126"></el-table-column>
            <el-table-column align="center" prop="clientSource" label="是否欠款" width="120"></el-table-column>
            <el-table-column align="center" prop="createTime" label="操作" width="250">
              <template>
                <el-button type="primary" size="small">打印小票</el-button>
                <el-button size="small" type="success">详情</el-button>
              </template>
            </el-table-column>
          </el-table>
        </el-col>
      </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      clientName: '',
      clientPhone: '',
      clientState: '',
      clientChoseDate: '',
      orderNum: '',
      orderName: '',
      clientData: [{
          date: '2016-05-02',
          name: '王小虎',
          sex: '男',
          visitState: '到访',
          phone: '15596176795',
          isOrder: 'NO',
          clientState: '犹豫中',
          age: '19',
          clientSource: '上海',
          createTime: String(new Date().toLocaleDateString()),
          isMember: '是',
        }, {
          date: '2016-05-02',
          name: '王小虎',
          sex: '男',
          visitState: '到访',
          phone: '15596176795',
          isOrder: 'NO',
          clientState: '犹豫中',
          age: '19',
          clientSource: '上海',
          createTime: String(new Date().toLocaleDateString()),
          isMember: '是',
        }, {
          date: '2016-05-02',
          name: '王小虎',
          sex: '男',
          visitState: '到访',
          phone: '15596176795',
          isOrder: 'NO',
          clientState: '犹豫中',
          age: '19',
          clientSource: '上海',
          createTime: String(new Date().toLocaleDateString()),
          isMember: '是',
        }, {
          date: '2016-05-02',
          name: '王小虎',
          sex: '男',
          visitState: '到访',
          phone: '15596176795',
          isOrder: 'NO',
          clientState: '犹豫中',
          age: '19',
          clientSource: '上海',
          createTime: String(new Date().toLocaleDateString()),
          isMember: '是',
        }],
    }
  },
  methods: {
    handleOrder(row) {
      console.log('下单');
      console.log(row);
    },
    handleModify(row) {
      console.log('修改');
      console.log(row);
    },
    handleInfo(row) {
      console.log('详情')
      console.log(row);
    }
  }
};
</script>

<style scope lang="scss">
.container{
  width: 100%;
  height: 900px;
  .operation{
    padding-bottom: 10px;
    border-bottom: 1px solid #e4e7ed;
  }
  .search{
    text-align: center;
    margin-top: 10px;
    padding-bottom: 8px;
    border-bottom: 1px solid #e4e7ed;
    span{
      font-size: 14px;
      letter-spacing: 1px;
      color: #606266;
    }
  }
  .client_info{
    text-align: center;
    padding: 10px 0;
    span{
      font-size: 14px;
      letter-spacing: 1px;
      color: #606266;
    }
  }
}
</style>
