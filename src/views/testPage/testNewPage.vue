<template>
    <div>
        <div style="margin:20px">
            <span>localStorage方法：</span>
            <span>{{localStorageValue}}</span>
        </div>
        <div style="margin:20px">
            <span>cookie+setInterval方法：</span>
            <span>{{localStorageValue}}</span>
        </div>
    </div>
</template>

<script>
export default {
    name: 'testNewPage',
    data() {
        return {
            localStorageValue: '',
        };
    },

    components: {},

    computed: {},

    mounted() {
        let routerParams = this.$route.query && this.$route.query.type;
        let storage = JSON.parse(localStorage.getItem('tempStorage'));
        let isRefreshSelf = storage.type;
        if (
            routerParams === 'localStorage' ||
            isRefreshSelf === 'localStorage'
        ) {
            console.log('+====');
            this.localStorageValue = storage.value;
        }
        if (routerParams === 'setInterval') {
            setInterval(() => {
                let cookie = document.cookie;
                this.localStorageValue = cookie.split('=')[1];
            }, 1000);
        }
    },

    methods: {},
};
</script>
<style lang='less' scoped>
</style>
