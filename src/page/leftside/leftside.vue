<template>
  <div class="leftside_page">
    <header class="bgclass">文章列表</header>
    <section class='bgclass' v-for="(item, index) in classifyulData" :key="inidex">
      <header>{{item}}</header>
      <section v-for="(item, index) in ulData" :key="item.id" class="section_class">
        <h2>{{item.name}}</h2>
        <ul>
          <li v-for="(v, i) in item.ArticleList" :key="i" class="section_li_class">
            {{v.name}}
          </li>
        </ul>
      </section>
    </section>
  </div>
</template>
<script>
  var Mock = require('mockjs')
  import { leftUl } from '../../server/mock/leftside'
  export default {
    data(){
      return{
        classifyulData : ['算法', 'JS', 'CSS', 'HTML'],
        ulData:null,
      }
    },
    mounted(){
      this.ulData = Mock.mock(leftUl).data.list;
      console.log(this.ulData)
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
  @import "../../style/base/_mixin";
  .leftside_page{
    display: flex;
    flex-direction: column;
    align-items: center;
    position: absolute;
    top:50px;
    bottom: 0px;
    width: 250px;
    overflow: scroll;
    .bgclass{
      background-color: $fc;
      margin-bottom: 10px;
      border-bottom: 1px solid $bc;
      width: 100%;
    }
    header{
      padding:  15px 0;
      text-align: center;
    }
    .section_class{
      margin: 10px 20px;
      .section_li_class{
        margin: 5px 10px;
      }
      .section_li_class:before{
          content:'';
          width:4px; height:4px;
          border-radius:50%;
          background:#000;
          display:inline-block;
          margin-right:5px;
          vertical-align:middle;
          margin-top:-3px;
      }
    }
  }
</style>
