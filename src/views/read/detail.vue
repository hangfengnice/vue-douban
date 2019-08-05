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
          <DoubanRate :book="bookRate" />
        </div>
        <InsertRateStar />
        <WriteShare :contentIcon='bookWrap' />
        <SummaryAuthorContent :wrap="content" />
        <ReadOnline />
        <SummaryAuthorContent :wrap="author" />
        <SummaryAuthorContent :wrap="category" />
        <CommonTags :tags="tags" />
        <CommentChat v-for="(item, index) of comments" :comment="item" :key="index" />
      </div>
      <!-- 右边 -->
      <div class="detail_right">
        <WhereBuy />
        <WhoRead :commentsSticky='commentsSticky'/>
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
import ReadOnline from "../../components/detailPage/readOnline";
import CommonTags from "../../components/detailPage/commonTags";
import CommentChat from "../../components/detailPage/commonChat/commentsChat";
import Footer from "../../components/detailPage/footer";
import WhereBuy from "../../components/detailPage/right/whereBuy";
import WhoRead from "../../components/detailPage/right/whoRead";

export default {
  name: "movieDetail",
  data() {
    return {
      book: {},
      bookRate: {},
      content: {},
      author: {},
      category: {},
      tags: [],
      comments: [],
      commentsSticky: [],
      bookWrap: [
        {
          content: "写笔记",
          icon: 'icon-pencil'
        },
        {
          content: "写书评",
          icon: 'icon-pencil'
        },
         {
          content: "加入购书单",
          icon: 'icon-renminbi'
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
    ReadOnline,
    CommonTags,
    CommentChat,
    Footer,
    WhereBuy,
    WhoRead
  },
  created() {
    const id = this.$route.params.id;
    const url = "/api/book/" + id;
    const chatUrl = `/api/book/${id}/comments?start=621&count=10`;
    http(url, this.processDoubanData);
    http(chatUrl, this.processChatData);
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
      data.translator = data.translator[0];
      this.book = data;
      this.bookRate = {
        average: data.rating.average,
        numRaters: data.rating.numRaters,
        score: Number(data.rating.average / 2)
      };
      this.content = {
        title: "内容简介",
        summary: data.summary
      };
      this.author = { title: "作者简介" };
      this.category = { title: "目录" };
      this.tags = tags;
    },
    processChatData(data) {
      console.log(data);
      const comments = data.comments;
      this.comments = data.comments;
      var temp = []
      for(let idx in comments){
        if(idx){
          var author = {
            name: comments[idx].author.name,
            avatar: comments[idx].author.avatar,
            published: comments[idx].published
          }
        }
        temp.push(author)
      }
      
      this.commentsSticky = temp
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
      }
    }

    .detail_right {
      min-width: 300px;
      .whoRead {
        position: sticky;
        top: 0;
      }
    }
  }
}
</style>
