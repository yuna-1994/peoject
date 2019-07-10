<template>
  <div class="itemWrap" @click="fn">
    <span v-show="bol">
      <slot name="activeImg"></slot>
    </span>
    <span v-show="!bol">
      <slot name="normalImg"></slot>
    </span>
    <p :class="{active:bol}">{{txt}}</p>
  </div>
</template>
<script>
export default {
  props: ["txt", "mark", "sel"],
  computed: {
    bol: function() {
      if (this.mark == this.sel) {
        return true;
      } else {
        return false;
      }
    }
  },
  methods: {
    fn: function() {
      this.$emit("change", this.mark);
      this.$router.push("/"+this.mark)
    }
  },
};
</script>
<style>
*{
  margin: 0;
  padding: 0;
}
.itemWrap {
  width: 20%;
  float: left;
  text-align: center;
  font-size: 0;
}
.itemWrap img {
  width: 0.6rem;
 
}
.itemWrap p {
  font-size: .24rem;
  color: #666;
}
.itemWrap .active {
  color: #42bd56;
}

</style>