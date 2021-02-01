<template>
    <div class="loading">
        <div class="spinner">
            <div class="rect1"></div>
            <div class="rect2"></div>
            <div class="rect3"></div>
            <div class="rect4"></div>
            <div class="rect5"></div>
        </div>

    </div>
</template>

<script>
export default {};
</script>

<style scoped lang="less">
.loading {
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: #2980b9;
    display: flex;
    .spinner {
        width: 60px;
        height: 70px;
        margin: auto;
        div {
            background-color: white;
            height: 100%;
            width: 8px;
            display: inline-block;
            margin: 0px 3px 0px 0px;
            animation: loadingName 1.2s infinite ease-in-out;
        }
        .rect2 {
            animation-delay: -1.1s;
        }
        .rect3 {
            animation-delay: -1s;
        }
        .rect4 {
            animation-delay: -0.9s;
        }
        .rect5 {
            animation-delay: -0.8s;
        }
    }
    @keyframes loadingName {
        0%,
        40%,
        100% {
            transform: scaleY(0.4);
        }
        20% {
            transform: scaleY(1);
        }
    }
}
</style>
