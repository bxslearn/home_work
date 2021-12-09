<template>
<div id="homeapply">
    <div class="applytitle">这些行业都可以用我们</div>
    <div class="grid-container">
        <div class="grid-item item1">1</div>
        <div class="grid-item item2">2</div>
        <div class="grid-item item3">3</div>
        <div class="grid-item item4">4</div>
        <div class="grid-item item5">5</div>
    </div>
    <div class="getmore">了解更多行业</div>
</div>
</template>

<script>
    export default {
        name: "homeapply"
    }
</script>

<style scoped>
    .getmore{
        cursor: pointer;
        margin-left: 40%;
        margin-top: 5%;
        margin-bottom: 5%;
        width: 260px;
        height: 50px;
        line-height: 50px;
        border-radius: 5px;
        background-color: rgba(255, 255, 255, 100);
        color: rgba(56, 148, 255, 100);
        font-size: 14px;
        text-align: center;
        font-family: Roboto;
        border: 1px solid rgba(56, 148, 255, 100);
    }
    .grid-container {
        margin: 3% 5% auto 5%;
        display: grid;
        grid-gap: 10px;
        padding: 10px;
    }

    .grid-item {
        background-color: rgba(255, 255, 255, 0.8);
        text-align: center;
        padding: 40px;
        font-size: 30px;
    }

    .item1 {
        padding:80px;
        grid-column: 1 / span 2;
        grid-row: 1;
    }

    .item2 {
        grid-column: 3;
        grid-row: 1 / span 2;
    }

    .item5 {
        grid-column: 1 / span 3;
        grid-row: 3;
    }
#homeapply {
    width: 100%;
    height: auto;
    background-color: #F2F2F2;
}
.applytitle{
    margin-top:4%;
        color: rgba(16, 16, 16, 100);
        font-size: 28px;
        text-align: center;
        font-family: SourceHanSansSC-regular;
}
</style>
