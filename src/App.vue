<template>
  <div id="app">
    <el-container>
      <el-header height="40px">头部</el-header>
      <el-container>
        <el-aside width="200px">
          <el-menu
            default-active="2"
            @open="handleOpen"
            @close="handleClose"
            background-color="#fafafb"
            active-text-color="#368ee0"
          >
            <el-submenu index="1">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>导航一</span>
              </template>
              <el-menu-item-group>
                <router-link to="/">
                  <el-menu-item index="1-1">选项1</el-menu-item>
                </router-link>
                <router-link to="/about">
                  <el-menu-item index="1-2">About</el-menu-item>
                </router-link>
              </el-menu-item-group>
            </el-submenu>
            <el-menu-item index="2">
              <i class="el-icon-menu"></i>
              <span slot="title">导航二</span>
            </el-menu-item>
            <el-menu-item index="3">
              <i class="el-icon-document"></i>
              <span slot="title">导航三</span>
            </el-menu-item>
            <el-menu-item index="4">
              <i class="el-icon-setting"></i>
              <span slot="title">导航四</span>
            </el-menu-item>
          </el-menu>
        </el-aside>
        <el-main>
          <router-view />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
  },
};
</script>

<style>
#app {
  /* font-family: Avenir, Helvetica, Arial, sans-serif; */
  /* -webkit-font-smoothing: antialiased; */
  /* -moz-osx-font-smoothing: grayscale; */
  /* text-align: center; */
  height: 100%;
  /* color: #2c3e50; */
}

.el-header a {
  font-weight: bold;
  color: #2c3e50;
}

.el-header a.router-link-exact-active {
  color: #42b983;
}

.el-header,
.el-footer {
  background-color: #368ee0;
  color: #333;
  text-align: center;
  line-height: 40px;
}

.el-aside {
  background-color: #f2f2f2;
  /* color: #333; */
  text-align: center;
  /* line-height: 700px; */
}

.el-main {
  background-color: #f2f2f2;
  color: #333;
  text-align: center;
  line-height: 100px;
}

.el-container {
  height: 100%;
}

body > .el-container {
  margin-bottom: 40px;
}

a {
  text-decoration: none;
}

.router-link-active {
  text-decoration: none;
}
</style>
