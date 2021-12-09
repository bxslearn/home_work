<template>
  <div id="about">
    <div class="aimg"></div>
    <div class="gsjsall">
      <div class="gsjs">公司介绍</div>
      <div class="gsnr">
        <span>fdasfdsaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaafdsa
        dsfdsafaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaagrsssssssssssssssssssssss
        fgfdagafdgafdgafdgdfagbdanfhmnzngdhdfhgd
        gdfagfdagadfga</span>
      </div>
      <div class="gsimg">
        <img src="../../assets/img/a.png">
        <img src="../../assets/img/b.png">
      </div>
    </div>
    <div class="ppln">
      <div class="ppnr">品牌理念</div>
      <div class="pptext">
        XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
        XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
        XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
      </div>
      <div class="ppimg">
        <img src="../../assets/img/a.png">
        <img src="../../assets/img/a.png">
        <img src="../../assets/img/a.png">
      </div>
    </div>
    <div class="jyln">
      <div class="jywb">
        <div class="jytext">经营理念</div>
        <div class="jywz">
          <span>
            XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
            XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX

            XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
            XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
            XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
            XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
          </span>
        </div>
      </div>
      <div class="jyimg">
        <img style="width: 100%;height: 400px" src="../../assets/img/a.png">
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name:"About"
  }
</script>
<style scoped>
  .jyimg{
    width: 35%;
    margin-left: 5%;
    margin-right: 10%;
  }
  .jywz{
    margin-top: 3%;
    width: 100%;
    height: auto;
    white-space: normal !important;
    background-color: #409EFF;
    color: rgba(174, 174, 174, 100);
    font-size: 18px;
    text-align: left;
    font-family: SourceHanSansSC-regular;
  }
  .jywb{
    width: 40%;
    margin-left: 10%;
  }
  .jytext{
    width: 40%;
    color: rgba(16, 16, 16, 100);
    font-size: 28px;
    text-align: left;
    font-family: SourceHanSansSC-regular;
  }
  .jyln{
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: row;
    padding-bottom: 5%;
    padding-top: 5%;
  }
  /*=-------------------------------------------------------------------*/
  .ppimg{
    padding-top: 3%;
    margin-left: 10%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 80%;
    height: auto;
  }
  .ppimg img{
    width: 300px;
    height: 200px;
  }
  .pptext{
    width: 80%;
    height: auto;
    margin-left: 10%;
    padding-top: 5%;
    color: rgba(174, 174, 174, 100);
    font-size: 18px;
    text-align: left;
    font-family: SourceHanSansSC-regular;
  }
  .ppnr{
    padding-top: 5%;
    width: 80%;
    margin-left: 10%;
    color: rgba(16, 16, 16, 100);
    font-size: 28px;
    text-align: left;
    font-family: SourceHanSansSC-regular;
  }
  .ppln{
    width: 100%;
    height: auto;
    background-color: #F2F2F2;
    padding-bottom: 5%;
  }
  /*--------------------------------------------------------*/
  .gsjsall{
    padding-bottom: 5%;
  }
  .gsnr{
    margin-top: 3%;
    width: 80%;
    height: auto;
    margin-left: 10%;
    color: rgba(174, 174, 174, 100);
    font-size: 18px;
    text-align: left;
    font-family: SourceHanSansSC-regular;
    padding-bottom: 5%;
  }
  .gsimg{
    width: 80%;
    margin-left: 10%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  .gsimg img{
    width: 48%;
    height: 300px;
  }
  .gsjs{
    margin-top: 5%;
    width: 100%;
    color: rgba(16, 16, 16, 100);
    font-size: 36px;
    text-align: center;
    font-family: SourceHanSansSC-regular;
  }
  .aimg{
    width: 100%;
    height: 450px;
    background-image: url("../../assets/img/a.png");
  }
  #about{
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
  }
</style>
