<template>
  <div class="index">
    <Header />
    <Article />
    <MovieList class='movieList' :movies='inTheaters'/>
    <MovieList class='movieList' :movies='comingSoon'/>
    <MovieList class='movieList' :movies='top250'/>
   </div>
</template>

<script>
import {coming} from '../assets/data/comming_soon'
import {top250} from '../assets/data/top30 '
import {intheaters} from '../assets/data/in_theaters'
import Header from '../components/movie/header'
import Article from '../components/movie/article'
import MovieList from '../components/movie/movieList'
import {converToStarsArray} from '../utils/utils'

export default {
name:"movie",
components: {
  Header,
  Article,
  MovieList
},
data(){
  return {
    inTheaters: [],
    comingSoon: [],
    top250: []
  }
},
created(){
this.$axios('/api/movie/in_theaters').then(res => {
  console.log(res.data)
this.processDoubanData(res.data, 'inTheaters')
})
this.$axios('/api//movie/top250').then(res => {
this.processDoubanData(res.data, 'top250')
})
this.$axios('/api/movie/coming_soon').then(res => {
this.processDoubanData(res.data, 'comingSoon')
})

},
methods: {
  processDoubanData(data, setKey){
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
    this[setKey] = movies
  }
}
}
</script>

<style lang='scss' scoped>
.movieList{
  margin-top: 40px;
}
</style>