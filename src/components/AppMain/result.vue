/*
选课结果页
*/

<template>
<div>
  <h2>本学期已选课程</h2>
  <el-table
    :key="key"
    :data="tableData"
    style="width: 100%">
    <el-table-column
      prop="cname"
      label="课程号">
    </el-table-column>
    <el-table-column
      prop="courseno"
      label="课程名">
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
    <el-table-column label="操作">
      <template slot-scope="scope">
        <el-button
          size="mini"
          @click="CancelSel(scope.$index, scope.row)">退课</el-button>
      </template>
    </el-table-column>
  </el-table>

  <el-divider></el-divider>

  <h2>历史已修读课程</h2>
  <el-table
    :data="history_tableData"
    style="width: 100%">
    <el-table-column
      prop="cname"
      label="课程号">
    </el-table-column>
    <el-table-column
      prop="courseno"
      label="课程名">
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
    <el-table-column
      prop="usually"
      label="平时成绩">
    </el-table-column>
    <el-table-column
      prop="final"
      label="期末成绩">
    </el-table-column>
  </el-table>
</div>
</template>


<script>


import axios from "axios";

export default {
  name: "result",
  components:{

  },
  data() {
    return {
      tableData: [],
      history_tableData: [],
      key: 0
    }
  },
  mounted() {
    this.ChoosedLesson(),
    this.HistoryLesson()
  },
  methods:{
    //查询本学期选课
    ChoosedLesson(){axios.get('/Lesson/choosed_lesson', {
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
    //查询历史修读课程
    HistoryLesson(){axios.get('/Lesson/history_lesson', {
      params: {
        studentno: this.$cookies.get('Studentno')
      }
    }).then(res=>{
      //console.log(res.data);
      this.history_tableData = res.data
    }).catch(err=>{
      console.log("获取数据失败" + err);
    })
    },
    CancelLesson(courseno){axios.get('/Lesson/cancel_lesson', {
      params: {
        studentno: this.$cookies.get('Studentno'),
        courseno: courseno
      }
    }).then(res=>{
      //console.log(res.data);
    }).catch(err=>{
      console.log("获取数据失败" + err);
    })
    },
    CancelSel(index, row) {
      this.CancelLesson(row['courseno'])
      //console.log(index, row);
      this.ChoosedLesson()
      this.key+=1
    }
  }
}

</script>
