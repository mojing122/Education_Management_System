<!--
* @FileDescription: 网页头组件
* @Author: MoJing
-->

<template>
  <el-container id="header" class="myheader">
    <el-header>
      <el-row>
        <el-col :span="6"><h3>综合教务系统</h3></el-col>
        <el-col :span="18"><div class="user">
          你好, {{username}}
          <el-button type="primary" size="mini" plain class="button_out" @click="login_out">登出<i class="el-icon-upload el-icon--right"></i></el-button>
        </div>
        </el-col>
      </el-row>


    </el-header>
  </el-container>
</template>

<script>
export default {
  data () {
    return {
      username: ''
    };
  },
  created() {
    this.username = this.$route.query.name;
  },
  methods: {
    //登出函数
    login_out(){
      this.$router.push({
        path: '/login',
      })
    }
  }
}
</script>

<style>
.myheader{
  background: #004578;
  color: #fff;
}
.user {
  float: right;
  color: #f7fffc;
  font-size: 16px;
  padding-top: 20px;
}
.button_out {
  margin-left: 10px;
  margin-top: -10px;
  width: 40%;
}
</style>
