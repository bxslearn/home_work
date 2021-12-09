<template>
    <div id="bottom">
        <div class="firmmsg">
            <div class="firmname">XXXXXXXXXXXX有限公司</div>
            <div class="firmadress">
                <span>地址：北京市朝阳区三元桥时间国际8号楼</span>
                <span>电话：010-00000000</span>
                <span>邮箱：support@modao.cc</span>
            </div>
            <div class="theway">
                <div class="quan" v-for="(p,index) in items" :key="index">
                    <div>{{p}}</div>
                </div>
            </div>
            <div class="links">
                友情链接：<a href="https://www.baidu.com">百度</a>
                |<a href="https://www.sina.com.cn/">新浪</a>
                |<a href="https://www.163.com/">网易</a>
            </div>
        </div>
        <div class="firmintr">
            <div class="qyjs">企业介绍</div>
            <div class="jsitem">
                <span>品牌介绍</span>
                <span>团队介绍</span>
                <span>关于我们</span>
            </div>
        </div>
        <div class="service">
            <div class="qyjs">服务范围</div>
            <div class="jsitem">
                <span>产品介绍</span>
                <span>产品介绍</span>
                <span>服务品牌</span>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "bottom",
        data(){
            return{
                items:[1,2,3]
            }
        }
    }
</script>

<style scoped>
    .jsitem{
        position: absolute;
        top: 30%;
        display: flex;
        flex-direction: column;
        margin-left: 5px;
    }
    .jsitem span{
        color: rgba(255, 255, 255, 100);
        font-size: 14px;
        text-align: left;
        font-family: SourceHanSansSC-regular;
        margin-top: 55%;
        cursor: pointer;
    }
    .qyjs{
        position: absolute;
        top: 20%;
        color: rgba(174, 174, 174, 100);
        font-size: 16px;
        text-align: left;
        font-family: SourceHanSansSC-regular;
    }
    a{
        color: rgba(255, 255, 255, 100);
        padding-left: 5px;
        padding-right: 5px;
    }
    .links{
        position: absolute;
        display: flex;
        left: 112px;
        bottom: 50px;
        color: rgba(255, 255, 255, 100);
        font-size: 14px;
        text-align: left;
        font-family: SourceHanSansSC-regular;
    }
    .quan{
        width: 40px;
        height: 40px;
        border-radius: 50%;
        border: 1px solid rgba(227, 227, 227, 100);
        margin-left: 12px;
    }
    .theway{
        position: absolute;
        display: flex;
        left: 100px;
        top: 60%;
    }
    .firmadress{
        position: absolute;
        display: flex;
        left: 112px;
        top: 30%;
        flex-direction: column;
        color: rgba(255, 255, 255, 100);
        font-size: 14px;
        text-align: left;
        font-family: SourceHanSansSC-regular;
    }
    .firmadress span{
        margin-top: 5%;
    }
    .firmname{
        position: absolute;
        left: 112px;
        top: 20%;
        color: rgba(255, 255, 255, 100);
        font-size: 20px;
        text-align: left;
        font-family: SourceHanSansSC-regular;
    }
    /*-----------------------------------------------------------------*/
.firmmsg{
    width: 50%;
    height: 400px;
}
.firmintr,.service{
    position: relative;
    display: flex;
    flex-direction: column;
    width:25%;
    height: 400px;
}
#bottom{
    position: relative;
    width: 100%;
    background-color:#2D2D2D;
    display: flex;
    flex-direction: row;
    height: 400px;
    margin-bottom: -20px;
}
</style>
