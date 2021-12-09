<template>
    <div id="examples">
        <div class="eximg"></div>
        <div class="exitem">
            <div class="navpx">
                <div @click="changei(index)" :class="[itemdef===index?'itemnav':'itemnavs']" v-for="(p,index) in nav" :key="index" >
                    <div>{{p}}</div>
                </div>
            </div>
            <div class="navcontent">
                <div class="navitem" v-for="(p,index) in itemcontent" :key="index">
                    <div class="nto">
                        <img style="width: 180px;height: 80px" src="../../assets/img/a.png">
                        <span class="navt">{{p.title}}</span>
                        <span class="itmc">{{p.platform}}</span>
                        <div class="nbtn">案例详情</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "examples",
        data(){
            return{
                //控制选项
                itemdef:0,
                nav:["互联网","农业","零售","旅游","建筑","房地产","餐饮","建筑","房地产","餐饮"],
                itemcontent:[{title:"是东非发",platform:"XXXX类XX平台",url:"#"},
                    {title:"是东非发",platform:"XXXX类XX平台",url:"#"},
                    {title:"是东非发",platform:"XXXX类XX平台",url:"#"},
                    {title:"是东非发",platform:"XXXX类XX平台",url:"#"},
                    {title:"是东非发",platform:"XXXX类XX平台",url:"#"},
                    {title:"是东非发",platform:"XXXX类XX平台",url:"#"}]
            }
        },
        methods:{
            changei(index){
                this.itemdef=index
            }
        }
    }
</script>

<style scoped>
    .nbtn{
        margin-top: 30px;
        width: 110px;
        height: 40px;
        line-height: 40px;
        border-radius: 5px;
        color: rgba(56, 148, 255, 100);
        font-size: 14px;
        text-align: center;
        font-family: Roboto;
        border: 1px solid rgba(56, 148, 255, 100);
        cursor: pointer;
    }
    .nto{
        margin-top: 40px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .itmc{
        margin-top: 10px;
        color: rgba(174, 174, 174, 100);
        font-size: 14px;
        text-align: left;
        font-family: SourceHanSansSC-regular;
    }
    .navt{
        margin-top: 15px;
        color: rgba(16, 16, 16, 100);
        font-size: 18px;
        text-align: left;
        font-family: SourceHanSansSC-regular;
    }
    .navcontent{
        display: grid;
        grid-template-columns: auto auto auto auto;
        grid-column-gap: 35px;
        grid-row-gap: 15px;
    }
    .navitem{
        width: 260px;
        height: 310px;
        line-height: 20px;
        text-align: center;
        border: 1px solid rgba(174, 174, 174, 100);
    }
    .exitem{
        margin: 5%;
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;

    }
    .navpx{
        margin-top: 5%;
        margin-bottom: 5%;
        display: grid;
        grid-template-columns: auto auto auto auto auto auto auto auto;
        grid-column-gap: 35px;
        grid-row-gap: 15px;
    }
    .itemnavs{
        cursor: pointer;
        width: 110px;
        height: 40px;
        line-height: 40px;
        border-radius: 5px;
        color: #000000;
        font-size: 14px;
        text-align: center;
        font-family: Roboto;
        border: 1px solid rgba(56, 148, 255, 100);
    }
    .itemnav{
        cursor: pointer;
        width: 110px;
        height: 40px;
        line-height: 40px;
        border-radius: 5px;
        color: #ffffff;
        font-size: 14px;
        text-align: center;
        background-color: rgba(56, 148, 255, 100);
        font-family: Roboto;
        border: 1px solid rgba(56, 148, 255, 100);
    }
    .eximg{
        width: 100%;
        height: 450px;
        background-image: url("../../assets/img/a.png");
    }
#examples {
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
}
</style>
