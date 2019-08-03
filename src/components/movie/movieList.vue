<template>
<div class="movie_list_container">
  <div class="inner_container">
    <div class="movie_head">
      <span class="solgan">{{movies.title}}</span>
      <div catch:tap='onMoretap' class="more" data="movies.title">
        <span  class="more_span">更多</span>
        <img class="more_img" src="/imgs/icon/arrow-right.png" />
      </div>
    </div>x
  </div>

  <div class="moives_container">
        <!-- <Movie v-for='(item,index) of movies.movies' :key='index'  movie='item'></Movie> -->
  </div>
 
</div>

</template>

<script>
import Movie from './movie'

export default {
name:"index",
props: {
  movies: Array
},
componnets: {
  Movie
}
}
</script>

<style lang='scss' scoped>
.moive_list_container{
  background-color: #fff;
  display: flex;
  flex-direction: column;
}


.inner_container{
  padding: 20px;
}

.movie_head{
  padding: 30px 20px 22px;
}

.solgan{
  font-size: 24px;
}

.more{
  float: right;
}

.more_text{
  vertical-align: middle;
  margin-right: 10px;
}

.more_img{
  width: 9px;
  height:  16px;
  vertical-align: middle;
}

.moives_container{
  display: flex;
  flex-direction: row;
}

</style>