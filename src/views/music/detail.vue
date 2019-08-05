<template>
  <div class="detail_wrapper">
    <h1 class="detail_title">{{music.title}}</h1>
    <div class="detail_wrap">
      <!-- 左边 -->
      <div class="detail_left">
        <div class="music_star">
          <div class="music">
            <img :src="music.image" alt />
            <div class="author">
              <span>
                表演者:
                <span>{{music.author}}</span>
              </span>
              <span>
                流派:
                <span>{{music.liupai}}</span>
              </span>
              <span>
                专辑类型:
                <span>{{music.origin_title}}</span>
              </span>
              <span>
                介质:
                <a href="#">{{music.media}}</a>
              </span>
              <span>
                发行时间:
                <span>{{music.pubdate}}</span>
              </span>
              <span>
                出版者:
                <span>{{music.publisher}}</span>
              </span>
              <span>
                唱片数:
                <span>{{music.disc}}</span>
              </span>
            </div>
          </div>
          <DoubanRate :book="musicRate" />
        </div>
        <InsertRateStar />
        <WriteShare :contentIcon="musicWrap" />
        <SummaryAuthorContent :wrap="content" />
        <Tracks :tracks="tracks" />
      </div>
    <!-- 右边 -->
      <div class="detail_right">
        <CommonTags :tags="tags" />
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import {
  http,
  converTocastString,
  convertToCastInfos
} from "../../utils/utils";
import DoubanRate from "../../components/detailPage/doubanRate";
import InsertRateStar from "../../components/detailPage/insertRateStar";
import WriteShare from "../../components/detailPage/writeShare";
import SummaryAuthorContent from "../../components/detailPage/summaryAuthorContent";
import CommonTags from "../../components/detailPage/commonTags";
import Tracks from "../../components/detailPage/tracks";
import Footer from "../../components/detailPage/footer";

export default {
  name: "movieDetail",
  data() {
    return {
      music: {},
      musicRate: {},
      content: {},
      author: {},
      tags: [],
      comments: [],
      commentsSticky: [],
      tracks: [],
      musicWrap: [
        {
          content: "写短评",
          icon: 'icon-xiaoxi'
        },
        {
          content: "写乐评",
          icon: 'icon-pencil'
        },
         {
          content: "加入豆列",
          icon: 'icon-jiahao'
        },
        {
          content: "分享到",
          icon: 'icon-f11'
        }
      ]
    };
  },
  components: {
    DoubanRate,
    InsertRateStar,
    WriteShare,
    SummaryAuthorContent,
    CommonTags,
    Footer,
    Tracks
  },
  created() {
    const id = this.$route.params.id;
    const url = "/api/music/" + id;
    http(url, this.processDoubanData);
  },
  methods: {
    processDoubanData(data) {
      console.log(data);
      if (!data) {
        return;
      }
      let tags = []
      const len = data.tags.length;
      for (var i = 0; i < len; i++) {
        tags.push(data.tags[i].name);
      }
      this.music = {
        author: data.author && data.author[0].name,
        publisher: data.attrs && data.attrs.publisher[0],
        alt_title: data.alt_title,
        image: data.image,
        liupai: data.attrs && data.attrs.title[0],
        media: data.attrs && data.attrs.media[0],
        pubdate: data.attrs && data.attrs.pubdate[0],
        disc: data.attrs && data.attrs.discs[0]
      };
      this.musicRate = {
        average: data.rating.average,
        numRaters: data.rating.numRaters,
        score: Number(data.rating.average / 2)
      };
      this.content = {
        title: "内容简介",
        summary: data.summary
      };
      this.author = { title: "作者简介" };
      this.tracks = data.attrs.tracks[0].split("\n");
      this.tags = tags
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
      width: 675px;
      box-sizing: border-box;
      .music_star {
        display: flex;
        margin: 0 0 15px;
        justify-content: space-between;
        .music {
          display: flex;
          img {
            width: 135px;
            height: 135px;
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
      }
    }

    .detail_right {
      width: 300px;

    }
  }
}
</style>
