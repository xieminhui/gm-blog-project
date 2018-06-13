<template>
  <div class="head_page">
    <section>
      ONE
    </section>
    <section>
      TWO
    </section>
  </div>
</template>
<script>
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
    component : {

    },
    methods: {

    }
  }
</script>
<style type="text/scss" lang="scss" scoped>
  @import "../../style/mixin";
  .head_page{
    display: flex;
    position: fixed;
    top:0;
    padding: 15px;
    width: 100%;
    background: $blue ;
    section{
      margin-right: 15px;
      @include sc(20px, #333);
    }
  }
</style>
