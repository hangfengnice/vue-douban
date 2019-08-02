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
      <div class="app">
        <div class="douban">
          <span class="app-title">豆瓣 6.0</span>
          <div class="slogn">
            <p>下载豆瓣app</p>
            <div class="img" @mousemove="onMouseMove"
                @mouseout="onMouseOut">
              <img
                class="green"
                v-if="showCode"
                src="../assets/images/green_code.png"
                alt
              />

              <div v-else class='codeBig'>
                <img class="greenBig" src="../assets/images/greenBig.png" alt />
                <span>iOS / Android 扫码直接下载</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="login"></div>
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
      showCode: true,
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
  },
  methods: {
    onMouseMove(){
      this.showCode = false
    },
    onMouseOut(){
      this.showCode = true
    }
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
section {
  position: relative;
  height: 304px;
  width: 950px;
  box-sizing: border-box;
  margin: 0 auto;
  margin-bottom: 25px;
  background-color: #edf4ed;
  .app {
    width: 650px;
    position: relative;
    .douban {
      width: 150px;
      height: 120px;
      position: absolute;
      top: 75px;
      right: 20px;
      display: flex;
      flex-direction: column;
      .app-title {
        margin: 7px 0;
        font-size: 25px;
        color: #111;
        line-height: 24px;
      }
      .slogn {
        margin-top: 18px;
        display: flex;
        flex-direction: row;
        p {
          background-color: #00b51d;
          color: #fff;
          padding: 9px 21px;
          font-size: 12px;
        }
        .img {
          width: 30px;
          height: 30px;
          margin-left: 4px;
          position: relative;
          .green{
            width: 100%;
            height: 100%;
          }
          .codeBig{
            position: absolute;
            top: 0;
            left: 0;
            width: 200px;
            height: 240px;
            padding: 15px 5px;
            display: flex;
            flex-direction: column;
            align-items: center;
            background-color: #fff;
            .greenBig{
              width: 180px;
              height: 180px;
            }
            span{
              margin-top: 10px;
              font-size: 13px;
            }
          }
        }
      }
    }
  }
  .login {
    width: 300px;
    height: 296px;
    position: absolute;
    right: 20px;
    top: 0;
    border: 1px solid #000;
  }
}
</style>