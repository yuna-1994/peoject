<template>
    <div :class="{headerWrap:true, green:bol}">
        <span>{{txt}}</span>
        <slot name="left"></slot>
        <slot name="right"></slot>
        <slot name="search"></slot>
    </div>
</template>
<script>
export default {
    props:['txt','bol']
}
</script>
<style>
.headerWrap {
  width: 100%;
  height: .88rem;
  border-bottom: 1px solid #ccc;
  background: #f7f7f7;
  text-align: center;
  line-height: .48rem;
  position: relative;
}
.green {
  background: #48bd5a;
}
.headerWrap img {
  width: .5rem;
  position: absolute;
}
.headerWrap span {
  font-size: .36rem;
}
.headerWrap .rightImg {
  top: .2rem;
  right: .2rem;
}
.headerWrap .leftImg {
  top: .2rem;
  right: 1rem;
}

.headerWrap .search input {
  width: 85%;
  height: .6rem;
  position: absolute;
  left: .1rem;
  top: .16rem;
  border-radius: .1rem;
  border: none;
  text-indent: 3.5em;
}
.headerWrap .search img {
  position: absolute;
  width: .4rem;
}
.headerWrap .search .searchImg {
  left: .2rem;
  top: .26rem;
}
.headerWrap .search .scanImg {
  right: 1.2rem;
  top: .26rem;
}
    </style>