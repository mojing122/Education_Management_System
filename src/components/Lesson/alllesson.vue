<!--
* @FileDescription: 全部课程展示组件
* @Author: MoJing
-->

<template>
  <div>
    <el-row :gutter="20" style="height: 50px">
      <el-col :span="6" :offset="0"><h2 style="margin-top: 5px">所有课程</h2></el-col>
      <el-col :span="6" :offset="6">
        <el-input v-model="input" placeholder="输入课程号搜索"></el-input>
      </el-col>
      <el-col :span="4" :offset="0">
      <el-button type="primary" icon="el-icon-search" @click="SearchLesson">搜索</el-button>
      </el-col>
    </el-row>

    <el-table
    :data="tableData"
    style="width: 100%">
    <el-table-column
      prop="courseno"
      label="课程号">
    </el-table-column>
    <el-table-column
      prop="cname"
      label="课程名">
    </el-table-column>
    <el-table-column
      prop="tname"
      label="授课教师">
    </el-table-column>
    <el-table-column
      prop="type"
      label="课程类型">
    </el-table-column>
    <el-table-column
      prop="period"
      label="课时">
    </el-table-column>
    <el-table-column
      prop="credit"
      label="学分">
    </el-table-column>
  </el-table>
  </div>
</template>

<script>
import axios from "axios";
import moment from "moment";

export default {
  name: "alllesson",
  data() {
    return {
      tableData: [],
      input: ''
    }
  },
  mounted() {
    this.AllLesson()
  },
  methods:{
    //查询所有课程
    AllLesson(){axios.get('/Lesson/all_lesson').then(res=>{
      //console.log(res.data);
      this.tableData = res.data
    }).catch(err=>{
      console.log("获取数据失败" + err);
    })
    },

    //根据课程号搜索
    SearchLesson(){
      if(this.input===''){this.AllLesson()} else {
      axios.get('/Lesson/search_lesson',{
      params: {
        courseno: this.input
        }
      }).then(res=>{
        //console.log(res.data);
        this.tableData = res.data
      }).catch(err=>{
        console.log("获取数据失败" + err);
      })
      }
    }
  },
}
</script>

<style>

</style>
