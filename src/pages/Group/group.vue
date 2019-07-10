<template>
    <div>
         <Myheader txt="小组">
            <img :src="searchUrl" alt="" slot="left" class="leftImg">
            <img :src="chatUrl" alt="" slot="right" class="rightImg"> 
        </Myheader>

        <!-- 数据列表 -->
         <div v-for="(item,i) in arr" :key="i" class="list">
           <p>{{item.title}}</p>
           <div>
             <img :src="item.group_list[0].img_url" alt=""> 
            <span class="name">{{item.group_list[0].group_name}}</span>
            <span class="member">{{item.group_list[0].group_member}}</span>
            <p class="topic">{{item.group_list[0].topic_title}}</p>
           </div>
           <div>
             <img :src="item.group_list[1].img_url" alt=""> 
            <span class="name">{{item.group_list[1].group_name}}</span>
            <span class="member">{{item.group_list[1].group_member}}</span>
            <p class="topic">{{item.group_list[1].topic_title}}</p>
           </div>
           <div>
             <img :src="item.group_list[2].img_url" alt=""> 
            <span class="name">{{item.group_list[2].group_name}}</span>
            <span class="member">{{item.group_list[2].group_member}}</span>
            <p class="topic">{{item.group_list[2].topic_title}}</p>
           </div>
           <p class="more">更多相关小组</p>
         </div>
      
    </div>
</template>
<script>
import search from './img/ic_actionbar_search_icon.png'
import chat from './img/ic_chat_green.png'

import Myheader from '@/components/header'

import axios from "axios"
export default {
    data(){
        return{
            chatUrl:chat,
            searchUrl:search,
            arr:[]
        }
    },
    components:{
        Myheader,
    },
      mounted() {
    axios
      .get("../../../static/data/groupData.json")
      .then(res => {
        console.log(res);
        this.arr = res.data.group;
      })
      .catch(err => {
        console.log(err);
      });
  }
    
}
</script>
<style>
*{
  margin: 0;
  padding: 0;
}
  .list{
    padding:0.26rem;
  }
  .list>p {
    font-size:.5rem;
  } 
  .list img{
    width:50px;
    height:50px;
    vertical-align: middle;
  }
  .list .name{
     font-size:0.3rem;
  }
  .list .topic{
     font-size:0.3rem;
     color:#999;
  }
  .list .member{
     font-size:0.3rem;
     color:#999;
     float:right;
     margin-top:0.7rem; 
  }
  .list .more{
    font-size:0.3rem;
    color:#42bd56;
    text-align: center;
    margin-top:0.5rem;
  } 
  .list>div{
    padding:15px 0;
    border-bottom:1px solid #999;
  }
</style>