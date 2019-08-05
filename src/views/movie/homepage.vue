<template>
  <div class="index">
    <MovieList class='movieList' :movies='top250'/>
   </div>
</template>

<script>
import {movieTop5} from '../../assets/data/movie/movie'
import {converToStarsArray} from '../../utils/utils'
import MovieList from '../../components/movie/movieList'

export default {
name:"movieHomepage",
components: {
  MovieList
},
data(){
  return {
    top250: {}
  }
},
created(){
this.processDoubanData(movieTop5)
},
methods: {
  processDoubanData(data){
    console.log(data)
    var movies = []
    for(var idx in data.subjects){
      var subject = data.subjects[idx]
      var title = subject.title
      if(title.length >= 6){
        title = title.substring(0, 6) + '...'
      }
      var temp = {
        stars: converToStarsArray(subject.rating.stars),
        title,
        average: subject.rating.average,
        coverageUrl: subject.images.small,
        id: subject.id
      }
      movies.push(temp)
    }
    this.top250= {
      movies,
      category : data.title
    }
  }
}
}
</script>

<style lang='scss' scoped>
.index{
  width: 1040px;
  margin: 0 auto;
}
.movieList{
  margin-top: 40px;
}
</style>