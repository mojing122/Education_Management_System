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

import myscore from '../Score/myscore.vue'
import allscore from '../Score/allscore.vue'


export default {
  name:'score',
  components:{
    myscore,
    allscore
  },
  data() {
    return {
      currentComponent: 'myscore',
      currentTab: '我的成绩',
      tabs: ['我的成绩', '所有成绩']
    }
  },
  methods:{
    changeComponent(tabname) {
      if (tabname === '我的成绩') {
        this.currentComponent = 'myscore';
      } else if (tabname === '所有成绩') {
        this.currentComponent = 'allscore';
      }
    }
  },
}

</script>
