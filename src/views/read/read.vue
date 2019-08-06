<template>
  <div class="index">
    <Header />
    <Article :yearUrl='yearUrl' :imgUrl='imgUrl' :titles='titles' />
    <router-view></router-view>
  </div>
</template>

<script>
import Header from "../../components/childrenHead";
import Article from "../../components/article";

export default {
  name: "movie",
  components: {
    Header,
    Article
  },
  data(){
    return {
      yearUrl: require('../../assets/images/douban/readYear.png'),
      imgUrl: require('../../assets/images/douban/doubanRead.png'),
      titles: [
        {
          title: "购书单"
        },
        {
          title: "电子图书"
        },
        {
          title: "豆瓣书店"
        },
        {
          title: "2018年度榜单"
        },
        {
          title: "2018书影音报告"
        },
        {
          title: "购物车"
        }
      ]
    }
  }
};
</script>

<style lang='scss' scoped>
.index{
  width: 100%;
}
</style>