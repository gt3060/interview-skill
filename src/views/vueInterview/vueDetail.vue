<template>
    <div>
        <div class="tabStyle">
            <el-menu default-active="1-1"
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
                    <router-link to="/vueDetail/VueComponentLabel">
                        <el-menu-item index="1-5">Component标签</el-menu-item>
                    </router-link>
                </el-submenu>
                <el-submenu index="2">
                    <template slot="title">
                        <i class="el-icon-menu"></i>
                        <span>高级参数使用选项</span>
                    </template>
                    <router-link to="/vueDetail/VueComputed">
                        <el-menu-item index="2-1">Computed属性</el-menu-item>
                    </router-link>
                    <router-link to="/vueDetail/VueMixins">
                        <el-menu-item index="2-2">Mixin/Extends</el-menu-item>
                    </router-link>
                </el-submenu>
                <router-link to="/vueDetail/vueRouter">
                    <el-menu-item index="3">
                        <i class="el-icon-document"></i>
                        <span slot="title">vue-Router</span>
                    </el-menu-item>
                </router-link>
                <router-link to="/vueDetail/vueCli">
                    <el-menu-item index="4">
                        <i class="el-icon-setting"></i>
                        <span slot="title">vue-cli</span>
                    </el-menu-item>
                </router-link>
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
    width: 20%;
    position: fixed;
    height: 100%;
    background-color: #d9eaf8;
}

.tabRightStyle {
    margin-left: 20%;
}
</style>
