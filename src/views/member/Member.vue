<template>
    <div id="menber">
        <div class="mimg"></div>
        <div class="buymenber">
            <div class="buyunit" v-for="(p,index) in 3" :key="index">
                <div class="menberlx">
                    <i style="font-size: 40px" class="el-icon-star-off"></i>
                    <span>普通会员</span>
                </div>
                <div class="menberqy">
                    <ul v-for="(p,index) in menbertext" :key="index">
                        <li>·{{p}}</li>
                    </ul>
                </div>
                <div class="menbertext">仅需
                    <span style="color: red">XXXXX</span>  元/年
                </div>
                <div class="buybtn">立即购买</div>
            </div>
        </div>
        <div class="menberys">
            <div class="ys">会员优势</div>
            <div class="ysitem" v-for="(p,index) in 4" :key="index">
                <div class="menberyuan">
                    <i style="font-size: 40px" class="el-icon-star-off"></i>
                </div>
                <div style="margin-left: 5%">
                    <div class="ystitle">XXXXXXXXXXX</div>
                    <div class="ysnr">XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
                        XXXXXXXXXXXXXXXXXXXXXXXXXXXXX
                        XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Member",
        data(){
            return{
                menbertext:["sdasdasfasdasdaa","sdasdasfa","sdasdasfasdafa","sdasdasfa","sdawewqwdasfa","sdasdasfa","sdasdasfa"]
            }
        }
    }
</script>

<style scoped>
    .ysnr{
        margin-top: 15px;
        color: rgba(174, 174, 174, 100);
        font-size: 16px;
        text-align: left;
        font-family: SourceHanSansSC-regular;
    }
    .ystitle{
        color: rgba(16, 16, 16, 100);
        font-size: 20px;
        text-align: left;
        font-family: SourceHanSansSC-regular;
    }
    .menberyuan{
        color: #409EFF;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        width: 250px;
        height: 100px;
        border-radius: 50%;
        background-color: white;
    }
    .ysitem{
        margin-top: 5%;
        width: 42.5%;
        height: 100px;
        display: flex;
        flex-direction: row;
        align-items: center;
        overflow: hidden;
        margin-left: 5%;
    }
    .ys{
        margin-top: 5%;
        width: 100%;
        color: rgba(16, 16, 16, 100);
        font-size: 36px;
        font-family: SourceHanSansSC-regular;
    }
    .menberys{
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        background-color: #F2F2F2;
        padding-bottom: 5%;
    }
    .menbertext{
        margin-top: 10%;
    }
    .buybtn {
        margin-top: 20px;
        cursor: pointer;
        width: 110px;
        height: 40px;
        line-height: 40px;
        border-radius: 5px;
        background-color: rgba(56, 148, 255, 100);
        color: rgba(255, 255, 255, 100);
        font-size: 14px;
        text-align: center;
        font-family: Roboto;
    }
    .menberqy{
        margin-top: 10%;
        color: rgba(174, 174, 174, 100);
        font-size: 18px;
        text-align: left;
        font-family: SourceHanSansSC-regular;
    }
    .menberlx{
        display: flex;flex-direction: column;
        font-size: 28px;
        color: #409EFF;
    }
    .menberlx span{margin-top: 30px}
    .buyunit{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 300px;
        height: 500px;
        border: 1px solid #000000;
    }
    .buymenber{
        padding-top:7%;
        padding-bottom: 7%;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        width: 100%;
        height: auto;
    }
    .mimg{
        width: 100%;
        height: 450px;
        background-image: url("../../assets/img/a.png");
    }
#menber{
    width: 100%;
    height:auto;
    display: flex;
    flex-direction: column;
}
</style>
