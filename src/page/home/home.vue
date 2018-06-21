<template>
 <div class="home_page">
   <head-top></head-top>
   <left-side></left-side>
   <right-content></right-content>
 </div>
</template>
<script>
  import headTop from '../head/head.vue'
  import leftSide from '../leftside/leftside.vue'
  import rightContent from '../rightcontent/rightcontent.vue'

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
      leftSide,
      rightContent
    },
    methods: {

    }
  }
</script>
<style type="text/scss" lang="scss" scoped>
  @import "../../style/base/_mixin";
  .home_page{
    display: flex;
    width: 100%;
    height: 100%;
    background: #f5f5f5;
  }
</style>
