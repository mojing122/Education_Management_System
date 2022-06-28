<!--
* @FileDescription: 主页
* @Author: MoJing
-->

<template>
  <div id="app">
    <app-header/>
    <el-row>
      <el-col :span="6"><app-navbar/></el-col>
      <el-col :span="16"><component :is="currentPage"></component></el-col>
    </el-row>
  </div>
</template>

<script>
import AppHeader from '.././components/AppHeader/index.vue'
import AppMain from '../components/AppMain/chose.vue'
import result from '../components/AppMain/result.vue'
import score from '../components/AppMain/score.vue'
import AppNavbar from '.././components/AppNavbar/index.vue'
export default {
  name: 'App',
  data(){
    return{
      currentPage: 'AppMain',
    }
  },
  components: {
    AppHeader,
    AppMain,
    result,
    score,
    AppNavbar
  },
  computed: {
    Page(){
      return this.$store.state.pageid
    }
  },
  watch: {
    Page() {
      var pnList=['AppMain','result','score']
      var pagename = pnList[this.$store.state.pageid]
      this.currentPage= pagename
    }
  }
}
</script>

<style>

</style>
