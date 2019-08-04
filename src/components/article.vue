<template>
  <article class="index">
    <div class="wrap">
      <div class="movie_input" >
        <img @click='moveToHomepage'  class="movie_img" :src="imgUrl" alt />
        <Input />
      </div>
      <div class="movie_title">
        <span v-for="(item, index) of titles" :key="index">{{item.title}}</span>
      </div>
      <img class="movie_year" :src="yearUrl" alt />
    </div>
  </article>
</template>

<script>
import Input from "./login/input";

export default {
  name: "movie_arcitle",
  props: {
    titles: Array,
    imgUrl: String,
    yearUrl: String
  },
  components: {
    Input
  },
  data() {
    return {
      
    };
  },
  methods: {
    moveToHomepage(){
      this.$router.push('/movie')
    }
  }
};
</script>

<style lang='scss' scoped>
.index {
  background-color: rgb(240, 243, 245);
  width: 100%;
  .wrap {
    min-width: 900px;
    width: 1040px;
    margin: -9px auto 0;
  }
  .movie_input {
    display: flex;
    align-items: center;
    margin-top: 10px;
  }
  .movie_img {
    z-index: 1;
    width: 110px;
    height: 26px;
    padding: 15px 50px 20px 10px;
  }
  .movie_title {
    min-width: 700px;
    border-top: 1px solid #ccc;
    padding: 9px 0 0;
    span {
      font-size: 14px;
      color: #47a;
      margin-right: 25px;
    }
    span:first-child {
      margin-left: 10px;
    }
  }
  .movie_year {
    height: 96px;
    width: 186px;
    padding-left: 620px;
    margin-top: -96px;
  }
}
</style>