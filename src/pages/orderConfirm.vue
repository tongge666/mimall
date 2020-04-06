<template>
  <div>
      orderConfirm
  </div>
</template>

<script>
import storage from "../storage";
export default {
    name:'order-confirm',
    data(){
      return{
        
      }
    },
    mounted(){
      storage.setItem('a',1);
    },
    methods:{
      
    }
}
</script>

<style>

</style>