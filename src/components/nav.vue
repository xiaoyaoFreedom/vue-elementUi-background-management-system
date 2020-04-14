<!--
 * @Author: your name
 * @Date: 2020-04-13 15:59:01
 * @LastEditTime: 2020-04-13 19:09:52
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vueTest\houtai\src\components\nav-top.vue
 -->
<style scoped>
.el-row{
  height: 100%;
}

.el-menu{
  border-right:none;
}
.el-aside{
  border-right: 1px solid #f5f1f1;
}
</style>

<template>
  <el-aside width="200px">
    <el-row class="tac">
      <el-col>
        <el-menu
          default-active="1"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
        >
          <el-menu-item index="1" @click="goPage('home')">
            <i class="el-icon-menu"></i>
            <span slot="title">后台中心</span>
          </el-menu-item>

          <el-menu-item index="2" @click="goPage('order')">
            <i class="el-icon-s-order"></i>
            <span slot="title">订单列表</span>
          </el-menu-item>

          <el-submenu index="3">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>测试3</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="3-1">测试3-1</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
      </el-col>
    </el-row>
  </el-aside>
</template>

<script>
var $this = {};
export default {
  data() {
    return {};
  },
  beforeCreate() {
    $this = this;
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },

    //跳转到某个导航页
    goPage(link) {
      if (link === "home") {
        $this.$router.push("/").catch(error => error);
      } else if ((link = "order")) {
        $this.$router.push("/order").catch(error => error);
      }
    }
  }
};
</script>