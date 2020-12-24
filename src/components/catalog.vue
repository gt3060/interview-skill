<template>
    <div style="position: fixed;
        right: 100px;
        width: 20%;
        margin-top: -100px;">
        <div class="catalogStyle">
            <div style="display: flex">
                <img src="@/assets/catalog.png"
                     style="width: 24px; height: 24px; margin-top: 3px" />
                <span style="font-size: 22px; font-weight: bold; margin-left: 10px">目录</span>
            </div>
            <el-divider></el-divider>
            <div class="htmlFix">
                <div v-for="item in catalogData"
                     :key="item.index"
                     class="htmlcatalogItem"
                     :id="item.i"
                     :class="itemIndex === item.index ? 'activeCatalog' : ''"
                     @click="handlehtmlCatalog(item)">
                    <div class="radiuStyle"
                         :class="itemIndex === item.index ? 'activeRadiuCatalog' : ''">
                    </div>
                    <el-tooltip placement="left-start"
                                :content="item.name"
                                :open-delay="400">
                        <div class="htmlItemName">{{ item.name }}</div>
                    </el-tooltip>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        catalogData: Array,
        itemIndex: String,
    },
    methods: {
        handlehtmlCatalog(item) {
            this.itemIndex = item.index;
            document.getElementById(item.index).scrollIntoView();
        },
    },
};
</script>

<style>
</style>
