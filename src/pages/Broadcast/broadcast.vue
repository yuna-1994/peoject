<template>
    <div>
         <Myheader txt="广播">
            <img :src="searchUrl" alt="" slot="left" class="leftImg">
            <img :src="chatUrl" alt="" slot="right" class="rightImg"> 
        </Myheader>

    </div>
</template>
<script>
import search from './img/ic_status_search_user.png'
import chat from './img/ic_chat_green.png'

import Myheader from '@/components/header'
export default {
    data(){
        return{
            chatUrl:chat,
            searchUrl:search
        }
    },
    components:{
        Myheader
    },
    
}
</script>