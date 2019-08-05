<template>
  <div class="index">
    <div class="container">
      <img class="head-img" :src="movie.movieImg" />
      <div class="head-img-hover">
        <span class="main-title">{{movie.title}}</span>
        <span class="sub-title">{{movie.country+ " · " + movie.year}}</span>
        <div class="like">
          <span class="hightlight-font">{{movie.wishCount}}</span>
          <span class="plain-font">人喜欢</span>
          <span class="hightlight-font">{{movie.commentCount}}</span>
          <span class="plain-font">条评论</span>
        </div>
      </div>

      <img class="movie-img" catchtap="divMoviePostImg" :src="movie.movieImg" />

      <!-- summary -->
      <div class="summary">
        <div class="original-title">
          <span>{{movie.originalTitle}}</span>
        </div>
        <div class="flex-row">
          <span class="mark">评分</span>
          <Star :average="movie.score" :stars="movie.stars" />
        </div>
        <div class="flex-row">
          <span class="mark">导演</span>
          <span>{{ movie.director && movie.director.name}}</span>
        </div>
        <div class="flex-row">
          <span class="mark">影人</span>
          <span>{{movie.casts}}</span>
        </div>
        <div class="flex-row">
          <span class="mark">类型</span>
          <span>{{movie.generes}}</span>
        </div>
      </div>
      <!-- line -->
      <div class="hr"></div>
      <!-- 剧情简介 -->
      <div class="synopsis">
        <span class="synopsis-font">剧情简介</span>
        <span class="summary-content">{{movie.summary}}</span>
      </div>
      <!-- line -->
      <div class="hr"></div>
      <!-- cast 演员表 -->
      <div class="cast">
        <span class="cast-font">影人</span>
        <div class="cast-container">
          <div class="cast_imgs" v-for="(item, index) of movie.castsInfo" :key="index">
            <img class="cast-img" :src="item.img" />
            <span class="cast-name">{{item.name}}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { movieDetail5 } from "../../assets/data/movie/detail";
import {
  converToStarsArray,
  http,
  converTocastString,
  convertToCastInfos
} from "../../utils/utils";
import Star from "../../components/movie/stars";

export default {
  name: "movieDetail",
  data() {
    return {
      movie: {}
    };
  },
  components: {
    Star
  },
  created() {
    const id = this.$route.params.id;
    this.processDoubanData(movieDetail5[id]);
  },
  methods: {
    processDoubanData(data) {
      console.log(data);
      if (!data) {
        return;
      }
      var director = {
        avatar: "",
        name: "",
        id: ""
      };
      if (data.directors && data.directors[0] != null) {
        if (data.directors[0].avatars != null) {
          director.avatar = data.directors[0].avatars.large;
        }
        director.name = data.directors[0].name;
        director.id = data.directors[0].id;
      }
      var movie = {
        movieImg: data.images ? data.images.large : "",
        country: data.countries[0],
        title: data.title,
        originalTitle: data.original_title,
        wishCount: data.wish_count,
        commentCount: data.comments_count,
        year: data.year,
        generes: data.genres.join("、"),
        stars: converToStarsArray(data.rating.stars),
        score: data.rating.average,
        director: director,
        casts: converTocastString(data.casts),
        castsInfo: convertToCastInfos(data.casts),
        summary: data.summary
      };
      // this.cb(movie)
      console.log(movie);
      this.movie = movie;
    }
  }
};
</script>

<style lang='scss' scoped>
.index {
  padding: 26px 0 0 70px;
}
.container {
  width: 675px;
  display: flex;
  flex-direction: column;
  position: relative;
}

.head-img {
  width: 100%;
  height: 240px;
  filter: blur(2px);
}

.head-img-hover {
  width: 100%;
  height: 240px;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
}

.main-title {
  font-size: 26px;
  color: #fff;
  font-weight: bold;
  margin-top: 50px;
  margin-left: 40px;
  letter-spacing: 2px;
}

.sub-title {
  font-size: 18px;
  color: #fff;
  margin-top: 40px;
  margin-left: 40px;
}

.like {
  display: flex;
  flex-direction: row;
  margin-top: 30px;
  margin-left: 40px;
}

.hightlight-font {
  color: #f21146;
  font-size: 22px;
  margin-right: 10px;
}

.plain-font {
  color: #666;
  font-size: 22px;
  margin-right: 30px;
}

.movie-img {
  height: 200px;
  width: 140px;
  position: absolute;
  top: 160px;
  right: 30px;
}

/* summary */

.summary {
  margin-left: 40px;
  margin-top: 40px;
  color: #777;
}

.original-title {
  color: #1f3463;
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 40px;
}

.flex-row {
  display: flex;
  flex-direction: row;
  margin-bottom: 10px;
}

.mark {
  margin-right: 30px;
  white-space: nowrap;
  color: #999;
}

.hr {
  margin-top: 45px;
  height: 1px;
  width: 750px;
  background-color: #d9d9d9;
}

/* synopsis */

.synopsis {
  margin-left: 40px;
  display: flex;
  flex-direction: column;
  margin-top: 50px;
}

.synopsis-font {
  color: #999;
}

.summary-content {
  margin-top: 20px;
  margin-right: 40px;
  line-height: 40px;
  letter-spacing: 1px;
}

/* cast */

.cast {
  margin-left: 40px;
  display: flex;
  flex-direction: column;
  margin-top: 50px;
}

.cast-font {
  color: rgb(197, 21, 21);
  margin-bottom: 40px;
}

.cast-container {
  display: inline-flex;
  margin-bottom: 50px;
  margin-right: 20px;
  width: 170px;
  text-align: center;
  white-space: normal;
}

.cast_imgs {
  margin-right: 20px;
}
.cast-img {
  width: 170px;
  height: 210px;
}

.cast-name {
  margin: 10px auto 0;
  word-break: break-all;
}
</style>