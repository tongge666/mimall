<template>
  <transtion name="slide">
    <div class="modal" v-show="showModal">
      <div class="mask"></div>
      <div class="modal-dialog">
        <div class="modal-header">
          <span>{{title}}</span>
          <a href="javascript:;" class="icon-close" @click="$emit('cancel')"></a>
        </div>
        <div class="modal-body">
          <slot name="body"></slot>
        </div>
        <div class="modal-footer">
          <a href="" v-if="btnType == 1" @click="$emit('submit')" class="btn">{{sureText}}</a>
          <a href="" v-if="btnType == 2" @click="$emit('cancel')" class="btn">{{cancelText}}</a>
          <div class="btn-ground" v-if="btnType == 3">
            <a href="javascript:;" @click="$emit('submit')" class="btn">{{sureText}}</a>
            <a href="javascript:;"  @click="$emit('cancel')" class="btn btn-default">{{cancelText}}</a>
          </div>
        </div>
      </div>
    </div>
  </transtion>
</template>

<script>
export default {
  name: "modal",
  props: {
    modalType: {
      // 弹框类型：小small，中middle，大large,表单form
      type: String,
      default: "form"
    },
    //弹框标题
    title: String,
    //按钮类型 1:确定按钮 2：取消按钮 3：确定，取消按钮
    btnType: String,
    sureText: {
      type: String,
      default: "确定"
    },
    cancelText: {
      type: String,
      default: "取消"
    },
    showModal: Boolean
  }
};
</script>

<style lang="scss">
@import "./../assets/scss/mixin.scss";
@import "./../assets/scss/config.scss";
@import "./../assets/scss/Modal.scss";
</style>