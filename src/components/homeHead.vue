<template>
  <div>
    <header class="index">
      <img src="../assets/images/douban_logo.png" alt="douban_logo" />
      <Input class="input" />
      <div class="head_title">
        <router-link
          v-for="(item, index) of tags"
          :key="index"
          :to="item.path"
          :class="item.class"
        >{{item.title}}</router-link>
      </div>
    </header>
  </div>
</template>

<script>
import Input from "./login/input";

export default {
  name: "home",
  components: {
    Input
  },
  data() {
    return {
      
      tags: [
        {
          title: "读书",
          path: "/read",
          class: "read"
        },
        {
          title: "电影",
          path: "/movie",
          class: "movie"
        },
        {
          title: "音乐",
          path: "/music",
          class: "music"
        },
        {
          title: "点我小谈html,css,js",
          path: '/study',
          class:'study'
        }
      ]
    };
  }
};
</script>

<style lang='scss' scoped>
.index {
  width: 950px;
  height: 35px;
  margin: 0 auto 25px;
  display: flex;
  flex-direction: row;
  align-items: center;
  img {
    vertical-align: middle;
    min-width: 160px;
    height: 34px;
    margin: 0 20px 0 0;
    padding: 0;
  }
  .input {
    margin-top: 6px;
  }
  .head_title {
    display: flex;
    float: right;
    min-width: 482px;
    margin-top: 6px;
    box-sizing: border-box;
    a {
      padding-left: 20px;
      text-decoration: none;

      height: 20px;
      margin: 0;
      line-height: 1em;
      font-size: 20px;
      outline: none;
      vertical-align: middle;
    }
    .read {
      color: rgb(83, 66, 46);
    }
    .movie {
      color: rgb(86, 140, 203);
    }
    .music {
      color: rgb(215, 126, 30);
    }
    .study {
      color: rgb(93, 133, 68);
    }
  }
}

</style>