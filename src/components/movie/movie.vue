<template>
<div class='movie_container' @click='onMovieTap'>
  <img class='movie_img' :src="movie.coverageUrl" />
  <span class='movie_title'>{{movie.title}}</span>
  <Stars :stars='movie.stars' :average='movie.average'></Stars>
  <button>选座购票</button>
</div>
</template>

<script>
import Stars from './stars'

export default {

name:"index",
props: {
  movie: Object
},
created(){
console.log(this.movie)
},
methods: {
  onMovieTap(){
  }
},
components: {
  Stars
}
}
</script>

<style lang='scss' scoped>
.movie_container{
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
  button{
    outline: none;
    border: none;
    width: 90px;
    height: 24px;
    margin: 14px 12.5px 0;
    background-color: rgb(42, 129, 206);
    color:#fff;
    border-radius: 4px;
  }
}

.movie_img{
  width: 115px;
  height: 163px;
  padding-bottom: 10px;
}

.movie_title{
  font-size: 14px;
  margin-bottom: 8px;
}



</style>