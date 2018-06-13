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
