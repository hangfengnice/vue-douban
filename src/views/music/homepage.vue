<template>
  <div class="music_index">
    <div class="music_left">
      <div class="left_head">
        <span class="head_newBook">轻音乐</span>
        <span class="head_more">更多 >></span>
      </div>
      <MusicList :musicList="musicList" />
    </div>

    <div class="music_right">
      <div class="join_block">
        <div>
          <span>46355</span>
          <span>音乐人</span>
        </div>
        <div>
          <span>2701</span>
          <span>播客</span>
        </div>
        <div>
          <span>1175</span>
          <span>厂牌</span>
        </div>
      </div>
      <button>我要加入</button>

      <div>
        <div class="tag_head">
          <span>热门音乐人分类</span>
          <span>更多</span>
        </div>

        <div>
          <div class='tag'>
            <span>流行</span>
            <span>轻音乐</span>
          </div>
          <div class='tag'>
            <span>摇滚</span>
            <span>古典</span>
          </div>
          <div class='tag'>
            <span>电子</span>
            <span>世界音乐</span>
          </div>
          <div class='tag'>
            <span>民谣</span>
            <span>说唱</span>
          </div>
          <div class='tag'>
            <span>爵士</span>
            <span>原生</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MusicList from "../../components/music/musicList";

export default {
  name: "movieHomepage",
  data() {
    return {
      musicList: null
    };
  },
  components: {
    MusicList
  },
  created() {
    this.$axios("/api/music/search?q=流行&start=0&count=8").then(res => {
      this.processDoubanData(res.data);
    });
  },
  methods: {
    processDoubanData(data) {
      console.log(data);
      const musics = data.musics;
      var musicList = [];

      for (var idx in musics) {
        var subject = musics[idx];
        var title = subject.title;
        if (title.length >= 6) {
          title = title.substring(0, 6) + "...";
        }
        var temp = {
          title,
          img: subject.image,
          id: subject.id,
          author: subject.author && subject.author[0].name
        };
        musicList.push(temp);
      }
      console.log(musicList);
      this.musicList = musicList;
    }
  }
};
</script>

<style lang='scss' scoped>
.music_index {
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
  .music_right {
    width: 300px;
    display: flex;
    flex-direction: column;
    .join_block {
      display: flex;
      div {
        flex: 1;
        display: flex;
        flex-direction: column;
        margin-right: 2px;
        align-items: center;
        background-color: #f5f7f8;
        span:first-child {
          color: #136a64;
          font-weight: bold;
          font-size: 17px;
          margin-top: 9px;
        }
        span:last-child {
          color: #666;
          font-size: 15px;
        }
      }
    }
    button {
      background-color: #139d72;
      color: #fff;
      font-size: 17px;
      margin: 3px 0 0;
      border-radius: 3px;
      border: none;
      line-height: 38px;
    }
    .tag_head {
      display: flex;
      justify-content: space-between;
      margin-top: 22px;
      span:first-child {
        color: #222;
        font-size: 15px;
      }
      span:last-child {
        color: #999;
        font-size: 13px;
      }
    }
    .tag{
      display: flex;
      align-items: center;
      span{
        flex:1;
        height: 36px;
        line-height: 36px;
        margin-top: -1px;
        color: #138a64;
        font-size: 15px;
        padding: 0 0 0 6px;
        border: 1px solid #eee;
        margin-right: -1px;
      }
      span:first-child{
        border-left: none;
      }
      span:hover{
        background: rgb(242, 248, 241);
        border: none;
      }
      
    }
  }
}
</style>