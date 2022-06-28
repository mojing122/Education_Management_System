<!--
* @FileDescription: 选课组件
* @Author: MoJing
-->

<template>
  <div style="text-align: center">
  <el-table
    :key="key"
    ref="multipleTable"
    :data="tableData"
    tooltip-effect="dark"
    style="width: 100%"
    row-key="courseno"
    @selection-change="handleSelectionChange">
    <el-table-column
      type="selection"
      width="55">
    </el-table-column>
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
  <el-button type="primary" round v-on:click="GetSel" class="choose">提交选课</el-button>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "makec",
  data() {
    return {
      tableData: [],
      key: 0
    }
  },
  mounted() {
    this.AbleLesson()
  },
  methods: {

    //查询可选课程
    AbleLesson(){axios.get('/Lesson/able_lesson',{
      params: {
        studentno: this.$cookies.get('Studentno')
      }
    }).then(res=>{
      //console.log(res.data);
      this.tableData = res.data
    }).catch(err=>{
      console.log("获取数据失败" + err);
    })
    },

    //插入选课数据
    AddChoose(courseno){axios.get('/Lesson/add_lesson',{
      params: {
        studentno: this.$cookies.get('Studentno'),courseno:courseno
      }
    }).then(res=>{
      //console.log(res.data);
    }).catch(err=>{
      console.log("获取数据失败" + err);
    })
    },

    // 获取选中的所有行信息,存到score表
    GetSel() {
      //console.log(this.$refs.multipleTable.selection)
      let choosed = this.$refs.multipleTable.selection
      for (let i=0;i<choosed.length;i++){
        //console.log(choosed[i]);
        this.AddChoose(choosed[i]['courseno'])
      };
      this.AbleLesson()
      this.key+=1
    },

    //全选/取消全选
    handleSelectionChange(val) {
      this.multipleSelection = val;
    }
  }
}
</script>

<style>
.choose{
  margin-top: 30px;
  display:inline-block;
  text-align: center;
}
</style>
