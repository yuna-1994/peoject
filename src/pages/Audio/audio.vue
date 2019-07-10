<template>
  <div>
    <Myheader txt="书影音">
      <img :src="searchUrl" alt slot="left" class="leftImg" />
      <img :src="chatUrl" alt slot="right" class="rightImg" />
    </Myheader>

    
      <div class="nav">
        <span :class="{active:nowIndex==0}" @click="nowIndex==0">
          <router-link to="/audio/film">电影</router-link>
        </span>
        <span :class="{active:nowIndex==1}" @click="nowIndex==1">
          <router-link to="/audio/read">读书</router-link>
        </span>
        <span :class="{active:nowIndex==2}" @click="nowIndex==2">
          <router-link to="/audio/tv">电视</router-link>
        </span>
        <span :class="{active:nowIndex==3}" @click="nowIndex==3">
          <router-link to="/audio/city">同城</router-link>
        </span>
        <span :class="{active:nowIndex==4}" @click="nowIndex==4">
          <router-link to="/audio/music">音乐</router-link>
        </span>
      </div>
      <div>
        <router-view></router-view>
      </div>
    
  </div>
</template>
<script>
import search from "./img/ic_actionbar_search_icon.png";
import chat from "./img/ic_chat_green.png";

import Myheader from "@/components/header";
export default {
  data() {
    return {
      chatUrl: chat,
      searchUrl: search,
      nowIndex:0
    };
  },
  components: {
    Myheader
  }

};
</script>
<style>
.nav {
  height: 0.6rem;
  border-bottom: 1px solid #eee;
  line-height: 0.6rem;
}
a {
  display: block;
  width: 20%;
  float: left;
  color: #999;
  font-size: 0.24rem;
  text-decoration: none;
  text-align: center;
}
.nav .active a{
  /* border-bottom: 0.04rem solid green; */
  background: green;
}
</style>
