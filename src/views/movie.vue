<template>
  <div class="index">
    <Header />
    <Article />
    <MovieList :movies='movies'/>
    <img src="https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2563780504.jpg" alt="">
   </div>
</template>

<script>
import Header from '../components/movie/header'
import Article from '../components/movie/article'
import MovieList from '../components/movie/movieList'

export default {
name:"movie",
components: {
  Header,
  Article,
  MovieList
},
data(){
  return {
    movies: []
  }
},
created(){
 this.$axios.get('/movie/in_theaters').then(
   res => {
     console.log(res)
     this.movies = res.data.subjects
   }
 )
}
}
</script>

<style lang='scss' scoped>

</style>