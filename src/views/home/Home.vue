<template>
  <div id="home">
    <div id="top">
    <div id="swiper">
      <el-carousel trigger="click" height="600px">
        <el-carousel-item v-for="item in imgs" :key="item" >
          <img :src="item" style="width: 100%;height: 600px">
        </el-carousel-item>
      </el-carousel>
    </div>
    <div class="swiperteext">
      <div class="stitle">安全稳定企业服务</div>
      <div class="scontent">10年服务经验积累，9种安全保障，8种服务场景，
优质服务值得您信赖</div>
      <div style="cursor: pointer" class="sbtn">了解更多</div>
    </div>
    </div>
    <Homecontent></Homecontent>
    <Homeapply></Homeapply>
    <Homeuse></Homeuse>
  </div>
</template>

<script>
  import Homecontent from "./homecontent";
  import Homeapply from "./homeapply";
  import Homeuse from "./homeuse"
  export default {
    name: 'Home',
    components: {
      Homecontent,
        Homeapply,
        Homeuse
    },
    data(){
      return{
        imgs:[require("../../assets/img/a.png"),require("../../assets/img/b.png"),require("../../assets/img/c.png")]
      }
    }
  }
</script>
<style scoped>
  #home{
    display: flex;
    flex-direction: column;
  }
  #top{
      width: 100%;
      height: 600px;
  }
  #swiper{
    opacity: .9;
    position: absolute;
    top: 0;
    width: 100%;
    height: 600px;
    background-color: #2c3e50;
    z-index: 0;
    left: 0;
  }
  .swiperteext{
    position: absolute;
    display: flex;
    flex-direction: column;
    top: 150px;
    left: 12%;
  }
  .swiperteext div{
    margin-top: 5%;
  }
  .stitle{
    left: 120px;
    top: 275px;
    width: 480px;
    height: 89px;
    color: rgba(255, 255, 255, 100);
    font-size: 60px;
    text-align: left;
    font-family: SourceHanSansSC-regular;
  }
  .scontent{
    left: 120px;
    top: 389px;
    width: 445px;
    height: 63px;
    color: rgba(255, 255, 255, 100);
    font-size: 20px;
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
  }
</style>
