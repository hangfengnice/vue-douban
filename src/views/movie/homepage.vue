<template>
  <div class="index">
    <MovieList class='movieList' :movies='comingSoon'/>
    <MovieList class='movieList' :movies='top250'/>
    <MovieList class='movieList' :movies='inTheaters'/>
   </div>
</template>

<script>
import {coming} from '../../assets/data/comming_soon'
import {top250} from '../../assets/data/top30 '
import {intheaters} from '../../assets/data/in_theaters'
import {converToStarsArray} from '../../utils/utils'
import MovieList from '../../components/movie/movieList'

export default {
name:"movieHomepage",
components: {
  MovieList
},
data(){
  return {
    inTheaters: {},
    comingSoon: {},
    top250: {}
  }
},
created(){
this.$axios('/api/movie/in_theaters?city=杭州&count=5').then(res => {
this.processDoubanData(res.data, 'inTheaters')
})
this.$axios('/api//movie/top250?start=0&count=5').then(res => {
this.processDoubanData(res.data, 'top250')
})
this.$axios('/api/movie/coming_soon?start=0&count=5').then(res => {
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
    this[setKey] = {
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