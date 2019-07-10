<template>
    <div id="wrap">
        <!-- 头部组件调用 -->
        <Myheader bol="true">
            <img :src="chatUrl" alt="" slot="right" class="rightImg">
            <div slot="search" class="search">
                <input type="text" placeholder="影视 图书 唱片 小组等">
                <img :src="searchUrl" alt="" class="searchImg">
                <img :src="scanUrl" alt="" class="scanImg">
            </div>
        </Myheader>

        <!-- 轮播图 -->
        <banner swiperid="go" effect="flip" paginationdesition="right">
            <div slot="swiper-con" class="swiper-slide">
                <img :src="banner[0]" alt="">
            </div>
            <div slot="swiper-con" class="swiper-slide">
                <img :src="banner[1]" alt="">
            </div>
            <div slot="swiper-con" class="swiper-slide">
                <img :src="banner[2]" alt="">
            </div>
        </banner>

        <!-- 数据列表 -->
        <List v-for="(item,i) in arr" :key="i" :author="item.target.author.name" :url="item.target.cover_url">
            <span slot="title">{{item.title}}</span>
            <span slot="desc">{{item.target.desc}}</span>
        </List>


    </div>
</template>
<script>
// 头部图片
import chat from './img/ic_chat_white.png'
import search from './img/ic_group_search_small.png'
import scan from './img/ic_scan_gray.png'

// 轮播图图片
import banner1 from './img/01.jpg'
import banner2 from './img/02.jpg'
import banner3 from './img/03.jpg'

import Myheader from '@/components/header'
import Banner from '@/components/banner'
import List from '@/components/listitem'

import axios from "axios"
export default {
    data(){
        return{
            chatUrl:chat,
            searchUrl:search,
            scanUrl:scan,
            banner:[banner1,banner2,banner3],
            arr:[]
        }
    },
    components:{
        Myheader,
        Banner,
        List
    },
     mounted() {
    axios
      .get("../../../static/data/homeData.json")
      .then(res => {
        console.log(res);
        this.arr = res.data.recommend_feeds;
      })
      .catch(err => {
        console.log(err);
      });
  }

    
}
</script>
