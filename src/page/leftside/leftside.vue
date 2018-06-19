<template>
  <div class="leftside_page">
    <header class="bgclass">文章列表</header>
    <section class='bgclass'>
      <header>算法</header>
      <section v-for="(item, index) in ulData" :key="item.id" class="section_class">
        <section class="head_section">
          <svg v-if="item.isshow_li" @click="showli(index, false)">
            <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#arrow-down"></use>
          </svg>
          <svg v-else @click="showli(index, true)">
            <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#arrow-right"></use>
          </svg>
          <h2>{{item.name}}</h2>
        </section>
        <transition name="show_li">
          <ul v-if="item.isshow_li">
              <li v-for="(v, i) in item.ArticleList" :key="i" class="section_li_class">
                {{v.name}}
              </li>
          </ul>
        </transition>
      </section>
    </section>
  </div>
</template>
<script>
  var Mock = require('mockjs')
  import { leftUl } from '../../server/mock/leftside'
  import Vue from 'vue'
  export default {
    data(){
      return{
        ulData:[],
      }
    },
    mounted(){
      this.ulData = Mock.mock(leftUl).data.list;
      this.ulData.forEach(function (v) {
        v.isshow_li = false;
      })
    },
    created(){},
    computed : {

    },
    component : {

    },
    methods: {
      showli(index, newvalue){
        let obj = Object.assign({},this.ulData[index]);
        obj.isshow_li = newvalue;
        Vue.set(this.ulData, index, obj);
      }
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
      .head_section{
        display: flex;
        align-items: center;
        svg{
          @include wh(16px, 12px);
          stroke: #b3b3ac;
          stroke-width: 2;
          cursor: pointer;
        }
      }
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
    .show_li-enter-active,.show_li-leave-active{
      transition: all .3s;
    }
    .show_li-enter,.show_li-leave-to{
      opacity: 0;
    }
  }
</style>
