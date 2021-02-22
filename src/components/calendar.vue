<template>
    <div class="main">
        <div class="changeMonths">左右</div>
        <div class="tableStyle">
            <table border="1">
                <thead>
                    <tr>
                        <th id="monday">一</th>
                        <th id="tuesday">二</th>
                        <th id="wednesday">三</th>
                        <th id="thursday">四</th>
                        <th id="firdy">五</th>
                        <th id="saturday">六</th>
                        <th id="sunday">日</th>
                    </tr>
                </thead>
            </table>
        </div>
    </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.main {
    border: 1px solid black;
    width: 840px;
    height: 720px;
    .changeMonths {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 70px;
    }
}
</style>
