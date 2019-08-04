<template>
  <div class="index" ref='movie'>
    <MovieGrid :movies="movies" />
  </div>
</template>

<script>
import {
  http,
  converToStarsArray,
  converTocastString,
  convertToCastInfos
} from "../../utils/utils";

import MovieGrid from "../../components/movie/movieGrid";

export default {
  name: "moreMovie",
  data() {
    return {
      movies: [],
      dataUrl: "",
      totalCount: 0,
      isEmpty: true
    };
  },
  components: {
    MovieGrid
  },
  created() {
    const title = this.$route.params.title;
    var dataUrl = "";
    switch (title) {
      case "正在上映的电影-北京":
        dataUrl = "/api" + "/movie/in_theaters";
        break;
      case "即将上映的电影":
        dataUrl = "/api" + "/movie/top250";
        break;
      case "豆瓣电影Top250":
        dataUrl = "/api" + "/movie/coming_soon";
        break;
      default:
        break;
    }
    this.dataUrl = dataUrl
    http(dataUrl, this.processDoubanData);
  },
  methods: {
    processDoubanData(data) {
      console.log(data);
      var movies = [];
      for (var idx in data.subjects) {
        var subject = data.subjects[idx];
        var title = subject.title;
        if (title.length >= 6) {
          title = title.substring(0, 6) + "...";
        }
        var temp = {
          stars: converToStarsArray(subject.rating.stars),
          title,
          average: subject.rating.average,
          coverageUrl: subject.images.small,
          id: subject.id
        };
        movies.push(temp);
      }
      var totalMovies = {}
    if(!this.isEmpty){
      totalMovies = this.movies.concat(movies)
    }else{
      totalMovies = movies
      this.isEmpty = false
    }

      this.movies = totalMovies
      this.totalCount = this.totalCount + 20

    },
    handleScroll() {
      let clientHeight = document.documentElement.clientHeight;
      let clientBottom =
        this.$refs.movie && this.$refs.movie.getBoundingClientRect().bottom;
      if (clientBottom == clientHeight) {
         var nextUrl = this.dataUrl + "?start=" + this.totalCount + '&count=20';
         http(nextUrl, this.processDoubanData);
      }
      // let clientTop = this.$refs.movie && this.$refs.movie.getBoundingClientRect().top;
      // // console.log(clientTop)
      // if(clientTop > 50){
      //   console.log('top')
      // }
    }
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },

  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
  }
};
</script>

<style lang='scss' scoped>
</style>