<template>
  <div class="container">
      <el-row :span="24" class="header">
          <el-col :span="4">
              <div class="left_banner">
                  <img src="../../../static/image/login/img_title.png" alt="">
              </div>
          </el-col>
          <el-col :span="17" class="middle_banner"></el-col>
          <el-col :span="3" class="right_banner">
              <el-row :span="24">
                  <el-col span="6">
                      <div class="head_pic">
                          <img src="../../../static/image/login/icon_zh.png" alt="">
                      </div>
                  </el-col>
                  <el-col span="12" class="name_type">
                      <p>张小小撒</p>
                      <p>支具室</p>
                  </el-col>
                  <el-col span="6" class="arrow_box">
                      <span class="arrows"></span>
                  </el-col>
              </el-row>
          </el-col>
      </el-row>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.container{
    width: 100%;
    .header{
        height: 60px;
        background: #56A9FF;
        .left_banner{
            width: 73.5%;
            margin-top: -42px;
            margin-left: -50px;
        }
        .middle_banner{
            height: 100%;
        }
        .right_banner{
            height: 100%;
            background: #2883e0;
            .head_pic{
                height: 60px;
                line-height: 72px;
                text-align: center;
                img{
                    width: 28px;
                    height: 28px;
                }
            }
            .name_type{
                height: 60px;
                p{
                    margin: 0;
                    padding: 0;
                    color: #ffffff;
                    letter-spacing: 1px;
                }
                p:first-child{
                    font-size: 18px;
                    margin-top: 12px;
                }
                p:last-child{
                    font-size: 12px;
                    margin-top: 2px;
                }
            }
            .arrow_box{
                height: 35px;
                margin-top: 13px;
                border-left: 2px solid #1465B7;
                text-align: center;
                .arrows{
                    display: inline-block;
                    width: 15px;
                    height: 15px;
                    border-right: 2px solid #fff;
                    border-bottom: 2px solid #fff;
                    transform: rotate(45deg);
                    margin-top: 3px;
                }
            }
        }
    }
}
</style>
