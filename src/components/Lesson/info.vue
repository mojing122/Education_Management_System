<template>
  <el-descriptions class="margin-top" title="基本信息" :column="3" border :key="key">
    <template slot="extra">
      <el-button type="primary" @click="Pop">修改</el-button>
      <el-dialog title="修改信息" :visible.sync="dialogFormVisible">
        <el-form :model="form">
          <el-form-item label="姓名" :label-width="formLabelWidth">
            <el-input v-model="form.sname" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="性别" :label-width="formLabelWidth">
            <el-radio-group v-model="form.sex">
              <el-radio label="男"></el-radio>
              <el-radio label="女"></el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item label="出生日期" :label-width="formLabelWidth">
            <el-col :span="11">
              <el-date-picker type="date" placeholder="选择日期" v-model="form.birthday"></el-date-picker>
            </el-col>
          </el-form-item>
          <el-form-item label="手机号" :label-width="formLabelWidth">
            <el-input v-model="form.phone" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="电子邮箱" :label-width="formLabelWidth">
            <el-input v-model="form.Email" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="密码" :label-width="formLabelWidth">
            <el-input v-model="form.password" autocomplete="off"></el-input>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="dialogFormVisible = false">取 消</el-button>
          <el-button type="primary" @click="Updateinfo">确 定</el-button>
        </div>
      </el-dialog>
    </template>
    <el-descriptions-item>
      <template slot="label">
        <i class="el-icon-user"></i>
        姓名
      </template>
      {{ info[0]['sname'] }}
    </el-descriptions-item>
    <el-descriptions-item>
      <template slot="label">
        <i class="el-icon-guide"></i>
        性别
      </template>
      {{ info[0]['sex'] }}
    </el-descriptions-item>
    <el-descriptions-item>
      <template slot="label">
        <i class="el-icon-postcard"></i>
        学号
      </template>
      {{ info[0]['studentno'] }}
    </el-descriptions-item>
    <el-descriptions-item>
      <template slot="label">
        <i class="el-icon-location-outline"></i>
        班级
      </template>
      <el-tag size="small">{{ info[0]['classname'] }}</el-tag>
    </el-descriptions-item>
    <el-descriptions-item>
      <template slot="label">
        <i class="el-icon-tickets"></i>
        班主任
      </template>
      {{ info[0]['monitor'] }}
    </el-descriptions-item>
    <el-descriptions-item>
      <template slot="label">
        <i class="el-icon-office-building"></i>
        学院
      </template>
      {{ info[0]['departname'] }}
    </el-descriptions-item>
    <el-descriptions-item>
      <template slot="label">
        <i class="el-icon-time"></i>
        入学成绩
      </template>
      {{ info[0]['point'] }}
    </el-descriptions-item>
    <el-descriptions-item>
      <template slot="label">
        <i class="el-icon-time"></i>
        出生日期
      </template>
      {{ info[0]['birthday'] }}
    </el-descriptions-item>
    <el-descriptions-item>
      <template slot="label">
        <i class="el-icon-phone-outline"></i>
        电话
      </template>
      {{ info[0]['phone'] }}
    </el-descriptions-item>
    <el-descriptions-item>
      <template slot="label">
        <i class="el-icon-phone-outline"></i>
        电子邮箱
      </template>
      {{ info[0]['Email'] }}
    </el-descriptions-item>
  </el-descriptions>
</template>

<script>
import axios from "axios"
import moment from "moment"

export default {
  name: "info",
  data() {
    return{
      key: 0,
      info: [{
        sname:''
      }],
      dialogFormVisible: false,
      form: {
        sname: '',
        sex: '',
        phone: '',
        Email: '',
        birthday: new Date(),
        password: ''
      },
      formLabelWidth: '70px'
    }
  },
  mounted() {
    this.Getinfo()
  },
  methods:{
    Getinfo(){axios.get('/Lesson/info',{
      params: {
        studentno: this.$cookies.get('Studentno')
      }
      }).then(res=>{
        res.data[0]['birthday']=moment(res.data[0]['birthday']).format("YYYY-MM-DD")
        //console.log(res.data);
        this.info = res.data

        this.form.sname=res.data[0]['sname']
        this.form.sex=res.data[0]['sex']
        this.form.birthday=res.data[0]['birthday']
        this.form.phone=res.data[0]['phone']
        this.form.Email=res.data[0]['Email']
        this.form.password=res.data[0]['password']
      }).catch(err=>{
        console.log("获取数据失败" + err);
      })
    },
    Updateinfo(){
      this.form.birthday=moment(this.form.birthday).format("YYYY-MM-DD")
      axios.get('/Lesson/update_info',{
      params: {
        sname: this.form.sname,
        sex: this.form.sex,
        birthday: this.form.birthday,
        phone: this.form.phone,
        Email: this.form.Email,
        password: this.form.password,
        studentno: this.$cookies.get('Studentno')
      }
    }).then(res=>{
      this.Getinfo()
      this.dialogFormVisible=false
      this.key+=1
      //console.log(res.data);
    }).catch(err=>{
      console.log("获取数据失败" + err);
    })
    },
    Pop(){
      this.dialogFormVisible = true
    }
  },
}

</script>

<style>

</style>
