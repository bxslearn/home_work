<template>
    <div id="homecontent">
        <div class="items" v-for="(p,index) in imgs" :key="index">
            <div class="leftitem">
                <div class="itemtext">
                    <div class="text1">XXXXXXXX</div>
                    <div class="text2">XXXXXXXX,XXXXXXXX</div>
                    <div class="tetx3">XXXXXXXXXXXXXXXXXXX
                        XXXXXXXXXXXXXXXXXXXXXXXXXX</div>
                    <div style="cursor: pointer" class="sbtn">了解更多</div>
                </div>
                <div class="itemimg">
                    <img :src="p.img1">
                </div>
            </div>
            <div class="leftitem">
                <div class="itemimgs">
                    <img :src="p.img2">
                </div>
                <div class="itemtexts">
                    <div class="text1">XXXXXXXX</div>
                    <div class="text2">XXXXXXXX,XXXXXXXX</div>
                    <div class="tetx3">XXXXXXXXXXXXXXXXXXX
                        XXXXXXXXXXXXXXXXXXXXXXXXXX</div>
                    <div style="cursor: pointer" class="sbtn">了解更多</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "homecontent",
        data(){
            return{
                imgs:[{img1:require("../../assets/img/b.png"),img2:require("../../assets/img/a.png")},
                    {img1:require("../../assets/img/b.png"),img2:require("../../assets/img/c.png")}]
            }
        }
    }
</script>

<style scoped>
    .items{
        display: flex;
        flex-direction: column;
        margin-bottom: 5%;
    }
    .leftitem {
        width: 100%;
        height: 400px;
        display: flex;
        flex-direction: row;
        margin-top: 5%;
    }
    .itemtext,.itemtexts{
        width: 40%;
        height: 400px;
        margin-left: 5%;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
    .itemtext div{width: 50%;height: auto;margin-left:25%;}
    .itemtexts div{width: 50%;height: auto;margin-right:25%;}
    .itemimg,.itemimgs{width: 60%;height: 400px;}
    .itemimg img{width: 90%;height: 400px;margin-right: 10%}
    .itemimgs img{width: 90%;height: 400px;margin-left: 10%}
    .text1{
        text-align: left;
        color: rgba(16, 16, 16, 100);
        font-size: 28px;
        text-align: left;
        font-family: SourceHanSansSC-regular;
    }
    .text2{color: rgba(174, 174, 174, 100);
        font-size: 18px;
        text-align: left;
        font-family: SourceHanSansSC-regular;}
    .tetx3{
        margin-top: 5%;
        color: rgba(16, 16, 16, 100);
        font-size: 18px;
        text-align: left;
        font-family: SourceHanSansSC-regular;
    }
    .sbtn{
        left: 120px;
        top: 504px;
        width: 160px;
        height: 50px;
        line-height: 50px;
        border-radius: 5px;
        color: rgba(56, 148, 255, 100);
        font-size: 14px;
        text-align: center;
        font-family: Roboto;
        background-color: white;
        border: 1px solid rgba(56, 148, 255, 100);
        margin-top: 5%;
    }
</style>
