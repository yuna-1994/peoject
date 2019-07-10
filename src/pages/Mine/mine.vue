<template>
    <div>
         <Myheader txt="我的">
            <img :src="chatUrl" alt="" slot="right" class="rightImg"> 
        </Myheader>

    </div>
</template>
<script>
import chat from './img/ic_settings.png'

import Myheader from '@/components/header'
export default {
    data(){
        return{
            chatUrl:chat
        }
    },
    components:{
        Myheader
    },
    
}
</script>