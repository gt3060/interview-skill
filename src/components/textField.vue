<template>
    <div class="fontStyle">
        <p class="fontSize"
           v-if="title">{{title}}</p>
        <p class="fontIndent"
           v-if="content">
            {{content}}
        </p>
    </div>
</template>

<script>
export default {
    props: {
        title: String,
        content: String,
    },
};
</script>

<style scoped>
.fontSize {
    font-size: 25px;
}
</style>
