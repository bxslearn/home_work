<template>
    <div id="topnav" v-show="$store.state.isnavshow" :class="[$store.state.isbg===true?'bg':'topnav']" >
        <div id="navtitle">至屋帮家政服务</div>
        <div id="navitem" :class="[$store.state.isbg===true?'navitems':'navitem']">
            <div @click.stop="changeitem(0)">
                <router-link to="/" :class="{active:$store.state.isselecte===0}">首页</router-link>
            </div>
            <div @click.stop="changeitem(1)" >
                <router-link to="/pservices" :class="{active:$store.state.isselecte===1}">产品服务</router-link>
            </div>
            <div @click.stop="changeitem(2)">
                <router-link to="/examples" :class="{active:$store.state.isselecte===2}">客户案例</router-link></div>
            <div @click.stop="changeitem(3)">
                <router-link to="/member" :class="{active:$store.state.isselecte===3}">会员中心</router-link></div>
            <div @click.stop="changeitem(4)">
                <router-link to="/about"  :class="{active:$store.state.isselecte===4}">关于我们</router-link></div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "topnav",
        data(){
            return{
                isbg:false
            }
        },
        mounted() {
            let h=document.documentElement.scrollTop||document.body.scrollTop||window.pageYOffset
            h>99?this.$store.state.isbg=true:this.$store.state.isbg=false
            window.addEventListener("mousewheel",this.debounce(this.handler,200),true)||window.addEventListener("DOMMouseScroll",this.debounce(this.handler,200),false)
        },
        watch:{
          "$store.state.scrolltops":function (e) {
              console.log(e)
          }
        },
        methods:{
            changeitem(e){
                e===0?this.$store.state.isselecte=0:""
                e===1?this.$store.state.isselecte=1:""
                e===2?this.$store.state.isselecte=2:""
                e===3?this.$store.state.isselecte=3:""
                e===4?this.$store.state.isselecte=4:""
            },
            debounce(fn,delay){
                var timer=null
                return function(){
                    clearTimeout(timer)
                    timer=setTimeout(()=>{
                        fn.apply(this,arguments)
                    },delay)
                }
            },
            handler(event){
                let e=event||window.event
                let h=document.documentElement.scrollTop||document.body.scrollTop||window.pageYOffset
                if (e.wheelDelta) {  //判断浏览器IE，谷歌滑轮事件
                    if (e.wheelDelta > 0&&h>=0) {
                        this.$store.state.isnavshow=true
                    }
                    if (e.wheelDelta < 0&&h>0) {
                        this.$store.state.isnavshow=false
                    }
                } else if (e.detail) {  //Firefox滑轮事件
                    if (e.detail> 0&&h>=0) {
                        this.$store.state.isnavshow=false
                    }
                    if (e.detail< 0&&h>0) {
                        this.$store.state.isnavshow=true
                    }
                }
                if(h>99) {
                    this.$store.state.isbg=true
                }
                else {
                    this.$store.state.isbg=false
                }
            }
        }
    }
</script>

<style scoped>
    a{
        color: #ffffff;
    }
    .bg{
        z-index: 1000;
        position: fixed;
        top: 0;
        left: 0;
        display: flex;
        flex-direction: row;
        width: 100%;
        height: 70px;
        background-color: #ffffff;
        color: black !important;
    }
    .active{
        color: rgba(56, 148, 255, 100) !important;
    }
   .topnav {
    z-index: 1000;
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 70px;
    color: white;
   }
   #navtitle{
       width: 40%;
       display: flex;
       font-size: 28px;
       color: #409EFF;
       align-items: center;
       justify-content: center;
   }
    .navitem{
        cursor: pointer;
        width: 60%;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
        color: #ffffff;
    }
    .navitems{
        cursor: pointer;
        width: 60%;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        align-items: center ;
    }
    .navitems>div>a{
        color: black;
    }
    #navitem div{
        margin-left: 10px;
    }
</style>
