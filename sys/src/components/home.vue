<template>
  <div style="width: 100%;height: 100%;">
    <my-header></my-header>
    <div class="child_page">
      <el-tabs class="table_style" v-model="tableNav" type="border-card">
        <el-tab-pane class="home_table" v-for="(item, index) in tables" :key="index" :closable="item.isClose" :label="item.title" :name="item.name">
          <component :is="item.content"></component>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
    return {
      tableNav: 'homepage',
      tables: [{
        title: '💳',
        name: 'homepage',
        content: 'my-home',
        isClose: false,
      },{
        title: '客户管理',
        name: 'clientManage',
        content: 'my-client',
        isClose: true,
      },{
        title: '订单管理',
        name: 'orderManage',
        content: 'my-order',
        isClose: true,
      },{
        title: '销售报表',
        name: 'marketManage',
        content: 'my-market',
        isClose: true,
      }],
    };
  },
  directives: {
      noclose: {
        // 指令的定义
        inserted: function (el) {
          let domProperty = el.getAttribute('data');
          console.log(domProperty);
          el.setAttribute('closable', false);
          if (domProperty === 'homepage') {
            el.setAttribute('closable', true);
          } else {
            console.log(2);
          }
        }
      }
  },
  methods: {
    removeTab() {
      console.log('ok')
    }
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.child_page{
  width: 89.6%;
  height: 93.8%;
  display: inline-block;
  background: #f4f4f5;
  position: absolute;
  top: 60px;
  left: 10.4%;
}
</style>
