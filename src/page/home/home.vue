<template>
 <div class="home_page">
   <head-top></head-top>
   <left-side></left-side>
 </div>
</template>
<script>
  import leftSide from '../leftside/leftside.vue'
  import headTop from '../head/head.vue'

  export default {
    data(){
      return{

      }
    },
    mounted(){

    },
    created(){},
    computed : {

    },
    components : {
      headTop,
      leftSide
    },
    methods: {

    }
  }
</script>
<style type="text/scss" lang="scss" scoped>
  @import "../../style/base/_mixin";
  .home_page{
    height: 100%;
    background: #f5f5f5;
  }
</style>
