<template>
  <div class="rightcontent_page">
    <section>你点击的文章为{{text}}</section>
  </div>
</template>

<script>
  import { mapState } from 'vuex'
  export default {
    data(){
      return{
        text:''
      }

    },
    mounted(){

    },
    created(){

    },
    computed : {
      ...mapState([
        'leftItemClickId'
      ])
    },
    watch : {
      leftItemClickId: function(newValue, oldValue){
        //文章点击，切换对应内容
       this.text = newValue.name;
      }
    }
  }
</script>

<style type="text/scss" lang="scss" scoped>
  @import "../../style/base/_mixin";
  .rightcontent_page {
    background-color: $fc;
    position: absolute;
    top:50px;
    left: 250px;
    bottom: 0;
    right:0;
    @include allCenter;
  }
</style>
