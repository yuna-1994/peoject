<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <router-view/>
    <Myfooter/>
  </div>
</template>

<script>
import {obj} from '../static/js/utils.js'

import Myfooter from '@/components/Footer/footer'
export default {
  name: 'App',
  components:{
    Myfooter
  },
  mounted(){
    obj.setRem();
  },
  beforeCreate(){
     this.$router.push('/home');
  }
}
</script>

<style>
</style>
