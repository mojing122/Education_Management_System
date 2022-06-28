<!--
* @FileDescription: 网页左侧导航栏组件
* @Author: MoJing
-->

<template>
  <div>
  <el-row class="tac">
    <el-col :span="20">
      <el-menu
        default-active="1"
        class="el-menu-vertical-demo"
        background-color="#c7e0f4"
        text-color="#000"
        active-text-color="#a4262c">
        <el-submenu index="1">
          <template slot="title">
            <i class="el-icon-s-management"></i>
            <span>选课系统</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="1-1" v-on:click="OpenM(0)">开始选课</el-menu-item>
            <el-menu-item index="1-2" v-on:click="OpenM(1)">选课结果</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-menu-item index="2">
          <i class="el-icon-s-data"></i>
          <span slot="title" v-on:click="OpenM(2)">分数查询</span>
        </el-menu-item>
      </el-menu>
    </el-col>
  </el-row>
  </div>
</template>

<script>
export default {
  methods: {
    //修改页面值
    OpenM(k) {
      this.$store.commit("changePage",k);
    },
  }
}
</script>

<style>
.m_nav{
  background: black;
}
</style>
