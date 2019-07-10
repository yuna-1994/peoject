<template>
  <div class="tabbar">
    <item txt="首页" mark="home" :sel="selected" @change="getVal">
      <img :src="homeUrlAct" slot="activeImg" />
      <img :src="homeUrlNor" slot="normalImg" />
    </item>

    <item txt="书影音" mark="audio" :sel="selected" @change="getVal">
      <img :src="subjectUrlAct" slot="activeImg" />
      <img :src="subjectUrlNor" slot="normalImg" />
    </item>

    <item txt="广播" mark="broadcast" :sel="selected" @change="getVal">
      <img :src="statusUrlAct" slot="activeImg" />
      <img :src="statusUrlNor" slot="normalImg" />
    </item>

    <item txt="小组" mark="group" :sel="selected" @change="getVal">
      <img :src="groupUrlAct" slot="activeImg" />
      <img :src="groupUrlNor" slot="normalImg" />
    </item>

    <item txt="我的" mark="mine" :sel="selected" @change="getVal">
      <img :src="mineUrlAct" slot="activeImg" />
      <img :src="mineUrlNor" slot="normalImg" />
    </item>
  </div>
</template>
<script>
import homeact from './img/6.png'
import homenor from './img/1.png'
import subjectact from './img/7.png'
import subjectnor from './img/2.png'
import statusact from './img/8.png'
import statusnor from './img/3.png'
import groupact from './img/9.png'
import groupnor from './img/4.png'
import mineact from './img/10.png'
import minenor from './img/5.png'

import item from './item'

export default {
  data() {
    return {
      selected:"home",
      homeUrlAct:homeact,
      homeUrlNor:homenor,
      subjectUrlAct:subjectact,
      subjectUrlNor:subjectnor,
      statusUrlAct:statusact,
      statusUrlNor:statusnor,
      groupUrlAct: groupact,
      groupUrlNor:groupnor,
      mineUrlAct:mineact,
      mineUrlNor:minenor
      
    };
  },
  components:{
　　　　　　item
　　　　},
  methods:{
　　getVal:function(val){//val默认是子组件里传来的值
　　　　this.selected=val;
　　}
}
};
</script>
<style scoped>
.tabbar {
  width: 100%;
  height: 1rem;
  position: fixed;
  left: 0px;
  bottom: 0px;
  border-top: 1px solid gray;
  background: white;
}
</style>