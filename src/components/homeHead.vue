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

    <!-- login -->
    <section>

    </section>
  </div>
</template>

<script>
import Input from "./input";

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
          title: "小组",
          path: "/group",
          class: "group"
        },
        {
          title: "同城",
          path: "/events",
          class: "events"
        },
        {
          title: "FM",
          path: "/fm",
          class: "fm"
        },
        {
          title: "时间",
          path: "/time",
          class: "time"
        },
        {
          title: "豆品",
          path: "/market",
          class: "market"
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
      padding-left: 18px;
      text-decoration: none;
      width: 40px;
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
    .group {
      color: rgb(85, 148, 155);
    }
    .events {
      color: rgb(203, 88, 28);
    }
    .fm {
      color: rgb(172, 211, 196);
    }
    .time {
      color: rgb(75, 75, 75);
    }
    .market {
      color: rgb(93, 133, 68);
    }
  }
}
// section::before {
//   content: "";
//   position: absolute;
//   height: 304px;
//   width: 100%;
//   left: -500px;
//   background-size: cover;
//   background-repeat: no-repeat;
//   background: url("../assets/images/bg.jpg");
// }
section {
  position: relative;
  height: 304px;
  margin-bottom: 25px;
  background-color: #edf4ed;
}

</style>