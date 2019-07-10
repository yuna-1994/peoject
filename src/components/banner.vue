<template>
	<div class='banner'>
		<div class='swiper-container' :class='swiperid'>
			<div class='swiper-wrapper'>
				<slot name='swiper-con'></slot>
			</div>
			<div :class='{"swiper-pagination":paginationshow}' :style='{"text-align":paginationdesition}'></div>
		</div>
	</div>
</template>

<script>
import "../assets/libs/swiper/js/swiper.js";

export default {
  props: {
    // 每个组件都可以引用banner组件，但是需要传递唯一的swiperid
    swiperid: {
      type: String,
      default: ""
    },
    // 是否显示分页器
    paginationshow: {
      type: Boolean,
      default: true
    },
    // 分页器位置
    paginationdesition: {
      type: String,
      default: "center"
    },
    // 分页器的类型
    paginationType: {
      type: String,
      default: "bullets"
    },
    // 是否自动播放
    autoplay: {
      type: Number,
      default: 2000
    },
    // 是否循环轮播
    loop: {
      type: Boolean,
      default: true
    },
    // 轮播的方向
    direction: {
      type: String,
      default: "horizontal"
    },
    // 轮播效果设置
    effect: {
      type: String,
      default: "slide"
    }
  },
  mounted: function() {
    // 避免this作用域混乱
    var That = this;
    new Swiper("." + That.swiperid, {
      direction: That.direction,
      loop: That.loop,
      pagination: ".swiper-pagination",
      paginationType: That.paginationType,
      autoplay: That.autoplay,
      effect: That.effect
    });
  }
};
</script>

<style>
@import "../assets/libs/swiper/css/swiper.css";

.banner {
  width: 100%;
  height: 2.56rem;
  overflow: hidden;
}
.banner .swiper-container .swiper-slide img {
  width: 100%;
}
.swiper-pagination-bullet-active {
  background: white;
}
</style>
