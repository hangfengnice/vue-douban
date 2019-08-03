<template>
<article class="index">
  <div class='movie_input'>
    <img class='movie_img' src="../../assets/images/doubanMovie.png" alt="">
    <Input />
  </div>
  <div class='movie_title'>
    <span v-for='(item, index) of titles' :key='index'>{{item.title}}</span>
  </div>
  <img class='movie_year' src="../../assets/images/movieYear.png" alt="">
</article>
</template>

<script>
import Input from '../../components/login/input'

export default {
name:"movie_arcitle",
components: {
  Input
},
data(){
  return {
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
}
</script>

<style lang='scss' scoped>
.index{
  background-color: rgb(240,243,245);
  padding-bottom: 9px;

  .movie_input{
    display: flex;
    align-items: center;
    margin-top: 10px;
  }
  .movie_img{
    width: 110px;
    height: 26px;
    padding: 15px 50px 20px 10px;
  }
  .movie_title{
    min-width: 700px;
    border-top: 1px solid #ccc;
    padding: 9px 0 0;
    span{
      font-size: 14px;
      color: #47a;
      margin-right: 25px;
    }
    span:first-child{
      margin-left:  10px;
    }
  }
  .movie_year{
    position: fixed;
    height: 96px;
    width: 186px;
    padding-left: 620px;
    top: 36px;
  }
}
</style>