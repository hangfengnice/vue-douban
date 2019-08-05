<template>
  <div class="index">
    <Header />
    <Article :yearUrl="yearUrl" :imgUrl="imgUrl" :titles="titles" />
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
  data() {
    return {
      yearUrl: require("../../assets/images/douban/musicYear.png"),
      imgUrl: require("../../assets/images/douban/doubanMusic.png"),
      titles: [
        {
          title: "音乐人"
        },
        {
          title: "潮潮豆瓣音乐周"
        },
        {
          title: "金羊毛计划"
        },
        {
          title: "专题"
        },
        {
          title: "排行榜"
        },
        {
          title: "分类浏览"
        },
        {
          title: "乐评"
        },
        {
          title: "豆瓣FM"
        },
        {
          title: "歌单"
        },
        {
          title: "2018年度榜单"
        },
        {
          title: "阿比鹿音乐节"
        }
      ]
    };
  }
};
</script>

<style lang='scss' scoped>
.index {
  width: 100%;
}
</style>