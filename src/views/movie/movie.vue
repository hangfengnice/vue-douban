<template>
  <div class="index">
    <Header />
    <Article :titles='titles' :yearUrl='yearUrl' :imgUrl='imgUrl' />
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
      yearUrl: require('../../assets/images/douban/movieYear.png'),
      imgUrl: require('../../assets/images/douban/doubanMovie.png'),
      titles: [
        {
          title: "影讯&购票"
        },
        {
          title: "选电影"
        },
        {
          title: "电视剧"
        },
        {
          title: "排行榜"
        },
        {
          title: "分类"
        },
        {
          title: "影评"
        },
        {
          title: "2018年度榜单"
        },
        {
          title: "2018书影音报告"
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