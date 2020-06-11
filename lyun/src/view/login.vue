<template>
  <el-container class="project">
    <el-container class="container-top"
      ><div class="title">XX后台管理系统</div></el-container
    >
    <el-container class="form-box">
      <el-form :model="form" :rules="rules" ref="form">
        <el-form-item label="用户名：" prop="username">
          <el-input v-model="form.username"></el-input>
        </el-form-item>
        <el-form-item label="密码：" prop="password">
          <el-input
            v-model="form.password"
            type="password"
            show-password
            @keyup.enter.native="submitForm"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm()">登录</el-button>
        </el-form-item>
      </el-form>
    </el-container>
  </el-container>
</template>
<script>
export default {
  data () {
    return {
      form: {
        username: '',
        password: ''
      },
      rules: {
        username: [
          { required: true, message: '请输入用户名称', trigger: 'blur' },
          { max: 16, message: '最多16个字符', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入登录密码', trigger: 'change' },
          { min: 8, max: 16, message: '长度在 8 到 16 个字符', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    submitForm () {
      this.$refs.form.validate(vaild => {
        if (vaild) {
          console.log('验证通过')
          this.$router.push('order/orderManagement')
        } else {
          this.$message({
            message: '输入的信息有误~',
            type: 'warning'
          })
        }
      })
    }
  }
}
</script>
<style lang="scss" scoped>
.project {
  height: 100%;
  display: flex;
  flex-direction: column;
}

.el-button {
  height: 50px;
  width: 400px;
}

.container-top {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 30%;
  background: url("../assets/images/timg.gif");
}

.title {
  height: 70px;
  color: #fff;
  font-size: 50px;
  text-align: center;
}

.el-form {
  padding: 0 30px;
  height: 60%;
  border: 1px solid #ddd;
}

.form-box {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
