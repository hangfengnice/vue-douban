<template>
  <div class="music_container" @click="$router.push('/music/detail/' + music.id)">
    <img class="music_img" :src="music.img" />
    <span class="book_author">{{music.author}}</span>
    <span class="music_title">{{music.title}}</span>
  </div>
</template>

<script>
export default {
  name: "index",
  props: {
    music: Object
  }
};
</script>

<style lang='scss' scoped>
.music_container {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 30px 0 0;
  button {
    outline: none;
    border: none;
    width: 90px;
    height: 24px;
    margin: 14px 12.5px 0;
    background-color: rgb(169, 177, 184);
    color: #fff;
    border-radius: 4px;
  }
}

.music_img {
  width: 125px;
  height: 125px;
  padding-bottom: 10px;
}

.music_title {
  font-size: 13px;
  color: #999;
  margin: 1px 0 18px;
}
.book_author {
  font-size: 15px;
  color: #138a64;
}
</style>