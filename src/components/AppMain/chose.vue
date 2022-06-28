/*
选课信息页
*/

<template>
  <div id="dynamic-component-demo">
    <el-tabs>
      <el-tab-pane
        v-for="tab in tabs"
        v-bind:key='tab'
        v-bind:label='tab'
      >
        <span slot="label" v-on:click="changeComponent(tab)">{{tab}}</span>
        <component :is="currentComponent"></component>
      </el-tab-pane>

    </el-tabs>

  </div>
</template>


<script>

import info from '../Lesson/info.vue'
import alllesson from '../Lesson/alllesson.vue'
import makec from '../Lesson/makec.vue'


export default {
  name:'chose',
  components:{
    info,
    alllesson,
    makec
  },
  data() {
    return {
      currentComponent: 'info',
      currentTab: '学生信息',
      tabs: ['学生信息', '所有课程', '进行选课']
    }
  },
  methods:{
    changeComponent(tabname) {
      if (tabname === '学生信息') {
        this.currentComponent = 'info';
      } else if (tabname === '所有课程') {
        this.currentComponent = 'alllesson';
      } else if (tabname === '进行选课') {
        this.currentComponent = 'makec';
      }
    }
  },
}

</script>
