<template>
    <div id="demo">
        <div id="header"></div>
        <div>
            <div id="nav"></div>
            <div id="content"></div>
        </div>
        <div id="footer"></div>
    </div>
</template>
<script>
  export default {
    data(){
      return{

      }
    }
  }
</script>
<style type="text/scss" lang="scss" scoped>
  #demo{
    padding: 10px;
    #header{
      background: red;
      margin: 5px 0px;
      height: 120px;
    }
    #nav{
      float: left;
      background: gray;
      width: 200px;
      height: 500px;
    }
    #content{
      margin-left: 210px;
      background: burlywood;
      height: 500px;
    }
    #footer{
      margin: 5px 0px;
      background: orangered;
      height: 120px;
    }
  }
</style>
