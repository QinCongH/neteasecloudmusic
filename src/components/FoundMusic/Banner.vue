<template>
  <div class="banner">
    <div class="swiper mySwiper" ref="mySwiper">
      <div class="swiper-wrapper">
        <div class="swiper-slide banner-bcg">
          <div class="banner-content w"></div>
        </div>
        <div class="swiper-slide banner-bcg">
          <div class="banner-content w"></div>
        </div>
      </div>
      <div class="swiper-button-next"></div>
      <div class="swiper-button-prev"></div>
      <div class="swiper-pagination"></div>
      <!-- 登录悬浮提示 -->
      <div class="down w">
        <div class="download banner-img">
          <p>PC 安卓 iPhone WP iPad Mac 六大客户端</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Swiper from "swiper";
export default {
  name: "Banner",
  components: {},
  methods: {
    init() {
      new Swiper(".mySwiper", {
        autoplay: true, //可选选项，自动滑动
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        pagination: {
          //分页器
          el: ".swiper-pagination",
          clickable: true, //可点击
        },
      });
    },
  },
  mounted() {
    this.init();
  },
};
</script>

<style scoped>
/* 低版本的swiper */
@import "../../../node_modules/swiper/css/swiper.css";
.banner {
  width: 100%;
  height: 285px;
  overflow: hidden;
  position: relative;
}
.swiper {
  width: 100%;
  height: 100%;
  --swiper-theme-color: #ff6600; /* 设置Swiper风格 */
  --swiper-navigation-color: #c7c7c7; /* 单独设置按钮颜色 */
  --swiper-navigation-size: 50px; /* 设置按钮大小 */
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;

  /* Center slide text vertically */
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.banner-bcg {
  background: url("../../assets/img/bannar1.jpg") no-repeat center;
  background-size: 100%;
}
.banner-content {
  position: relative;
  height: inherit;
  background: url("../../assets/img/bannar.jpg") no-repeat center;
}
.down {
  position: absolute;
  left: 50%;
  top: 0;
  transform: translateX(-50%); /* 移动元素本身50% */
  height: inherit;
  z-index: 111;
  margin: auto;
}
.download {
  width: 23.3%;
  height: inherit;
  float:right;
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  line-height: 26px;
  cursor: pointer;
}
.download p {
  font-size: 13px;
  color: #8d8d8d;
  transform: scale(0.9);
}
</style>