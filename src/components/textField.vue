<template>
    <div class="fontStyle">
        <template v-if="title">
            <p class="fontSize">{{title}}</p>
            <p class="fontIndent">
                {{content}}
            </p>
        </template>
        <template v-else-if="onlyContent">
            <p class="fontIndent">{{onlyContent}}</p>
        </template>

    </div>
</template>

<script>
export default {
    props: {
        title: String,
        content: String,
        onlyContent: String,
    },
    watch: {
        title: {
            handler(newVal, oldVal) {
                console.log(newVal, oldVal);
            },
            deep: true,
        },
    },
    mounted() {},
};
</script>

<style scoped>
.fontSize {
    font-size: 25px;
}
</style>
