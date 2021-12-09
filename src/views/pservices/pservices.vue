<template>
    <div id="pservices">
        <div class="pimg"></div>
        <div class="pitem">
            <div class="foritem" v-for="(p,index) in 6" :key="index">
                <div>
                    <i style="font-size:40px" class="el-icon-user"></i><br><br>
                    XXXXX</div>
                <div class="pcontent">XXXXXXXXXXXX
                    XXXXXXXXX</div>
            </div>
        </div>
        <div class="pyoushi">
            <div class="ytitle">服务优势</div>
            <div class="yforitem" v-for="(p,index) in 10" :key="index">
                <div class="yuan">
                    <i class="el-icon-apple"></i>
                </div>
                <div class="ytext">XXXXXX</div>
            </div>
        </div>
        <div class="pshihe">
            <div class="ytitle">适用行业</div>
            <div class="yforitem" v-for="(p,index) in 10" :key="index">
                <div class="yuan">
                    <i class="el-icon-apple"></i>
                </div>
                <div class="ytext">XXXXXX</div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "pservices",
        components: {
        },
    }
</script>

<style scoped>
    .pshihe{
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-around;
        padding-bottom: 5%;
    }
    .pyoushi{
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        background-color: #F2F2F2 ;
        justify-content: space-around;
        padding-bottom: 5%;
    }
    .yuan{
        width: 80px;
        height: 80px;
        background-color: white;
        color: #409EFF;
        font-size: 30px;
        border-radius: 50%;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
    }
    .yforitem{
        margin-top: 5%;
        margin-left: 6%;
        margin-right:6%;
        display: flex;
        flex-direction: column;
    }
    .ytitle{
        margin-top: 5%;
        width: 100%;
        text-align: center;
        color: rgba(16, 16, 16, 100);
        font-size: 36px;
        font-family: SourceHanSansSC-regular;
    }
    .ytext{
        margin-top: 10px;
        color: rgba(16, 16, 16, 100);
        font-size: 18px;
        text-align: center;
        font-family: SourceHanSansSC-regular;
    }
    .foritem{
        height: 250px;
        text-align: center;
        border: 1px solid rgba(174, 174, 174, 100);
        width: 250px;
        margin-top: 5%;
        margin-left: 5%;
        margin-right: 5%;
        color: #3894FF;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .foritem div{
        width: 50%;
    }
    .pcontent{
        margin-top: 5px;
        color: rgba(174, 174, 174, 100);
        font-size: 18px;
        text-align: center;
        font-family: SourceHanSansSC-regular;
    }
#pservices{
    width: 100%;
    height: auto;
    display: flex;
    flex-direction:column;
}
    .pimg{
        width: 100%;
        height: 450px;
        background-image: url("../../assets/img/a.png");
    }
    .pitem{
        width: 100%;
        height: auto;
        display: flex;flex-direction:row ;
        flex-wrap: wrap;
        justify-content: space-around;
        padding-bottom: 5%;
    }
</style>
