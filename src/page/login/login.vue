<template>
	<div class="login">
       
        <el-row type="flex" class="row-bg" justify="center">
            <el-col :span="6">
                <div class="grid-content bg-purple">
                                   
                    <h3 class="login-head">国迈Web前端组技术博客</h3>
                </div>
                <div class="login-tab">
                    <el-tabs v-model="activeName" @tab-click="handleClick">
                        <el-tab-pane label="账户登录" name="first-login">
                            <firstLogin></firstLogin>
                        </el-tab-pane>
                        <el-tab-pane label="手机登录" name="second-login">
                            <secondLogin></secondLogin>
                        </el-tab-pane>
                        <el-tab-pane label="第三方程序登录" name="third-login">
                            <thirdLogin></thirdLogin>
                        </el-tab-pane>
                    </el-tabs>
                </div>
            </el-col>
        </el-row>
    </div>
</template>
<script>
import firstLogin from "../../components/login/firstlogin.vue";
import secondLogin from "../../components/login/secondlogin.vue";
import thirdLogin from "../../components/login/thirdlogin.vue";;
export default {
  components: {
    firstLogin,
    secondLogin,
    thirdLogin
  },
  data() {
    return {
      activeName: 'first-login',
    };
  },
  created() {
    
  },
  methods: {
    handleClick() {
    }
  }
};
</script>
