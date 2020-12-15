<template>
    <div>
        <div class="tabStyle">
            <el-menu default-active="2"
                     class="el-menu-vertical-demo"
                     @open="handleOpen"
                     @close="handleClose"
                     background-color="#d9eaf8"
                     active-text-color="#ffd04b">
                <el-submenu index="1">
                    <template slot="title">
                        <i class="el-icon-location"></i>
                        <span>全局API</span>
                    </template>
                    <router-link to="/vueDetail">
                        <el-menu-item index="1-1">自定义指令(Vue.directive)</el-menu-item>
                    </router-link>
                    <router-link to="/vueDetail/VueExtend">
                        <el-menu-item index="1-2">Vue.extend构造器的延伸</el-menu-item>
                    </router-link>
                    <router-link to="/vueDetail/VueSet">
                        <el-menu-item index="1-3">Vue.Set</el-menu-item>
                    </router-link>
                    <router-link to="/vueDetail/VueWatch">
                        <el-menu-item index="1-4">Vue-watch</el-menu-item>
                    </router-link>
                </el-submenu>
                <el-menu-item index="2">
                    <i class="el-icon-menu"></i>
                    <span slot="title">导航二</span>
                </el-menu-item>
                <el-menu-item index="3"
                              disabled>
                    <i class="el-icon-document"></i>
                    <span slot="title">导航三</span>
                </el-menu-item>
                <el-menu-item index="4">
                    <i class="el-icon-setting"></i>
                    <span slot="title">导航四</span>
                </el-menu-item>
            </el-menu>
        </div>
        <div class="tabRightStyle">
            <router-view></router-view>
        </div>
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

<style scoped>
.tabStyle {
    padding-top: 50px;
    width: 400px;
    position: fixed;
    height: 100%;
    background-color: #d9eaf8;
}

.tabRightStyle {
    margin-left: 400px;
}
</style>
