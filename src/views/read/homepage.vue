<template>
  <div class="index">
    <div class="read_left">
      <div class="left_head">
        <span class="head_newBook">新书速递</span>
        <span class="head_more">更多 >></span>
      </div>
      <ReadList :readList="readList" />
    </div>

    <div class="read_right"></div>
  </div>
</template>

<script>
import {bookBianChen5} from '../../assets/data/read/book'
import { converToStarsArray } from "../../utils/utils";
import ReadList from "../../components/read/readList";

export default {
  name: "movieHomepage",
  data() {
    return {
      readList: null
    };
  },
  components: {
    ReadList
  },
  created() {
    this.processDoubanData(bookBianChen5);
  },
  methods: {
    processDoubanData(data) {
      var readList = [];
      for (var idx in data.books) {
        var subject = data.books[idx];
        var title = subject.title;
        if (title.length >= 6) {
          title = title.substring(0, 6) + "...";
        }
        var temp = {
          title,
          img: subject.images.small,
          id: subject.id,
          author: subject.author[0]
        };
        readList.push(temp);
      }
      console.log(readList);
      this.readList = readList;
    }
  }
};
</script>

<style lang='scss' scoped>
.index {
  width: 1040px;
  padding: 30px 0 0 10px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  .left_head {
    margin-bottom: 20px;
    padding-bottom: 8px;
    border-bottom: 1px solid #ccc;
    .head_newBook {
      font-size: 18px;
      color: #111;
      font-weight: 600;
    }
    .head_more {
      font-size: 13px;
      color: #37a;
      margin-left: 16px;
    }
  }
}
</style>