<template>
<div class="movie_list_container">
  <div class="inner_container">
    <div class="movie_head">
      <span class="solgan">{{movies.category}}</span>
      <div @click.stop="OnMoreMovie"  class="more" data="movies.title">
        <span class="more_span">更多</span>
        <img class="more_img" src="../../assets/images/icon/arrow-right.png" />
      </div>
    </div>
  </div>

  <div class="moives_container">
      <Movie v-for='(item, index) of movies.movies' :key='index' :movie='item'></Movie>
  </div>
 
</div>

</template>

<script>
import Movie from './movie'

export default {
name:"index",
props: {
  movies: Object
},
components: {
  Movie
},
methods: {
  OnMoreMovie(){
    this.$notify.warning({
      title: "温馨提示",
      message: '非常抱歉,由于接口的问题,该功能尚未实现',
      duration: 2500
    })
  }
},
created(){
  console.log(this.movies)
}
}
</script>

<style lang='scss' scoped>
.movie_list_container{
  background-color: #fff;
  display: flex;
  flex-direction: column;
  width: 675px;
}

.inner_container{
  padding-bottom: 8px;
  margin-bottom: 10px;
}
.movie_head{
  display: flex;
  justify-content: space-between;
}

.solgan{
  font-size: 16px;
  margin-left: 16px;
}

.more{
  font-size: 13px;
}

.more_text{
  vertical-align: middle;
  margin-right: 10px;
}
.more_img{
  padding-left: 8px;
  width: 9px;
  height:  12px;
}
.moives_container{
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  flex-wrap: wrap;
}

</style>