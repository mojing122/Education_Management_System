<template>
  <el-table
    :data="tableData"
    style="width: 100%">
    <el-table-column
      prop="courseno"
      width="80"
      label="课程号">
    </el-table-column>
    <el-table-column
      prop="cname"
      width="100"
      label="课程名">
    </el-table-column>
    <el-table-column
      prop="tname"
      width="80"
      label="授课教师">
    </el-table-column>
    <el-table-column
      prop="type"
      width="90"
      label="课程类型">
    </el-table-column>
    <el-table-column
      prop="credit"
      width="80"
      label="学分">
    </el-table-column>
    <el-table-column
      prop="usually"
      label="平时成绩(我的)">
    </el-table-column>
    <el-table-column
      prop="avg_usually"
      label="平时成绩(平均)">
    </el-table-column>
    <el-table-column
      prop="final"
      label="期末成绩(我的)">
    </el-table-column>
    <el-table-column
      prop="avg_final"
      label="期末成绩(平均)">
    </el-table-column>
  </el-table>
</template>

<script>
import axios from "axios";

export default {
  name: "myscore",
  data() {
    return {
      tableData: []
    }
  },
  mounted() {
    this.MyScore()
  },
  methods:{
    MyScore(){axios.get('/score/my_score',{
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
