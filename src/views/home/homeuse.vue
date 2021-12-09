<template>
    <div id="homeuse">
        <div class="usetitle">他们都在使用我们</div>
        <div class="itemname" >
            <div class="itemed" v-for="(p,index) in items" :key="index" >
                <div class="sonitem">{{p}}</div>
            </div>
        </div>
        <div class="morefirm">
            <div class="moretitle">安全稳定企业服务</div>
            <div class="moretext">10年服务经验积累，9种安全保障，8种服务场景，优质服务值得您信赖
            </div>
            <div class="morebtn">了解更多</div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "homeuse",
        data(){
            return{
                items:[1,2,3,4,5,6,7,8]
            }
        }
    }
</script>

<style scoped>
    .morebtn{
        cursor: pointer;
        width: 160px;
        height: 50px;
        line-height: 50px;
        margin-left: 44%;
        border-radius: 5px;
        background-color: rgba(56, 148, 255, 100);
        color: rgba(255, 255, 255, 100);
        font-size: 14px;
        text-align: center;
        font-family: Roboto;
        border: 1px solid rgba(56, 148, 255, 100);
        margin-top: 3%;
    }
    .moretitle{
        padding-top: 5%;
        color: rgba(255, 255, 255, 100);
        font-size: 36px;
        font-family: SourceHanSansSC-regular;
    }
    .moretext{
        padding-top: 2%;
        color: rgba(255, 255, 255, 100);
        font-size: 20px;
        font-family: SourceHanSansSC-regular;
    }
    #homeuse{
    width: 100%;
    height: auto;
    }
    .usetitle{
        margin-top: 4%;
        color: rgba(16, 16, 16, 100);
        font-size: 28px;
        text-align: center;
        font-family: SourceHanSansSC-regular;
    }
    .itemname{
        width: 100%;
        height: auto;
        display: flex;
        flex-direction: row;
        flex-wrap:wrap;
        justify-content: space-around;
        margin-bottom: 4%;
    }
    .itemed{
        width: 23%;
        margin-top: 5%;
        height: 200px;
        background-color: #409EFF;
    }
    .morefirm{
        height: 300px;
        width: 100%;
        background-color: rgba(0, 0, 0, 1);
    }
</style>
