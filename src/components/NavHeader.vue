<template>
  <div class="header">
    <div class="nav-topbar">
      <div class="container">
        <div class="topbar-menu">
          <a href="javascript:;">小米商城</a>
          <a href="javascript:;">MUI</a>
          <a href="javascript:;">云服务</a>
          <a href="javascript:;">小爱开放平台</a>
        </div>
        <div class="topbar-user">
          <a href="javascript:;" v-if="username">{{username}}</a>
          <a href="javascript:;" v-if="!username" @click="login">登陆</a>
          <a href="javascript:;" v-if="username">我的订单</a>
          <a href="javascript:;" v-if="username" @click="logout">退出</a>
          <a href="javascript:;" @click="goToCart" class="my-cart">
            <span class="icon-cart"></span>购物车({{cartCount}})
          </a>
        </div>
      </div>
    </div>
    <div class="nav-header">
      <div class="container">
        <div class="header-logo">
          <a href="/#/index"></a>
        </div>
        <div class="header-menu">
          <div class="item-menu">
            <span>小米手机</span>
            <div class="children">
              <ul>
                <li class="product" v-for="(item,index) in phoneList" :key="index">
                  <a :href="'/#/product/' + item.id" target="_blank"></a>
                    <div class="pro-img">
                      <img :src="item.mainImage" alt="item.name">
                    </div>
                    <div class="pro-name">{{item.name}}</div>
                    <div class="pro-price">{{item.price | currency}}</div>
                </li>
              </ul>
            </div>
          </div>
          <div class="item-menu">
            <span>RedMi红米</span>
          </div>
          <div class="item-menu">
            <span>电视</span>
            <div class="children">
              <ul>
                <li class="product">
                  <a href="" target="_blank"></a>
                    <div class="pro-img">
                      <img v-lazy="'/imgs/nav-img/nav-3-1.jpg'" alt="">
                    </div>
                    <div class="pro-name">小米壁画电视 64英寸</div>
                    <div class="pro-price">6999元</div>
                </li>
                <li class="product">
                  <a href="" target="_blank"></a>
                    <div class="pro-img">
                      <img v-lazy="'/imgs/nav-img/nav-3-2.jpg'" alt="">
                    </div>
                    <div class="pro-name">小米全面屏电视E55A</div>
                    <div class="pro-price">1999元</div>
                </li>
                <li class="product">
                  <a href="" target="_blank"></a>
                    <div class="pro-img">
                      <img v-lazy="'/imgs/nav-img/nav-3-3.png'" alt="">
                    </div>
                    <div class="pro-name">小米电视4A 32英寸</div>
                    <div class="pro-price">699元</div>
                </li>
                <li class="product">
                  <a href="" target="_blank"></a>
                    <div class="pro-img">
                      <img v-lazy="'/imgs/nav-img/nav-3-4.jpg'" alt="">
                    </div>
                    <div class="pro-name">小米电视4A 55英寸</div>
                    <div class="pro-price">1999元</div>
                </li>
                <li class="product">
                  <a href="" target="_blank"></a>
                    <div class="pro-img">
                      <img v-lazy="'/imgs/nav-img/nav-3-5.jpg'" alt="">
                    </div>
                    <div class="pro-name">小米电视4A 65英寸</div>
                    <div class="pro-price">2399元</div>
                </li>
                <li class="product">
                  <a href="" target="_blank"></a>
                    <div class="pro-img">
                      <img v-lazy="'/imgs/nav-img/nav-3-6.png'" alt="">
                    </div>
                    <div class="pro-name">查看全部</div>
                    <div class="pro-price">查看全部</div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="header-search">
          <div class="wapper">
            <input type="text" name="keyword">
            <a href="javascript:;"></a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "nav-header",
  data(){
    return{
      phoneList:[]
    }
  },
  computed:{
    username(){
      return this.$store.state.username
    },
    cartCount(){
      return this.$store.state.cartCount
    }
  },
  filters:{
    currency(val){
      if(!val)return '0.00';
      return '￥' + val.toFixed(2) + '元';
    }
  },
  methods:{
    login(){
      this.$router.push('/login');
    },
    getProductList(){
      let that = this;
      this.$axios.get('/api/products',{
        params:{
          categoryId:'100012',
          pageSize:6
        }
      }).then((res=>{
        that.phoneList = res.list
      }))
    },
    getCartCount() {
      this.axios.get("/api/carts/products/sum").then((res) => {
        this.$store.dispatch("saveCartCount", res);
      });
    },
    logout(){
      let that = this;
      this.$axios.post('/api/user/logout').then(()=>{
        that.$message.success("退出成功");
        this.$cookie.set('userId','',{expires:'-1'});
        this.$store.dispatch('saveUserName','');
        this.$store.dispatch('saceCartCount','0');
      })
    },
    goToCart(){
      this.$router.push('/cart');
    }
  },
  mounted(){
    this.getProductList();
    let params = this.$route.params;
    if(params && params.from == "login"){
      this.getCartCount();
    }
  }
};
</script>

<style lang="scss">
@import "./../assets/scss/base.scss";
@import "./../assets/scss/mixin.scss";
@import "./../assets/scss/config.scss";
.header {
  .nav-topbar {
    height: 39px;
    line-height: 39px;
    background: #333333;
    color: #B0B0B0;
    .container {
      @include flex();
      a {
        display: inline-block;
        color: #b0b0b0;
        margin-right: 17px;
      }
      .my-cart {
        width: 110px;
        background: #ff6600;
        text-align: center;
        color: #ffffff;
        margin-right: 0;
      }
      .icon-cart {
        @include bgImg(16px,12px,"/imgs/icon-cart-checked.png");
        margin-right: 4px;
      }
    }
  }
  .nav-header {
    .container {
      position: relative;
      height: 112px;
      @include flex();
      .header-menu {
        width: 643px;
        display: inline-block;
        padding-left: 209px;
        .item-menu {
          display: inline-block;
          color: #333333;
          font-weight: bold;
          font-size: 16px;
          line-height: 112px;
          margin-right: 20px;
          span{
            cursor: pointer;
          }
          &:hover{
            color: $colorA;
            .children{
              height: 220px;
              opacity: 1;
            }
          }
          .children{
            position: absolute;
            top: 112px;
            left: 0;
            opacity: 0;
            height: 0;
            overflow: hidden;
            width: 1226px;
            border-top: 1px solid #E5E5E5;
            box-shadow: 0px 7px 6px 0px rgba(0,0,0,0.11);
            z-index: 11;
            transition: height 500ms;
            background-color: #ffffff;
          }
          .product{
            float: left;
            width: 16.6%;
            height: 220px;
            font-size: 12px;
            line-height: 12px;
            text-align: center;
            position: relative;
            a{
              display: inline-block;
            }
            img{
              height: 111px;
              width: auto;
              margin-top: 26px;
            }
            .pro-img{
              height: 137px;
            }
            .pro-name{
              font-weight: bold;
              color: $colorB;
              margin-top: 19px;
              margin-bottom: 8px;
            }
            .pro-price{
              color: $colorA;
            }
            &:before{
              content: '';
              position: absolute;
              top: 28px;
              right: 0;
              border-left: 1px solid $colorF;
              height: 100px;
              width: 1px;
            }
            &:last-child:before{
              display: none;
            }
          }
        }
      }
      .header-search{
        width: 319px;
        .wapper{
          height: 50px;
          border: 1px solid #E0E0E0;
          display: flex;
          align-items: center;
          input{
            border: none;
            border-right: 1px solid #E0E0E0;
            height: 50px;
            width: 264px;
            padding-left: 14px;
            box-sizing: border-box;
          }
          a{
            @include bgImg(18px,18px,"/imgs/icon-search.png");
            margin-left: 17px;
          }
        }
      }
    }
  }
}
</style>