<template>
  <div class="music_index">
    
    <div class="music_left">
      <div class="left_head">
        <span class="head_newBook">流行音乐</span>
        <span class="head_more">更多 >></span>
      </div>
      <MusicList :musicList="musicList" />
    </div>

    <div class="music_right"></div>
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
    this.$axios("/api/music/search?q=流行&start=0&count=5").then(res => {
      this.processDoubanData(res.data);
    });
  },
  methods: {
    processDoubanData(data) {
      console.log(data)
      const musics = data.musics
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
          author: subject.author[0].name
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
}
</style>