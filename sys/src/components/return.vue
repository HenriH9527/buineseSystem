<template>
  <div style="width: 100%;height: 100%;">
    <!-- <el-button type="danger" style="position:absolute; z-index:9999;top: 100px;"  @click="addTab('orderManage')">增加</el-button> -->
    <v-header :navTabs="navTabs" :secNav="secNav" v-on:acceptTitle="newTitle"></v-header>
    <div class="child_page">
      <el-tabs class="table_style" v-model="tableNav" type="card" @tab-remove="removeTab">
        <el-tab-pane class="home_table" v-for="(item) in tables" :key="item.name" :closable="item.isClose" :label="item.title" :name="item.name">
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
      tableNav: 'home',
      tabIndex: 'home',
      tables: [{
        title: '💳',
        name: 'home',
        content: 'return-home',
        isClose: false,
      }],
      navTabs: [
          {
              title: '回访管理',
              key: 'harf',
              childItem: [
                  {
                      title: '回访记录',
                      key: 'log',
                  },
                  {
                      title: '待人工回访',
                      key: 'will',
                  },
                  {
                      title: '问题反馈',
                      key: 'question',
                  },
              ]
          },
          {
              title: '复查管理',
              key: 'all',
              childItem: [
                  {
                      title: '复查已提醒',
                      key: 'remind',
                  },
                  {
                      title: '复查逾期未到',
                      key: 'notget',
                  },
              ]
          },
      ],
      secNav: [
          {
              title: '统计报表',
              key: 'statistic',
          }
      ],
      Repeat: false,
    };
  },
  directives: {
      noclose: {
        // 指令的定义
        inserted: function (el) {
          let domProperty = el.getAttribute('data');
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
    // 增加标签
    newTitle(item, itemPath) {
      console.log(item);
      let _this = this;
      let newTabName = item + '';
      this.tableNav = newTabName;
      _this.Repeat = true;
      _this.tables.map((v) => {
        if (v.name === item) {
          _this.Repeat = false;
        }
      });
      if(_this.Repeat) {
        switch(newTabName) {
          case 'log':
            _this.tables.push({
              title: '回访记录',
              name: newTabName,
              content: 'return-log',
              isClose: true,
            });
            this.tableNav = newTabName;
            break;
          case 'will':
            _this.tables.push(
              {
                title: '待人工回访',
                name: newTabName,
                content: 'return-will',
                isClose: true,
              }
            );
            this.tableNav = newTabName;
            break;
          case 'question':
            _this.tables.push(
              {
                title: '问题反馈',
                name: newTabName,
                content: 'return-question',
                isClose: true,
              }
            );
            this.tableNav = newTabName;
            break;
          case 'remind':
            _this.tables.push(
              {
                title: '复查已提醒',
                name: newTabName,
                content: 'return-remind',
                isClose: true,
              }
            );
            this.tableNav = newTabName;
            break;
          case 'notget':
            _this.tables.push(
              {
                title: '复查逾期未到',
                name: newTabName,
                content: 'return-notget',
                isClose: true,
              }
            );
            this.tableNav = newTabName;
            break;
          case 'statistic':
            _this.tables.push(
              {
                title: '统计报表',
                name: newTabName,
                content: 'return-statistic',
                isClose: true,
              }
            );
            this.tableNav = newTabName;
            break;
        }
      } else {
        return;
      }
    },

    //移除标签
    /*
     * @param  {Object} targetName {content, isClose, name, title}
     */
    removeTab(targetName) {
      let activeName = this.tableNav;
      let tabs = this.tables;
      if (activeName === targetName) {
        tabs.forEach((tab, index) => {
          if (tab.name === targetName) {
            let nextTab = tabs[index + 1] || tabs[index - 1];
            if (nextTab) {
              activeName = nextTab.name;
            }
          }
        })
      };
      this.tableNav = activeName;
      this.tables = tabs.filter(tab => tab.name !== targetName);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.child_page{
  width: 89.6%;
  height: 93.8%;
  display: inline-block;
  position: absolute;
  top: 60px;
  left: 10.4%;
}
</style>
