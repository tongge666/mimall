<template>
  <div class="index">
    <div class="container">
      <div class="swiper-box">
        <swiper class="swiper" :auto-update="true" ref="mySwiper" :options="swiperOptions">
          <swiper-slide v-for="(item,index) in swiperList" :key="index">
            <a :href="'/#/product' + item.id">
              <img :src="item.img" alt />
            </a>
          </swiper-slide>
          <div class="swiper-button-prev" slot="button-prev"></div>
          <div class="swiper-button-next" slot="button-next"></div>
          <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
      </div>
      <div class="ads-box"></div>
      <div class="banner"></div>
      <div class="product-box"></div>
    </div>
    <service-bar></service-bar>
  </div>
</template>

<script>
import ServiceBar from "../components/ServiceBar";
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import "swiper/css/swiper.css";
export default {
  name: "index",
  components: {
    Swiper,
    SwiperSlide,
    ServiceBar
  },
  data() {
    return {
      //轮播图配置选项
      swiperOptions: {
        //自动轮播
        autoplay:true,
        //循环轮播
        loop:true,
        effect:'cube',//立体盒子效果
        cubeEffect:{
          slideShadows:true,
          shadow:true,
          shadowOffset:100,
          shadowScale:0.6
        },
        pagination: {
          el: ".swiper-pagination",
          //允许点击原点切换轮播
          clickable: true
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        }
      },
      swiperList: [
        {
          id: "42",
          img: "/imgs/slider/slide-1.jpg"
        },
        {
          id: "45",
          img: "/imgs/slider/slide-2.jpg"
        },
        {
          id: "46",
          img: "/imgs/slider/slide-3.jpg"
        },
        {
          id: "",
          img: "/imgs/slider/slide-4.jpg"
        },
        {
          id: "",
          img: "/imgs/slider/slide-1.jpg"
        }
      ]
    };
  },
  computed: {},
  mounted() {}
};
</script>

<style lang="scss">
@import "./../assets/scss/mixin.scss";
@import "./../assets/scss/config.scss";
.index {
  .swiper-box {
    .swiper-container{
      height: 451px;
      img{
        width: 100%;
        height: 100%;
      }
    }
  }
}
</style>