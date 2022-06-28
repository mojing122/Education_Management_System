<!--
* @FileDescription: 全部分数查询组件
* @Author: MoJing
-->

<template>
  <div>
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
      prop="credit"
      label="学分">
    </el-table-column>
    <el-table-column
      prop="avg_usually"
      label="平时成绩(平均)">
    </el-table-column>
    <el-table-column
      prop="avg_final"
      label="期末成绩(平均)">
    </el-table-column>
  </el-table>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "allscore",
  data() {
    return {
      tableData: []
    }
  },
  mounted() {
    this.AllScore()
  },
  methods:{
    //查询全部成绩
    AllScore(){axios.get('/score/all_score',{
      params: {
        studentno: this.$cookies.get('Studentno')
      }
    }).then(res=>{
      //console.log(res.data);
      this.tableData = res.data
    }).catch(err=>{
      console.log("获取数据失败" + err);
    })
    }
  },
}
</script>

<style>

</style>
