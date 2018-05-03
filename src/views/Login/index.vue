<template>
  <div class="main">
      <canvas id="loginAni"></canvas>
      <div class="login-wrapper">
          <div id="login-box">
             <el-form ref="loginForm" :model="loginForm" :rules="loginRules" size="medium">
                <el-form-item prop="userAccount">
                    <el-input
                      class="login-input"
                      type="text"
                      v-model="loginForm.userAccount"
                      placeholder="用户名">
                    </el-input>
                </el-form-item>

                <el-form-item prop="userPassword">
                  <el-input
                    class="login-input"
                    type="password"
                    v-model="loginForm.userPassword"
                    @keyup.enter.native="login('loginForm')"
                    placeholder="密码">
                  </el-input>
                </el-form-item>
                <el-form-item >
                  <div style="margin-top:8px;">
                    <el-button class="login-button" type="primary"  @click="login('loginForm')">登录</el-button>
                    <el-button @click="resetForm('loginForm')">重置</el-button>
                  </div>
                </el-form-item>
             </el-form>
          </div>
      </div>
  </div>
</template>
<script>
import { startAnimation } from './loginAni'
export default {
  name: 'Login',
  data() {
      return {
        loginForm: {
          userAccount: '',
          userPassword: ''
        },
        loginRules: {
          userAccount: [
            {required: true, message: '请输入用户名', trigger: 'blur'}
          ],
          userPassword: [
            {required: true, message: '请输入密码', trigger: 'blur'}
          ]
        }
      }
    },
  mounted () {
    startAnimation('loginAni')
  },
  methods: {
    login(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('submit!');
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
}
</script>

<style scoped>
.main {
 display: flex;
 justify-content: center;
 width: 100%;
 height: 100%;
}
 .login-wrapper {
   position: absolute;
   top:20%;
   height: 300px;
   z-index: 10;
 }
 #login-box {
    position: absolute;
    z-index: 20;
    display: flex;
    justify-content: center;
    left:50%;
    top:50%;
    width:300px;
    height:270px;
    padding:50px 0 40px 0;
    margin:-150px 0 0 -150px;
    border-radius:25px;
    box-sizing: border-box;
    background:rgba(255,255,255,.95);
    box-shadow:0 0 45px rgba(0,0,0,.18);
  }
  .login-input{
      width:220px;
  }

  .login-button {
      width:136px;
  }
 .login-ani {
  position:absolute;
  top:0;
  left:0;
}

</style>

