<template>
  <div class="whereBuy">
    <div class="top">
      <span class="title">电子版有售 ······</span>
      <div class="shopstyle">
        <span>豆瓣阅读</span>
        <span class="price">44.50元</span>
      </div>
      <div class="shopstyle">
        <span>Kindle 电子书</span>
        <span class="price">44.50元</span>
      </div>
    </div>

    <div class="bottom">
      <span class="title">在哪儿买这本书 ······</span>
      <p>购买全新书</p>
      <div class="shopstyle jingdong">
        <span>京东商城</span>
        <span class="price">44.50元</span>
      </div>

      <div class="shopstyle">
        <span>当当网</span>
        <span class="price">44.50元</span>
      </div>
      <p>图书加价购</p>
      <div class="shopstyle chinaShop">
        <span>中国图书网</span>
        <span class="price">60.50元</span>
      </div>
      <p class="internetprice">
        <span>>查看3家网店价格</span></p>
      <p class="internetprice"><span>+加入购书单</span></p>
    </div>
  </div>
</template>

<script>
export default {
  name: "whereBuy"
};
</script>

<style lang='scss' scoped>
.whereBuy {
  padding: 30px 20px 25px;
  background-color: #f6f6f1;
  margin-bottom: 20px;
  .top {
    border-bottom: 1px solid #ccc;
  }
  .title {
    font-size: 15px;
    color: #072;
    margin-bottom: 6px;
  }
  .shopstyle {
    color: #37a;
    font-size: 13px;
    position: relative;
    padding: 10px 0;

    .price {
      position: absolute;
      right: 60px;
    }
  }
  .shopstyle:hover > span{
    color: #fff;
    background-color: #37a;
  }
  .jingdong {
    border-bottom: 1px solid #ccc;
  }
  .chinaShop {
    border-top: 1px solid #ccc;
    border-bottom: 1px solid #ccc;
  }
  .bottom {
    margin-top: 12px;
    p {
      color: #999;
      font-size: 13px;
    }
    .internetprice {
      font-size: 13px;
      color: #37a;
      padding: 5px 0;
    }
    .internetprice:hover > span {
      color: #fff;
      background-color: #37a;
    }
  }

}
</style>