<template>
<div class='movie_container' @click='onMovieTap'>
  <img class='movie_img' src='movie.coverageUrl' />
  <text class='movie_title'>{{movie.title}}</text>
  <v-star :score="movie.average" :star='movie.star'></v-star>
</div>
</template>

<script>

export default {
name:"index",
methods: {
  onMovieTap(){

  }
}
}
</script>

<style lang='scss' scoped>
.movie_container{
  display: flex;
  flex-direction: column;
  padding: 0 22px;
}

.movie_img{
  width: 200px;
  height: 270px;
  padding-bottom: 20px;
}

.movie_title{
  margin-bottom: 16px;
  font-size: 24px;
}

</style>