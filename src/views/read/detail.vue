<template>
  <div class="detail_wrapper">
    <h1 class="detail_title">{{book.title}}</h1>
    <div class="detail_wrap">
      <!-- 左边 -->
      <div class="detail_left">
        <div class="book_star">
          <div class="book">
            <img :src="book.img" alt />
            <div class="author">
              <span>
                作者:
                <a href="#">{{book.author}}</a>
              </span>
              <span>
                出版社:
                <span>{{book.publisher}}</span>
              </span>
              <span>
                副标题:
                <span>{{book.subtitle}}</span>
              </span>
              <span>
                原作名:
                <span>{{book.origin_title}}</span>
              </span>
              <span>
                译者:
                <a href="#">{{book.translator}}</a>
              </span>
              <span>
                出版年:
                <span>{{book.pubdate}}</span>
              </span>
              <span>
                页数:
                <span>{{book.pages}}</span>
              </span>
              <span>
                定价:
                <span>{{book.price}}</span>
              </span>
              <span>
                装帧:
                <span>{{book.binding}}</span>
              </span>
              <span>
                丛书:
                <a href="#">{{book.series && book.series.title}}</a>
              </span>
              <span>
                ISBN:
                <span>{{book.isbn13}}</span>
              </span>
            </div>
          </div>

          <div class="star">
            <span class="star_rate">豆瓣评分</span>
            <div class="rate_star_review">
              <strong>{{book.rating && book.rating.average}}</strong>
              <div class="star_review">
                <Stars :stars="book.stars" />
                <span>{{book.rating && book.rating.numRaters}}人评价</span>
              </div>
            </div>
            <Rating v-for="(item, index) of rating" :key="index" :rate="item" />
          </div>
        </div>

        <div class="insert_rate_star">
          <button>想读</button>
          <button>在读</button>
          <button>读过</button>
          <div class="el_rate">
            <span>评价:</span>
            <el-rate :texts="texts" show-text></el-rate>
          </div>
        </div>

        <div class="write_share">
          <div class="write_share_left">
            <i class="iconfont icon-pencil"></i>
            <span>写笔记</span>
            <i class="iconfont icon-pencil"></i>
            <span>写书评</span>
            <i class="iconfont icon-renminbi"></i>
            <span>加入购书单</span>
            <span>分享到</span>
            <i class="iconfont icon-f11"></i>
          </div>
          <button>推荐</button>
        </div>
      </div>

      <div class="detail_right"></div>
    </div>
  </div>
</template>

<script>
import {
  converToStarsArray,
  http,
  converTocastString,
  convertToCastInfos
} from "../../utils/utils";
import Stars from "../../components/movie/stars";
import Rating from "../../components/read/rate";

export default {
  name: "movieDetail",
  data() {
    return {
      book: {},
      rating: [
        {
          title: "5星",
          meter: 66,
          chance: "66.1"
        },
        {
          title: "4星",
          meter: 27,
          chance: "27.4"
        },
        {
          title: "3星",
          meter: 6,
          chance: "5.9"
        },
        {
          title: "2星",
          meter: 0,
          chance: "0.4"
        },
        {
          title: "1星",
          meter: 0,
          chance: "0.2"
        }
      ],
      texts: ["很差", "较差", "还行", "推荐", "力荐"]
    };
  },
  components: {
    Stars,
    Rating
  },
  created() {
    const id = this.$route.params.id;
    const url = "/api/book/" + id;
    http(url, this.processDoubanData);
  },
  methods: {
    processDoubanData(data) {
      console.log(data);
      if (!data) {
        return;
      }
      data.author = data.author[0];
      data.img = data.images.small;
      let tags = [];
      const len = data.tags.length;
      for (var i = 0; i < len; i++) {
        tags.push(data.tags[i].name);
      }
      data.tags = tags;
      const starNum = data.rating.average / 2;
      data.stars = converToStarsArray(starNum);
      data.translator = data.translator[0];
      console.log(data);
      this.book = data;
    }
  }
};
</script>

<style lang="scss" scoped>
.detail_wrapper {
  width: 1040px;
  padding: 30px 10px 0;
  margin: 0 auto;
  .detail_title {
    padding: 0 0 15px;
    font-size: 26px;
    color: #494949;
    font-weight: bold;
  }
  .detail_wrap {
    display: flex;
    justify-content: space-between;
    .detail_left {
      min-width: 675px;
      .book_star {
        display: flex;
        margin: 0 0 15px;
        justify-content: space-between;
        .book {
          display: flex;
          img {
            width: 135px;
            height: 170px;
            margin: 0 0 10px;
          }
          .author {
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            margin-left: 16px;
            span {
              font: 12px Arial, Helvetica, sans-serif;
              font-weight: 500;
              color: #666;
              line-height: 160%;
              span {
                color: #111;
                font-weight: 500;
              }
              a {
                text-decoration: none;
                font: Helvetica;
                color: #37a;
              }
            }
          }
        }
        .star {
          margin: 2px 0 0;
          padding: 0 0 0 15px;
          .star_rate {
            font-size: 12px;
            color: #9b9b9b;
          }
          .rate_star_review {
            padding: 10px 0;
            display: flex;
            strong {
              color: #494949;
              min-width: 30%;
              font-size: 28px;
              margin-right: 8px;
            }
            .star_review {
              display: flex;
              flex-direction: column;
              justify-content: flex-start;
              span {
                color: #37a;
                margin-top: 8px;
                font-size: 12px;
              }
            }
          }
        }
      }
      .insert_rate_star {
        display: flex;
        padding: 20px 0 3px;
        button {
          height: 24px;
          padding-right: 7px;
          font: normal 12px sans-serif;
          margin-right: 10px;
          color: #111;
          cursor: pointer;
          border-radius: 4px;
          background-color: rgb(249, 238, 212);
        }
        .el_rate {
          display: flex;
          align-items: center;
          span {
            font-size: 13px;
            padding-right: 6px;
          }
        }
      }
      .write_share {
        display: flex;
        justify-content: space-between;
        font-size: 11px;
        .write_share_left {
          display: flex;
          align-items: flex-end;
          i {
            font-size: 11px;
            color: #ccc;
          }
          i:last-child {
            margin-left: -8px;
            font-size: 16px;
          }
          span {
            padding: 0 8px 0 3px;
            font-size: 13px;
            color: #37a;
          }
        }

        button {
          color: #4f946e;
          background-color: #f2f8f2;
          padding: 0 8px;
          border-radius: 3px;
          border: 1px solid #e3f1ed;
        }
        button:hover {
          border-color: #b9dcd0;
        }
      }
    }

    .detail_right {
      min-width: 300px;
    }
  }
}
</style>
