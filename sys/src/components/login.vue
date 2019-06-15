<template>
  <div class="container">
    <el-row :span="24">
      <el-col class="login_box" :span="6" :offset="9">
        <el-row :span="24">
          <el-col class="top_sign" :span="12" :offset="6">
            <img src="../../static/image/login/img_title.png" alt="">
          </el-col>
        </el-row>
        <el-row :span="24" style="margin-top: 31px">
          <el-col class="input" :span="20" :offset="2">
            <i>
              <img src="../../static/image/login/icon_zhangh.png" alt="">
            </i>
            <input type="text" placeholder="请输入账号">
          </el-col>
        </el-row>
        <el-row :span="24" style="margin-top: 15px;">
          <el-col class="input" :span="20" :offset="2">
            <i><img src="../../static/image/login/icon_mm.png" alt=""></i>
            <input type="password" placeholder="请输入密码">
            <i><img src="../../static/image/login/icon_yc1.png" alt=""></i>
          </el-col>
        </el-row>
        <el-row :span="24" style="margin-top: 31px;">
          <el-col :span="20" :offset="2" class="login_btn">
              <div @click="doLogin()">
                登录
              </div>
          </el-col>
        </el-row>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import $axios from 'axios';

export default {
  name: 'HelloWorld',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
    };
  },
  // mounted() {

  // },
  methods: {
    doLogin() {
      $axios.post('http://192.168.3.107:9081/api/SignInApi/GetSignInInfo',{
        SignInName: "13652148563",
        PassWord: "123456"  
      }).then(response => {
        console.log(response.data);
      }).catch(error => {
        console.log(error);
      })
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.container{
  width: 100%;
  height: 100%;
  background-image: url(/static/image/login/img_background.png);background-repeat:no-repeat;
  background-size:100% 100%;
  .login_box{
    margin-top: 16%;
    height: 345px;
    background-color: #ffffff;
    box-shadow: 0 3px 43px 0px rgba(40, 121, 194, 0.36);
    border-radius: 10px;
    .top_sign{
      height: 62px;
      img{
        width: 100%;
        margin-top: -23%;
      }
    }
    .input{
      border-bottom:2px solid#e5e5e5;
      input{
        width: 82%;
        letter-spacing: 1px;
        font-size: 16px;
        color:#9BABBB;
        vertical-align: 6px;
      }
      :-ms-input-placeholder{
        letter-spacing: 1px;
        font-size: 16px;
        color:#e5e5e5;
      }
      ::-webkit-input-placeholder{
        letter-spacing: 2px;
        font-size: 16px;
        color:#e5e5e5;
      }
      i{
        display: inline-block;
        width: 7%;
        img{
          width: 100%;
        }
      }
    }
    .login_btn{
      background-color: #e5e5e5;
      height: 51px;
      border-radius: 10px;
      font-size: 18px;
      letter-spacing: 4px;
      color: #858585;
      text-align: center;
      line-height: 51px;
      font-weight: bold;
      cursor: pointer;
    }
  }
}
</style>
